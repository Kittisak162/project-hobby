from django.conf.urls import url, include
from restauth.views import FacebookLogin, GoogleLogin

urlpatterns = [
  url(r'^', include('rest_auth.urls')),
  url(r'^registration/', include('rest_auth.registration.urls')),
  url(r'^accounts/', include('allauth.urls')),
  url(r'^social/facebook/$', FacebookLogin.as_view(), name="facebook_login"),
  url(r'^social/google/$', GoogleLogin.as_view(), name="google_login"),
]