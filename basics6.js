// Window Object Methods

//alert
// alert("Hi, Are you still sure to move further despite this alert ;)?")

//confirm
// confirm("If you are eligible to apply for this profile, Click OK.")

//prompt
// prompt("Enter the train number.")

let pizzaLover = "Yes";
let momosLover = "No";
let ans = "Thank you for the answer. :)";
let answer = prompt("Do you want to eat Pizza? Enter Yes or No")
if (answer == pizzaLover){
    console.log("That's GREAT!")
} else if (answer == momosLover){
    console.log("Alright then!")
} else {
    console.log("It seems like someone is on diet.")
}
console.log(ans)
