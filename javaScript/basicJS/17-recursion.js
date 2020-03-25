// Recursion to create a countdown
    // example
    function countup(n) {
        if (n < 1) {
        return [];
        } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
        }
    }
    // console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
    
    // lesson
    // Only change code below this line
    function countdown(n){
        if (n < 1) {
            console.log("empty array: ", []);
        } else {
            const countArray = countdown(n - 1);
            countArray.unshift(n);
            // console.log("countArray: ", countArray);
        }
    }
    // Only change code above this line
    // console.log(countdown(5)); // [5, 4, 3, 2, 1]
    
    // recursion to create a range of numbers
    // lesson
    function rangeOfNumbers(startNum, endNum) {
        if (endNum - startNum === 0) {
            console.log([startNum]);
        } else {
            const arr = rangeOfNumbers(startNum, endNum - 1);
            arr.push(endNum);
            console.log("arr: ", arr);
        }
      };

    rangeOfNumbers(20, 45);
      