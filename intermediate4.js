//  Better code with object chain - Prototype Chaining
//  1. Prototype chaining
//  2. Prototype chaining of Objects
//  3. Prototype chaining of Array

//  Every object which we create in javascript is an instance of an object constructor.

    var riya = {
        name : 'Riya',
        dateOfBirth : "16th of May",
        hobby : 'Reading books'    
    }

    var riya = new Object() 

//  Behind the scenes: The JsEngine uses the object constructor to create an object.

//  Since riya is an instance of an object constructor, it will also have access to the methods
//  present in the prototype of this object constructor.
//  That means it will have access to the methods and porperties which is attached to the 
//  prototype of this object constructor. Refer below:

    Object
//    V
    Prototype
    hasOwnProperty()
    isPrototypeOf()
    constructor()
    toString()

//  & this is the prototype chain for objects created using object literals ({name:value} pairs).
//  Now if I enter riya on the console apart from the created properties, this riya object also
//  has a __proto__ property and this prototype property is actually the prototype of an object
//  constructor. And to prove this, refer the below code on the console.

    riya.__proto__ === Object.prototype // It will return true.
    riya.hasOwnProperty('name') //true

//  We are able to access this hasOwnProperty which is present in this prototype property.

//  Let's create a function constructor

var ShoppingCart = function(itemName, itemQuantity, itemPrice, discount){
    this.itemName = itemName;
    this.itemQuantity = itemQuantity;
    this.itemPrice = itemPrice;
    this.totalPrice = this.itemQuantity * this.itemPrice;
    this.discount = discount
    this.afterDiscount = function(){
        var discountedPrice = (this.totalPrice)-(this.discount)
        console.log(`The price afer discount is: ${discountedPrice}`)
    }
}
    ShoppingCart.prototype.finalItemDetail = function(){
        console.log(`The purchased quantity of ${this.itemName} is ${this.itemQuantity}.`)
    }
    ShoppingCart()

    ShoppingCart.prototype.typeOfItems = 'Eateries'

//  Here, we have created finalItemDetail method and typeOfItems property to the prototype of
//  this ShoppingCart function constructor. 

    myCart = new ShoppingCart("Maggie", 2, 24, 1)

//  myCart object has been creating using this ShoppingCart constructor. 
//  And since myCart is an instance of this function constructor.
//  It will have access to the methods and properties present in the Prototype of this
//  ShoppingCart constructor.
//  Now this ShoppingCart is also an object and we learnt that every object which is create in
//  Js is an instance of object object. So, this person is also an instance of Object object and
//  since this is an instance of an object, it will have access to the methods and properties
//  present in the Prototype of this Object constructor.

//  Chaining: myCart > ShoppingCart > Object 

//  Because of this, this myCart will also have the methods present in the prototype of this 
//  Object. Below code proves this.

    myCart.__proto__ === ShoppingCart.prototype  //true
    myCart.__proto__.__proto__ === Object.prototype  //true
    myCart.hasOwnProperty('itemName')  //true
    myCart.hasOwnProperty('typeOfItems') //false
//  Fale because this myCart inheriting this typeOfItems property from ShoppingCart prototype.  

    var beverages = ["black coffee", "greentea", "lemonade", "mojito", "milktea"];
    beverages.push("milkcoffee");
//  console.log(beverages)
//  console.log(beverages.pushhh("oreoshake")

//  Every array which we create in JS is an instance of an array constructor.
//  beverages is an instance of an array constructor and it will have all the access to the 
//  methods and properties present inside the prototype of this array constructor.
//  we have already used many methods like push, pop, shift, unshift, slice and many such.
//  pushhh is not method inside the prototype of array onstructor and therefore, 
//  this beverages instance is not able to inherit this method from the prototype of constructor.
