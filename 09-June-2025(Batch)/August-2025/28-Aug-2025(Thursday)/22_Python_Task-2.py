# 02. Positive, Negative, Zero
# Input: -5 → Output: Negative
# Input: 0 → Output: Zero
# Task: Check if positive, negative, or zero


num = int(input("Enter a number: "))

# 👉 Your code here
if num == 0:
    print("Zero")
elif num < 0:
    print("Negative")
else:
    print("Positive")
