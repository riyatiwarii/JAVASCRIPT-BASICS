// For loop

for( var i = 0 ; i < 10 ; i++ ){
    console.log(i)
}
console.log("--")
console.log(i) // "Using let will throw a reference error because it is block-scoped. :)"

// While loop

var i = 1;
while (i < 16){
    console.log(`Walking down the lane ${ i } number of times.`)
    i++
}
console.log("--")
console.log(i)