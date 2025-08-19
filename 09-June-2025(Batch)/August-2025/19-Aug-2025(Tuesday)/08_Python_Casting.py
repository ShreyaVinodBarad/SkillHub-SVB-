"""
1) What is Casting?
- Casting means changing the type of a value from one type to another.
- For example: changing an integer (5) into a string ("5") or a float (5.0).

2) Common Casting Functions in Python
a) int() → converts into an integer
b) float() → converts into a decimal number
c) str() → converts into a string

3) In Short:
- So, casting = changing data type when you need values in a different form.
"""

x = int(5.7)
y = int("10")
print(x, type(x))  # 5 <class 'int'>
print(y, type(y))  # 10 <class 'int'>

a = float(5)
b = float("4.5")
print(a, type(a))  # 5.0 <class 'float'>
print(b, type(b))  # 4.5 <class 'float'>

c = str(5)
d = str(4.6)
print(c, type(c))  # 5 <class 'str'>
print(d, type(d))  # 4.6 <class 'str'>
