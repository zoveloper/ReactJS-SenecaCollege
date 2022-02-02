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
const globalVar = "Hi Students";

const helloWorld = () => {
  // When you create a function you crea a local scope
  const localVar = "Hello WOrld!";
  console.log(globalVar);
  return localVar;
};

const hw = () => {
  //with arrow functionsm if the only thing that you're going to do, is return a single line of code tyou can skip the return statement
  return "hello World with Arrow function";
};

const hw2 = () => "Hellow world with no curly braces";

// 2. Sprea operator (excellent for array transformation)
// the spread operator is simply 3 dots...

let fruits = ["Apple", "peach", "pears"];
let vegetables = ["Mushroom", " Cucumber", " Peppers"];
let fruitsAndVeggies = ["Mangos", "Onions", "Tomatoes", fruits, vegetables];

let mixedFoods = ["Mangoes", "Onions", "Tomatoes", ...fruits, ...vegetables];

// 5. Destructuring Arrays:
//We can use desturing assignment to pull data our of arrays and objectsm and ten assign them to variables

// Let's create an array of courses
let courses = ["HTML", "CSS", "Javscript", "React", "PHP", "Pyhton", "Angular"];

//Traditional way of pulling data our of the array
courses[1];

//Using Array Destucturing

let [first, , third, , , , seventh] = [
  "HTML",
  "CSS",
  "Javscript",
  "React",
  "PHP",
  "Pyhton",
  "Angular",
];

//6. classes
class Car {}
