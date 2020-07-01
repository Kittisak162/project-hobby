from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.oauth2.views import OAuth2LoginView, OAuth2CallbackView
from .provider import CustomFacebookProvider

class CustomFacebookOAuth2Adapter(FacebookOAuth2Adapter):
  provider_id = CustomFacebookProvider.id

oauth2_login = OAuth2LoginView.adapter_view(CustomFacebookOAuth2Adapter)
oauth2_callback = OAuth2CallbackView.adapter_view(CustomFacebookOAuth2Adapter)