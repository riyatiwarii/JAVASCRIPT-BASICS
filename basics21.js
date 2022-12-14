//  Spread Syntax, and the Rest Parameter 

//  Spread Parameter
//  We can create a cloned instance of an object using the spread syntax like this:

    const profile = {
        firstName : "Riya",
        lastName : "Tiwari",
        employeeId : 902,
        stateAddress : "Rajasthan"
    }

    const clone = {...profile};
    console.log(clone); //{firstName: 'Riya', lastName: 'Tiwari', employeeId: 902, stateAddress: 'Rajasthan'}

    console.log(clone === profile); //false

//  updating the value of the employeeId property:

    const update = {...profile, employeeId:999};
    console.log(update); //{firstName: 'Riya', lastName: 'Tiwari', employeeId: 999, stateAddress: 'Rajasthan'}

//  Merge using the spread syntax, like this:

    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const merge = [...num1, ...num2];
    console.log(merge); //[1, 2, 3, 4, 5, 6]

    function addition(a, b){
        return a + b;
    }
    console.log(addition(11, 4)); //15
    num = [11, 10];
    console.log(addition(num)); //11,10undefined
    console.log(addition(...num)); //21
  
    function multiply(a, b){
        return a*b
    }
    num = [11, 10];
    console.log(multiply(...num)); //110

//  Rest Parameter
//  The Rest parameter is kind of opposite to the spread syntax. While spread syntax helps expand or spread
//  elements and properties, the rest parameter helps collect them together.

    function fun1(...theArgs) {
        console.log(theArgs.length);
    }   
    fun1(); // 0
    fun1(5); // 1
    fun1(5, 6, 7); // 3

    function multiply( ...theArgs) {
        return theArgs.map((element) => element * element);
      }      
      const arr = multiply(2, 15, 25, 42);
      console.log(arr); // [4, 225, 625, 1764]