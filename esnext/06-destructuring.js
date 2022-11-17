const numbers = [1, 2, 3, 4, 5];
// const first = numbers[0];
// const second = numbers[1];
// const last = numbers[numbers.length - 1];

const [first, second, , , last] = numbers;

console.log(first, second, last);

const person = {
  firstName: "Matteo Antony",
  lastName: "Mistretta",
  birthCity: "Roma",
  birthDate: "17/10/1982",
};

// const firstName = person.firstName;
// const surname = person.lastName;

const { firstName, lastName: surname } = person;

console.log(firstName, surname);

function sum({ a, b }) {
  // const a = obj.a
  // const b = obj.b
  // const { a, b } = obj;
  return a + b;
}
