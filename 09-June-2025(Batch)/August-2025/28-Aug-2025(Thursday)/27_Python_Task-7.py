# 07. Largest of Four Numbers
# Input: 4, 7, 2, 9 -> Output: 9
# Input: 15, 25, 10, 5 -> Output: 25
# Task: Find largest number

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
