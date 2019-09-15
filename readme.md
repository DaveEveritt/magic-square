# Magic Square checker in JavaScript

created: feb2017
updated: 11mar2017,14mar2019,14sep2019

---

Given space-separated string of numbers of any length:

## 1. Is the number of integers correct for an n x n matrix?

- split into an array and map to `set`
- convert strings to numbers
- remove any non-numbers
- convert floats to integers
- force negative numbers to positives
- remove duplicates
- check that mod sqrt length == 0

If 0, this is an nxn matrix, with the *potential* to be a magic square

---

DONE TO HERE

---

## 2. Check numbers are contiguous and all present 

- [ ] check if lowest number is 0 or 1
- [ ] use multi-square branch to parse from 0 or 1
- [ ] note if numbers run 1..n^2 or 0..(n^2)-1
- [ ] check that each number is -1 of the next

RETURN: true if a magic square candidate


## 3. Check order

- [ ] use % 2 to check if order is odd or even
- [ ] /2 % 2 to check if odd-even (6, 10, 14..)

RETURN: odd, even or odd-even


## 4. Prepare to check the magic properties

- OR: split the array into n-length sub-arrays?
- OR: parse through as a 1-dimensional array

RETURN: a suitable data structure for checking magic properties


## 5. Check the magic properties

- rows
- columns
- diagonals
- quarters (even/odd-even)
- broken diagonals

RETURN: sub-type of magic square:
- semimagic?
- magic?
- most-perfect?
- others?

---

## TO DO:

- [ ] delete floats instead of using `math.floor`?
- [ ] optional negatives for balanced squares e.g. 1, -1, 2, -2 etc.?
- [ ] group JS functions in an object and/or create a module
- [ ] add order of square n mod n^2 - new equivalence class?
- [ ] check complements[<sup>1</sup>](#fn1) by subtracting each number from n2 + 1

## Footnotes

<b id="fn1">1.</b>  (1 15 14 4 12 6 7 9 8 10 11 5 13 3 2 16 => 16 3 2 13 9 6 7 12 5 10 11 8 4 15 14 1)
