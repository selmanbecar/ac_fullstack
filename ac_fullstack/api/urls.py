from django.urls import include, re_path

from api.views.customer import CustomerView
from api.views.program import ProgramView
from api.views.program_steps import ProgramStepsView


urlpatterns = [
    # customer url
    re_path(r"^customer/?$", CustomerView.as_view(), name='add_list_customer'),
    # program url
    re_path(r"^program/?$", ProgramView.as_view(), name='add_list_program'),
    # program steps url
    re_path(r"^program_steps/?$", ProgramStepsView.as_view(), name='add_list_program_steps'),

]
