from allauth.account.adapter import DefaultAccountAdapter, get_adapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from allauth.account.utils import user_email, user_field
from allauth.utils import valid_email_or_none

class CustomAccountAdapter(DefaultAccountAdapter):
  def save_user(self, request, user, form, commit=True):
    data = form.cleaned_data
    name = data.get('name')
    email = data.get('email')
    user_email(user, email)
    user_field(user, 'name', name)
    if 'password1' in data:
        user.set_password(data["password1"])
    else:
        user.set_unusable_password()
    self.populate_username(request, user)
    if commit:
      user.save()
    return user

class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
  def populate_user(self, request, sociallogin, data):
    name = data.get('name')
    email = data.get('email')
    provider = data.get('provider')
    user = sociallogin.user
    user_email(user, valid_email_or_none(email) or '')
    user_field(user, 'name', name)
    user_field(user, 'provider', provider)
    return user
