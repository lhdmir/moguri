# users/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Member, Moguri
import re

User = get_user_model()

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'password')

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("사용할 수 없는 ID 입니다.")
        if len(value) > 13:
            raise serializers.ValidationError("유효하지 않은 ID입니다.")
        return value

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("사용할 수 없는 Email 입니다.")
        if not re.match(r"[^@]+@[^@]+\.[^@]+", value):
            raise serializers.ValidationError("유효하지 않은 Email 형식입니다.")
        return value

    def validate_password(self, value):
        if len(value) < 8 or len(value) > 13:
            raise serializers.ValidationError("유효하지 않은 PW입니다.")
        return value

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])  # 비밀번호 암호화
        user.save()
        
        # Member 생성
        member = Member.objects.create(user=user)
        
        return user

class MoguriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moguri
        fields = ('name', 'target_weight', 'image')

    def create(self, validated_data):
        user = validated_data.pop('user')
        moguri = Moguri.objects.create(user=user, **validated_data)
        return moguri
