/* tutto quello che mi pare
su più righe
*/
// questo è un commento su una sola linea
/**
 * JSDoc
 */
var a;
a = 2;

var a = 2;

function func() {
  var b = 3;
}

function func() {
  b = 4;
  var b = b;

  if () {
    var a = 2;
    let b = 2;
  }

  for () {
    var a = 2;
    let b = 2;
  }

  {
    var a = 2;
    let b = 2;
  }
}

// var:
// HOISTING
// globale a livello di blocco

var c = 5;

let a = 2;
const b = 3;
