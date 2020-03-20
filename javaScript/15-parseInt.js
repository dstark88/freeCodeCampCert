// parseInt Function
    function convertToInteger(str) {
        // console.log("str: ", parseInt(str));
    }

    convertToInteger("56");


// parseInt with radix
    // The function takes str and returns an integer instead of a string but “understanding” 
    // its a binary number instead of a decimal one thanks to the radix parameter (2).
    // example The function call looks like:

    parseInt(string, radix);

    // And here's an example:

    var a = parseInt("11", 2);

    // The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.
        function convertToInteger(str) {
            console.log(parseInt(str, 2));

        }

        convertToInteger("10011");