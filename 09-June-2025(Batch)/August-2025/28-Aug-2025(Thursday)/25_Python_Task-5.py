# 05. Simple Calculator
# Input: 5 + 3 → Output: 8
# Input: 10 * 2 → Output: 20

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
