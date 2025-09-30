# Loop over List and String 👇
# With List 👇
brands = ["Dell", "HP", "Apple"]
for item in brands:
    print(item)
# With String 👇
stringToLoop = "ShreyaVinodBarad"
for char in stringToLoop:
    print(char)

# Practice 👇
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("Odd Numbers: ")
for num in nums:
    if num % 2 != 0:
        print(num)

num = 1
print("Even Nums: ")
while num <= len(nums):
    if num % 2 == 0:
        print(num)
    num = num + 1

i = 0
print("Even Nums: ")
while i < len(nums):
    if nums[i] % 2 == 0:
        print(nums[i])
    i = i + 1

# Printing brands items one by one using while loop 👇
i = 0
while i < len(brands):
    print(brands[i])
    i = i + 1
