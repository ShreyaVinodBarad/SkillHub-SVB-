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
        elif choice == 5:
            print("Thank You for using our To - Do App!")
            break


toDoList()
