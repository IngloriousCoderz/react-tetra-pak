const numbers = [1, 2, 3, 1, 4, 3, 3, 5, 6];

console.log([...new Set(numbers)]);

console.log(JSON.stringify([...new Set([1, 2, 3])]));
