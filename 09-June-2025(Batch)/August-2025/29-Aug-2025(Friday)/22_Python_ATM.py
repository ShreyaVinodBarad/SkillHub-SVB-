balance = 5000
accountHistory = []


def atm():
    while True:
        global balance
        print("Welcome to ATM!")
        print("1 - Deposit")
        print("2 - Withdraw")
        print("3 - Check Balance")
        print("4 - Check History")
        print("5 - Exit")
        choice = int(input("Please choice your number form 1 - 5: "))
        if choice == 1:
            depositAmt = int(input("Enter the amount to deposit: "))
            if depositAmt > 0:
                balance = balance + depositAmt
                accountHistory.append(f"Amount deposited is: {depositAmt}")
                print(f"You have deposited {depositAmt} in your account!")
                print(f"Your account balance is: {balance}")
            else:
                accountHistory.append(
                    f"Invalid Input for the deposite amount: {depositAmt}"
                )
                print("Invalid Input")
        elif choice == 2:
            withdrawAmt = int(input("Amount you want to Withdraw: "))
            if withdrawAmt > 0 and withdrawAmt < balance:
                balance = balance - withdrawAmt
                accountHistory.append(f"Amount withdraw is: {withdrawAmt}")
                print(f"You have withdraw {withdrawAmt} from your account!")
            else:
                accountHistory.append(
                    f"Insufficient Balance or Invalid Input for the withdrawal: {withdrawAmt}"
                )
                print("Your account balance is not sufficient to withdraw!")
            print(f"Your account balance is: {balance}")
        elif choice == 3:
            accountHistory.append("Balance Checked!")
            print(f"Your account balance is: {balance}")
        elif choice == 4:
            print("Account History")
            for item in accountHistory:
                print(item)
        elif choice == 5:
            print("Thank You for Banking with Us 🙏!")
            break


atm()
