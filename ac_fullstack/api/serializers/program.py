from rest_framework import serializers

from api.models.program import Program


class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'

