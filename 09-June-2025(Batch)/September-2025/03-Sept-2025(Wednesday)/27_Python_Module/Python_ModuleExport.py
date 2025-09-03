"""
1) What is a Module?
- A module in Python is just a file that contains Python code.
- The code can have functions, classes, or variables.
- Instead of writing the same code again and again, you can reuse it by importing the module.
- Think of a module as a toolbox 🧰.
a) The box = module (Python file).
b) Tools inside = functions, variables, classes.
- You can use these tools whenever you need them.

2) Two types of Module:
a) Your Own Module
- You can also create your own module.
b) Built-in Module
- Python already has many ready-made modules. Example: math

3) In short:
- A module = Python file with code.
- Helps you organize code and reuse it.
- You use it by importing it.
"""


# Your Own Module 👇
def sum(x, y):
    return x + y


listOfFrutis = ["Apple", "Banana", "Grape"]

# Built-in Module 👇
import math

print(math.sqrt(16))
print(math.pi)
