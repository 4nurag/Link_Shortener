from django.urls import path
from .import views

urlpatterns = [
    path('shortener/', views.create_link, name='shortener'),
    path('get-links/', views.get_links, name='get-links'),
    path('delete-link/<str:hash>/', views.delete_link, name='delete-link'),
    path('get-link/<str:hash>/', views.get_link, name='get-link'),

]
