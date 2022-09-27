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