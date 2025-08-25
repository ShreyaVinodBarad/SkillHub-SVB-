import random

# Game with 2 Players 👇
"""
print("Option 1: Rock")
print("Option 2: Paper")
print("Option 3: Scissor")
player1 = input("Player 1 - Please choose your option: ")
player2 = input("Player 2 - Please choose your option: ")
if (
    (player1 == "Paper" and player2 == "Rock")
    or (player1 == "Scissor" and player2 == "Paper")
    or (player1 == "Rock" and player2 == "Scissor")
):
    print("Player 1 is Winner🎉!")
elif (
    (player1 == "Rock" and player2 == "Paper")
    or (player1 == "Paper" and player2 == "Scissor")
    or (player1 == "Scissor" and player2 == "Rock")
):
    print("Player 2 is Winner🎉!")
else:
    print("Match Draw!")
"""

# Game with 1 Player and Computer 👇
"""
print("Option 1: Rock")
print("Option 2: Paper")
print("Option 3: Scissor")
player1 = input("Player 1 - Please choose your option: ")
index = random.randint(0, 2)
computer = ["Rock", "Paper", "Scissor"][index]
print(f"Computer: {computer}")
if (
    (player1 == "Paper" and computer == "Rock")
    or (player1 == "Scissor" and computer == "Paper")
    or (player1 == "Rock" and computer == "Scissor")
):
    print("Player 1 is Winner🎉!")
elif (
    (player1 == "Rock" and computer == "Paper")
    or (player1 == "Paper" and computer == "Scissor")
    or (player1 == "Scissor" and computer == "Rock")
):
    print("Computer is Winner🎉!")
else:
    print("Match Draw!")
"""


# Game with 1 Player and Computer with Loop 👇
x = False
player1WinCount = 0
computerWinCount = 0
numberOfMatches = 0
drawCount = 0


def rockPaperScissor():
    global x, player1WinCount, computerWinCount, drawCount
    print("Option 1: Rock")
    print("Option 2: Paper")
    print("Option 3: Scissor")
    player1 = input("Player 1 - Please choose your option: OR Press q to Close!")
    if player1 == "q":
        x = True
        return
    index = random.randint(0, 2)
    computer = ["Rock", "Paper", "Scissor"][index]
    print(f"Computer: {computer}")
    if (
        (player1 == "Paper" and computer == "Rock")
        or (player1 == "Scissor" and computer == "Paper")
        or (player1 == "Rock" and computer == "Scissor")
    ):
        print("Player 1 is Winner🎉!")
        player1WinCount = player1WinCount + 1

    elif (
        (player1 == "Rock" and computer == "Paper")
        or (player1 == "Paper" and computer == "Scissor")
        or (player1 == "Scissor" and computer == "Rock")
    ):
        print("Computer is Winner🎉!")
        computerWinCount = computerWinCount + 1
    else:
        print("Match Draw!")
        drawCount = drawCount + 1


def result():
    print(f"Player1 Win Count: {player1WinCount}")
    print(f"Computer Win Count: {computerWinCount}")
    print(f"Draw Count: {drawCount}")
    print(f"Matches Count: {numberOfMatches - 1}")


i = 0
while i < 10:
    if x == True:
        break
    else:
        rockPaperScissor()
        numberOfMatches = numberOfMatches + 1
    i = i + 1
result()
