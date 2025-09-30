brands = ["Dell", "Apple", "HP"]  # This is a List which is Mutable.
# Add in List
brands.append("Asus")
print(brands)  # ['Dell', 'Apple', 'HP', 'Asus']
# Update in List
brands[0] = "Asus"
print(brands)  # ['Asus', 'Apple', 'HP', 'Asus']
# Remove a value in List
brands.remove("HP")
print(brands)  # ['Asus', 'Apple', 'Asus']

brandsTuple = ("Dell", "Apple", "HP")
# 👆 This is a Tuple which is Immutable. Add, Update and Delete is not Allowed. But values can be accessed.
# brandsTuple[0] = "Lenovo" => Shows an Error
try:
    brandsTuple[0] = "Lenovo"
    print(brandsTuple)
except:
    print("A tuple is Immutable!")
finally:
    print("Finally block runs everytime!")

# Accessing values of Tuple
for item in brandsTuple:
    print(item)
