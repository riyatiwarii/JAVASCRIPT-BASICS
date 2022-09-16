    var store = ["T-shirt", "Jeans", "Top", "Skirt", "Shirt", "Pants"]
    console.log(store.pop()) //Pants
    console.log(store) //['T-shirt', 'Jeans', 'Top', 'Skirt', 'Shirt']

//  Shift can be used to remove which starts from the first element unlike
//  the last element in pop, however I think it is ineffective in terms of moving all other
//  elements from their space and allocating again. :)

    console.log(store.push("Pants")) //6
    console.log(store) //["T-shirt", "Jeans", "Top", "Skirt", "Shirt", "Pants"]
    console.log(store.length) //6
    console.log(store.indexOf("Shirt")) //4
    console.log(store.indexOf("Tiwariji;)")) //-1

//  See the result is -1 which may be helpful in case when you want to put a condition that
//  if the item is not in the list and result is -1 then add it to the list. :D Smart?
//  So, this -1 is super-super handy!!!

    console.log(Array.from("Riya")) //['R', 'i', 'y', 'a']

//  Arrow function in Array

    let numberlist = [2,3,6,7,8]
    let numIsEven = (element) => {
        return element%2 == 0
    }
    //console.log(numberlist.every(numIsEven)); //False
    
    console.log(numberlist.map(ele => ele%2 === 0)) //[true, false, true, false, true]
//  Difference but was missing this Map function :P.

//  Callback
    console.log(numberlist.every((elem) => elem%2 === 0)); //False
//  the keyword 'every' will be very useful later.

//  Slice and Splice function

    let fruit = [ "O", "R", "A", "N", "G", "E"]
    let res1 = fruit.slice(2);
    console.log(res1) //['A', 'N', 'G', 'E']
    let res2 = res1.splice(0, 0, 'A', 'R', 'R')
    console.log(res1) //['A', 'R', 'R', 'A', 'N', 'G', 'E']

//  Note, here when slice is used a new copy is created whereas in case of splice the 
//  already existing copy is altered. That's why res1 was used to check the change done.

//  let's try some fun stuff now.
    var collectionCase = {
        numberOfCases : 50,
        debtCollector : ["Svea"],
        invoiceVendor : [],
        payCollection : ["invoice1","invoice2","invoice3","invoice4","invoice5"],
        invoicesPaid  : function(canBeClosed) {
            this.invoicesPaid.push(canBeClosed);
        },
        priorityCollection : function(){
            return `${this.debtCollector} has ${this.payCollection.length} original invoices payment.`
        }
    };
    var invoicesPaid = true
    console.log(collectionCase.debtCollector) //['Svea']
    console.log(collectionCase["numberOfCases"]) //50
    console.table(collectionCase) 
    console.log(collectionCase.priorityCollection()) 
    console.log(collectionCase.priorityCollection()) 