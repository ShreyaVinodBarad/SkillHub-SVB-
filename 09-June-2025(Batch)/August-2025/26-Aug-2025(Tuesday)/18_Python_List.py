"""
1) What is a List in Python?
- A list is like a box that can hold many items together.
- These items can be numbers, words, or even other lists.
- You can change the items inside it (add, remove, or update).

2) Why Lists are Useful?
- Store many things together.
- Easy to change, add, or remove items.
- You don't need separate variables for each value.

3) In short:
- A list in Python is like a shopping bag that can carry many items, and you can add, remove, or change them anytime.
"""

# How to Make a List 👇
# A list of numbers
numbers = [1, 2, 3, 4, 5]
# A list of words
fruits = ["Apple", "Banana", "Mango"]
# A mixed list
mixed = [10, "Hello", 3.14, True]

# Accessing Items 👇
# Lists are ordered. Each item has a position (called index) starting from 0.
print(fruits[0])  # Apple
print(fruits[1])  # Banana

# Changing Items 👇
fruits[1] = "Grape"
print(fruits)  # ['Apple', 'Grape', 'Mango']

# Adding Items 👇
# 1) Using append
fruits.append("Orange")  # Add at the End
print(fruits)  # ['Apple', 'Grape', 'Mango', 'Orange']
# 2) Using insert
# Syntax: listName.insert(index, item)
fruits.insert(2, "Kiwi")  # Add at Position 2
print(fruits)  # ['Apple', 'Grape', 'Kiwi', 'Mango', 'Orange']

# Removing Items 👇
# 1) Using remove
fruits.remove("Grape")  # Remove by Value
print(fruits)  # ['Apple', 'Kiwi', 'Mango', 'Orange']
# 2) Using pop
fruits.pop(0)  # Remove by Position
print(fruits)  # ['Kiwi', 'Mango', 'Orange']
# 3) Using clear
fruits.clear()  # Remove all Items
print(fruits)  # []

# len() 👇
# It tells you how many items are inside a list.
fruitNames = ["Apple", "Kiwi", "Mango", "Orange"]
print(len(fruitNames))  # 4

# Example of Akash Sir 👇
x = ["Dell", "Apple"]
y = ["Samsung", "Lenovo"]
z = [x, y]  # Nested List
print(z[1])  # ['Samsung', 'Lenovo']
print(z[1][1])  # Lenovo
