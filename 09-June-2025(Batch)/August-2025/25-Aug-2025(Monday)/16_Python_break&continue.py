"""
1) break
- It is used to stop the loop completely.
- As soon as Python sees break, the loop ends immediately (even if it hasn't finished all its turns).

2) continue
- It is used to skip the current turn of the loop.
- The loop does not stop, it just skips that one round and moves to the next.

3) In short:
break = stop the loop.
continue = skip one turn, but keep the loop going.
"""

# break Statement Examples
# Example - 01 with for Loop 👇
for i in range(1, 5):
    if i == 3:
        break
    print(i)
# Example - 02 with while Loop 👇
i = 0
while i < 5:
    if i == 3:
        break
    print(i)
    i = i + 1

# continue Statement Examples
# Example - 01 with for Loop 👇
for i in range(1, 10):
    if i == 6:
        continue
    print(i)
# Example - 02 with while Loop 👇
a = 0
while a < 10:
    if a == 4:
        a = a + 1  # Update here, so it doesn’t get stuck at 4
        continue
    print(a)
    a = a + 1  # Update again for normal flow
"""
👉 Why two times?
First a = a + 1 (inside if) ensures we don't get stuck at 4.
Second a = a + 1 (at the end) ensures the loop moves forward normally.
- Without these, the loop would either never end or repeat numbers.
"""
