"""
1) What is a Dictionary in Python?
- A dictionary is like a real-life dictionary.
- In a real dictionary, you look up a word (like "apple") to find its meaning ("a fruit").
- In Python, a dictionary also works with key → value pairs.
Key = the word you search
Value = the meaning you get

2) Key Points:
- Dictionary is written inside { } curly braces.
- It stores data in key : value pairs.
- Keys must be unique.
- Values can be of any type (number, string, list, another dictionary, etc.).
"""

# A simple Dictionary 👇
student = {"name": "Shreya", "age": 23, "marks": 95}
# How to use it? 👇
print(student["name"])  # Shreya
print(student["age"])  # 23

# Example by Akash Sir 👇
stud = {"name": "Shreya", "mobile": 9922968453}
print(stud["mobile"])  # 9922968453
arrOfDict = [
    {"name": "Shreya", "mobile": 9922968453},
    {"name": "Gouri", "mobile": 9325495926},
]
print(arrOfDict[1]["name"])  # Gouri
