        
/*
let country = 'Ukraine';
let continent = 'Europe';
let population = '40 millions';
console.log(country);
console.log(continent);
console.log(population);

let isIsland;
isIsland = 'Ukraine';
isIsland = true;

let language;

console.log (typeof isIsland)
console.log (typeof population)
console.log(typeof country)
console.log(typeof language)

let language;

language = 'ukrainian';
const country = 'Ukraine';
const continent = 'Europe';
const isIsland = true;

console.log (typeof isIsland)
console.log (typeof population)
console.log(typeof country)
console.log(typeof language)
*/


/*
let uk = 40 / 2;
console.log(uk)

 uk = 40 / 2+1;
console.log(uk)

uk = 40;
let fin = 6;
console.log (uk > fin);
let average = 33;
console.log(uk < average);

let country = 'Ukraine';
let continent = 'Europe';
let population = '40';
let language = 'ukrainian';
const description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description);
*/

// BMI = mass / height ** 2 = mass / (height * height)

/*

const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const BMI_Mark1 = massMark1 / heightMark1 ** 2;
const BMI_John1 = massJohn1 / heightJohn1 ** 2;

console.log(BMI_Mark1);
console.log(BMI_John1);

const markHigherBMI = BMI_Mark1 > BMI_John1;
console.log(markHigherBMI)

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMI_Mark2 = massMark2 / heightMark2 ** 2;
const BMI_John2 = massJohn2 / heightJohn2 ** 2;

console.log(BMI_Mark2);
console.log(BMI_John2);

const markHigherBMI2 = BMI_Mark2 > BMI_John2;
console.log(markHigherBMI2)
    */

//                                               lesson 17. Strings and Template Literals
 /*
console.log(`Portugal is in Europe, and is 11 million people speak portuguese`);
*/


// lesson 18. Taking Decisions: if / else Statements 

/*
const population = 130;
if (33 > population) {
    console.log(`Portugal's population is above average.`)
} else console.log(`Portugal's population is ${population - 33} million below average.`);
*/


//                                              Coding Challenge #2 
/*
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const BMI_Mark1 = massMark1 / heightMark1 ** 2;
const BMI_John1 = massJohn1 / heightJohn1 ** 2;
console.log (BMI_Mark1, BMI_John1)


if (BMI_Mark1 > BMI_John1) {
    console.log(`Mark's BMI (${BMI_Mark1}) is higher than John's! (${BMI_John1})`)
} else {`John's BMI ${BMI_John1} is higher than Mark's!`};
*/

//                                      LESSON20. Type Conversion and Coercion
/*
console.log('9' - '5'); 4
console.log('19' - '13' + '17'); 617
console.log('19' - '13' + 17);  23
console.log('123' < 57);    false
console.log(5 + 6 + '4' + 9 - 4 - 2); 1143
*/
// ///////////////////////////////////22. Equality Operators: == vs. ===
/*
const numNeighbours = Number(prompt('How many neighbour contries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
}
else console.log('No borders');
*/

////////////////////////////////////// 24. Logical Operators
/*
const language = 'ukranian';
const population = 45;
const isIsland = false;
const country = 'Ukraine';

if (language === 'ukranian' && population<50 && !isIsland) {
    console.log(`You should live in ${country} :)`)
} else { console.log(`${country} does not meet your criteria :(`) }
*/



