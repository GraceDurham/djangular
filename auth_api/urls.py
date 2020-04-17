from django.conf.urls import urls

from .api import LoginView, LogoutView

urlpatterns = [
	url(r'^login/$', LoginView.as_view()),
	url(r'^logout/$', LogoutView.as_view()),

]