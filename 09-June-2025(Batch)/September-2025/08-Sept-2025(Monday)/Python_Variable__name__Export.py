"""
1) What is __name__?
- In Python, every file (script) has a special built-in variable called __name__.
- It tells Python how the file is being used:
a) Directly run by you → then __name__ = "__main__".
b) Imported into another file → then __name__ = the file's name.

2) Think of it like this:
- Imagine you wrote a story in a notebook:
a) If you read it yourself → you know it's your main notebook.
b) If you give it to a friend → your friend knows it's Shreya's notebook, not the main one.
- That's what __name__ does.
"""

print(__name__)  # __main__


def dummy():
    print(__name__)
