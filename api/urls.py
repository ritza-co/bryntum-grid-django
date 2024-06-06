from django.urls import path

from . import views

router = routers.DefaultRouter(trailing_slash=True)

urlpatterns = [
    path('', views.index, name='index'),
]
