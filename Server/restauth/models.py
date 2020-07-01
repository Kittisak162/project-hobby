from django.db import models
from django.contrib.auth.models import (
  BaseUserManager, AbstractBaseUser
)

class UserManager(BaseUserManager):
  def create_user(self, name, email, password=None):
    if not email:
      raise ValueError('Users must have an email address')
    user = self.model(
      name=name,
      email=self.normalize_email(email),
    )
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, name, email, password=None):
    user = self.create_user(
      name=name,
      email=email,
      password=password
    )
    user.is_admin = True
    user.save(using=self._db)
    return user

class User(AbstractBaseUser):
  name = models.CharField(max_length=255)
  email = models.EmailField(
    verbose_name='email address',
    max_length=255,
    unique=True,
  )
  provider = models.CharField(
    choices=(
      ('email', 'Email'),
      ('facebook', 'Facebook'),
      ('google', 'Google'),
    ),
    max_length=10,
    default='email'
  )
  is_admin = models.BooleanField(default=False)
  objects = UserManager()
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name']

  def __str__(self):
    return self.email

  def has_perm(self, perm, obj=None):
    "Does the user have a specific permission?"
    return True

  def has_module_perms(self, app_label):
    "Does the user have permissions to view the app `app_label`?"
    return True

  @property
  def is_staff(self):
    "Is the user a member of staff?"
    return self.is_admin
