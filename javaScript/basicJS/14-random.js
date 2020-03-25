// Math.random
    function randomFraction() {

        // Only change code below this line
        var result = 0;
        if (result === 0) {
            result = Math.random();
        }
        // console.log(result);
    
        // Only change code above this line
    }
    randomFraction();


// Math.floor
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

    function randomWholeNum() {

    // Only change code below this line

    // console.log( Math.floor(Math.random() * 10 ));
    }
    randomWholeNum();

// Random range
    // Example
    function ourRandomRange(ourMin, ourMax) {

        return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
    }
    
    ourRandomRange(1, 9);
    
    // Only change code below this line
    
    function randomRange(myMin, myMax) {
    
        console.log("range: ", Math.floor(Math.random() * (myMax - myMin + 1)) + myMin); // Change this line
    
    }
    
    var myRandom = randomRange(5, 15);
    