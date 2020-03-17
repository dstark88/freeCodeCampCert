// Example change name //
  var ourDog = {
      "name": "Camper",
      "legs": 4,
      "tails": 1,
      "friends": ["everything!"]
    };
    
    ourDog.name = "Happy Camper";
    
    // Setup
    var myDog = {
      "name": "Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"]
    };
    
    // Only change code below this line
    myDog.name = "Happy Coder"


// Example Add Bark //
  var ourDog = {
      "name": "Camper",
      "legs": 4,
      "tails": 1,
      "friends": ["everything!"]
    };
    
    ourDog.bark = "bow-wow";
    
    // Setup
    var myDog = {
      "name": "Happy Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"]
    };
    
    // Only change code below this line
    myDog["bark"] = "woof";

// Delete //
  // Example
  var ourDog = {
      "name": "Camper",
      "legs": 4,
      "tails": 1,
      "friends": ["everything!"],
      "bark": "bow-wow"
    };
    
    delete ourDog.bark;
    
    // Setup
    var myDog = {
      "name": "Happy Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"],
      "bark": "woof"
    };
    // Only change code below this line
    delete myDog.tails;

// check if object has properties //
  // Setup
  var myObj = {
      gift: "pony",
      pet: "kitten",
      bed: "sleigh"
    };
    
    function checkObj(checkProp) {
      // Only change code below this line
      if (myObj.hasOwnProperty(checkProp) === true) {
          console.log(myObj[checkProp]);
      } else {
          console.log("Not Found");
      }
      // Only change code above this line
    }
    checkObj("gift");


// Manipulating Complex Objects
  var myMusic = [
  {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
      "CD",
      "8T",
      "LP"
      ],
      "gold": true
  },
  // Add a record here
  {
      "artist": "Pink",
      "title": "Pink",
      "release_year": 2006,
      "formats": [
          "CD",
          "MP3"
      ],
      "gold": true
  }
  ];


// Assessing Nested Objects
// Example
  var ourStorage = {
      "desk": {
        "drawer": "stapler"
      },
      "cabinet": {
        "top drawer": { 
          "folder1": "a file",
          "folder2": "secrets"
        },
        "bottom drawer": "soda"
      }
    };
    ourStorage.cabinet["top drawer"].folder2;  // "secrets"
    ourStorage.desk.drawer; // "stapler"

  // Setup
  var myStorage = {
      "car": {
        "inside": {
          "glove box": "maps",
          "passenger seat": "crumbs"
        },
        "outside": {
          "trunk": "jack"
        }
      }
    };
    
    var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line 


// Accessing Nested Arrays
// Example
  var ourPets = [
      {
        animalType: "cat",
        names: [
          "Meowzer",
          "Fluffy",
          "Kit-Cat"
        ]
      },
      {
        animalType: "dog",
        names: [
          "Spot",
          "Bowser",
          "Frankie"
        ]
      }
    ];
    ourPets[0].names[1]; // "Fluffy"
    ourPets[1].names[0]; // "Spot"
  // Setup
  var myPlants = [
      {
        type: "flowers",
        list: [
          "rose",
          "tulip",
          "dandelion"
        ]
      },
      {
        type: "trees",
        list: [
          "fir",
          "pine",
          "birch"
        ]
      }
    ];
  
  // Only change code below this line
  
  var secondTree = myPlants[1].list[1]; // Change this line
  