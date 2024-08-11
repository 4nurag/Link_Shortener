from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

from .models import MyLink
from .serializers import LinkSerializer

@api_view(['POST'])
def create_link(request):
    serializer = LinkSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def get_links(request):
    links = MyLink.objects.all()
    serializer = LinkSerializer(links, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_link(request, hash):
    link = get_object_or_404(MyLink, hash=hash)
    serializer = LinkSerializer(link, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_link(request, hash):
    link = get_object_or_404(MyLink, hash=hash)
    link.delete()
    return Response('Link got deleted.')