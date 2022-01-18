/*
primitive data types
-primitives
-objects

there are 7 primitives types inJS some of which are categorized into sub-types
*/

//1. Number
//1.11 types of Numbers
//Numbers include both whole number or inegers and floats or decimal point Numbers

let age = 25;
let average = 4.365;

//Infinite

let infinite = Infinity;

//1.2Arithmatic Operators
console.log(5 + 3); //addition
console.log(5 - 2); //subtraction
console.log(5 * 2); //multiplication
console.log(5 / 2); //division
console.log(5 % 2); // modules : dives two numbes and gives you the re

//2. String
//2.1 String Types

let firstName = "Jun";
let titleName = "mr";
let lastName = `Cho`; // also know as Template literal and this allow you to use "interpolation"

//2.2 String INterpolation
//Interpolation is the insertion of data into other data.
//when you think of Interpolation think of Insertion

let myName = `This is my name${firstName}`; // dynamic JavaScript ${} = Interpolation

let fullName = `This is my full name: ${titleName} ${firstName}`;

console.log(fullName);

//2.3 concatenation
// Concatenation is the act of linking data together is a series.
//When you think of Concatenation think of connection

alert("Hello my name is" + fullName + "!");

//Nasted functions in JS
// Inner function is called first, then the outer function
alert("Nice to meet you" + prompt("what is your name?"));

//2.4 Escaping Characters

console.log('This is how you igonore "double quotes"');
console.log("That's how youd inore sigle quotes");

//3. Boolean
//EIther true or false. used as a switch to turn settings on or off.

let teaching = true;
let onBreak = false;
//4.Null
//Anill is a totally empty and meaningless value

let nullable = null;

//5.undefined
//these are simplly undefined variables.

let nothing;
let explicitNothing = undefined;
//6.Symbol
//7.BigInt
//typeof operator
//this is not a datatype
console.log(typeof age); // number
console.log(typeof fullName); // string
console.log(typeof nullable);
console.log(typeof teaching);
console.log(typeof nothing);
