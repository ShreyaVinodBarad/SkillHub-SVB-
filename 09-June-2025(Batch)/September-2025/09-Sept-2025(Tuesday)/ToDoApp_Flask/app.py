from flask import Flask, jsonify, request
import json

"""
👆
=> imports Flask and tools:
a) Flask → to create the web app.
b) jsonify → converts Python objects into JSON responses (so the browser/Postman can read them).
c) request → lets you get data sent from the client (like JSON from Postman).
d) import json → used for working with JSON files (reading/writing db.json).
"""

app = Flask(__name__)
"""
👆
- Creates a Flask application object named app.
- __name__ tells Flask where your app is defined (needed for configuration and routes).
"""


# file = open("db.json", "r")
# print(file.read())
# file.close()
# 👆 Instead of this code, use this 👇
def getAllToDos():
    with open("db.json") as file:
        # return file.read()
        return json.load(file)


# With with keyword file closes automatically!
"""
👆
with open("db.json") as file:
- open("db.json") → opens the file named db.json (a JSON file in your folder).
- with ... as file: → this is called a context manager.
- It automatically opens the file.
- And when the block ends, it closes the file (so you don't need file.close() manually).
- Here, file becomes the file object you can use.
"""
"""
👆
- Opens the db.json file.
- json.load(file) reads the JSON content and converts it into a Python list/dictionary.
- This function is used whenever you want to read all To-Dos.
"""


def addToDo(data):
    with open("db.json", "+w") as file:
        json.dump(data, file, indent=4)


"""
👆
- Opens db.json in write mode (+w → creates file if it doesn't exist, allows writing).
- json.dump(data, file, indent=4) → writes the Python object (data) into the file as JSON, formatted with indentation for readability.
"""


@app.route("/")
def home():
    return "Welcome to Flask To - Do App"


# 👆 When you visit / in the browser → returns a welcome message.


@app.route("/create", methods=["POST"])
def createToDo():
    body = request.json
    # print(body)
    data = getAllToDos()
    data.append(body)
    addToDo(data)
    return "To - Do Created Successfully!"


"""
👆
a) methods=["POST"] → this route only works when you send a POST request (not GET).
b) body = request.json → gets the JSON data sent in the request (your new To-Do).
c) data = getAllToDos() → loads existing To-Dos from db.json.
d) data.append(body) → adds the new To-Do to the list.
e) addToDo(data) → saves the updated list back to the file.
f) Returns success message.
"""


@app.route("/read", methods=["GET"])
def readToDo():
    data = getAllToDos()
    # print(type(data)) => <class 'str'>
    # return data
    return jsonify(data)


"""
👆
a) methods=["GET"] → works with GET requests.
b) data = getAllToDos() → gets all To-Dos from db.json.
c) jsonify(data) → sends back the list as JSON (so Postman/browser can understand).
"""


@app.route("/update", methods=["PUT"])
def updateToDo():
    return "To - Do Updated Successfully!"


@app.route("/delete", methods=["DELETE"])
def deleteToDo():
    return "To - Do Deleted Successfully!"


if __name__ == "__main__":
    app.run(debug=True)
"""
👆
- Ensures the app runs only if this file is executed directly (not imported).
- app.run(debug=True) → starts Flask server with debug mode:
a) Auto-reloads when you save changes.
b) Shows detailed error messages in the browser.
"""

"""
=> Four Methods:
POST → Create
GET → Read
PUT → Update
DELETE → Delete
CRUD => Create Read Update Delete
"""
