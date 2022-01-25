/*
ES6 vs ES5:
ES5 is an abbreviation of ECMAScript 5 and also known as ECMAScript 2009
The sixth edition of the ECMAScript standard is ES6 or ECMAScript 6.
It is also known as ECMAScript 2015
ES6 is a major enhancement in the JavaScript language that allows us to write programs for complex applications.
Since 2016, the new specs are called ECMAScript 2016, ECMAScript 2017, etc.
*/

/*
SCOPE:
"Block of code" means inside of curly braces {}
When we declare a variable outside {}, it has global scope. The entire program can see it and has access to it.
When a variable is declared inside {}, it has local or block scope.
You can have variables with the same name, one global, one local, but this can cause problems.
*/

/*
LET AND CONST:
A new feature of ES6 is the new variable declaration "let" and "const"
Prior to ES6, "var" was used for variarble declaration. There are issues with var though

 LET:
"let" is preferred for variable declaration
let is block scoped, meaning a variable declared using let is only available for use within that block
let can be updated but not re-declared
let can be updated to a new value, similar to the previous var, within its scope
However, a let variable cannot be re-declared within its scope
ex. let name = "Jaya"; let name = "Diya"; // This will return an error.
ex. let name = "Jaya", name = "Diya"; // This is okay and name is updated to the value "Diya"
 CONST:
"const" declarations are block scoped, similar to let, and can only be accessed within the block they were declared
const CANNOT be updated or re-declared
variables declared with const remain the same within its scope
These 2 examples both throw an error:
ex. const name = "Jaya"; name = "Diya"; // Error
ex. const name = "Jaya"; const name = "Diya"; // Error
Every const variable is initialized with a value at the time of declaration
*/

// FUNCTIONS

// DECLARE A FUNCTION
function helloWorld() {
  console.log("Hello World");
}

//Call a Function: a function will not work until you call it
helloWorld();

//Declare a function with a parameter : pass argument(s) into the brackets
// The function uses these arguments to run some calculations
function calcAreaOfCircle(radius) {
  //Everythin is Js is an object, and Js provides you with useful built in objects
  //Math Object
  let area = Math.PI * radius * radius;
  console.log(area);
  area = area.toFixed(2); // tofFiexed rounds the area to 3 decimal places and converts it to a sting.
  console.log(area);
}
//Call the function by passing an argument into import PropTypes from 'prop-types'
calcAreaOfCircle(6);

// You can alternatively store a function in to a variable using LET or columnRuleStyle:
//RETRUN : use this to return values from a function into the main code
// A return statement is always the last line of the funciton
const helloPerson = function (name) {
  return "hello" + name;
};
// Call the function
console.log(helloPerson("Jun"));

//We can us functions to change styling of an element
changeToPurple = () => {
  document.getElementById("my-heading").style.color = "purple";
};

// ANONTYMOUS FUnction - afunction without a name// The above function tis also an annoymous function
// you don't always need to CALl a function
// we can "Trigger" a function by tying it to an event such an onclick event

document.getElementById("my-button").onclick = function () {
  changeToPurple();
  console.log("Button cliked");
};

// ARROW Funtion - MODERN ES6
// The syntax is a bit shorter since it omits the function keyword
// preferred way of creating a function
// Arrow function are always anonymous
//uses the fat arrow => equals sign followed by tight angle bracket (greate than)

/*
        function()becomes ()=>
        function(x) becomes (x)=>{} or x =>
        function(x,y) becomes (x,y) =>
*/

// This function is declared with 2 parameters: a and backfaceVisibility:

function mathExaples() {}
const mathExamples = (a, b) => {
  console.log(a * b); // +,-
  console.log(a % b); // divideds two numbers and returns remainder
  const quotient = 10 / 3;
  const roundedQuotient = Math.round(quotient); // Math ,round returns the value of a number rounded to the nearest interger.
  console.log(roundedQuotient);
  console.log(Math.PI);
};
//calll the function by passing in 2 arguments
mathExamples(3, 5);

/*
COntrol Flow:
control flow is the order in which the compter exectues statements in a script
Code runs in order from the first line in the file to the las line,
unless the computer uns into things that change the control flow.
conditionals and lops are suh things that change the control flow.

*/

// COnditional
// these are  ways can have yourt code make decisions under different scenarios
const bouncer = (age) => {
  // The condition will be, if the age is greater than or equal to 21, let the user enter
  // if not greate tahn or equal to 21, kick them outline:
  //use the if statement
  if (age >= 21) {
    //when the condition in the if statement() is true, this bloc of code will run.
    //otherwise, it will be skipped
    //example of return values in functions (just like how math.round() ruturns value)
    return "Welcome,please enjoy!";
  }
  return "Sorry you're going to have to leave";
};

// Call the function
console.log(bouncer(20));

const friendlyGreeting = (userName) => {
  if (userName == "Martin") {
    return "I miss you";
  } else if (userName === "jun") {
    return "ssup?";
  } else {
    return "oops";
  }
};

console.log(friendlyGreeting("cal"));

