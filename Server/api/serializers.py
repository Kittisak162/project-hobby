from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.serializers import LoginSerializer

class CustomRegisterSerializer(RegisterSerializer):
  username = None
  name = serializers.CharField(required=True, write_only=True)

  def get_cleaned_data(self):
    return {
      'name': self.validated_data.get('name', ''),
      'password1': self.validated_data.get('password1', ''),
      'email': self.validated_data.get('email', ''),
    }

class CustomLoginSerializer(LoginSerializer):
  username = None
