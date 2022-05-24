// alert("Hello World!");

// let js = 'amazing'
// --------------------------------------------------
/*

let country = "Ukraine";
const continent = "Europe";
let population = "40";

console.log(country, continent, population);
const isIsland = false;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
const language = "ukranian";

console.log(population / 2);
population++;
console.log(population);

let fin = 6;
console.log(population > fin);

const average = 33;

console.log(population < average);

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;

// console.log(country + " is in " + continent + ", and its " + population + " million people speak " + language);
console.log(description);
___________________________________________________________

// BMI = mass / height ** 2 = mass / (height * height); //(mass in kg and height in meter)

// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// -------------------------------------------------------------

let country = "Ukraine";
const continent = "Europe";
let population = "40";

console.log(country, continent, population);
const isIsland = false;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
const language = "ukranian";

console.log(population / 2);
population++;
console.log(population);

let fin = 6;
console.log(population > fin);

const average = 33;

console.log(population < average);

// let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;


// console.log(description);
// console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}!`);

if (population > 33) {
    console.log(`Ukranians population is above average'`)
}
else {
    console.log(`Ukranians population  is ${33-population} million below average'`)
};

// BMI = mass / height ** 2 = mass / (height * height); //(mass in kg and height in meter)

// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);
if (markBMI > johnBMI) {
console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
        }

let numNeighbours =Number( prompt('How many neighbour countries does your country have?'));

if (numNeighbours == 1) {
    console.log("Only 1 border!");
}
else if (numNeighbours > 1) {
    console.log("More than 1 border");
}
else { console.log("No borders") };

if (numNeighbours === 1) {
    console.log("Only 1 border!");
}
else if (numNeighbours > 1) {
    console.log("More than 1 border");
}
else { console.log("No borders") };
// -----------------------------------------------
// */
// const sDolphins1 = 96;
// const sDolphins2 = 108;
// const sDolphins3 = 89;
// const sKoalas1 = 88;
// const sKoalas2 = 91;
// const sKoalas3 = 110;

// bonus1
const sDolphins1 = 97;
const sDolphins2 = 112;
const sDolphins3 = 101;
const sKoalas1 = 109;
const sKoalas2 = 95;
const sKoalas3 = 123;

const averageDolphins = (sDolphins1 + sDolphins2 + sDolphins3) / 3;
const averageKoalas = (sKoalas1 + sKoalas2 + sKoalas3) / 3;

console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Dolphins are the winners!");
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log("Koalas are the winners!");
} else if (averageDolphins === averageKoalas && averageKoalas >= 100 && averageDolphins >= 100) {
    console.log("Its a draw");
} else console.log("Nobody wins");

