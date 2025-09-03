"""
Q) Solve the problem:
- Get a number as an input from the user.
- Print "Large Even" : If the number is Greater than 100 and Even.
- Print "Large Odd" : If the number is Greater than 100 and Odd.
- Print "Small Even" : If the number is Smaller than 100 and Even.
- Print "Small Odd" : If the number is Smaller than 100 and Odd.
- Print "100" : If the number is 100.
"""

num = int(input("Enter the number: "))
if num > 100 and num % 2 == 0:
    print("Large Even!")
elif num > 100 and num % 2 != 0:
    print("Large Odd!")
elif num < 100 and num % 2 == 0:
    print("Small Even!")
elif num < 100 and num % 2 != 0:
    print("Small Odd!")
else:
    print("100")
