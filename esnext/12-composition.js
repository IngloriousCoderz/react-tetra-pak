// 'hello world' -> 'HELLO WORLD' -> 'HELLO WORLD!' -> '<p>HELLO WORLD!</p>'

{
  const shout = (str) => str.toUpperCase();
  console.log(shout("hello world"));

  const punctuate = (str, punctuation) => str + punctuation;
  console.log(punctuate("hello world", "!"));

  const wrapInHtml = (str, tag) => `<${tag}>${str}</${tag}>`;
  console.log(wrapInHtml("hello world", "p"));

  console.log(
    //
    wrapInHtml(
      //
      punctuate(
        //
        shout("hello world"),
        "!"
      ),
      "p"
    )
  );
}

const shout = (str) => str.toUpperCase();
// const punctuate = (str) => (punctuation) => str + punctuation;
// const punctuateHelloWorld = punctuate('hello world')
// punctuateHelloWorld('!')
// punctuateHelloWorld('?')

const punctuate = (punctuation) => (str) => str + punctuation;
const exclamate = punctuate("!");
console.log(exclamate("hello world"));
console.log(exclamate("ho capito"));
const ask = punctuate("?");
console.log(ask("ho capito"));

const wrapInHtml = (tag) => (str) => `<${tag}>${str}</${tag}>`;
const wrapInP = wrapInHtml("p");
console.log(wrapInP("hello world"));
console.log(wrapInP("ho capito"));

console.log(
  //
  wrapInP(
    //
    exclamate(
      //
      shout("hello world")
    )
  )
);

{
  let result = "hello world";
  result = shout(result);
  result = exclamate(result);
  result = wrapInP(result);
  console.log(result);
}

const fns = [shout, exclamate, wrapInP];
let result = "hello world"; // inizializzazione
for (const fn of fns) {
  result = fn(result); // accumulo
}
console.log(result); // ritorno

console.log(fns.reduce((acc, fn) => fn(acc), "hello world"));

// const pipe = (fns, x) => fns.reduce((acc, fn) => fn(acc), x);

// console.log(pipe([shout, exclamate, wrapInP], "hello world"));

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const createTitle = pipe(shout, exclamate, wrapInP);

console.log(createTitle("hello world"));

// (f o g)(x) = f(g(x))

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);
