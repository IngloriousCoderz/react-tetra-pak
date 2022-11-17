const numbers = [1, 2, 3, 4, 5];

{
  // function sum(a, b) {
  //   return a + b;
  // }
  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
  console.log(sum(2, 7));

  console.log(numbers.map((item) => sum(2, item)));
}

{
  // function sum(a) {
  //   return function (b) {
  //     return a + b;
  //   };
  // }

  const sum = (a) => (b) => a + b;

  const sumTwo = sum(2);
  console.log(sumTwo(3));
  console.log(sumTwo(7));

  console.log(sum(2)(3));
  console.log(sum(2)(7));

  console.log(numbers.map(sumTwo));
}

// {
//   const handleEvent = id => (event) => {
//     console.log(event);
//   };

//   button.addEventListener("click", handleEvent(1));
// }
