# import ExportModule

# print(ExportModule.name)
# print(ExportModule.brands)
# ExportModule.sayName(ExportModule.name)

# Follow this approach 👇
from ExportModule import name, brands, sayName

print(name)
print(brands)
sayName(name)
