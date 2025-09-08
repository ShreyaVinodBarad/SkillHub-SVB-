from flask import Flask, request

app = Flask(__name__)


@app.route("/")
def home():
    return "Home Route"

    #        👇 API Endpoint


@app.route("/test", methods=["POST"])
def about():
    data = request.json
    print(data)
    return "About Route"


@app.route("/update", methods=["PUT"])
def updateData():
    return "Data Updated Successfully!"


@app.route("/delete", methods=["DELETE"])
def deleteData():
    return "Data Deleted Successfully!"


# Server Run
app.run(debug=True)

"""
REST API
Four Methods:
a) GET    - Read Data
b) POST   - Add Data
c) PUT    - Update Data
d) DELETE - Delete
- Postman => API Testing Tool
"""
