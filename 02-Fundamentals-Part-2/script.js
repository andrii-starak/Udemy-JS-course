//     let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
      
// let firstName = 'Jonas';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

/*
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2**3);
//2**3 mean 2 to power of 3 = 2 * 2 * 2
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);


// Comparison operators 
console.log(ageJonas > ageSarah); // <, >, >=, <=
console.log(ageSarah >= 18); // <, >, >=, <=

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
*/

//                          LESSON 17 Strings & Template Literals

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job +'!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/
 
//                              LESSON 18. IF / ELSE    
/* називається  control structure - тому що ми вказуємор які частини коду будуть виконуватись а які ні.
if {

} else {

}
*/
/*
const age = 15;

if (age >= 18) {
    console.log ('Sarah can start driving license🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too youndg. Wait another ${yearsLeft} years :)`)
}
const birthYear = 2001;

let century;
if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);
*/

// //////////////////////////////LESSON20. Type Conversion and Coercion
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/

// ///////////////////////////////////21. Truthy and Falsy Values
/*

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/
// /////////////////////////////////////22. Equality Operators: == vs. ===
/*
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');
*/

////////////////////////////////////// 24. Logical Operators
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/
//////////////////////////////////////  26. The switch Statement
// let day = 'friday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

/*

let day = 'saturday';

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else
    console.log('Not a valid day!');
*/
//////////////////////////////////// 27.Statements and Expressions
/*

3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////29. The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/
'use strict';


/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

///////////////////////////////////////// Functions
/*

function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/
/*

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its 
capital city is ${capitalCity}.`;
        return description;
}
const sentence1 = describeCountry('Finland', 6, 'Helsinki');
const sentence2 = describeCountry('Ukraine', 45, 'Kyiv');
const sentence3 = describeCountry('Poland', 50, 'Warcaw');

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
*/

// Імена і значення які присвоюються/відбуваються в тілі функції доступні тільки там. поза функцією їх не можна використати, без return.
// Створюємо функцію наззиваючи її,  в дужках даємо їй параметри. в фігурних дужках (тіло функції) описуємо що буде відбуватись -даючи назву діям. після "повертаємо" - назву дій які виконувались в тілі функції -умовна заготовка дій (ці дії закріплюються для назви функції). можна багатоповторне використання функцій з різнимим параметрами.

//////////////////////////////////////// 34. Function Declarations vs. Expressions

/*

// Function declaration   ======================
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression    =======================
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// Function expression  (arrow)  =======================

const calcAge3 = birthYeah => 2037 - birthYeah; 
const age3 = calcAge3(1991);
console.log(age3);

*/
//////////////////////////////////////// 34. Function Declarations vs. Expressions - assignment
/*

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const china = percentageOfWorld1(1441);
const usa = percentageOfWorld1(329);
const brazil = percentageOfWorld1(212);

console.log(china);
console.log(usa);
console.log(brazil);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}
const india = percentageOfWorld2(1380);
const mexico = percentageOfWorld2(128);
const german = percentageOfWorld2(83);

console.log(india);
console.log(mexico);
console.log(german);
*/

///////////////////////////////////////// 35. Arrow functions
/*

const calcAge3 = birthYeah => 2037 - birthYeah; 
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

///////////////////////////////////////// 35. Arrow functions- assignment
/* 
const percentageOfWorld3 = population => (population / 7800) * 100;
const percentageOfIndians = percentageOfWorld3(1380);
console.log(percentageOfIndians);
*/
///////////////////////////////////////// 36. Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges); 

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
///////////////////////////////////////// 36. Functions Calling Other Functions  --HM
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = function (country, population) {

  const nationPercentage = percentageOfWorld1(population);
const sentence = `${country} has ${population} million people, 
 which is about ${nationPercentage} of the world.`
  return sentence;
}

console.log(describePopulation('china', 1441));
console.log(describePopulation('usa', 240));
console.log(describePopulation('idia', 1200));
 */

/////////////////////////////////////// //    37.  Reviewing Functions
/*

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////////// P.2 Codding Challenge #1 ---- моє
/*

const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
    return average;
}

const averageDolphinsScore = calcAverage(85, 54, 41);
const averageKoalasScore = calcAverage(23, 34, 27);
  

const checkWinner = function (avgDolphins, avgKoalas) {

  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  }
  else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  }
  else {
    console.log('No team wins');
  }
}
console.log(checkWinner(averageDolphinsScore,averageKoalasScore));
*/

///////////////////////////////////////////// P.2 Codding Challenge #1 ---- розвязок
/*

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/
/////////////////////////////////////////         39. Introduction to Arrays
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
// //////////////////////////////////////////////////////   HM
/*
const population = [1441, 1380, 329, 83];
console.log(Boolean(population.length===4));
// console.log(population);
// console.log(population.length);

const percentages = [percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
]
console.log(percentages);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
/////////////////////////////////////////          30.   Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

//////////////////////////////////////////          HM
/*

const neighbours = ['Poland', 'Romania', 'Slovakia', 'Hungary', 'Moldova'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('German')) {
  console.log('Probably not a central European country :D')
  }

neighbours.indexOf('Slovakia');
console.log(neighbours.indexOf('Slovakia'));

neighbours[2] = 'Belarus';
console.log(neighbours);

 neighbours[neighbours.indexOf('Romania')] = 'Republic of Sweden';
console.log(neighbours);

*/
/////////////////////////////////////////          Coding Challenge #2
/*

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    console.log(`You have to pay 15% of a bill ${bill}, which is ${tip}`)
  return tip;
  }
  else {
    const tip = bill * 0.2;
    console.log(`You have to pay 20% of a bill ${bill}, which is ${tip}`)
  return tip;
  }
}
// console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/
///////////////////////////////////////////   31. Introduction to Objects
/*

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
*/

///////////////////////////////////////////  HM -- 31. Introduction to Objects
/*

const myCountry {
  country: 'Ukraine',
  capital: 'Kyive',
  language: 'Ukranian',
  population: 40,
  neighbours: ['Poland', 'Belarus', 'Romania']
};
*/

///////////////////////////////////////// 32. Dot vs. Bracket Notation
/*

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
"Jonas has 3 friends, and his best friend is called Michael"

console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]);
*/

///////////////////////////////////////// 32. HM
// Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.
/*

const myCountry = {
  country: 'Ukraine',
  capital: 'Kyive',
  language: 'Ukranian',
  population: 40,
  neighbours: ['Poland', 'Belarus', 'Romania'],
};
console.log(`${myCountry.country} has ${myCountry.population} millions ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
console.log(`${myCountry.country} has ${myCountry.population+2} millions ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
console.log(`${myCountry.country} has ${myCountry['population']-2} millions ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

*/
///////////////////////////////////////// 33. Object Methods
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary:function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }

 };

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/
///////////////////////////////////////// 33. HM
/*

const myCountry = {
  country: 'Ukraine',
  capital: 'Kyive',
  language: 'ukranian',
  population: 40,
  neighbours: ['Poland', 'Belarus', 'Romania'],

  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/
