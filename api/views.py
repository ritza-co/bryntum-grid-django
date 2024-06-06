from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Player

from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def index(request):
    # return HttpResponse("Hello, world!")
    return render(request, 'index.html')

@csrf_exempt
def get_players(request):
    players = list(Player.objects.values())
    return JsonResponse({'data': players})

@csrf_exempt
def create_player(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        player = Player.objects.create(**data)
        return JsonResponse({'success': True, 'data': [player]})

@csrf_exempt
def update_player(request, pk):
    if request.method == 'POST':
        data = json.loads(request.body)
        player = get_object_or_404(Player, pk=pk)
        for field, value in data.items():
            setattr(player, field, value)
        player.save()
        return JsonResponse({'success': True, 'data': [player]})

@csrf_exempt
def delete_player(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        ids_to_delete = data.get('ids', [])
        Player.objects.filter(id__in=ids_to_delete).delete()
        return JsonResponse({'success': True})
