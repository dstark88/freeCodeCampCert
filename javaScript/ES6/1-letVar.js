// var example
    // var camper = 'James';
    // var camper = 'David';
    // console.log(camper);
    // logs 'David'

// let example
    // let camper = 'James';
    let camper = 'David'; // throws an error

// lesson
    let catName;
    let quote;
    function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
    // console.log(quote);
    }
    catTalk();

// scope var and let
    // var
    var numArray = [];
    for (var i = 0; i < 3; i++) {
    numArray.push(i);
    }
    // console.log(numArray);
    // returns [0, 1, 2]
    // console.log(i);
    // returns 3

    // let
    var printNumTwo;
    for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
        return i;
        };                                    
    }
    }
    // console.log(printNumTwo());
    // returns 3

    // let
    'use strict';
    // let printNumTwo;
    for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
        return i;
        };
    }
    }
    // console.log(printNumTwo());
    // returns 2
    // console.log(i);
    // returns "i is not defined"

    // lesson
    function checkScope() {
        'use strict';
        let i = 'function scope';
        if (true) {
            let i = 'block scope';
            console.log('Block scope i is: ', i);
        }
        console.log('Function scope i is: ', i);
        return i;
    }
    checkScope();
