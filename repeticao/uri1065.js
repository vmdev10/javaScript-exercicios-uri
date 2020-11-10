/*
Faça um programa que leia 5 valores inteiros. 
Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
*/
let numeroPar = 0;

for (let contador = 1; contador <= 5; contador++) {
  valorInteiro = parseInt(lines.shift());
  if (valorInteiro % 2 === 0) {
    numeroPar += 1;
  }
}
console.log(`${numeroPar} valores pares`);
