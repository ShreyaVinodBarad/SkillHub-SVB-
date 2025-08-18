'''
1) What are Operators?
- Operators are symbols that tell Python to do some work (like add, compare, assign values, etc.).
- Think of them as tools you use to do calculations or operations on values.

2) Types of Operators in Python
a) Arithmetic Operators (Math work)
- Used for calculations.
+ → Addition
- → Subtraction
* → Multiplication
/ → Division (gives decimal result)
// → Floor Division (gives whole number result)
% → Modulus (gives remainder)
** → Exponent (power)
------------------------------------------------------------
b) Comparison Operators (Check things)
- Used to compare values. Result is True or False.
== → Equal to
!= → Not equal to
> → Greater than
< → Less than
>= → Greater than or equal to
<= → Less than or equal to
------------------------------------------------------------
c) Logical Operators (Join conditions)
- Used with conditions.
and → True if both conditions are True
or → True if any one condition is True
not → Reverses the result
------------------------------------------------------------
d) Assignment Operators (Store values)
- Used to give values to variables.
= → Assign
+= → Add and assign
-= → Subtract and assign
*= → Multiply and assign
/= → Divide and assign
------------------------------------------------------------
e) Bitwise Operators (Work with binary numbers)
- Used in computer-level operations.
& → AND
| → OR
^ → XOR
~ → NOT
<< → Left shift
>> → Right shift
- Place values in Binary
128   64   32   16   8   4   2   1
- We can use bin() to get binary format of a number.
a) AND (&)
- Compares each bit. If both bits are 1 → result is 1, else 0.
- Example:
5 = 101 (binary)
3 = 011 (binary)
----------------
5 & 3 = 001 = 1

b) OR (|)
- If any one bit is 1 → result is 1.
- Example:
5 = 101
3 = 011
--------------
5 | 3 = 111 = 7

c) XOR (^)
- If bits are different → 1, if same → 0.
- Example:
5 = 101
3 = 011
--------------
5 ^ 3 = 110 = 6

d) NOT (~)
- Flips all bits: 1 → 0, 0 → 1
- In Python, it gives a negative number because of how it stores numbers.
- The operator ~x means:
~x = -(x+1)
- Example:
print(~5)   # -6
print(~10)  # -11

f) Left Shift (<<)
- This is same as multiplying by 2 for each shift.
- Example:
5 << 1 = 5 * 2 = 10
5 << 2 = 5 * 2 * 2 = 20

g) Right Shift (>>)
- This is same as dividing by 2 for each shift.
- When we do Right Shift (>>) in Python, it works like floor division.
- Example:
1) 5 >> 1
5 ÷ 2 = 2.5  
Drop decimal → 2
2) 5 >> 2
5 ÷ 4 = 1.25  
Drop decimal → 1
3) 9 >> 1
9 ÷ 2 = 4.5  
Drop decimal → 4
------------------------------------------------------------
f) Membership Operators (Check inside)
in → True if value is inside
not in → True if value is not inside
------------------------------------------------------------
g) Identity Operators (Check same object)
is → True if both are the same object
is not → True if not the same object
'''
# Arithmetic Operators
print(10 + 5) # 15
print(10 - 5) # 5
print(10 * 5) # 50
print(10 / 5) # 2.0
print(10 % 5) # 0
print(10 // 5) # 2
print(10 ** 2) # 100

# Comparison Operators
print(5 > 2) # True
print(5 < 2) # False
print(5 == 2) # False
print(5 != 2) # True
print(5 <= 2) # False
print(5 >= 2) # True

# Logical Operators
print(5 > 3 and 5 < 6) # True
print(5 > 3 or 5 < 6) # True
print(not(5 < 6)) # False

# Assignment Operators
x = 10
x += 2
print(x) # 12
y = 10
y -= 2
print(y) # 8
z = 10
z *= 2
print(z) # 20
a = 20
a /= 5
print(a) # 4.0

# Bitwise Operators
print(5 & 3) # 001 => 1
print(5 | 3) # 111 => 7
print(5 ^ 3) # 110 => 6
print(~5) # -(5 + 1) => -6
print(~10) # -(10 + 1) => -11
print(5 << 1) # 10
print(5 << 2) # 20
print(5 >> 1) # 2
print(5 >> 2) # 1
print(9 >> 1) # 4

# Membership Operators
print(3 in [1, 2, 3]) # True
print("a" not in "Hello") # True

# Identity Operators
arr1 = [1, 2, 3]
arr2 = arr1
arr3 = [1, 2, 3]
print(arr1 is arr2) # True (Same object)
print(arr1 is arr3) # False (Different objects with same data)
print(arr1 is not arr3) # True 

# bin() => Getting binary format of a number
print(bin(10)); # 0b1010