from flask import Flask, request

"""
👆
We are importing Flask (to create our web app) and request (to read data sent by the client, like JSON from Postman).
"""

app = Flask(__name__)
"""
👆
- We create a Flask application called app.
- __name__ tells Flask where to look for files/resources.
- Think of app as your "main website application".
"""


@app.route("/")
def home():
    return "Home Route"


"""
👆
- This defines the Home Route (/).
- @app.route("/") → when someone visits http://127.0.0.1:5000/, this function runs.
- It returns "Home Route" as the response.
"""

#        👇 API Endpoint


@app.route("/test", methods=["POST"])
def about():
    data = request.json
    print(data)
    return "About Route"


"""
👆
- This defines a POST API endpoint at /test.
- methods=["POST"] → only POST requests are allowed here.
- data = request.json → takes JSON data sent from Postman.
- print(data) → shows the JSON in your terminal/console.
- Returns "About Route" as the response.
"""


@app.route("/update", methods=["PUT"])
def updateData():
    return "Data Updated Successfully!"


"""
👆
- This defines a PUT API endpoint at /update.
- Used for updating data.
- Always responds with "Data Updated Successfully!".
"""


@app.route("/delete", methods=["DELETE"])
def deleteData():
    return "Data Deleted Successfully!"


"""
👆
- This defines a DELETE API endpoint at /delete.
- Used for deleting data.
- Always responds with "Data Deleted Successfully!".
"""

# Server Run
if __name__ == "__main__":
    app.run(debug=True)
"""
👆
- This runs your Flask server.
debug=True → helpful while developing. 
- It:
a) Restarts server automatically when code changes.
b) Shows detailed error messages in browser if something breaks.
"""

"""
=> Summary in Easy Words
- Flask app is like a mini website.
- @app.route() tells Flask which function to run for a URL.
- GET, POST, PUT, DELETE are different ways (methods) to send requests.
- request.json lets you read data sent from Postman.
- app.run() starts the server locally.
"""

"""
REST API
Four Methods:
a) GET    - Read Data
b) POST   - Add Data
c) PUT    - Update Data
d) DELETE - Delete
- Postman => API Testing Tool
"""

"""'
1) What is an API Endpoint?
- API = a way for two applications to talk to each other.
- Endpoint = the specific address (URL) where your app listens for requests.
- Example:
If your website is:
https://myapp.com
and you create a route in Flask:
@app.route("/users")
then the API endpoint is:
https://myapp.com/users

a) Easy Definition
- An API Endpoint is just a door (URL) in your app where people (or other programs like Postman) can knock and ask for data or send data. 

b) Example with your Flask code:
/ → Home endpoint (shows "Home Route").
/test → API endpoint for POST (send JSON).
/update → API endpoint for PUT (update something).
/delete → API endpoint for DELETE (remove something).
- Each endpoint is like a different room in your house. The house is your Flask app, and doors are the endpoints.
"""
