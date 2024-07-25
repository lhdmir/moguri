# users/views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from .serializers import CustomUserSerializer, MoguriSerializer
from .models import CustomUser, Member, Moguri

@api_view(['POST'])
def register(request):
    serializer = CustomUserSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "회원가입에 성공했습니다."}, status=status.HTTP_201_CREATED)
    
    return Response({"error": serializer.errors}, status=status.HTTP_409_CONFLICT)

@api_view(['POST'])
def login(request):
    username = request.data.get('id')
    password = request.data.get('password')
    
    user = authenticate(username=username, password=password)
    if user is not None:
        return Response({"message": "로그인 성공"}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "아이디 또는 비밀번호가 잘못되었습니다."}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_moguri(request):
    user = request.user
    if not user.is_authenticated:
        return Response({"error": "로그인 후에 모구리를 생성할 수 있습니다."}, status=status.HTTP_403_FORBIDDEN)

    serializer = MoguriSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save(user=user.member)  # 현재 로그인한 사용자의 Member를 사용
        return Response({"message": "모구리가 생성되었습니다."}, status=status.HTTP_201_CREATED)
    
    return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
