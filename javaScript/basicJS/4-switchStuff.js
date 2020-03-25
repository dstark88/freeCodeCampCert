function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
      case "a":
        console.log("apple");
        break;
      case "b":
        console.log("bird");
        break;
      case "c":
        console.log("cat");
        break;
      default:
        console.log("stuff");
        break;
    }
  
    // Only change code above this line
    console.log("answer: ", answer);
  }
  
  // Change this value to test
  switchOfStuff(1);