/*
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

Entrada
O arquivo de entrada contém 100 números inteiros, positivos e distintos.

Saída
Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let maiorValor = 0;
let posicaoMaior = 0;

for (let contador = 1; contador <= 100; contador++) {
  let valorInteiro = parseInt(lines.shift());
  if (valorInteiro > maiorValor) {
    maiorValor = valorInteiro;
    posicaoMaior = contador;
  }
}
console.log(`${maiorValor}`);
console.log(`${posicaoMaior}`);
