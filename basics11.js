// break vs continue vs return

for (let i=1; i<11; i++){
    if (i==5){
        continue      
    } 
    console.log(i)
}

function myLoop(){ 
    for (let i=1; i<11; i++){
        if (i==5){
             break   
        } 
        console.log(i)
    }
    console.log("Loop ended")
 } 

myLoop();





