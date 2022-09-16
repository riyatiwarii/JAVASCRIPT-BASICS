var counter = document.querySelector(".counter")
var followers = document.querySelector(".followers")
var count = 0

setInterval( () => {
    if (count < 100){    
    count++;
    counter.innerText = count;}
}, 10)

setTimeout( () => {
    followers.innerText = "Countdown completed successfully."
}, 1000)