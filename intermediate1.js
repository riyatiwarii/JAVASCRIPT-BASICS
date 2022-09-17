//  Javascript and jquery (by Jon duckett).
//  the THIS keyword refers to the object where it is called. 
//  To be more specific, it’s meant to help you target the current object.
//  For all regular function calls, THIS points to window object.

//  What happens if you reference this in the global context (i.e., not inside any function)?
    console.log(this)
//  This code execution gets me to the global object which is window object in this case.

    var myProfile = {
        myName : "Riya",
        myEmail : "xyz@yahoo.com",
        myLoginCount : 22,
        getCount : function() {
            console.log(this) //It will point towards the entire object.
            console.log(this.myLoginCount) //It will point towards object's myLogincount.
            function sayRiya () {
                console.log("Riya says Hi to you. :D")
            }
            sayRiya();//It will not do like above bcoz this is a regular function call. 
        }
    }
myProfile.getCount()//it doesn't get counted as regular function call but an object call.

//  So, always take a note:
//  For all regular function calls, THIS points to window object.

//  this Inside Function with Strict Modet

    'use strict';
    this.name = 'Riya';
    function greet() {

        // this refers to undefined
        console.log(this);
    }
    greet(); // undefined
//  When this is used in a function with strict mode, this is undefined.

    'use strict';
    this.name = 'Riya';
    function greet() {

        // this refers to undefined
        console.log(this.name);
    }
    greet.call(this); // undefined

//  When you pass this with the call() function, greet() is treated as the method of this object
//  (global object in this case).

//  Notice that I could have mentioned and tried examples with Arrow function as well.
//  Since, arrow functions don't have a this value of their own, we use regular function.
//  Later on, we will come across constructors as well.