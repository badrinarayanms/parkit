import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here
from . import db

mydb=db.myclient["park-it"]
mycol=mydb["users"]

@csrf_exempt
@csrf_exempt
def adduser(request):
    try:
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        # Insert user data into MongoDB
        user = mycol.insert_one(body)
        print(body)
        
        print(f"User inserted with id: {user.inserted_id}")

        return HttpResponse('User added successfully')
    except Exception as e:
        print(f"Error: {e}")
        return HttpResponse(f"Failed to add user: {e}", status=500)

mydb1=db.myclient["park-it"]
myco2=mydb["reserve"]
@csrf_exempt
@csrf_exempt
def reservespot(request):
    try:
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        # Insert user data into MongoDB
        user = myco2.insert_one(body)
        print(body)
        
        print(f"User inserted with id: {user.inserted_id}")

        return HttpResponse('User added successfully')
    except Exception as e:
        print(f"Error: {e}")
        return HttpResponse(f"Failed to add user: {e}", status=500)
mycol3=mydb["lots"]   
def addlot(request):
    try:
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        # Insert user data into MongoDB
        user = mycol3.insert_one(body)
        print(body)
        
        print(f"User inserted with id: {user.inserted_id}")

        return HttpResponse('User added successfully')
    except Exception as e:
        print(f"Error: {e}")
        return HttpResponse(f"Failed to add user: {e}", status=500)


def getreservations(request):
    try:
        if request.method == 'GET':
            # Fetch all documents from the collection
            reservations = list(mycol3.find())  # Convert the cursor to a list
            
            # Remove the MongoDB-specific _id ObjectId object and convert to string
            for reservation in reservations:
                reservation['_id'] = str(reservation['_id'])

            # Return the list of reservations as JSON
            return JsonResponse(reservations, safe=False)

        else:
            return HttpResponse("Invalid request method", status=405)
    except Exception as e:
        print(f"Error fetching data: {e}")
        return HttpResponse(f"Error: {e}", status=500)
    
def getlots(request):
    try:
        if request.method == 'GET':
            # Fetch all documents from the collection
            reservations = list(mycol3.find())  # Convert the cursor to a list
            
            # Remove the MongoDB-specific _id ObjectId object and convert to string
            for reservation in reservations:
                reservation['_id'] = str(reservation['_id'])

            # Return the list of reservations as JSON
            return JsonResponse(reservations, safe=False)

        else:
            return HttpResponse("Invalid request method", status=405)
    except Exception as e:
        print(f"Error fetching data: {e}")
        return HttpResponse(f"Error: {e}", status=500)
    
