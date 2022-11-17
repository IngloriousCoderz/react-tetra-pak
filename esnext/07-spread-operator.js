const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// numbers.push(6)
const newNumbers = [0, ...numbers, 6];
console.log(newNumbers, numbers);

const clone = [...numbers];
console.log(clone, numbers, clone !== numbers);

console.log([...numbers, ...numbers]);

// deep copy
// JSON.parse(JSON.stringify(obj))

const person = {
  firstName: "Matteo Antony",
  lastName: "Mistretta",
  birthCity: "Roma",
  birthDate: "17/10/1982",
};

const { firstName, lastName, ...props } = person;
console.log(firstName, lastName, props);

console.log({ ...person, sex: "Male" });

console.log({ ...person });

console.log({ ...person, ...person });

// rest parameters

function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));
