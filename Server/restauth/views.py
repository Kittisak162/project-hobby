from restauth.providers.facebook.views import CustomFacebookOAuth2Adapter
from restauth.providers.google.views import CustomGoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

class FacebookLogin(SocialLoginView):
  adapter_class = CustomFacebookOAuth2Adapter

class GoogleLogin(SocialLoginView):
  adapter_class = CustomGoogleOAuth2Adapter
