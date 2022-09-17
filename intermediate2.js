
//  let’s start with just a regular function.

    // function myProfile (myFirstName, myEmailId, myRepositories){
    //     var store = {}
    //     store.myFirstName = myFirstName;
    //     store.myEmailId = myEmailId;
    //     store.myRepositories = myRepositories;
    //     return store
    // }
    // myProfile()
    // create an object
    // console.log(myProfile("Riya","riya@yahoo.com", 2))

//  Constructor function //Note: A good practice to use uppercase in constructor creation.
    function MyProfile (myFirstName, myEmailId, myRepositories){
        this.myFirstName = myFirstName;
        this.myEmailId = myEmailId;
        this.myRepositories = myRepositories;
    }
    MyProfile()

    //Creating objects
    
    console.log(MyProfile("xyz","xyz@yahoo.com", 2)) // undefined
    // Ofcourse we know that it results in "undefined" because we have already learnt that,
    // For all regular function calls, THIS points to the window object which is what we witness here.:)

    console.log(new MyProfile("xyz","xyz@yahoo.com", 2)) 
    // new keyword will take care of "this" while invoking this regular function




    

