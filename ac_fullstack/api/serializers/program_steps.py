from rest_framework import serializers

from api.models import Program
from api.models.program_steps import ProgramSteps
from api.serializers import ProgramSerializer, CustomerSerializer


# serializer for creating new program step
class CreateProgramStepsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProgramSteps
        fields = '__all__'


# serializer for reading program_step and finale_price function for discount
class ReadProgramStepsSerializer(serializers.ModelSerializer):
    program= ProgramSerializer(read_only=True, allow_null=True, required=False)
    customer=CustomerSerializer(read_only=True, allow_null=True, required=False)
    final_price = serializers.SerializerMethodField()

    class Meta:
        model = ProgramSteps
        fields = '__all__'
        extra_fields = ['program','cusotmer', 'final_price']

    def get_final_price(self, instance):
        price = ProgramSteps.objects.filter(customer=instance.customer)
        if len(price) > 9:
            return "Discount"
        return "Regular price"
