from django.urls import path

from . import views

# router = routers.DefaultRouter(trailing_slash=True)

urlpatterns = [
    path('', views.index, name='index'),
    path('player_info/', views.get_players, name='get_players'),
    path('player_info/create/', views.create_player, name='create_player'),
    path('player_info/update/<int:pk>/', views.update_player, name='update_player'),
    path('player_info/delete/', views.delete_player, name='delete_player'),
]
