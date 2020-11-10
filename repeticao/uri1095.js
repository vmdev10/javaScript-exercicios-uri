/*
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo
*/

let i = 1;
let j = 60;

console.log(`i=${i} j=${j}`);

for (let contador = 1; contador <= 12; contador++) {
  i += 3;
  j -= 5;
  console.log(`i=${i} j=${j}`);
}
