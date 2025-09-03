"""
1) What is match case in Python?
- In Python, match case is like a switch statement in other languages.
- It helps you check the value of something and run different code depending on what it matches.

2) Key Points:
a) match → starts the block (like asking "what is this?").
b) case → each possible option.
c) _ (underscore) → means “default” or “anything else”.

3) Why useful?
- Makes code cleaner than using many if-elif-else.
- Easy to read when there are many conditions.
"""

# Example: 01
dayNum = int(input("Enter the day number: "))
match dayNum:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thursday")
    case 5:
        print("Friday")
    case 6:
        print("Saturday")
    case 7:
        print("Sunday")
    case _:
        # 👆 _ (underscore) → means “default” or “anything else”
        print("No data available!")

# Example: 02
num = int(input("Enter the number: "))
match True:
    case _ if num > 100 and num % 2 == 0:
        print("Large Even!")
    case _ if num > 100 and num % 2 != 0:
        print("Large Odd!")
    case _ if num < 100 and num % 2 == 0:
        print("Small Even!")
    case _ if num < 100 and num % 2 != 0:
        print("Small Odd!")
    case _:
        print("100")
"""
=> case _ if condition: is the proper way when you want to run code based on a condition.
=> Direct case condition: will just check if that condition equals the match value, which is less readable and can be tricky.
"""
