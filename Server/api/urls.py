
from django.conf.urls import url, include
from api import controller

urlpatterns = [
  url(r'^', controller.Hello.as_view(), name='hello')
]