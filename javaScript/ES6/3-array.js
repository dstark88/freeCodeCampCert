// Mutate an Array Declared with const
    // examples
    "use strict";
    // const s = [5, 6, 7];
    // s = [1, 2, 3]; // throws error, trying to assign a const
    // s[2] = 45; // works just as it would with an array declared with var or let
    // console.log(s); // returns [5, 6, 45]   

    // lesson
    const s = [5, 7, 2];
    function editInPlace() {
    'use strict';
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
        s[0] = 2;
        s[1] = 5;
        s[2] = 7;
        console.log("s: ", s);
    // Only change code above this line
    }
    editInPlace();
