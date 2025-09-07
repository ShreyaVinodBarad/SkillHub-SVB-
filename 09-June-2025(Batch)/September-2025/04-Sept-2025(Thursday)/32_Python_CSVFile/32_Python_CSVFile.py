"""
1) What is a CSV file?
CSV = Comma-Separated Values
- It is a plain text file that stores data in a tabular format (rows and columns).
- Each row is a record, and each column is separated by a comma (,).
- Example students.csv:
Name,Age,Grade
Ravi,15,A
Anita,14,B
Sohan,16,A

2) Using the csv module in Python
- Python has a built-in module called csv for reading and writing CSV files.
- First, import it:
import csv

3) In short:
- csv.reader(f) → gives data as lists (easy, but you use indexes).
- csv.DictReader(f) → gives data as dictionaries (more readable, use column names).
"""

import csv

f = open("EmployeesData.csv")

# res = csv.reader(f)  # reader() gives list inside list
# 👆 This function reads the file line by line.Each row of the CSV file becomes a list of strings.
# 👆 Notice: Data is a list inside a list (2D list), Everything is a string (even numbers).

# print(res) => <_csv.reader object at 0x0000025FE9986680> => res is an iterator object, not a normal list.

res = csv.DictReader(f)  # Data inside dictionary
# 👆 DictReader reads each row of the CSV and converts it into a dictionary.

resInList = list(res)
# 👆 list(res) converts all rows into a list of dictionaries.
# print(resInList) => Gives data inside a list

# Checking 0th index value => 2D List
print(resInList[0])
print(resInList[0]["FIRST_NAME"])  # Donald
print(resInList[0]["LAST_NAME"])  # OConnell

# Looping
for item in resInList:
    print(item["FIRST_NAME"], item["LAST_NAME"], item["PHONE_NUMBER"])

# Creating and writing inside a csv file 👇
"""
👇
=> In short:
a) Open file in "w" mode.
b) Create writer object.
c) Write headers and rows using writerow().
d) Data gets stored in CSV format (comma-separated values).
"""
file = open(
    "csvFile.csv", "w", newline=""
)  # newline = "" => Does not leave new line after every row
"""
👆
- Opens (or creates if not present) a file named csvFile.csv.
- "w" mode = write mode (if file already exists, it will overwrite).
- Now, file is a file object ready to write data.
"""

csvWriter = csv.writer(file)
"""
👆
- csv.writer(file) creates a writer object.
- This writer object is used to write rows into the CSV file.
"""

# csvWriter.writerow(["Name", "Age", "City"])
# 👆 writerow() writes one row at a time.
# csvWriter.writerow(["Shreya", "23", "Chhatrapati Sambhaji Nagar"])

# Giving data of different file inside our created file - csvFile.csv
for item in resInList:
    csvWriter.writerow(
        [item["FIRST_NAME"], item["LAST_NAME"], item["PHONE_NUMBER"], item["EMAIL"]]
    )
