// For loop

for( var i = 0 ; i < 10 ; i++ ){
    console.log(i)
}
console.log("--")
console.log(i) // "Using let will throw a reference error because it is block-scoped. :)"

num = [1, 2, 3, 4, 5]
num.forEach(element => {
    console.log(element*element)
});


// While loop

var i = 1;
while (i < 16){
    console.log(`Walking down the lane ${ i } number of times.`)
    i++
}
console.log("--")
console.log(i)

// Do While loop

// This type of loop will always be executed at least once, even if the expression is false,
// because the code block is executed before the expression is evaluated.

// let number = 1
// do {
//     console.log(`The number is ${number}.`)
// }
// while (number < 6)