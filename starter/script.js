"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (passTest) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if=23;


function logger() {
  console.log("MY name is Lasha");
}

//calling /running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);


//Function declaration

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const myAge1 = calcAge1(1987);
console.log(myAge1);

//Functiob expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const myAge2 = calcAge2(1987);

console.log(myAge1, myAge2);


//Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const myAge3 = calcAge3(1987);
console.log(myAge3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1987, "Lasha"));
console.log(yearsUntilRetirement(2013, "Tsotne"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePeaces = cutFruitPieces(apples);
  const orangePeaces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePeaces} peace of apple and ${orangePeaces} peace of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (year) {
  return 2037 - year;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement >= 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} is already retired`);
    return -1;
  }

  //   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1954, "Zurab"));
console.log(yearsUntilRetirement(1987, "Lasha"));

//CHALLENGE
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (scoreDolphins >= 2 * scoreKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (scoreDolphins * 2 < scoreKoalas) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log("No team wins...");
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtman", 2037 - 1991, "teache", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (year) {
  return 2037 - year;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


const friends = ["Michael", "Steven", "Peter"];

//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elemnts
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a frind called Peter");
}


const calcTip = function (bill) {
  return bill <= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));

const bills = [155, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(totals);
*/
