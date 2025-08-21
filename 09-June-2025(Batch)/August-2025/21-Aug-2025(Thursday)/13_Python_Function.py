"""
1) What is a Function in Python?
- A function is like a small machine inside your program.
a) You give it some input (optional).
b) It does some work.
c) It can give you an output (optional).
- Functions help you reuse code without writing it again and again.

2) Syntax of a Function in Python
def function_name(parameters):
    # code block
    return result
def → keyword to define a function.
function_name → name of the function (should be meaningful).
parameters → values you pass inside (optional).
return → gives back a value (optional).

3) In short:
- Define a function using def.
- Call the function by its name.
- Use return if you need the result back.
"""


# Function without parameters
def greet():
    print("Hello! Welcome to Python.")


greet()  # Calling the Function


# Function with parameters
def greetByPara(name):
    print(f"Hello! {name}.")


greetByPara("Shreya")


# Function with return
def add(a, b):
    return f"Addition of {a} and {b} is {a+b}."


res = add(2, 3)
print(res)
