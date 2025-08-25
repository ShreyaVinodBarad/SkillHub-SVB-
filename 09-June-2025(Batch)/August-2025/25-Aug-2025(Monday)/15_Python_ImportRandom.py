"""
1) What does import random mean?
- In Python, import is like saying “Hey Python, bring me this toolbox so I can use its tools.”
- random is one such toolbox (a module) that comes with Python.
- This toolbox has many ready-made functions that help you do random things — like picking a random number, shuffling a list, or choosing a random item.

2) Syntax:
a) First step (always):
import random
b) Random integer in a range
random.randint(start, end)
👉 Gives a random integer between start and end (both included).
c) Random floating number (0 to 1)
random.random()
👉 Gives a random float between 0.0 and 1.0.

3) Why do we use it?
- We use import random when we want to:
a) Generate random numbers
b) Shuffle cards in a game
c) Randomly pick an item (like choosing a winner from a list)
d) Create randomness in simulations, experiments, or testing.

4) Simply:
import random = “Let me use Python's random number generator and other random tricks.”
"""

import random

# Example: 01
randNum = random.randint(1, 10)
print(randNum)

# Example: 02
randNumForGame = random.randint(0, 2)
options = ["Rock", "Paper", "Scissor"]
print(options[randNumForGame])
