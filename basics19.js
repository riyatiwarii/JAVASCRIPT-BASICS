// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("litchis", 450);

fruits.set("apples", 200);
fruits.get("apples"); //200
fruits.size; //3
fruits.delete("apples");
fruits.delete("apples");
fruits.has("apples"); //false

//                       Object	                              Map
// Iterable	        Not directly iterable	               Directly iterable
// Size	            Do not have a size property	           Have a size property
// Key Types	    Keys must be Strings (or Symbols)	   Keys can be any datatype
// Key Order	    Keys are not well ordered	           Keys are ordered by insertion
// Defaults	        Have default keys	                   Do not have default keys

// List all entries
// The forEach() method calls a function for each key/value pair in a Map:

fruits.forEach (function(value, key) {
  console.log(`${key} = ${value}`)
})

// List all entries
// The entries() method returns an iterator object with the [key, values] in a Map:

for (let key of fruits){
    console.log(`${key}`)
}
// bananas,300
// oranges,200
// litchis,450

// Clear all

fruits.clear();
console.log(fruits); //Map(0) {size: 0}

// Using Objects as Keys in Maps

var myName = { name: "riya" };

var userLastActive = new Map();

userLastActive.set(myName, new Date());
console.log(userLastActive)
console.log(userLastActive.get(myName));