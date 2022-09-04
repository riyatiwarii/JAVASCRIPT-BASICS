// https://www.geeksforgeeks.org/javascript-hoisting/

//  A const variable cannot be reassigned:

    // const PIvalue = 3.141592653589793;
    // PIvalue = 3.14;      // This will give an error
    // PIvalue = PI + 10;   // This will also give an error

//  JavaScript const variables must be assigned a value when they are declared:

    const PI = 3.14159265359;  // This is correct.

    // const PIvalue;
    // PIvalue = 3.14159265359;  // This will give error since it requires initialization.  

//  When to use JavaScript const?
//  As a general rule, always declare a variable with const unless you know that
//  the value will change.

//  Use const when you declare:

//  A new Array
//  A new Object
//  A new Function
//  A new RegExp

//  Constant Objects and Arrays
//  The keyword const is a little misleading.

//  It does not define a constant value. It defines a constant reference to a value.

//  Because of this you can NOT:

//  Reassign a constant value
//  Reassign a constant array
//  Reassign a constant object
//  But you CAN:
//  Change the elements of constant array
//  Change the properties of constant object

//  Declaring a variable with const is similar to let when it comes to Block Scope.
//  The x declared in the block, in this example, is not the same as the x declared
//  outside the block:

    const num = 10;
    console.log(num)
    // Here x is 10

    {
    const num = 2;
    console.log(num)
    // Here x is 2
    }
    console.log(num)
    // Here x is 10

//  Variables defined with const are also hoisted to the top, but not initialized.
//  Meaning: Using a const variable before it is declared will result in a
//  referenceError.

    var x = 10;
    
    function test()
    {
        var x = 20;
        console.log(x);
    }
    
    test();

    // alert (carName);
    // const carName = "Volvo"; // reference error

//  Note: There’s a difference between ReferenceError and undefined error.
//  An undefined error occurs when we have a variable that is either not defined
//  or explicitly defined as type undefined. ReferenceError is thrown when trying
//  to access a previously undeclared variable.
//  However, in below case of var, the interpretor sees it differently. 

    console.log(testingerror);      // Here it will show the error undefined instead of
    var testingerror = "Checking."  // reference.
                                      

    var testingerror = "Checking."  // In order to avoid this pitfall, we can make sure
    console.log(testingerror);      // to declare and assign the variable at the same time,
                                    // before using it. 
    
    
     