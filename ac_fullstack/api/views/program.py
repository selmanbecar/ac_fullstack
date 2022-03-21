from rest_framework.generics import ListCreateAPIView

from api.models import Program
from api.serializers import ProgramSerializer

# program get and post
class ProgramView(ListCreateAPIView):
    serializer_class = ProgramSerializer
    queryset = Program.objects.all()
