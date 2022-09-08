// Logical Operators

// !(NOT) 
// It reverses the boolean result of the operand (or condition). 

   let myName = 1;
   console.log(!myName);    // false

// &&(AND) 

// Evaluates the operands from left to right
// For each operand, it will first convert it to a boolean. If the result is false, stops and 
// returns the original value of that operand.
// otherwise if all were truthy it will return the last truthy value.

   console.log(0 && 1)  //0
   console.log(1 && 2 && 3)   //3
   console.log(0 && 1 && 2 && 5)   //0
   console.log(1 && 2 && 3 && 5)   //5
   let num1 = 5
   console.log((1 < num1 && 15 > num1))   //true
   console.log((1 > num1 && 15 < num1))   //false

// ||(OR) Somewhat opposite of ‘AND’ operator.

// evaluates the operand from left to right.
// For each operand, it will first convert it to a boolean. If the result is true, stops and
// returns the original value of that operand.
// otherwise if all the values are falsy, it will return the last value.

console.log(0 || 1)  //1
console.log(1 || 2 || 3)   //1
console.log((0 || 1 || 2 || 5))   //1
console.log(null || true)   //true
let num2 = 5
console.log((1 < num2 || 15 == num2))    //true