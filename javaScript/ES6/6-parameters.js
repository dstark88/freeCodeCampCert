// Default parameters for functions
    //examples
    // const greeting = (name = "Anonymous") => "Hello " + name;
    // console.log(greeting("John")); // Hello John
    // console.log(greeting()); // Hello Anonymous

    // lesson
    // Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
    // Only change code below this line
    const increment = (number, value = 1) => number + value;
    // Only change code above this line
    console.log(increment(2, ));

// rest parameters with a function parameters
    // examples
    function howMany(...args) {
        return "You have passed " + args.length + " arguments.";
      }
      console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
      console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

    // lesson