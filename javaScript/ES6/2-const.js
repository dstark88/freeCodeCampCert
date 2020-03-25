// declare a read-only var with const
 // examples
    "use strict";
    const FAV_PET = "Cats";
    FAV_PET = "Dogs"; // returns error

    // lesson
    function printManyTimes(str) {
        "use strict";
      
        // Only change code below this line
      
        const SENTENCE = str + " is cool!";
        for (let i = 0; i < str.length; i+=2) {
          console.log(SENTENCE);
        }
      
        // Only change code above this line
      
      }
      printManyTimes("freeCodeCamp");    