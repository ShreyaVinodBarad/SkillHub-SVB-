"""
1) What is I/O?
- I/O means Input/Output.
- Input = reading data from a file.
- Output = writing data into a file.

2) When working with files in Python, you usually do 3 steps:
a) Open the file
b) Read or Write
c) Close the file

3) File Modes (important!)
a) "r" → read (file must exist).
b) "w" → write (creates a new file or erases old content).
c) "a" → append (adds data at the end).
d) "r+" → read + write.
e) "w+" → write + read (erases old content).
f) "a+" → append + read.
"""

# 1) Opening a File → using open() 👇
"""
file = open("demo.txt")
"""

# 2) Reading from a File 👇
file = open("demo.txt", "r")
result = file.read()
print(result)

# 3) Writing to a File 👇
file = open("demo.txt", "w+")
file.write("Hello! this is my second line.")
file.seek(0)
"""
👆
1) What is seek()?
- Every file in Python has a file pointer (like a cursor in a text editor).
- When you open a file and write something, the pointer moves to the end of the written text.
- If you try to read() immediately, Python starts reading from the current pointer position → which is already at the end → so it returns empty.
- That's why we use file.seek(0) to move the pointer back to the beginning.
"""
res = file.read()
print(res)

# 4) Appending to a file 👇
file = open("demo.txt", "a+")
result = file.write("\n Adding later!")
file.seek(0)
result = file.read()
print(result)

# 5) Close the file → using close() 👇
file.close()
