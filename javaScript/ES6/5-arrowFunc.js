// Use Arrow Functions to write concise anonymous functions
    // Example
    // const myFunc = function() {
    //     const myVar = "value";
    //     return myVar;
    //   }

    // ES6 Example
    // const myFunc = () => {
    //     const myVar = "value";
    //     return myVar;
    //   }

    // Example without return word
    // const myFunc = () => "value";

    // Lesson
    // var magic = function() {
    //     "use strict";
    //     return new Date();
    //   };
    // const magic = () => new Date();

// arrow functions w/ parameters
    // examples
    // doubles input value and returns it
    // const doubler = (item) => item * 2;
    
    //example
    // the same function, without the argument parentheses
    // const doubler = item => item * 2;

    // example
    // multiplies the first input value by the second and returns it
    // const multiplier = (item, multi) => item * multi;

    // lesson
    // var myConcat = function(arr1, arr2) {
    //     "use strict";
    //     return arr1.concat(arr2);
    // };
    // console.log(myConcat([1, 2], [3, 4, 5]));

    const myConcat = (arr1, arr2) => arr1 + "," + arr2;
    console.log(myConcat([1, 2], [3, 4, 5]));
      