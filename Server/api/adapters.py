from allauth.account.adapter import DefaultAccountAdapter

class CustomAccountAdapter(DefaultAccountAdapter):
  def save_user(self, request, user, form, commit=True):
    user = super().save_user(request, user, form, commit)
    data = form.cleaned_data
    user.name = data.get('name')
    if commit:
      user.save()
    return user
