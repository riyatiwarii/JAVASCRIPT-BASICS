// == versus ===

    '' == '0'           // false
    0 == ''             // true
    0 == '0'            // true

    false == 'false'    // false
    false == '0'        // true

    false == undefined  // false
    false == null       // false
    null == undefined   // true

    true == 1; //true
    "2" == 2;  //true
    true === 1; //false
    "2" === 2;  //false

// Some will say that === means equal and of the same type, but that's not really true.
// It actually means that both operands reference the same object, or in case of value types,
// have the same value.

    var a = [1,2,3];
    var b = [1,2,3];
    var c = a;

    var ab_eq = (a === b); // false (even though a and b are the same type)
    var ac_eq = (a === c); // true

    let word1 = "abc"
    let word2 = "abc"
    let word3 = word1
    console.log(word1 === word2) //true
    console.log(word1 === word3) //true