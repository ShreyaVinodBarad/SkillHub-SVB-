# 01. Age Category
# Input: age = 10 → Output: Child
# Input: age = 25 → Output: Adult

# Task: Print Child age below 14 / Teenager between 14-22 / Adult 22-60 / Senior above 60

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
