/* ============================================
  Title: 	Day 3 Homework – JSON Objects 

Instructions: 

Create a new project folder with an HTML file.  Display an h1 tag and some content describing what will be displayed in the console.   

Add a style.css file in a separate “css” folder and apply some styling.  

Attach the provided animals.js file in a “js” folder.  You can rename this to “main.js” if you like. 

Create a function that will get the animal names of those animals who have the habit of sleeping.  Make sure you call the function! 

Create a function that will return the gender of the animals with 3 or more teams.  Make sure you call the function! 

Create an array of your hobbies in a constant.  Be sure to have at least 6 hobbies in your array.  

Use Array Destructuring to console log the first, third and sixth hobbies.   

Also try to console log these using the traditional method using the index value (ex. Hobbies[4]). 
  ============================================ */
const animals = [
  {
    id: 1,
    name: "Niki",
    species: "Dog",
    age: 7,
    gender: "Female",
    habits: ["Sleeping", "Eating", "Playing", "Cuddling"],
    teams: ["Happy", "Indoor", "Cuddly"],
  },
  {
    id: 2,
    name: "Tiger",
    species: "Cat",
    age: 15,
    gender: "Male",
    habits: ["Sleeping", "Eating", "Scratching"],
    teams: ["Indoor", "Hiding", "Outdoor"],
  },
  {
    id: 3,
    name: "Zephyr",
    species: "Rat",
    age: 3,
    gender: "Male",
    habits: ["Tricks", "Sleeping", "Playing", "Hiding"],
    teams: ["Indoor", "Cuddly"],
  },
  {
    id: 4,
    name: "London",
    species: "Dog",
    age: 1,
    gender: "Female",
    habits: ["Eating", "Playing", "Jumping", "Biting", "Running"],
    teams: ["Happy", "Hyper", "Outdoor"],
  },
  {
    id: 5,
    name: "Chewy",
    species: "Chinchilla",
    age: 15,
    gender: "Male",
    habits: ["Sleeping", "Eating", "Hiding"],
    teams: ["Indoor", "Shy"],
  },
  {
    id: 6,
    name: "Bop",
    species: "Rabbit",
    age: 10,
    gender: "Male",
    habits: ["Sleeping", "Eating", "Hiding", "Biting", "Hopping"],
    teams: ["Shy", "Kicks", "Outdoor"],
  },
  {
    id: 7,
    name: "Snipper",
    species: "Fox",
    age: 7,
    gender: "Male",
    habits: ["Hunting", "Eating", "Killing", "Hiding"],
    teams: ["Scary", "Outdoor"],
  },
];

/* ============================================
  Functions
  ============================================ */
