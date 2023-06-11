from django.shortcuts import render
from django.http import FileResponse, HttpResponseNotFound, JsonResponse
import boto3, json
from io import BytesIO
from .conf import *

s3 = None

def index(request):
    return render(request, "index.html")

def getBook(request, docName):
    #if not s3:
    s3 = boto3.resource(
        service_name = s3_config['service_name'],
        region_name = s3_config['region_name'],
        aws_access_key_id = s3_config['aws_access_key_id'],
        aws_secret_access_key = s3_config['aws_secret_access_key']
    )
    try:
        body = s3.Bucket(s3_config['bucket_name']).Object(docName).get()['Body']
        return FileResponse(BytesIO(body.read()), content_type='application/pdf')
    except:
        return HttpResponseNotFound("<h1>Book not found!</h1>")
    
def getBooks(request):
    # if not s3:
    s3 = boto3.resource(
        service_name = s3_config['service_name'],
        region_name = s3_config['region_name'],
        aws_access_key_id = s3_config['aws_access_key_id'],
        aws_secret_access_key = s3_config['aws_secret_access_key']
    )

    books = list(s3.Bucket(s3_config['bucket_name']).objects.all())
    books = [{'name': book.key} for book in books]
    return JsonResponse({'books': books})