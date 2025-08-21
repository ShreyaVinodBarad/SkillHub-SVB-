# Task - 01 👇
inpValue = int(input("Enter a value:"))
if inpValue < 100:
    print("Hello!")
else:
    print("Bye!")

# Task - 02 👇
enterNum = int(input("Enter a number: "))
if enterNum % 2 == 0:
    print("It's an Even Number!")
else:
    print("It's an Odd Number!")

# Task - 03 👇
x, y, z = 10, 20, 30
if x > y and x > z:
    print(f"{x} is Largest!")
elif y > x and y > z:
    print(f"{y} is Largest!")
else:
    print(f"{z} is Largest!")

# Task - 04 👇
marks = int(input("Enter your marks out of 100: "))
if marks < 35:
    print("You are Fail!")
elif marks >= 35 and marks <= 60:
    print("Your Grade is: C!")
elif marks > 60 and marks <= 75:
    print("Your Grade is: B!")
else:
    print("Your Grade is: A!")

# Task - 05 ⭐ V. V. Imp Interview Question 👇
num = int(input("Enter a number: "))
if num % 3 == 0 and num % 5 == 0:
    print("FizzBuzz!")
elif num % 3 == 0:
    print("Fizz!")
elif num % 5 == 0:
    print("Buzz")
else:
    print(num)
