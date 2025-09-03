"""
1) Installing the requests module
- requests is not built into Python, so you need to install it.
- Run:
pip install requests
"""

# import requests
from requests import get

"""
👆
- Here, you're importing only the get function from the requests library (instead of the entire requests module).
- This lets you call get() directly, instead of writing requests.get().
"""
from random import randint

# res = requests.get("https://jsonplaceholder.typicode.com/users")
res = get("https://jsonplaceholder.typicode.com/users")
"""
👆
- Sends an HTTP GET request to the API endpoint:
https://jsonplaceholder.typicode.com/users
- This is a free fake REST API used for testing and prototyping.
- The response (HTTP reply from the server) is stored in res.
"""
print(res)
"""
👆
- Prints the response object, e.g.:
<Response [200]>
- 200 means request successful (HTTP status code 200).
"""
print(res.json())
"""
👆
- .json() parses the response body into Python data (usually a list or dictionary).
- In this case, the API returns a JSON array of fake user objects.
"""

# Example to learn importing module
print(randint(1, 10))
