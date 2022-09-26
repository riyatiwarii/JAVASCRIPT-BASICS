//Increment and Decrement

//  Using prefix operator before operand allows the operation to execute and add/subtract 1 
//  prior to returning. This allows us to instantly log out and see the resulting value. :)

//  Using suffix operator, the value is returned before the operand is increased/decreased.
//  The next time the operator is used, we get the result of the +1, or -1.

    var myNum1 = 16;
    console.log(++myNum1); //17
    console.log(myNum1);   //17
    console.log(--myNum1); //16
    console.log(myNum1);   //16
    console.log(myNum1++); //16
    console.log(myNum1);   //17
    console.log(myNum1--); //17
    console.log(myNum1);   //16

    console.log((++myNum1) + (++myNum1));     //17 + 18 = 35
    console.log((++myNum1) - (--myNum1));     //17 - 16 = 1