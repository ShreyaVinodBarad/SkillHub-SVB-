quiz = [
    {
        "Question": "What is the capital of India?",
        "Options": ["New Delhi", "Kolkata", "Hyderabad", "Mumbai"],
        "CorrectAns": "New Delhi",
    },
    {
        "Question": "How many days are there in a leap year?",
        "Options": ["365 days", "366 days", "367 days", "364 days"],
        "CorrectAns": "366 days",
    },
    {
        "Question": "Which planet is known as the 'Red Planet'?",
        "Options": ["Jupiter", "Mars", "Saturn", "Earth"],
        "CorrectAns": "Mars",
    },
    {
        "Question": "Who is known as the 'Father of Computers'?",
        "Options": [
            "Albert Einstein",
            "Charles Babbage",
            "Isaac Newton",
            "Thomas Edison",
        ],
        "CorrectAns": "Charles Babbage",
    },
    {
        "Question": "What is H₂O commonly known as?",
        "Options": [
            "Oxygen",
            "Water",
            "Hydrogen",
            "Salt",
        ],
        "CorrectAns": "Water",
    },
]
correctAnsCount = 0

for item in quiz:
    print(item["Question"])
    print(f"Option 1:{item["Options"][0]}")
    print(f"Option 2:{item["Options"][1]}")
    print(f"Option 3:{item["Options"][2]}")
    print(f"Option 4:{item["Options"][3]}")
    answer = input("Your answer is: ")
    if answer == item["CorrectAns"]:
        print("Your answer is Correct! 🎉")
        correctAnsCount = correctAnsCount + 1
    else:
        print(
            f"Your answer is Incorrect ❌ ! The correct answer is: {item["CorrectAns"]}"
        )

print(f"Your correct answer out of {len(quiz)} is {correctAnsCount}!")
print(f"Your percentage is: {correctAnsCount/len(quiz) * 100}%!")
