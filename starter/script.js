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


const jonasArray = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teache",
  ["michael", "Peter", "Steven"],
];

const jonas = {
  firstname: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "teache",
  friends: ["michael", "Peter", "Steven"],
};

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "teache",
  friends: ["michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jinas."last" + nameKey);

const interestedIN = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age,job, and friends"
);

if (jonas[interestedIN]) {
  console.log(jonas[interestedIN]);
} else {
  console.log(
    "Wrong request! hoose between firstName, lastName, age,job, and friends "
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//Challenge
//"Jonas has 3 friends, and his best friends is called Michael"

console.log(
  `${jonas.firstName} has a ${jonas.friends.length} frinds and his best frind is ${jonas.friends[0]}`
);


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "teache",
  friends: ["michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   clacAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   clacAge: function () {
  //     // console.log(this);
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  sumaryMethos: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.sumaryMethos());

// console.log(jonas["clacAge"](1991));

//Challenge
// Jonas is a 46-year old theacher, and has a/no driver's license


// CHALLENGE
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
}



// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

//for loop ი გრძელდება მანამ სანამ კონდინცია არის TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}


const jonas = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teache",
  ["michael", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
// console.log(jonas[3]);

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //Filling types array
  //   types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

//continue ans break
console.log("----- ONLY STRINGS --------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("----- BRAKE WITH NUMBER --------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teache",
  ["michael", "Peter", "Steven"],
  true,
];
//0, 1, ...4
//4, 3, ...0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weights repetition ${rep} 🏋️`);
  }
}


// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   //   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
//   //   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is to end...");
}


//CHALLENGE

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

// const age = Number(prompt("შეიყვანე შენი ასაკი"));
// if (age > 18) {
//   console.log("შეგიძლია შეიჭრა საიტზე");
// } else {
//   console.log("დარჩი მოზარდებისთვის განკუთვნილ ნაწილში");
// }

// const calculate = function (num1, num2, operarot) {
//   switch (operarot) {
//     case "+":
//       return num1 + num2;
//       break;
//     case "-":
//       return num1 - num2;
//       break;
//     case "*":
//       return num1 * num2;
//       break;
//     case "/":
//       return num1 / num2;
//       break;
//     default:
//       return "არასწორი ოპერატორი";
//   }
// };

// // ტესტი:
// console.log(calculate(4, 2, "+")); // 6
// console.log(calculate(10, 5, "-")); // 5
// console.log(calculate(3, 3, "*")); // 9
// console.log(calculate(10, 2, "/")); // 5
// console.log(calculate(10, 2, "^")); // 'არასწორი ოპერატორი'

// const findMax = function (a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else if (c > a && c > b) {
//     return c;
//   }
// };

// console.log(findMax(4, 6, 7));
// console.log(findMax(9, 6, 7));
// console.log(findMax(4, 12, 7));
// console.log(findMax(25, 6, 7));
// console.log(findMax(25, 25, 7));

// const num1 = Number(prompt("შეიყავნეთ პირველი რიცხვი"));
// const oprat = prompt("შეიყვანეთ მოქმედების ნიშანი");
// const num2 = Number(prompt("შეიყავნეთ მეორე რიცხვი"));

// switch (oprat) {
//   case "+":
//     console.log(num1 + num2);
//     break;

//   case "-":
//     console.log(num1 - num2);
//     break;

//   case "*":
//     num1 * num2;
//     console.log(num1 * num2);
//     break;

//   case "/":
//     num1 / num2;
//     console.log(num1 / num2);
//     break;

//   default:
//     console.log("ოპერატორი არასწორია");
// }

// "use strict";

// const day = prompt("შეიყვანეთ კვირის დღე");

// switch (day) {
//   case "ორშაბათი":
//     console.log("დღეს ვწერ კოდს");
//     break;

//   case "სამშაბათი":
//     console.log("მივდივარ სავარჯიშოდ");
//     break;

//   case "ოთხშაბათი":
//   case "ხუთშაბათი":
//     console.log("დილით ვდგები სავარჯიშოდ");
//     break;

//   default:
//     console.log("მივდივარ სამსახურში");
// }

//

// const firstName = prompt("შეიყვანეთ თქვენი სახელი");
// const age = Number(prompt("შეიყვანეთ თქვენი ასაკი"));
// const mass = Number(prompt("შეიყვანეთ თქვენი წონა"));
// const height = Number(prompt("შეიყვანეთ თქვენი სიმაღლე"));

// const bmi = mass / (height * height);
// console.log(`თქვენი BMI არის ${bmi}`);

// const calcBMI = function (weights, height) {
//   return weights / (height * height);
// };
// calcBMI(mass, height);
// console.log(`თქვენი BMI არის: ${calcBMI(mass, height)}`);

// const recomend = function (bmi) {
//   if (bmi < 18.5) {
//     console.log(`${bmi} დაბალი წონა. რეკომენდირებულია:
//         	კვების გაუმჯობესება და მეტ კალორიულ საკვებზე ყურადღება. საჭიროა მასის მომატება და სპეციალისტის კონსულტაცია`);
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log(`${bmi} ნორმალური წონა, რეკომენდაცია:
//             კვების გაუმჯობესება და მეტ კალორიულ საკვებზე ყურადღება. საჭიროა მასის მომატება და სპეციალისტის კონსულტაცია`);
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log(`${bmi} ზედმეტი წონა, რეკომენდაცია:
//        	    მსუბუქი დიეტა, მეტაბოლიზმის დაჩქარება — დაიწყე მეტი მოძრაობა და აკონტროლე რაციონი.`);
//   } else if (bmi >= 30) {
//     console.log(`${bmi} სიმსუქნე (ობეზობა), რეკომენდაცია:
//        	    	საჭიროა სერიოზული ყურადღება. ივარჯიშე ყოველდღე, შეამცირე შაქარი და ცხიმი. მიმართე ექიმს ან დიეტოლოგს.`);
//   }
// };
// console.log(recomend(calcBMI(mass, height)));

// const activities = [
//   { day: "ორშაბათი", type: "სირბილი", duration: 30 },
//   { day: "სამშაბათი", type: "ხელის ვარჯიში", duration: 45 },
//   { day: "ოთხშაბათი", type: "მკერდის ვარჯიში", duration: 20 },
//   { day: "ხუთშაბათი", type: "ფეხის ვარჯიში", duration: 60 },
//   { day: "პარასკევი", type: "ზურგის ვარჯიში", duration: 15 },
// ];

// const printSummary = function (activities) {
//   let totalDuration = 0;
//   let maxDuration = 0;
//   let mostActiveDay = "";

//   for (let i = 0; i < activities.length; i++) {
//     const activity = activities[i];

//     totalDuration = totalDuration + activity.duration;

//     if (activity.duration > maxDuration) {
//       maxDuration = activity.duration;
//       mostActiveDay = activity.day;
//     }
//   }
//   const averageDuration = totalDuration / activities.length;

//   console.log(`ჯამური დრო: ${totalDuration} წთ`);
//   console.log(`საშუალო დრო: ${averageDuration.toFixed(1)} წთ`);
//   console.log(`ყველაზე აქტიური დღე: ${mostActiveDay} (${maxDuration} წთ)`);
// };

// console.log(printSummary(activities));
