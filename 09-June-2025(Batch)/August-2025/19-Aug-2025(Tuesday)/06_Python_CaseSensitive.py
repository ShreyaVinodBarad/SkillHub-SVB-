"""
1) Case sensitivity in Python means:
- Python treats uppercase (A, B, C...) and lowercase (a, b, c...) letters as different things.
"""

name = "Shreya"
Name = "John"
print(name, Name)  # Shreya John
"""
- Here, name and Name are two different variables, even though they look very similar.
- If you try to use NAME (all caps), Python will give an error because it doesn't exist.
- Key point:
"Hello" ≠ "hello" ≠ "HELLO" (all are different in Python).
- In short: Python is case-sensitive → uppercase and lowercase letters are not the same.
"""
