//  Re-Declaring JavaScript Variables
//  If you re-declare a JavaScript variable declared with var, it will not lose its value.
//  The variable carName will still have the value "Volvo" after the execution of these
//  statements:
    var carName = "BMW";
    var carName;
    console.log(carName);

//  However, You cannot re-declare a variable declared with let or const.
//  This below code will not work:

//  let bikeName = "Hayabusa";
//  let bikeName;
//  console.log(bikeName);
//// SyntaxError: 'bikeName' has already been declared
//  It will result that "Cannot redeclare block-scoped variable 'bikeName'."

//  JavaScript Dollar Sign $
    let $ = "Hello World";
    let $$$ = 2;
    let $myMoney = 5;
    console.log($ , $$$ + $myMoney)
//  Using the dollar sign is not very common in JavaScript, but professional programmers 
//  often use it as an alias for the main function in a JavaScript library.
//  In the JavaScript library jQuery, for instance, the main function $ is used to 
//  select HTML elements. In jQuery $("p"); means "select all p elements".

//  Block Scope
//  JavaScript keywords: let and const provide Block Scope in JavaScript. Variables
//  declared inside a { } block cannot be accessed from outside the block:
    {
        let x = 2;
    }
    // x can NOT be used here

//  Variables declared with the var keyword can NOT have block scope.
//  Variables declared inside a { } block can be accessed from outside the block.
    {
        var x = 2;
    }
    // x CAN be used here

//  Redeclaring a variable using the var keyword can impose problems.
//  Redeclaring a variable inside a block will also redeclare the variable
//  outside the block:
    var first = 1;
    console.log(first);
    // Here first is 1.

    {
        var first = 2;
        console.log(first);
    }
    // Here first is 2.

    console.log(first);
    // Here first is 2.

//  Redeclaring a variable using the let keyword can solve this problem.
//  Reedeclaring a variable inside a block will not redeclare the variable
//  outside the block:
    let num = 1;
    console.log(num);
    // Here first is 1.

    {
        let num = 2;
        console.log(num);
    }
    // Here first is 2.

    console.log(num);
    // Here first is 1.
