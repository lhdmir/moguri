# users/urls.py
from django.urls import path
from .views import register, login, create_moguri

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('moguri/', create_moguri, name='create_moguri'),
]
