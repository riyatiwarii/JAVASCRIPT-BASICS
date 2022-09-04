//  As we know that redeclaring a JavaScript variable with var is allowed anywhere
//  in a program. However, With let, redeclaring a variable in the same block is
//  NOT allowed:
    // var x = 2;   // Allowed
    // let x = 3;   // Not allowed

    // {
    // let x = 2;   // Allowed
    // let x = 3;   // Not allowed
    // }

    // {
    // let x = 2;   // Allowed
    // var x = 3;   // Not allowed
    // }

//  Redeclaring a variable with let, in another block, IS allowed:
    let x = 2;   // Allowed

    {
    let x = 3;   // Allowed
    }

    {
    let x = 4;    // Allowed
    }
    console.log(x)

//  Let Hoisting
//  Variables defined with var are hoisted to the top and can be initialized at any time.
//  Meaning: You can use the variable before it is declared.

    carName = "Verna";
    var carName;   
    console.log(carName);

//  Variables defined with let are also hoisted to the top of the block,
//  but not initialized.
//  Meaning: Using a let variable before it is declared will result in a ReferenceError.

    // carName = "Saab";
    // let carName;   
    // console.log(carName);
    // Only initialize after the declaration using let.

    let fruitName;
    fruitName = "Strawberry";   
    console.log(fruitName);
    