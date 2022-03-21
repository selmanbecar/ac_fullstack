from django.db import models
#program model
class Program(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)
