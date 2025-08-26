"""
1) What is the global keyword in Python?
- In Python, variables created inside a function are local to that function.
- But if you want to use or change a variable that was created outside the function (a global variable), you need the global keyword.

2) In short:
a) Without global → Python creates a local variable inside the function.
b) With global → Python tells the function “use the variable from outside”.
"""

# Example without global keyword 👇
a = 30  # Global Variable


def myFun():
    a = 5  # This is a new Local Variable, not the same as Global x
    print("Variable inside function:", a)  # Variable inside function: 5


myFun()
print("Variable outside function:", a)  # Variable outside function: 30
# Here, the a inside the function is different from the global a.

# ------------------------------------------------------------------

# Example with global keyword 👇
b = 30  # Global Variable


def myFun1():
    global b
    b = 5  # Now we are changing the global b
    print("Variable inside function:", b)  # Variable inside function: 5


myFun1()
print("Variable outside function:", b)  # Variable outside function: 5

# ------------------------------------------------------------------

# Akash Sir's Example 👇
x = 10  # Global Scope


def myFun3():
    global x
    y = 20  # Functional Scope
    print(y)  # 20
    print(x)  # 10


myFun3()

# Python works over Indentation!
print("Hello!")  # Hello!
