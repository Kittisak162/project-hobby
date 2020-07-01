from django.conf.urls import url, include
from api.views import FacebookLogin, GoogleLogin

urlpatterns = [
  url(r'^facebook/$', FacebookLogin.as_view(), name="facebook_login"),
  url(r'^google/$', GoogleLogin.as_view(), name="google_login"),
]