# 03. Grading System
# Input: 85 → Output: Grade A
# Input: 45 → Output: Fail
# Task: Print grade A above 75/ B between 60-75 / C between 35-60 / Fail below 35

marks = int(input("Enter marks: "))

# 👉 Your code here

# if marks > 75:
#     print("Grade: A")
# elif marks <= 75 and marks > 60:
#     print("Grade: B")
# elif marks <= 60 and marks >= 35:
#     print("Grade: C")
# else:
#     print("Fail")

if marks < 35:
    print("Fail")
elif marks >= 35 and marks < 60:
    print("Grade: C")
elif marks >= 60 and marks <= 75:
    print("Grade: B")
else:
    print("Grade: A")
