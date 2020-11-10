/*
Leia 2 valores inteiros X e Y. 
A seguir, calcule e mostre a soma dos números impares entre eles.

Entrada
O arquivo de entrada contém dois valores inteiros.

Saída
O programa deve imprimir um valor inteiro. 
Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.
*/

let x = parseInt(prompt("Digite um valor inteiro"));
let y = parseInt(prompt("Digite outro valor inteiro"));
somaDosImpares = 0;

if (x >= y) {
  for (y += 1; y < x; y++) {
    if (y % 2 !== 0) {
      somaDosImpares += y;
    }
  }
  console.log(`${somaDosImpares}`);
} else {
  for (x += 1; x < y; x++) {
    if (x % 2 !== 0) {
      somaDosImpares += x;
    }
  }
  console.log(`${somaDosImpares}`);
}

//Resposta URI

let x = parseInt(lines.shift(''));
let y = parseInt(lines.shift(''));
let somaDosImpares = 0;

if (x >= y) {
  for (y += 1; y < x; y++) {
    if (y % 2 !== 0) {
      somaDosImpares += y;
    }
  }
  console.log(`${somaDosImpares}`);
} else {
  for (x += 1; x < y; x++) {
    if (x % 2 !== 0) {
      somaDosImpares += x;
    }
  }
  console.log(`${somaDosImpares}`);
}