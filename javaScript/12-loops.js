// while Loop
    // example
    var ourArray = [];
    var i = 0;
    while(i < 5) {
        ourArray.push(i);
        i++;
    }

    // Setup
    var myArray = [];

    // Only change code below this line
    var i = 5;
    while(i >= 0) {
        myArray.push(i);
        i--;
        // console.log(myArray);
    }

// for loop
    // Example
    var ourArray = [];

    for (var i = 0; i < 5; i++) {
        ourArray.push(i);
    }

    // Setup
    var myArray = [];

    // Only change code below this line
    for (var i = 1; i <= 5; i++) {
        myArray.push(i);
        // console.log(myArray);
    }

// loop odd numbers    
    // Example
    var ourArray = [];

    for (var i = 0; i < 10; i += 2) {
        ourArray.push(i);
    }

    // Setup
    var myArray = [];

    // Only change code below this line
    for (var i = 1; i <= 10; i += 2) {
        myArray.push(i);
        // console.log(myArray);
    }

// count backwards
    // Example
    var ourArray = [];

    for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
    }

    // Setup
    var myArray = [];

    // Only change code below this line
    for (var i = 9; i > 0; i -=2 ) {
        myArray.push(i);
        // console.log(myArray);
      }

// iterate through an array with for loop
    // Example
    var ourArr = [ 9, 10, 11, 12];
    var ourTotal = 0;

    for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
    }

    // Setup
    var myArr = [ 2, 3, 4, 5, 6];
    total = 0;

    // Only change code below this line
    var total = 0;

    for (var i = 0; i < myArr.length; i++) {
        total += myArr[i];
        // console.log(total);
    }

// Nesting loops
    // Example
    var arr = [
        [1,2], [3,4], [5,6]
    ];
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
        // console.log(arr[i][j]);
        }
    }

    //setup
    function multiplyAll(arr) {
        var product = 1;
        // Only change code below this line
        for (var i = 0; i < arr.length; i++) {
            // console.log("i: ", arr[i]);

            for (var j = 0; j < arr[i].length; j++) {
                // console.log("j: ", arr[i][j]);
                product *= arr[i][j];
            }
        }
        // Only change code above this line
        console.log(product);
        return product;
    }
    
    multiplyAll([[1,2],[3,4],[5,6,7]]);