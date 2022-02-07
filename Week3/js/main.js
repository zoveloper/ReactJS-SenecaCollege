/*

1. FUNCTIONS CONTINUED

Function Assignment:
Why do we wrap our code in functions? It's good practice to always do this.
In JavaScript, we have scopes. You have the Global scope and the Local scope.
The moment the JavaScript runs, we are running in the global scope.

Try to avoid globally scoped things
If multiple developers work on a project this can cause problems
Third party libraries may also happen to use the same variable causing problems

*/

const globalVar = "Hi Students!";

const helloWorld = (sharedParamValue) => {
  // When you create a function, you create a local scope
  const localVar = "Hello World!";
  console.log(globalVar); // If you're in local scope, you can access globally scoped variables
  return localVar;
};

console.log(helloWorld());

// console.log(localVar); // This will return an error as localVar is not defined in the global scope!
// localVar is only defined in the local scope of our helloWorld function

// RETURN STATEMENT:
const hw = () => {
  // with arrow functions, if the only thing that you're going to do, is return a single line of code you can skip the return statement
  // Remove the curly braces, because that is only needed for multi-line functions
  return "Hello World with Arrow Function!";
};

// Single line arrow functions assume that you are returning the code on the right side of the =>
// parameters => return value
const hw2 = () => "Hello World without a return statement";

console.log(hw());
console.log(hw2());

// 2. SPREAD OPERATOR (Excellent for Array Transformation)
// The spread operator is simply 3 dots ...

let fruits = ["Apples", "Bananas", "Pears"];
let vegetables = ["Mushrooms", "Cucumbers", "Peppers"];
let fruitsAndVeggies = ["Mangoes", "Onions", "Tomatoes", fruits, vegetables];
console.log(fruitsAndVeggies); // 2 nested arrays in the console (which we don't want)

// To avoid this, we can use the spread operator
// We simply add the 3 dots in front of the fruits and in front of the vegetables
// This will spread the arrays and push them into the mixedFruits array
// This will allow us to access each individual food value from the original fruits and vegetables arrays

let mixedFoods = ["Mangoes", "Onions", "Tomatoes", ...fruits, ...vegetables];
console.log(mixedFoods);

// 3. MAP
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Create simple array
const myNumbers = [3, 6, 9, 12];

// Now let's CREATE A NEW ARRAY and pass a function to map
// "map" function maps every element in a given array into something else
// It executes a method on every element in a given array
// It takes the element of the array as input in an arrow function
// You can use any arbitrary letter to represent this input (we'll use a)

const myMappedNumbers = myNumbers.map((a) => a * 2);
console.log(myNumbers);
console.log(myMappedNumbers); // outputs 6, 12, 18, 24

/*

This is great when you want to make a copy of an existing array or
performs some operation on every element of an existing array and store it into a new array
without altering the original array.
The map function is extremely useful when handling states in React. It allows us to make 
a copy of the state and alter it without changing our original state

*/

// 4. METHODS FOR SEARCHING A STRING (startsWith, endsWith, includes, filter)

// There are some built-in JavaScript methods that allow us to search strings

// Let's search the following string:
const shampoo = "Pantene";

// A. The startsWith() method determines whether a string begins with the characters of a specified string.
// This method returns true if the string begins with the characters, and false if not.
// The startsWith() method is case sensitive

console.log(shampoo.startsWith("Pa")); // outputs true
// startsWith method returns true if our variable starts with "Pa".

console.log(shampoo.startsWith("pa")); // outputs false

// B. The endsWith() method determines whether a string ends with the characters of a specified string.
// This method returns true if the string ends with the characters, and false if not.
// The endsWith() method is case sensitive

console.log(shampoo.endsWith("ene")); // returns true
console.log(shampoo.endsWith("en")); // returns false

// C. The includes() method determines whether a string ends contains the characters of a specified string.
// This method returns true if the string contains the characters, and false if not.
// The includes() method is case sensitive.

const myWorld = "Welcome to my world";
console.log(myWorld.includes("my world")); // outputs true
console.log(myWorld.includes("my World")); // outputs false

// D. The filter() method creates an array filled with all array elements that pass a test (provided as a function)
// They must pass a given criteria and condition
// filter() does not execute the function for array elements without values.
// filter() does not chagne the original array.

const shoppingList = ["toothpaste", "soap", "shampoo", "conditioner"];
const result = shoppingList.filter((listItem) => listItem.length > 7);
console.log(result);
// The filter() method returns a new array with the elements that pass the test.
// If no elements pass the test, an empty array will be returned.

// **** CLASS PRACTICE:   Practice 1 example of each string search method ****

// 5. DESTRUCTURING ARRAYS:
// We can use destructuring assignment to pull data out of arrays and objects, and then assign them to variables
// It's great for assigning a variable name to a position in an array

// Let's create an array of courses
let courses = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Python",
  "Angular",
];

