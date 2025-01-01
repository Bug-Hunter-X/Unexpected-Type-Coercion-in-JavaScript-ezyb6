# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug caused by loose typing and implicit type coercion.  The `foo` function intends to add two numbers, but due to JavaScript's flexible nature, it concatenates a number and a string when passed mismatched data types. 

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version that explicitly handles different data types.

This example highlights the importance of type checking and using explicit type conversions for robustness in JavaScript applications.