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
        // console.log(product);
        return product;
    }
    
    multiplyAll([[1,2],[3,4],[5,6,7]]);

// do...while loops
    // examples
    var ourArray = [];
    var i = 0;
    do {
        ourArray.push(i);
        i++;
    } while (i < 5);

    // Setup
    var myArray = [];
    var i = 10;

    // Only change code below this line
    do {
        myArray.push(i);
        i++;
    } while (i < 5);

    // console.log(myArray);
    // console.log(i);

// Recursion vs loops
    // example loop
    var arr = [5, 4, 3, 2, 1, 0];
    var n = 6;

    function multiply(arr, n) {
        var product = 1;
        for (var i = 0; i < n; i++) {
            product *= arr[i];
        }
        // console.log(product);
        return product;
      }
    multiply(arr, n);
    // example recursion
    // multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
    // That means you can rewrite multiply in terms of itself and never need to use a loop.
    function multiply(arr, n) {
        if (n <= 0) {
        //   console.log("1: ", 1);  
          return 1;
        } else {
        //   console.log("mult: ", multiply(arr, n - 1) * arr[n - 1]);
          return multiply(arr, n - 1) * arr[n - 1];
        }
      }
    // The recursive version of multiply breaks down like this. In the base case, where n <= 0, 
    // it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is 
    // evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can 
    // return and the original multiply returns the answer.
    // Note: Recursive functions must have a base case when they return without calling the function 
    // again (in this example, when n <= 0), otherwise they can never finish executing.
    sum(arr, n);
    // setup
    function sum(arr, n) {
        // Only change code below this line
      if (n <= 0) {
          console.log("0: ", 0);
          return 0;
      } else {
          console.log("sum: ", sum(arr, n - 1) + arr[n-1]);
          return sum(arr, n - 1) + arr[n-1];
      }
        // Only change code above this line
      }
      