// Traditional way of pulling data out of the array
console.log(courses[3]); // Outputs React

// Using Array Destructuring

let [first, , third, , , , seven] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Python",
  "Angular",
];

// first, third and seventh are new variable names
console.log(first); // Outputs HTML
console.log(third); // note that third outputs JavaScript this time because we are referencing index item = 2
console.log(seven); // outputs Angular

/*

6. CLASSES

When you create a class, you create an "object" that can be used in an object-oriented programming (OOP) way
Classes are great for code reusability
Classes are used to represent concepts in our programs, such as a car
These concepts are written in our code in 2 parts: the state, and functions to represent the behaviours
ES6 Classes allow us to define the state and behaviour of objects that will represent these concepts

Let's create a class called "Car" (note the use of a Capital in the first letter of the class name)
Inside this class, we use a Constructor function, which sets up any properties that this class will use
This will serve as a blueprint for a reusable object that we can use again and again

*/

class Car {
  // Objects in JavaScript can take parameters through the constructor method
  // The constructor method will run whenever an object is "instantiated"

  constructor(color, wheels) {
    // Run code that you need to "construct the instance"
    // You can pass parameters from a class instatiation into the properties of the class
    // Use the keyword "this"
    // "this" is a self-reference to the object
    this.carColor = color;
    this.carWheels = wheels;
    console.log(this);
  }

  // You can have custom Methods
  // Traditional way of writing a method:
  brakeApplied() {
    // You can't directly access properties
    // You always have to use a self-reference to get the property you need
    console.log("The " + this.carColor + " car is stopping.");
  }

  // Modern ES6 way of writing a method:
  speedingUp = () => {
    // Let's use a Template String for this method
    console.log(
      `The ${this.carColor} car, with ${this.carWheels} wheels, is speeding up!`
    );
  };
}

// Let's create a new instance of the Car class
// In order to use a class object, you have to instantiate it
// Create an instance of a Car

const defaultCarInstance = new Car();
// As you can see in the console, a Car object has been instantiated, however all the properties are undefined

// Let's create a new instance of a Blue car with 4 wheels
const blueCarInstance = new Car("Blue", 4);

// Let's create another instance of a Red car with 2 wheels
const redCarInstance = new Car("Red", 2);

// In order to get a property from a class in JavaScript, you need to get it via the instance
console.log(blueCarInstance.carColor);
console.log(redCarInstance.carWheels);

// We can call the brakeApplied method on the blueCarInstance
blueCarInstance.brakeApplied();

// Similarly, we can call the speedingUp method on the redCarInstance
redCarInstance.speedingUp();

// 7. INHERITANCE

// Let's create a new class named Vehicle
// This will be our PARENT class

class Vehicle {
  constructor(driver, wheels) {
    // I'm setting the constructor property nae as the parameter name
    // It is very common for properties and constructor parameters to utilize the same name
    this.driver = driver;
    this.wheels = wheels;
  }

  // We can set a property inside the class
  size = "medium";

  accelerate = () => {
    // Use Template string
    console.log(`The ${this.size} sized vehicle is accelerating.`);
  };

  brake = () => {
    console.log("The " + this.size + " sized vehicle is braking");
  };
}

// Let's create an instance of Vehicle, which will create a new Vehicle object
const vehicleInstance = new Vehicle("Jenny");
console.log(vehicleInstance);
vehicleInstance.brake();

// Create a CHILD class of the Vehicle Class
// We need to state that it EXTENDS the parent class
class Sedan extends Vehicle {
  // We need to pass whatever properties we want to inherit from the parent to the child's constructor, as well as
  // any new properties that we will define in the child class

  constructor(driver, wheels, color, model) {
    // The Super Method takes values that are defined in the parent's constructor.
    // We need to run this in order for the values to be instantiated.
    super(driver, wheels);

    // We must define any new child class properties and methods
    this.color = color;
    this.model = model;
  }

  hasTraditionalTrunk = true; // We can add new properties
  hasRoof = true; // We can add new properties
  numberOfWheels = 5;
  wheels = 5;
  size = "large";
}

// Let's use Inheritance to create a new instance of the Sedan class
// We will thus create a new Sedan Object

const sedanInstance = new Sedan("Jaya", 4, "White", "Camry");
console.log(sedanInstance);

// Let's call the parent method "accelerate" on the mySedan object
sedanInstance.accelerate();

// Let's create a new child class of Vehicle
// Once again we need to state that it "extends" the parent class
class Bike extends Vehicle {
  constructor(driver, wheels) {
    super(driver, wheels);
  }
  hasHatchback = true;
  hasRoof = false;
  // We can change the value of a property that was initially assigned in the parent class within the child class
  size = "small";
}

// Let's use inheritance to create a new instance of the Bike class
const bikeInstance = new Bike("Jack", 2);
console.log(bikeInstance);
bikeInstance.brake();
