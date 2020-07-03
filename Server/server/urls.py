from django.contrib import admin
from django.urls import include
from django.conf.urls import url

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^rest_auth/v1/', include('restauth.urls')),
    url(r'^rest_api/v1/', include('restapi.urls')),
]
