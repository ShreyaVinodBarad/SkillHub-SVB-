"""
1) What is an input() function?
- input() is a built-in function in Python.
- It is used when you want your program to ask the user for some information.
- When Python sees input(), it will pause the program and wait for the user to type something in the console (and press Enter).
- Whatever the user types is taken as a string (text) by default.

2) Important:
- input() always gives you a string.
- If you need a number, you must convert it:

3) In short:
input() = Hey user, type something, I'll wait, and then I'll store what you typed.
"""

name = input("What is your name?")
print("Hello!", name)  # Hello! Shreya
"""
👆
- When you run this:
a) Python will show: What is your name?
b) You type: Shreya (and press Enter).
c) Python will print: Hello, Shreya
"""

age = int(input("Enter your age? "))
print("Next year you will be:", age + 1)  # Next year you will be: 24

num1 = int(input("Enter num1:"))
num2 = int(input("Enter num2:"))
print(f"Addition of {num1} and {num2} is {num1 + num2}.")  # Addition of 23 and 2 is 25.
