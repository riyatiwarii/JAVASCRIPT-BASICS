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
        console.log(song); //Boulevard of Broken Dreams
    }
    playlist();
    console.log(song);  //ReferenceError: song is not defined

    function playlist(){
        let song = "Boulevard of Broken Dreams"
        console.log(song); //Boulevard of Broken Dreams
    }
    playlist();
    console.log(song); //ReferenceError: song is not defined

// When you declare a variable in a function, that variable is only visible
// within the function.

// Global Scope

// The global scope is the outermost scope and the variables can be accessed from
// any inner(Local) scope.
    
let fruitname = "Litchi"
function fruits(){
 console.log(fruitname + " is a summer fruit.")
}
fruits()

//  Lexical Scope
//  When a function is defined inside another function, the inner function can access
//  the variables of the outer function. This operation is called Lexical scoping.

function sendMessage(){
     var msg = "Hello World";
     function callMessage(){
         console.log(msg);
     } 
     callMessage();      
}
sendMessage()

//  This is an example of lexical scoping, where lexical refers to the fact that lexical scoping uses
//  the location of the variable declaration within the source code to determine its availability,
//  thus giving access to variables declared in functions outer scope.