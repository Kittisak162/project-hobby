from django.conf.urls import url, include
from api.views import FacebookLogin

urlpatterns = [
  url(r'^facebook/$', FacebookLogin.as_view(), name="facebook_login"),
]