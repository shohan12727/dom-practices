from django.http import HttpResponse

def home(request):
    return HttpResponse('King Shohan')

def about(request):
    return HttpResponse('This is a about page')

def contact(request):
    return HttpResponse('King is always in his kingdom')
