from django.contrib import admin
from django.urls import path
from FrontEnd import views
from django.conf.urls import url

urlpatterns = [
    
    path('',views.home,name='Home'),
    path('covid/',views.covid, name='Covid'),
    path('netflix/',views.netflix, name='Netflix'),
    url('selectCountry/',views.drillDownACountry,name='drillDown'),
]
