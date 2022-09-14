var passScore = 20
let myScore = 19
let joy = "Woah!";
if (myScore > 18){
    let joy;
    joy = "Yayyy!"
    console.log(joy)
}
console.log(passScore)
console.log(myScore) //let block scoped undefined error
console.log(joy)

//Arrow function

const sendMessage = (msg) => {
    console.log("Hi")
    return msg
}

let mymsg = sendMessage("It is fun to code in js. :D")
console.log(mymsg)