function sum(a = 0, b = 0) {
  if (a === null) {
    a = 4;
  }
  // if (b === undefined) {
  //   b = 0;
  // }

  return a + b;
}

console.log(sum(2, 3));
console.log(sum(null, 3));
console.log(sum(undefined, 3));
console.log(sum(2, undefined));
console.log(sum(2));
