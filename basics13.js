// Array.indexOf, Array.includes, Array.find

let myFavFoods = ["pizza", "pasta", "burger"]
console.log(myFavFoods.indexOf("pizza")) //0
console.log(myFavFoods.includes("burger")) //true

let myGang = [
    {name : "Preeti",
    favFruit : "Jamun"},
    {name : "Anjali",
    favFruit : "Banana"},
    {name : "Riya",
    favFruit : "Litchi"}
]

const favChoice = myGang.find( f =>{
    return f.favFruit == "Litchi"
})
console.log(favChoice) //{name: 'Riya', favFruit: 'Litchi'}