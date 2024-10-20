from django.urls import path
from . import views


urlpatterns = [
    path('adduser/',views.adduser ),
    path('reservespot/',views.reservespot ),
    path('getreservations/',views.getreservations ),
    path('getlots/',views.getlots ),
    path('addlot/',views.addlot ),
]
