/*
Sequência de Números e Soma
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero).
Para cada par lido, mostre a sequência do menor até o maior 
e a soma dos inteiros consecutivos entre eles (incluindo o N e M).

Entrada
O arquivo de entrada contém um
número não determinado de valores M e N.
A última linha de entrada vai conter um número nulo ou negativo.

Saída
Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo.
*/
let entrada = lines.shift().split(" ");
let m = parseInt(entrada[0]);
let n = parseInt(entrada[1]);
let somaDaSequencia = 0;

while (m > 0 && n > 0) {
  if (m >= n) {
    for (n; n <= m; n++) {
      console.log(`${n}`);
      somaDaSequencia += n;
    }
    console.log(`Sum=${somaDaSequencia}`);
    somaDaSequencia = 0;
  } else {
    for (m; m <= n; m++) {
      console.log(`${m}`);
      somaDaSequencia += m;
    }
    console.log(`Sum=${somaDaSequencia}`);
    somaDaSequencia = 0;
  }
  entrada = lines.shift().split(" ");
  m = parseInt(entrada[0]);
  n = parseInt(entrada[1]);
}