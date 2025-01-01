function foo(a, b) {
  // Explicit type checking and conversion
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error('Invalid input types. Both arguments must be numbers.');
    return NaN; // Or throw an error 
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Invalid input types...
console.log(foo(1, 2.5)); //Output 3.5