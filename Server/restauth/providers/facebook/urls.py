from allauth.socialaccount.providers.oauth2.urls import default_urlpatterns
from .provider import CustomFacebookProvider

urlpatterns = default_urlpatterns(CustomFacebookProvider)
