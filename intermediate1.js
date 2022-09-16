// Javascript and jquery (by Jon duckett).
// THIS keyword. :D It is easy, follow me below :D.
// For all regular function calls, THIS points to window object.

   console.log(this)
// This code execution gets me to the global object which is window object in this case.

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

// So, always take a note:
// For all regular function calls, THIS points to window object.