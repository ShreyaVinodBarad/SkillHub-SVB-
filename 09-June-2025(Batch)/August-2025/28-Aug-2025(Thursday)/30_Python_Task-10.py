# Task: Electricity charges:
# - Up to 100 units → ₹5/unit
# - 101-200 → ₹7/unit
# - Above 200 → ₹10/unit
# Expected Input: 50 → Expected Output: ₹250
# Expected Input: 150 → Expected Output: ₹950

units = int(input("Enter electricity units: "))

# 👉 Your code here
if units <= 100:
    print(units * 5)
elif units <= 200:
    print((100 * 5) + (units - 100) * 7)
else:
    print((100 * 5) + (100 * 7) + (units - 200) * 10)
