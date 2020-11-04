/*
Leia um valor inteiro X. 
Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.

*/
// RESPOSTA URI
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valorInteiro = parseInt(lines.shift());
let valorInteiroFinal = valorInteiro + 12;
for(valorInteiro; valorInteiro < valorInteiroFinal; valorInteiro++) {
  if(valorInteiro % 2 !== 0) {
      console.log(`${valorInteiro}`)
  }
}

function imprimirNumerosImpares(
  valorInteiro,
  valorInteiroFinal = valorInteiro + 12
) {
  for (valorInteiro; valorInteiro < valorInteiroFinal; valorInteiro++) {
    if (valorInteiro % 2 !== 0) {
      console.log(`${valorInteiro}`);
    }
  }
}
imprimirNumerosImpares();
