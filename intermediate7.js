//  The getters and setters methods.
//  The ‘get’ keyword is used to define a getter method to set the property’s value.
//  The ‘set’ keyword is used to define a setter method to allocate (set) the property’s value.

//  In Js, we use the getter method to return the object’s private value to the user without the user
//  directly accessing the variable itself. 

    class UsersProfile {
        constructor (name, contact){
            this.name = name;
            this.contact = contact;
        }

        userscourses = []

        courselist(coursename){
            return this.userscourses.push(coursename);
        }

        get getcourselist (){
            return this.userscourses
        }

    }

    riya = new UsersProfile("riya", 99999);
    riya.courselist("React Course")
    riya.courselist("Mongo DB")
    console.log(riya.getcourselist); //[ 'React Course', 'Mongo DB' ]

//  The Javascript Setter method is used to assign the value to a variable. We can use the Setter property
//  even to modify the values assigned to the variable.

    var myCar = {
        /* Properties */
        color: 'white',
        model: 'A1',
        /* Getter methods */
        getColor: function() {
        return this.color;
        },
        getMake: function() {
        return this.model;
        },
        /* Setter methods */
        setColor: function(newColor) {
        this.color = newColor;
        },
        setModel: function(newModel) {
        this.model = newModel;
        }
        };

    console.log(myCar.getColor())
    console.log(myCar.getMake())
    myCar.setColor('blue');
    myCar.setModel('A2');
    console.log(myCar.getColor())
    console.log(myCar.getMake())

//  Using private variable.

//  Here's a JavaScript class with private fields, note that unlike "public" members every private field must
//  be declared before access.
//  In order to achieve the privacy of class level fields one has to use # notation before the fields

    class Decide {
        #value;
        constructor() {
            this.#value = 100;
        }
        getdecision (price) {
            if (this.#value < price){
                console.log("Discount")
            }
            else {
                console.log("No Discount")
            }
        }
    }
    const num = new Decide();
    num.getdecision(20)

    class Circle {
        // private field
        #radius;
        constructor(value) {
        // You can access private field from constructor
        this.#radius = value;
        }
        get area() {
        return Math.PI * Math.pow(this.#radius, 2);
        }
    }

    const circle = new Circle(10);
    console.log(circle.area); // 314.1592653589793