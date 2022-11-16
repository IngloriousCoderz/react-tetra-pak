console.log("Hello world!");
console.log('Hello "world"!');
console.log("Hello 'world'!");

// template literal: delimitato da `backtick`

// 1. multiline
console.log(`Hello 
world!`);
console.log("Hello \nworld!");

// 2. interpolazione di espressioni js
const who = "world";
console.log(`Hello ${who}!`);
console.log("Hello ${who}!");

const firstName = "Matteo Antony";
const lastName = "Mistretta";
const birthCity = "Roma";
const birthDate = "17/10/1982";

console.log(
  "Mi chiamo " +
    firstName +
    " " +
    lastName +
    ", nato a " +
    birthCity +
    " il " +
    birthDate
);
console.log(
  `Mi chiamo ${firstName} ${lastName}, nato a ${birthCity} il ${birthDate}`
);