//Switch Statement
const friendlyGreetingVersion2 = (userName) => {
  switch (userName) {
    case "Matt":
      return "suup mat";
      break;

    case "John":
      return "hey nice to meet you";
      break;
    case "Adhika":
      return "ssup";
      break;
    default:
      return "How areyou";
  }
};

console.log(friendlyGreetingVersion2("Mhatt"));

//ARRAYS, LOOPS AND ITERATORS

let fruits = ["apple", "banana", "banana", "mango"];
console.log(fruits[2]); // Retunrs Pear because arryas start at zero oindex in js
console.log(fruits);
console.log(fruits.length); //use dot notation to pull out info about length propery. returns 4, a number

// Loops And Iteration: there are Do loops, Do... while loops, and while loops
// A simple for loop example:

// first statement: let i =0 sets an initial value to check
// second statement i<fruits.legth set a condition that determines if we run the ccode within the loop
// third statement: i++ is a change in the initial value that will occur after each time the loops runs

for (let i = 0; i < fruits.length; i++) {
  console.log(i);
  console.log(fruits[i]);
  console.log(`At postion ${i}, the fruit is ${fruits[i]}`);
}

// OBJECTS, LOOPS AND ITERATORS
// Properties are put in a comma-separated list of key (or name):value paris
// objects have properties and methods
//methods are functions that work on objects
// Objects declared with const cannot be updated, but the properties of the object can be updated
// Meaning we cannot redefine myPet with different properties further down in the columnRuleWidth:

// Object literal syntax
const myPet = {
  name: "Niki",
  species: "Dog",
  age: 7,
  color: "red",
  skills: ["snuggling", "barking", "sleeping"],
  speak: function () {
    //Template string method to create a string with variables, using Back Ticks:
    return `${this.name} says: I am ${this.age} years old and I enjoy ${this.skills[1]}`;
  },
};

//When a function is called as a method of an object, it's "this"is set to the object the mmethod is called onabort.apply
//"this" refers to the object
console.log(myPet.name);
// Wecan use dot notation to pull out specific information about the object.
myPet.name = "DOm";
console.log(myPet.name);
console.log(myPet.species);
console.log(myPet.skills);
console.log(myPet.skills[0]);
myPet.skills[0] = "playing";
console.log(myPet);

//Mini exercise:
//1.Template String
//Mittens is a red dog who loves sleeping
const profile = `${myPet.name} is a ${myPet.color}who loves `;

//2.concatenation
const profile2 =
  myPet.name + "is a" + myPet.color + myPet.species + "who loves";

console.log(profile);

// ARRAY OF JASON OBJECTS
// CTHE VARIABLE STUENTS SOTRES MULTIPLE objectPosition:
//Like any array, you can access the values, in this case the individual objects,
// by referring to an indexx number, starting from 0.

const students = [
  {
    firstName: "Jaya",
    lastName: "Sigot",
    email: "js@google.com",
  },
  { firstName: "Simon", lastName: "chit", email: "kc@google.com" },
  { firstName: "park", lastName: "jong", email: "pj@google.com" },
  { firstName: "Bruce", lastName: "Alves", email: "BA@google.com" },
  { firstName: "Ranjit", lastName: "Sign", email: "rs@google.com" },
];

const getFirstNameOfStudents = (data) => {
  //ForLoop through the data
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
  console.log(data[3]);
  for (i = 0; i < data.length; i++) {
    // Runcode multiple times until the loop condition is false(middle statement)
    console.log(data[i].firstName);
  }
};

getFirstNameOfStudents(students);

const getEmails = (data) => {
  console.log(data);
  //The paramete data is an array
  //Instead of a for loops, we are going to use an iterator.
  //All arrays are objects in JS
  //Allobjects have properties/methods
  // an interator is an array method

  const emails = data.map(function (datum) {
    //The function called inside of the map iterator function, will run for each tiem in the array
    return datum.email;
  });
  console.log(emails);
};

const getLastName = (data) => {
  console.log(data);
  //The paramete data is an array
  //Instead of a for loops, we are going to use an iterator.
  //All arrays are objects in JS
  //Allobjects have properties/methods
  // an interator is an array method

  const lastName = data.map((datum) => {
    //The function called inside of the map iterator function, will run for each tiem in the array
    return datum.lastName;
  });
  console.log(lastNames);
};

getEmails(students);

const greetSimon = (data) => {
  //Find the student Simonfrom the data
  const simon = data.find((datum) => {
    //Search based off of a return criteria
    //Ex Give me the object that has the firstName property Simon
    return datum.firstName === "Simon";
  });
  const greeting = `Hello ${simon.firstName} ${simon.lastName}!`;
  console.log(greeting);
};
greetSimon(students);

const greetStudent = (data, studentFirstName) => {
  //Find the student from data
  const student = data.find((datum) => {
    return (datum.lastName = studentFirstName);
  });
  const greeting =
    "Hello " + student.firstName + " how are you" + student.email;
  console.log(greeting);
};

//Call funtion
greetStudent(students, "John");
