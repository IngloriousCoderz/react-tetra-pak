//               0  1  2  3  4
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers.length);
console.log(numbers[numbers.length - 1]);
numbers[2] = 7;
console.log(numbers);

numbers.push(6);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.splice(2, 2, 8, 9, 10);
console.log(numbers);
// numbers = []

const person = {
  firstName: "Matteo Antony",
  lastName: "Mistretta",
  birthCity: "Rome",
  birthDate: "17/10/1982",
};

// square bracket notation
console.log(person["firstName"]);
// dot notation
console.log(person.firstName);

person.firstName = "Enrico";
console.log(person);

person.sex = "Male";
console.log(person);

delete person.sex;
console.log(person);

person["last-name"] = "Vellani";
// person.last-name = "Vellani";
console.log(person);

const propertyName = "lastName";
console.log(person[propertyName]);
