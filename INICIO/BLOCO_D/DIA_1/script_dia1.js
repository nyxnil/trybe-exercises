// Operadores aritiméticos

let x = 5;
let y = 4;
let z = 10;
// +, -, *, /, **, % 
// 1
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Estrutura de Condicionais 
// 2
if (x > y) {
    console.log(x);
  } else {
    console.log(y);
  }
// 3
  if (x > y && x > z) {
    console.log(x);
  } else if (y > x && y > z){
    console.log(y);
  } else {
    console.log(z);
  }

// 4
let valor;
valor = 20
if (valor > 0) {
    console.log('Positive');
  } else if (valor < 0){
    console.log("Negative");
  } else {
    console.log("Zero");
  }