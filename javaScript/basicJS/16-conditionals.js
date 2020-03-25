//The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
    // examples
    function checkEqual(a, b) {
        // if (a === b) {
        //     console.log("Equal");
        // }
        // else {
        //     console.log("Not Equal");
        // }
        // console.log( a === b ? "Equal" : "Not Equal");
    }
    
    checkEqual(1, 2);

// multiple conditionals
    // example
    function findGreaterOrEqual(a, b) {
        if (a === b) {
        return "a and b are equal";
        }
        else if (a > b) {
        return "a is greater";
        }
        else {
        return "b is greater";
        }
    }

    // with conditionals
    function findGreaterOrEqual(a, b) {
        return (a === b) ? "a and b are equal" 
          : (a > b) ? "a is greater" 
          : "b is greater";
      }

    // multiple conditionals
    function findGreaterOrEqual(a, b) {
        return (a === b) ? "a and b are equal" 
            : (a > b) ? "a is greater" 
            : "b is greater";
    }

    // lesson
    function checkSign(num) {
        // console.log((num > 0) ? "positive" 
        // : (num < 0) ? "negative" 
        // : "zero");
    }
    
    checkSign(10);


    
    