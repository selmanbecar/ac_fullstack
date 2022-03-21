from django.db import models
from api.constants.program import PROGRAM_STEPS, PROGRAM_STEPS_1
#program steps model. connectig customer, program and program_speps constant
class ProgramSteps(models.Model):
    customer = models.ForeignKey(
        "api.Customer", blank=True, null=True, related_name="customer", on_delete=models.RESTRICT)
    program = models.ForeignKey(
        "api.Program", blank=True, null=True, related_name="program", on_delete=models.RESTRICT)
    program_steps = models.IntegerField(choices=PROGRAM_STEPS, default=PROGRAM_STEPS_1)
