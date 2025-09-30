# Runtime Error Handling 👇 => Interpreted Language - Runs code line by line
name = "Ross"
# If name is defined than the code in except will not run.
print("Hello!")
try:
    print(name)
    # There will be error as name is not defined if we won't use try and except
except:
    print("Something went wrong...")
finally:
    print("Always runs!")
    # finally code will run always no matter what...
print("My World!")
print("This is Shreya.")
