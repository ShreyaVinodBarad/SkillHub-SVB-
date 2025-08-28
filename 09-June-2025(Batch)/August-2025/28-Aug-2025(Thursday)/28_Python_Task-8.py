# 📝 Problem: Ask the user for a year and check if it is a leap year.
# Rule: A leap year is divisible by 4 but not by 100, OR divisible by 400.
# Expected Input: 2020 → Expected Output: "Leap Year"
# Expected Input: 1900 → Expected Output: "Not Leap Year"

year = int(input("Enter a year: "))

# 👉 Your code here
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("Leap Year")
else:
    print("Not a Leap Year")
