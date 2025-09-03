"""
1) What is an Error?
- When you run a Python program, sometimes things go wrong:
a) Dividing a number by zero (10/0)
b) Using a variable that doesn't exist (print(x))
c) Opening a file that isn't there
- These are called errors (or exceptions).

2) Without Error Handling
- If Python finds an error, it stops the program immediately.

3) With Error Handling (try-except)
- We use try and except to catch errors and keep the program running.

4) General Structure
try:
    # code that might cause error
except SomeError:
    # what to do if that error happens

5) In short:
a) try → test risky code
b) except → handle error
c) else → runs if no error
d) finally → runs always
"""

# 👇 Without Error Handling
"""
print("Start")
print(10 / 0)  # Error
print("End")  # This line never runs
"""

# 👇 With Error Handling (try-except)
try:
    print(10 / 0)
except:
    print("Oop! You can't divide by Zero.")

# Example by Akash Sir 👇
try:
    add = 10 + 20
    print(add)
except:
    print("Something went wrong!")
else:
    # 👆 else → Runs only if no error happens.
    print("else - part of code runs only id there is no error!")
finally:
    # 👆 finally → Runs always, whether error happens or not.
    print("finally - part of the code always runs!")
