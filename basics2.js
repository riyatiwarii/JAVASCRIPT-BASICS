//  Re-Declaring JavaScript Variable

//  If you re-declare a JavaScript variable declared with var, it will not lose its value.

    var carName = "BMW";
    var carName;
    console.log(carName);

//  However, You cannot re-declare a variable declared with let or const.
//  This below code will not work:

    let bikeName = "Hayabusa";
    let bikeName;
    console.log(bikeName);

//  SyntaxError: 'bikeName' has already been declared
//  It will result that "Cannot redeclare block-scoped variable 'bikeName'."

//  Local Scope: Block Scope & Functional Scope

//  Block Scope
//  let and const are block scoped.

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

//  Keyword var is not block scoped.
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

//  Function Scope

    function playlist(){
        var song = "Boulevard of Broken Dreams"
        console.log(song);
    }
    playlist();
    console.log(song);

// When you declare a variable in a function, that variable is only visible
// within the function.