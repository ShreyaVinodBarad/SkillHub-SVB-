# 06. Find Minimum of Three Numbers
# Input: 4, 9, 2 -> Output: 2
# Input: 7, 3, 5 -> Output: 3
# Task: Print smallest number

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
