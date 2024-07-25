from rest_framework import viewsets
from .models import Member
from .serializers import ItemSerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = ItemSerializer