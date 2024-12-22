# MongoDB $inc Operator Error
This repository demonstrates an error caused by the incorrect usage of the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical value by a specified amount, however using a non-numeric value will lead to an error. 

The `bug.js` file contains the erroneous code that causes this issue, which involves incrementing the numerical field 'count' with the non-numeric value 'abc'.

The `bugSolution.js` file presents the correct way to use the `$inc` operator, demonstrating how to correctly increment the field 'count' with a numeric value such as 1.

## How to reproduce the bug
1. Ensure you have a MongoDB instance running.
2. Create a collection named `myCollection` and insert a document with a numerical field, such as `{ _id: 1, count: 0 }`.
3. Run the code in `bug.js`.
4. Observe the error.

## How to fix the bug
1. Replace the non-numeric value in the `$inc` operation in `bug.js` with a valid number.
2. The corrected code will not cause any errors when executing.