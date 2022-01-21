console.log("Hello Canada");

/*
 ***** Variables***
 */

//JavaScript (language ) vs ECMAScript (spec)
var instructorName = "Jun"; // Legacy
console.log(instructorName);

// We don't use var in ECMScript (ES6/ES7)
let school = "Seneca College"; // use let whenever you expect your variable to be re-assigned

schoolName = "usniversity of Toronto"; // reassinging the variable with a new value
console.log(schoolName);

const graduated = true;
console.log(graduated);

/*
 *** DataTypes (Primitives)
 */
const firstName = "Matthew"; // String- anything wrapped with in double or single quotes
let userAge = 37; //Integer - it is a numerical value
const isHere = true; // Boolean - Either true or false

/*
 *** DataTypes Objects**
 */

// Everything inside of Javasctipt is an object, withe exception of pringi
//All objects have properties.

/*
 *** Arrays***
 */

// They are used to hold sets of data
const fruits = ["apple", "banana", "Kiwi"]; //squre brcket- arrays have a length property
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits);
/*
// object Literals
*/
const student = {
  firstName: "Harry",
  lastName: "Potter",
  email: "harry@myseneca.ca",
  age: 25,
};
console.log(student);
console.log(student.email); //preferred method (dot notaion)

/*
 ****fuctions***
 */

//declare a function (define what the function does)

const greeting = function (name, age) {
  //Do JS things here
  const salutaion = "Hello," + name + "!" + age;
  console.log(salutaion);
};

greeting("Jun", 27);
greeting("mac", 67);
