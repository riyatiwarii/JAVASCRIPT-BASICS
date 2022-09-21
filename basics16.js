//  Object.create()

//  The Object.create() method creates a new object, using an existing object as
//  the prototype of the newly created object.

    const myLibrary = {
        name: "",
        greet : function(){
            console.log(`Hi ${this.name}, Welcome to this digital library.`)
        },
        booksIssued : [],
        issuedStatus : function(){
            console.log(`Hi, the number of books you have issued is: ${this.booksIssued.length}`)
        },
        readingStatus : function(){
            console.log(`Hi, please enter the number of books you've read : ${this.booksRead}`)
        }
    }

    myBooks = Object.create(myLibrary,{
        booksIssued: {value: ["Book1", "Book2"]},
        booksRead: {value: 1}
    })

    myBooks.name = "Riya";
    myBooks.greet();          // Hi Riya, Welcome to this digital library.
    myBooks.issuedStatus();   // Hi, the number of books you have issued is: 2
    myBooks.readingStatus();  // Hi, please enter the number of books you've read : 1

