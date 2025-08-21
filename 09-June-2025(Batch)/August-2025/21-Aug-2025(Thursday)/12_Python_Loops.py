"""
1) What is a Loop?
- A loop is like telling the computer:
"Do this thing again and again, until I say stop."
- Instead of writing the same code many times, you put it in a loop.

2) Types of Loops:
a) for loop
- Used when you know how many times you want to repeat.
- It goes through a sequence (like a list, string, or range of numbers).
- Syntax:
for variable in sequence:
    # code to repeat

b) while loop
- Used when you don't know exactly how many times to repeat.
- It keeps running as long as a condition is true.
- Syntax:
while condition:
    # code to repeat

c) So in short:
- Use for when you know how many times.
- Use while when you only know the condition.

3) range()
a) What is range()?
- In Python, range() is a built-in function that gives a sequence of numbers.
- It is often used with for loops when you want to repeat something a fixed number of times.
- Syntax of range():
range(start, stop, step)
start → (optional) number where sequence begins. Default = 0.
stop → number where sequence ends ( ⭐ but it does not include this number).
step → (optional) difference between each number. Default = 1.
b) In simple words:
range() helps the loop know how many times to run and what numbers to use each time.
"""

# for Loop
# Only stop value 👇
for i in range(5):
    print("Only stop value: ", i)
# Start and stop 👇
for i in range(1, 5):
    print("Start and stop: ", i)
# Start, stop, step 👇
for i in range(1, 10, 2):
    print("Start, stop, step: ", i)
# for Loop with List
stud = ["John", "Ross", "Rachel", "Ethan"]
for item in stud:
    print(item)

# while Loop
count = 1
while count <= 5:
    print(count)
    count += 1

# Question by Akash Sir
for item in range(1, 16):
    if item % 2 != 0:
        print(item)

# Task by Akash Sir
for item in range(1, 16):
    if item % 3 == 0 and item % 5 == 0:
        print("FizzBuzz")
    elif item % 3 == 0:
        print("Fizz")
    elif item % 5 == 0:
        print("Buzz")
    else:
        print(item)
