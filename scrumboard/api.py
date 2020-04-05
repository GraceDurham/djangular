from rest_framework.viewsets import ModelViewSet


from .serializers import ListSerializer, CardSerializer
from .models import List, Card

class ListViewSet(ModelViewSet): # ModelViewSet implements and supports put post get delete methods on cards
	queryset = List.objects.all()
	serializer_class = ListSerializer



class CardViewSet(ModelViewSet):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
