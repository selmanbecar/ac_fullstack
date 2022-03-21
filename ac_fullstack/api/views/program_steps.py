from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import ProgramSteps
from api.serializers.program_steps import CreateProgramStepsSerializer, ReadProgramStepsSerializer


# program steps get and post
class ProgramStepsView(APIView):
    serializer_class = CreateProgramStepsSerializer
    queryset = ProgramSteps.objects.all()

    def post(self, request, format=None):
        serializer = CreateProgramStepsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        program_steps = ProgramSteps.objects.select_related('program', 'customer').filter(id=ProgramSteps.objects.latest('id').id)
        serializer2 = serializer = ReadProgramStepsSerializer(program_steps, many=True)
        return Response(serializer2.data, status=status.HTTP_201_CREATED)


    def get(self, request, format=None):
        program_steps = ProgramSteps.objects.select_related('program', 'customer').all()
        serializer = ReadProgramStepsSerializer(program_steps, many=True)
        return Response(serializer.data)
