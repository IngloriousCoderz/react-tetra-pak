{
  // function declaration
  // HOISTING

  const result = sum(2, 3);

  function sum(a, b) {
    return a + b;
  }

  console.log(result);
  console.log(sum(2, 3));
}

{
  // function expression

  const sum = function (a, b) {
    return a + b;
  };

  console.log(sum(2, 3));
}

{
  // arrow functions

  // const sum = (a, b) => {
  //   return a + b;
  // };

  // + più concisa
  // + preserva il contesto
  // - non è soggetto a hoisting

  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}
