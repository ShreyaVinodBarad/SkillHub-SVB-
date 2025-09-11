toDoListArr = []


def toDoList():
    global toDoList
    while True:
        print("=== To - Do List Menu ===")
        print("1 - Show Tasks")
        print("2 - Add Task")
        print("3 - Mark Task as Done")
        print("4 - Delete task")
        print("5 - Exit")
        choice = int(input("Enter your choice number 1 - 5: "))
        if choice == 1:
            i = 0
            for item in toDoListArr:
                i = i + 1
                print(f"{i}. {item}")
        elif choice == 2:
            task = input("Enter your task: ")
            toDoListArr.append(f"{task} [❌ Not Done]")
            print("Task Added Successfully!")
        elif choice == 3:
            indexNo = int(input("Enter index no of the task to mark it as done: ")) - 1
            if indexNo >= 0 and indexNo < len(toDoListArr):
                task = toDoListArr[indexNo].replace("[❌ Not Done]", "[✅ Done]")
                toDoListArr[indexNo] = task
                print("Task marked as Done!")
            else:
                print("Invalid Task Number!")
        elif choice == 4:
            indexNo = int(input("Enter index no of the task to mark it as done: ")) - 1
            if indexNo >= 0 and indexNo < len(toDoListArr):
                deleted = toDoListArr.pop(indexNo)
                print(f"Your task deleted: {deleted}")
            else:
                print("Invalid Task Number!")
        elif choice == 5:
            print("Thank You for using our To - Do App!")
            break


toDoList()
"""
=> Syntax for replace():
string.replace(old, new, count)
a) string → the original text you want to change
b) old → the part of the string you want to replace
c) new → the new text you want instead
d) count (optional) → how many occurrences to replace. If omitted, all occurrences are replaced.
"""
