from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    def __str__(self):
        return self.username

class Member(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    # 추가 필드가 필요하면 여기에 정의

class Moguri(models.Model):
    user = models.OneToOneField(Member, on_delete=models.CASCADE, related_name='moguri')
    name = models.CharField(max_length=100)  # unique=True 제거
    target_weight = models.FloatField()
    image = models.ImageField(upload_to='moguri/', blank=True, null=True)

    def __str__(self):
        return self.name
