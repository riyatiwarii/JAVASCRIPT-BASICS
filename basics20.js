//  Destructuring in javascript
//  The destructuring assignment syntax makes it possible to unpack values from arrays,
//  or properties from objects, into distinct variables.

//  Array

    const languages = ["Javascript", "Python", "R", "C", "C++", "Java"]
    const [first, second] = languages;
    console.log(first, second); //Javascript Python

//  Swapping element in array.(1)
    let [firstt, secondd, third] = languages;
    const temp = secondd;
    secondd = third;
    third = temp;
    console.log(secondd, third); //R Python

//  Swapping element in array.(2)
    let [fst, scnd, thrd, frth, fifth, sixth] = languages;
    [fst, sixth] = [sixth, fst];
    console.log(fst, sixth); //Java Javascript

//  Objects
    const learn = {
        frontend: "React",
        backend: "Node",
        database: "MongoDB",
    };
    
    const { frontend, backend } = learn;
    console.log(frontend, backend); //React, Node
    const { frontend: courseOne, backend: courseTwo } = learn;
    console.log(courseOne, courseTwo);  //React, Node
    const {languagee = "Javascript", database} = learn;
    console.log(languagee, database); //Javascript MongoDB

    const user = { 
        'first_name': 'Riya',
        'last_name': 'Tiwari'}
    const { first_name, last_name, full_name=`${first_name} ${last_name}` } = user;

    console.log(full_name); // Output, Riya Tiwari
