# Task: Print day of week (1=Monday, 7=Sunday)
# Expected Input: 1 → Expected Output: Monday
# Expected Input: 6 → Expected Output: Saturday

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
