# Magic Square checker in JavaScript (pseudocode)

created: feb2017
updated: 11mar2017

---

Given space-separated string of numbers of any length:

## 1. Is the number of integers correct for an n x n matrix?

- split into an array
- convert strings to numbers
- remove any non-numbers
- convert floats to integers
- force negative numbers to positives
- remove duplicates
- check that mod sqrt length == 0

If 0, this is an nxn matrix, with potential to be a magic square

---
DONE TO HERE

---

TODO:
- delete floats instead of using math.floor
- retain negatives for balanced squares e.g. 1, -1, 2, -2 etc.?


## 2. Check numbers are contiguous and all present 

- map to a new sorted array
- check that the lowest number is 0 or 1
- note if numbers run 1..n^2 or 0..(n^2)-1
- check that each number is -1 of the next

RETURN: true if a magic square candidate


## 3. Check order

- use % 2 to check if order is odd or even
- /2 % 2 to check if odd-even (6, 10, 14..)

RETURN: odd, even or odd-even


## 4. Prepare to check the magic properties

- Split the array into n-length sub-arrays?
- OR
- Parse through as a 1-dimensional array
- OR
- use a js matrix library

RETURN: a suitable data structure for checking magic properties

## 5. Check the magic properties

- rows
- columns
- diagonals
- quarters
- broken diagonals

RETURN: sub-type of magic square:
- semimagic?
- magic?
- most-perfect?
- others?
