"""
1) What are Data Types?
- In Python, data types tell us what kind of value a variable can hold.
- Think of it like labels on boxes — some boxes are for numbers, some are for text, some for lists, etc.
- Here are the main ones:
a) Numbers
- int → Whole numbers (e.g., 5, -10, 1000)
- float → Decimal numbers (e.g., 3.14, -2.5)
- complex → Numbers with real and imaginary parts (e.g., 3 + 4j)
---------------------------------------------------------
b)Text
- str → Strings (a sequence of characters, inside quotes)
Example: "Hello", 'Python'
---------------------------------------------------------
c) Boolean
- bool → Only two values: True or False
(used in conditions and logic)
---------------------------------------------------------
d) Collections
- list → Ordered, changeable collection.
Example: [1, 2, 3, "hello"]
- tuple → Ordered, but unchangeable (fixed).
Example: (1, 2, 3)
- set → Unordered, unique values only.
Example: {1, 2, 3}
- dict → Key-value pairs (like a mini-database).
Example: {"name": "Shreya", "age": 21}
---------------------------------------------------------
e)None Type
None → Special type that means “nothing” or “empty”.
Example: x = None

2) In short:
a) Numbers → int, float, complex
b) Text → str
c) True/False → bool
d) Collections → list, tuple, set, dict
e) Empty → None
"""

name = "Shreya"
print(type(name))  # <class 'str'>
age = 23
print(type(age))  # <class 'int'>
area = 20.3
print(type(area))  # <class 'float'>
complexNum = 2 + 4j
print(type(complexNum))  # <class 'complex'>
booleanValue = True
print(type(booleanValue))  # <class 'bool'>
listEg = [1, 2, 3]
print(type(listEg))  # <class 'list'>
tupleEg = (1, 2, 3)
print(type(tupleEg))  # <class 'tuple'>
setEg = {1, 2, 3}
print(type(setEg))  # <class 'set'>
dictEg = {name: "Shreya", age: 23}
print(type(dictEg))  # <class 'dict'>
x = None
print(type(x))  # <class 'NoneType'>
