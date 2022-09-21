//  Closures in JS
//  https://medium.com/swlh/understanding-closures-in-javascript-11da0f5fb1d5
//  https://www.youtube.com/watch?v=t1nFAMws5FI&ab_channel=AkshaySaini
//  https://www.youtube.com/watch?v=T5QvlWCVLvg&ab_channel=procademy
//  Closure: Function bundled with its lexical environment is known as a closure.
//  Whenever function is returned, even if its vanished in execution context but it still remembers the
//  reference it was pointing to. It's not just that function alone it returns but the entire closure
//  and that's where it becomes interesting.

//  Examples practice

    function outer(name){
        return function(){
            console.log(`Outer function : ${name}`)
            return function(){
                console.log(`Inner function: ${name}`)
            }
        }
    }

    // let myname = outer('Riya')
    // console.log(myname()())
//  Outer function : Riya
//  Inner function: Riya 

    let x = 10;
    function number1(){
        function number2(){
            y = 20;
            function multiply(){
                console.log(x*y)
            }
            return multiply();
        }
        return number2();
    }
    // number1();
//  200

    function loop(){
            console.log("The loop starts here.")
            let count = 0
            for (i=0; i<5; i++){
                count ++
                console.log(count)
            }
            console.log("The loop ends here.")
        }
    // loop();

    function loop(){
        console.log("The loop begins.")
        let count = 0
        for (i=0; i<5; i++){
            setTimeout(function(){
                count ++
                console.log(count)
            }, i*1000)
        }  
    }
    // loop();

//  In case of var.

    function loop(){
        console.log("The loop begins.")
        var count = 0
        for (i=0; i<5; i++){
            function close(count){
                setTimeout(function(){
                    count ++
                    console.log(count)
                }, i*1000)
            }
            close(i);
        }  
    }
    // loop();

//  Data privacy using Closures

    function counter(){
        let count = 0;
        return function incrementCounter(){
            count++;
            console.log(count);
        }
    }

    let counter1 = counter()
    // counter1(); //1
    // counter1(); //2

// Function constructor using Closues

    function Counter(){
        let counting = 0;
        this.incrementCounter1 = function(){
            counting++;
            console.log(counting)
        }
        this.decrementCounter1 = function(){
            counting--;
            console.log(counting)
    }
}

    let counterr = new Counter();
    // counterr.incrementCounter1();   //1
    // counterr.incrementCounter1();   //2
    // counterr.decrementCounter1();   //1
    
    





    


