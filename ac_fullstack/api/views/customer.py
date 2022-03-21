from rest_framework.generics import ListCreateAPIView


from api.models import Customer
from api.serializers import CustomerSerializer


# customer get and post
class CustomerView(ListCreateAPIView):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()
