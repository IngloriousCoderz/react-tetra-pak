const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i], i);
}

const person = {
  firstName: "Matteo Antony",
  lastName: "Mistretta",
  birthCity: "Roma",
  birthDate: "17/10/1982",
};

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}

for (const item of numbers) {
  console.log(item);
}

for (const index in numbers) {
  console.log(index, numbers[index]);
}

numbers.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// const squares = numbers.map((item) => {
//   return item * item;
// });
const square = (item) => item ** 2;
const isEven = (item) => item % 2 === 0;
const sum = (a, b) => {
  return a + b;
};

const squares = numbers.map(square);
console.log(squares, numbers);

{
  const evens = [];
  for (const item of numbers) {
    if (isEven(item)) {
      evens.push(item);
    }
  }
  console.log(evens);
}

const evens = numbers.filter(isEven);
console.log(evens, numbers);

{
  let firstEven = undefined;
  for (const item of numbers) {
    if (isEven(item)) {
      firstEven = item;
      break;
    }
  }
  console.log(firstEven);
}

{
  let firstEven = undefined;
  for (let i = 0; i < numbers.length && firstEven == null; i++) {
    const item = numbers[i];
    if (isEven(item)) {
      firstEven = item;
    }
  }
  console.log(firstEven);
}

console.log(numbers.find(isEven));
console.log(numbers.findIndex(isEven));

{
  let hasEven = false; // inizializzazione
  for (const item of numbers) {
    if (isEven(item)) {
      hasEven = true; // accumulo
    }
  }
  console.log(hasEven); // ritorno
}

console.log(numbers.some(isEven));

{
  let allEven = true;
  for (const item of numbers) {
    if (!isEven(item)) {
      allEven = false;
    }
  }
  console.log(allEven);
}

console.log(numbers.every(isEven));

{
  let sum = 0; // inizializzazione accumulatore
  for (const item of numbers) {
    sum += item; // accumulo
  }
  console.log(sum); // ritorno
}

{
  let sum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const item = numbers[i];
    sum += item;
  }
  console.log(sum);
}

// const sum = numbers.reduce((acc, item) => {
//   acc += item;
//   return acc;
// }, 0);
// const sum = numbers.reduce((acc, item) => {
//   acc += item;
//   return acc;
// });
const sumOfNumbers = numbers.reduce(sum);
console.log(sumOfNumbers);

// sum of square evens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  console.log(sumOfSquareEvens(numbers));

  function sumOfSquareEvens(numbers) {
    let sum = 0;

    for (const item of numbers) {
      if (isEven(item)) {
        sum += square(item);
      }
    }

    return sum;
  }
}

{
  console.log(sumOfSquareEvens(numbers));

  function sumOfSquareEvens(numbers) {
    // O(n)
    return numbers //
      .filter(isEven)
      .map(square)
      .reduce(sum);
  }
}

numbers.reduce((acc, item) => {
  if (isEven(item)) {
    acc.push(item);
    return acc;
  }
}, []);
