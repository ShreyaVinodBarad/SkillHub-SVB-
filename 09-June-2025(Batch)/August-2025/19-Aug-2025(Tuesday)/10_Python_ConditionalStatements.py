"""
1) What are Conditional Statements?
- Conditional statements are like making decisions in real life.
- Example:
If it's raining, then you take an umbrella.
Otherwise, you don't.
Here, the condition is "Is it raining?"
- The decision (what happens) depends on whether that condition is true or false.

2) In Programming
- Conditional statements let the computer choose different paths depending on conditions.
- The most common ones are:
a) if → Runs a block of code if the condition is true.
b) if...else → Chooses between two options.
c) if...elif...else → Checks multiple conditions.

3) In short:
Conditional statements = “If this happens, do this, otherwise do that.”
"""

# if Statement
age = 20
if age > 18:
    print("You can vote")  # You can vote

# if...else Statement
age = 16
if age > 18:
    print("You are eligible to Vote!")
else:
    print("You are too young to Vote!")  # You are too young to Vote!

# if...elif...else
marks = 67
if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
else:
    print("Grade: C")  # Grade: C
