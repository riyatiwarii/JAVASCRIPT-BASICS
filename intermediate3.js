//  What is Prototype?
//  Prototype property is basically an object (also known as Prototype object) which allows other
//  objects to inherit all the properties and methods of the function constructor.

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
    myCart = new ShoppingCart("Maggie", 2, 24, 1)
    console.log(myCart)

    
    myCart.afterDiscount()
    myCart.finalItemDetail()