//////////////////////////////////////  Coding Challenge #3
/*

const teamDolphinsscore_1 = 96;
const teamDolphinsscore_2 = 108;
const teamDolphinsscore_3 = 89;
const teamKoalasscore_1 = 88;
const teamKoalasscore_2 = 91;
const teamKoalasscore_3 = 110;

let teamDolphins = ((teamDolphinsscore_1 + teamDolphinsscore_2 + teamDolphinsscore_3) / 3);
let teamKoalas = ((teamKoalasscore_1 + teamKoalasscore_2 + teamKoalasscore_3) / 3);

console.log((teamDolphinsscore_1 + teamDolphinsscore_2 + teamDolphinsscore_3) / 3);
console.log((teamKoalasscore_1 + teamKoalasscore_2 + teamKoalasscore_3) / 3);

if (teamDolphins > teamKoalas) {
    console.log('Congradulations for Dolphins team. They have won the chalange!')
} else if (teamDolphins < teamKoalas) {
    console.log('Congradulations for Koalas team. They have won the chalange!')
} else 
    console.log('Congradulations for both teams. Friendship has won this chalange!');

// /////////////// ///////////////       bonus 1
/*

const teamDolphinsscore_1 = 97;
const teamDolphinsscore_2 = 112;
const teamDolphinsscore_3 = 101;
const teamKoalasscore_1 = 109;
const teamKoalasscore_2 = 95;
const teamKoalasscore_3 = 123;

let teamDolphins = ((teamDolphinsscore_1 + teamDolphinsscore_2 + teamDolphinsscore_3) / 3);
let teamKoalas = ((teamKoalasscore_1 + teamKoalasscore_2 + teamKoalasscore_3) / 3);

console.log((teamDolphinsscore_1 + teamDolphinsscore_2 + teamDolphinsscore_3) / 3);
console.log((teamKoalasscore_1 + teamKoalasscore_2 + teamKoalasscore_3) / 3);

if (teamDolphins > teamKoalas && teamDolphins>= 100) {
    console.log('Congradulations for Dolphins team. They have won the chalange!')

} else if (teamDolphins > teamKoalas && !(teamDolphins >= 100)) {
    console.log('Its a draw!')

}else if (teamDolphins < teamKoalas && teamKoalas >= 100) {
    console.log('Congradulations for Koalas team. They have won the chalange!')

} else if (teamDolphins < teamKoalas && !(teamKoalas >= 100)) {
    console.log('Its a draw!')
}
 else 
    console.log("Its a fucking draw!");
*/
//////////////////////////////      bonus 2
/*

const teamDolphinsscore_1 = 97;
const teamDolphinsscore_2 = 112;
const teamDolphinsscore_3 = 101;
const teamKoalasscore_1 = 109;
const teamKoalasscore_2 = 95;
const teamKoalasscore_3 = 106;

let teamDolphins = ((teamDolphinsscore_1 + teamDolphinsscore_2 + teamDolphinsscore_3) / 3);
let teamKoalas = ((teamKoalasscore_1 + teamKoalasscore_2 + teamKoalasscore_3) / 3);

console.log((teamDolphinsscore_1 + teamDolphinsscore_2 + teamDolphinsscore_3) / 3);
console.log((teamKoalasscore_1 + teamKoalasscore_2 + teamKoalasscore_3) / 3);

if (teamDolphins > teamKoalas && teamDolphins >= 100) {
    console.log('Congradulations for Dolphins team. They have won the chalange!')

} else if (teamDolphins > teamKoalas && !(teamDolphins >= 100)) {
    console.log('Its a draw!')

} else if (teamDolphins < teamKoalas && teamKoalas >= 100) {
    console.log('Congradulations for Koalas team. They have won the chalange!')

} else if (teamDolphins < teamKoalas && !(teamKoalas >= 100)) {
    console.log('Its a draw!')
} else if (teamDolphins >= 100 && teamKoalas >= 100) {
    console.log('Its a draw!')
    
}
 else
    console.log(" no team wins the trophy");
*/

////////////////////////////////////26. The Conditional (Ternary) Operator
/*
let language = 'arabic';

switch (language) {
    case 'chinese' || 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place')
        break;
     case 'hindi':
        console.log('Number 4')
        break;
     case 'arabic':
        console.log('5th most spoken language')
        break;
     default:
        console.log('Great language too :D')
}
*/


////////////////////////////////////29. The Conditional (Ternary) Operator
/*
const population = 45;
population > 33 ? console.log("Portugal's population is above average") : console.log( "Portugal's population is below average")

// відповіді
console.log( 
    `${country}'s population is ${population > 33 ? 'above' :  
    'below'} average`, 
  ); 
*/

///////////////////////////////// Coding Challenge #3
/*
let tip;
let bill=27;
let total;
let cash;
cash = bill >= 50 && bill <= 300 ? '0.15' : '0.2';
tip = bill * cash;
total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
    
let tip;
let bill=40;
let total;
let cash;
cash = bill >= 50 && bill <= 300 ? '0.15' : '0.2';
tip = bill * cash;
total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
    
let tip;
let bill=430;
let total;
let cash;
cash = bill >= 50 && bill <= 300 ? '0.15' : '0.2';
tip = bill * cash;
total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
    
*/