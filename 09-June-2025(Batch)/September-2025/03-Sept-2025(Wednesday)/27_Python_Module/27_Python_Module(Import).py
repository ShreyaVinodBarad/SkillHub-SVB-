# import Python_ModuleExport
import Python_ModuleExport as moduleInPy

# 👆 as = alias (nickname) for the module.

# res = Python_ModuleExport.sum(2, 4)
res = moduleInPy.sum(3, 4)
print(res)

# print(Python_ModuleExport.listOfFrutis)
print(moduleInPy.listOfFrutis)

# from Python_ModuleExport import listOfFrutis
from Python_ModuleExport import listOfFrutis, sum

"""
👆
=> from ... import ... syntax
- In Python, the format is:
from module_name import item1, item2, ...
a) module_name = your file (Python module).
b) item1, item2 = functions, variables, or classes inside that module.
"""

print(listOfFrutis)
print(sum(2, 3))

from Python_ModuleExport import listOfFrutis as fruitsList, sum

"""
👆
=> General rule
from module_name import item_name as new_name
a) item_name = original name inside the module.
b) new_name = the nickname (alias) you want to use in your code.
"""
print(fruitsList)
