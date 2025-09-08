"""
1) What is Flask?
- Flask is a lightweight web framework in Python.
- It helps us build APIs (like small websites but for apps/programs instead of humans).
- An API allows us to send data to the server and get data back.

2) What is Postman?
- Postman is a tool that lets us test APIs.
- Instead of writing a whole frontend (like a website or app), we can directly send requests to our Flask API and see the response.
- Example: If your Flask API has a /login route, you can send a username & password from Postman to test if it works.

3) How Flask & Postman Work Together
a) You create routes in Flask (like /, /hello, /add, /login).
b) Run your Flask app → it starts a local server (usually at http://127.0.0.1:5000/).
- Open Postman and make requests (GET, POST, PUT, DELETE).
- Postman shows the response from Flask.

4) API (Application Programming Interface)
- An API is like a messenger between two programs.
- It takes a request from one program, tells another program what you want, and brings back the response.
a) Simple Example
- Imagine a restaurant:
You (customer) = Frontend / user
Kitchen (chef) = Backend / server
Waiter = API
=> You don't go to the kitchen yourself. You tell the waiter (API) what you want, and the waiter brings food from the kitchen.
"""
