# Dictionary are Mutable
user = {"name": "Ross", "age": 23, "name": "Ethan"}
# 👆 Overrides the value with the same key name.
print(user["name"])  # Ross
user["age"] = 25
print(user)  # {'name': 'Ethan', 'age': 25}
user["city"] = "London"
print(user)  # {'name': 'Ethan', 'age': 25, 'city': 'London'}

# Sets are Partial Mutable(Add, Remove - Possible) => a) Unique values are printed b) Sequence can vary c) Can use loop over sets
fruits = {"Apple", "Apple", "Banana", "Grape"}
print(fruits)  # {'Banana', 'Grape', 'Apple'}
fruits.add("Strawberry")
print(fruits)  # {'Apple', 'Strawberry', 'Banana', 'Grape'}
fruits.remove("Apple")
print(fruits)  # {'Grape', 'Banana', 'Strawberry'}

for item in fruits:
    print(item)
