from allauth.socialaccount.providers.google.provider import GoogleProvider

class CustomGoogleProvider(GoogleProvider):
  def extract_common_fields(self, data):
    return dict(
      name=data.get('name'),
      email=data.get('email'),
      provider='google',
    )

provider_classes = [CustomGoogleProvider]
