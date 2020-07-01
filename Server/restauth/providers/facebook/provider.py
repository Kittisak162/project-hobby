from allauth.socialaccount.providers.facebook.provider import FacebookProvider

class CustomFacebookProvider(FacebookProvider):
  def get_fields(self):
    settings = self.get_settings()
    default_fields = [
      'id',
      'name',
      'email',
    ]
    return settings.get('FIELDS', default_fields)

  def extract_common_fields(self, data):
    return dict(
      name=data.get('name'),
      email=data.get('email'),
      provider='facebook',
    )

provider_classes = [CustomFacebookProvider]
