from django.contrib.auth.models import User

from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
	"""Converts python to JSON"""

	class Meta:
		model = User
		fields = ('id', 'username')