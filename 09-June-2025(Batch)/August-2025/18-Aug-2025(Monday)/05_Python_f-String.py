'''
1) What is an f-string in Python?
- An f-string is a special way to write strings in Python where you can directly put variables or expressions inside curly braces {}.
- It makes your code shorter and easier to read.

2) Syntax:
f"some text {variable}"
- The f before the string tells Python it's an f-string.
- Inside {}, Python will replace it with the value of the variable (or even a calculation).

3) Example:
'''
name = "Shreya"
print(f"Hello! {name}.") # Hello! Shreya.

a = 5
b = 4
print(f"Addition of {a} and {b} is {a + b}.") # Addition of 5 and 4 is 9.

'''
4) In short:
- Put an f before quotes "...".
- Write variables or math inside {}.
- Python will replace them with actual values.
'''