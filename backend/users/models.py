from django.db import models

# Create your models here.
class Member(models.Model):
    user_id = models.CharField(max_length=13)
    user_pw = models.CharField(max_length=13)
    email = models.EmailField()
    
    def __str__(self):
        return self.user_id
