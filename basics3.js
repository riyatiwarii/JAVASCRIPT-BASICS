// Special Cases Where JavaScript Scope Behave Differently.

// 1. Declaring variables using ‘var' inside a for-loop
   const subjects = ['maths','science','english','hindi','computer']
   var len;
   for (let i = 0, len = fruits.length; i<len; i++ ){
      console.log(fruits[i]);
   }
   console.log(len); // undefined error
   // console.log(i); // reference error

// let variables are block-scoped therefore it can be only accessible within the scope of
// for-loop. You can fix this by changing the let declaration to var.

// 2. Function Parameter Scope

   function bar(x) {
      console.log(x);}
   var x = 'I am defined outside foo definition';
   bar(); //undefined.

// In this above code, we have a local scoped variable(the first parameter) in the function
// bar to which we are not passing any value. Since there is a local scoped variable it
// will not check the global scope to see whether such a variable exists.
// In such a case, you need to pass the value to the parameter when bar is invoked.

   function bar(x) {
      console.log(x);}
   var x = 'I am defined outside foo definition';
   bar(x);

// Let us check one more instance of function parameter scope in the below code.

   function bar(x) {
      console.log(y);}
   var y = 'I am defined outside foo definition';
   bar();

// We can see that y variable is being used inside the function. 
// It will still refer a global variable, since it is not shadowed by function parameters.
// Hence, there is no local scoped variable called y in bar so it looks at a parent scope
// to see whether such a variable exists if so that variables value is accessed that is 
// how it is working.