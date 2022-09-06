// Global Scope

// The global scope is the outermost scope and the variables can be accessed from
// any inner(Local) scope.
    
   var fruitname = "Litchi"
   function fruits(){
    console.log(fruitname + " is a summer fruit.")
   }
   fruits()

// Lexical Scope

   function sendMessage(){
        var msg = "Hello World";
        function callMessage(){
            console.log(msg);
        } 
        callMessage();      
   }
   sendMessage()
