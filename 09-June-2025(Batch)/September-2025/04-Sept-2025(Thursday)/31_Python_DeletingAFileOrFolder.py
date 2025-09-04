"""'
=> os.remove()
1) In Python, if you want to delete a file, you can use the os.remove() function.
2) Here's how it works step by step:
a) Import the os module - this gives Python access to operating system functions.
import os
b) Use os.remove("filename") - write the name (or path) of the file you want to delete inside the brackets.
os.remove("myfile.txt")
- This will delete the file called myfile.txt from your computer.
3) Important notes:
- If the file doesnt exist, Python will show an error.
- If you want to avoid errors, you can first check if the file exists using os.path.exists().

=> os.rmdir()
1) os.rmdir() in Python is used to delete a folder (directory).
2) Here's the simple breakdown:
a) Import os module
import os
b) Use os.rmdir("foldername")
os.rmdir("myfolder")
- This will remove (delete) the folder named myfolder.
3) Important Rule:
- The folder must be empty.
- If the folder has files or other folders inside, os.rmdir() will give an error.

=> shutil:
1) shutil is a Python module that helps you do high-level file operations.
2) When you write:
import shutil
3) Delete non-empty folders
shutil.rmtree("folderName")
- Deletes the folder even if it has files inside (⚠️ careful, it's permanent).

=> Summary:
- Use os.remove() for files.
- Use os.rmdir() for empty folders.
- Use shutil for deleting folders having files.
"""

import os
import shutil

# os.remove("file.txt") => Deletes the file
# os.rmdir("file") => Deletes the folder

# For file 👇
file = "file.txt"
if os.path.exists(file):
    os.remove(file)
    print("File deleted!")
else:
    print("File does not exists!")

# For folder 👇
folder = "My_Folder"
if os.path.exists(folder):
    os.rmdir(folder)
    print("Deleted the directory!")
else:
    print("Directory does not exists!")

# Deleting folder having files 👇
# shutil.rmtree("myFolder")
