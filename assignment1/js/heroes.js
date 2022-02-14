const heroes = [
  {
    id: 1,
    name: "Spider-Man",
    secret_identity: "Peter Parker",
    age: 22,
    gender: "M",
    powers: [
      "Superhuman strength",
      "Spider-sense",
      "Sticks to walls",
      "Agility",
      "Healing Factor",
    ],
    teams: ["The Avengers", "Fantastic Four"],
    rogues: [
      "Green Goblin",
      "Dr. Octopus",
      "Venom",
      "Sandman",
      "Vulture",
      "Wilson Fisk",
    ],
  },
  {
    id: 2,
    name: "Daredevil",
    secret_identity: "Matt Murdock",
    age: 33,
    gender: "M",
    powers: ["Enhanced hearing", "Agility", "Echo Location"],
    teams: ["Spider-man", "Defenders", "The Chaste"],
    rogues: ["Punisher", "Wilson Fisk"],
  },
  {
    id: 3,
    name: "Ironman",
    secret_identity: "Anthony Stark",
    age: 35,
    gender: "M",
    powers: ["Intelligence"],
    teams: ["The Avengers"],
    rogues: ["Iron Monger", "The Mandarin", "Whiplash", "Justin Hammer"],
  },
  {
    id: 4,
    name: "Captain America",
    secret_identity: "Steve Rogers",
    age: 93,
    gender: "M",
    powers: ["Superhuman strength"],
    teams: ["The Avengers"],
    rogues: ["Redskull", "The Winter Soldier", "Batroc The Leaper"],
  },
  {
    id: 5,
    name: "Thor",
    secret_identity: "Donald Blake",
    age: 5035,
    gender: "M",
    powers: [
      "God-like strength",
      "Thunder and Lightning control",
      "The Thor Force",
    ],
    teams: ["The Avengers"],
    rogues: ["Loki", "The God Killer", "Malekith the Accursed", "Laufey"],
  },
  {
    id: 6,
    name: "The Pheonix",
    secret_identity: "Jean Grey",
    age: 34,
    gender: "F",
    powers: ["Telekinesis", "Telepathy", "The Pheonix Force"],
    teams: ["X-men"],
    rogues: ["Emma Frost", "The Brotherhood"],
  },
  {
    id: 7,
    name: "Hulk",
    secret_identity: "Bruce Banner",
    age: 36,
    gender: "M",
    powers: ["Superhuman strength"],
    teams: ["The Avengers"],
    rogues: ["Abomination", "Thunderbolt Ross"],
  },
  {
    id: 8,
    name: "Invisible Woman",
    secret_identity: "Sue Storm",
    age: 29,
    gender: "F",
    powers: ["Invisibility", "Force Fields"],
    teams: ["Fantastic Four"],
    rogues: ["Galactus", "Dr. Doom"],
  },
  {
    id: 9,
    name: "Captain Marvel",
    secret_identity: "Carol Danvers",
    age: 45,
    gender: "F",
    powers: ["Superhuman strength", "Energy Blasts", "Flight"],
    teams: ["The Avengers"],
    rogues: ["Yon-Rogg"],
  },
  {
    id: 10,
    name: "Wolverine",
    secret_identity: "Logan Howlett",
    age: 87,
    gender: "M",
    powers: [
      "Superhuman strength",
      "Adamantium-infused skeleton",
      "Agility",
      "Healing Factor",
    ],
    teams: ["X-men", "The Avengers"],
    rogues: ["Sabretooth"],
  },
  {
    id: 11,
    name: "Ms. Marvel",
    secret_identity: "Kamala Khan",
    age: 18,
    gender: "F",
    powers: ["Polymorphism", "Elasticity", "Healing factor"],
    teams: ["Secret Warriors"],
    rogues: ["Emma Frost", "The Brotherhood"],
  },
  {
    id: 12,
    name: "Rogue",
    secret_identity: "Anna Marie LeBeau",
    age: 26,
    gender: "F",
    powers: ["Power Absorption"],
    teams: ["X-men"],
    rogues: ["EmmaFrost", "The Brotherhood"],
  },
];

//Function 1
const getAvengerNames = (heroes) => {
  const teamAvangers = heroes.filter((hero) => {
    return hero.teams == "The Avengers";
  });
  const heroesName = teamAvangers.map((datum) => {
    return datum.name;
  });
  console.log(heroesName);
};
getAvengerNames(heroes);

// Function 2
const getKingpinFoes = (heroes) => {
  const findWilson = heroes.filter((hero) => {
    return hero.rogues.includes("Wilson Fisk") === true;
  });
  console.log(findWilson);
};
getKingpinFoes(heroes);
// Function 3
const getPopularVillains = (heroes) => {
  const threeRogues = heroes.filter((hero) => {
    return hero.rogues.length > 3;
  });
  const secretId = threeRogues.map((datum) => {
    return datum.secret_identity;
  });
  console.log(secretId);
};
getPopularVillains(heroes);
// Function 4
const getmemberCount = (heroes, team) => {
  const findHeroes = heroes.filter((hero) => {
    return hero.teams.includes(team) == true;
  });
  console.log(findHeroes.length);
};

getmemberCount(heroes, "The Avengers");

// Function 5
const getHeroesBasedOnAge = (heroes, ageRange) => {
  const heroAges = heroes.filter((hero) => {
    return hero.age > ageRange[0] && hero.age < ageRange[1];
  });
  const heroName = heroAges.map((datum) => {
    return datum.name;
  });
  console.log(heroName);
};
getHeroesBasedOnAge(heroes, [20, 33]);
// Function 6
const getHeroesBypower = (heroes, power) => {
  const heroPower = heroes.filter((hero) => {
    return hero.powers.includes(power) == true;
  });
  console.log(heroPower);
  const heroName = heroPower.map((datum) => {
    return datum.name;
  });
  console.log(heroName);
};
getHeroesBypower(heroes, "Superhuman strength");
