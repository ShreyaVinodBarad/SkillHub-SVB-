"""
Q.1) Age Category
Input: age = 10 → Output: Child
Input: age = 25 → Output: Adult
Task: Print Child age below 14 / Teenager between 14-22 / Adult 22-60 / Senior above 60
"""

age = int(input("Enter your age: "))
# 👉 Your code here
if age < 14:
    print("Child")
elif age >= 14 and age < 22:
    print("Teenager")
elif age >= 22 and age < 60:
    print("Adult")
else:
    print("Senior")

# -----------------------------------------------------------------

"""
Q.2) Positive, Negative, Zero
Input: -5 → Output: Negative
Input: 0 → Output: Zero
Task: Check if positive, negative, or zero
"""
num = int(input("Enter a number: "))
# 👉 Your code here
if num == 0:
    print("Zero")
elif num < 0:
    print("Negative")
else:
    print("Positive")

# -----------------------------------------------------------------

"""
Q.3) Grading System
Input: 85 → Output: Grade A
Input: 45 → Output: Fail
Task: Print grade A above 75/ B between 60-75 / C between 35-60 / Fail below 35
"""
marks = int(input("Enter marks: "))
# 👉 Your code here
if marks < 35:
    print("Fail")
elif marks >= 35 and marks < 60:
    print("Grade: C")
elif marks >= 60 and marks <= 75:
    print("Grade: B")
else:
    print("Grade: A")

# -----------------------------------------------------------------

"""
Q.4) Check Even or Odd
Input: 7 → Output: Odd
Input: 10 → Output: Even
"""
num = int(input("Enter a number: "))
# 👉 Your code here
if num % 2 == 0:
    print("Even")
else:
    print("Odd")

# -----------------------------------------------------------------

"""
Q.5) Simple Calculator
Input: 5 + 3 → Output: 8
Input: 10 * 2 → Output: 20
"""
num1 = int(input("Enter first: "))
num2 = int(input("Enter second: "))
op = input("Enter operator (+,-,*,/): ")
# 👉 Your code here
if op == "+":
    print(num1 + num2)
elif op == "-":
    print(num1 - num2)
elif op == "*":
    print(num1 * num2)
else:
    print(num1 / num2)

# -----------------------------------------------------------------

"""
Q.6) Find Minimum of Three Numbers
Input: 4, 9, 2 -> Output: 2
Input: 7, 3, 5 -> Output: 3
Task: Print smallest number
"""
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))
# 👉 Your code here
if num1 < num2 and num2 < num3:
    print(num1)
elif num2 < num1 and num2 < num3:
    print(num2)
else:
    print(num3)

# -----------------------------------------------------------------

"""
Q.7) Largest of Four Numbers
Input: 4, 7, 2, 9 -> Output: 9
Input: 15, 25, 10, 5 -> Output: 25
Task: Find largest number
"""
num1 = int(input("Enter first number : "))
num2 = int(input("Enter second number : "))
num3 = int(input("Enter third number : "))
num4 = int(input("Enter fourth number : "))
# 👉 Your code here
if num1 > num2 and num1 > num3 and num1 > num4:
    print(num1)
elif num2 > num1 and num2 > num3 and num2 > num4:
    print(num2)
elif num3 > num1 and num3 > num2 and num3 > num4:
    print(num3)
else:
    print(num4)

# -----------------------------------------------------------------

"""
Q.8) Ask the user for a year and check if it is a leap year.
Rule: A leap year is divisible by 4 but not by 100, OR divisible by 400.
Expected Input: 2020 → Expected Output: "Leap Year"
Expected Input: 1900 → Expected Output: "Not Leap Year"
"""
year = int(input("Enter a year: "))
# 👉 Your code here
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("Leap Year")
else:
    print("Not a Leap Year")

# -----------------------------------------------------------------

"""
Q.9) Task: Print day of week (1=Monday, 7=Sunday)
Expected Input: 1 → Expected Output: Monday
Expected Input: 6 → Expected Output: Saturday
"""
day = int(input("Enter day number (1-7): "))
# 👉 Your code here
if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
elif day == 3:
    print("Wednesday")
elif day == 4:
    print("Thursday")
elif day == 5:
    print("Friday")
elif day == 6:
    print("Saturday")
else:
    print("Sunday")

# -----------------------------------------------------------------

"""
Q.10) Task: Electricity charges:
- Up to 100 units → ₹5/unit
- 101-200 → ₹7/unit
- Above 200 → ₹10/unit
Expected Input: 50 → Expected Output: ₹250
Expected Input: 150 → Expected Output: ₹850
"""
units = int(input("Enter electricity units: "))
# 👉 Your code here
if units <= 100:
    print(units * 5)
elif units <= 200:
    print((100 * 5) + (units - 100) * 7)
else:
    print((100 * 5) + (100 * 7) + (units - 200) * 10)

# -----------------------------------------------------------------
