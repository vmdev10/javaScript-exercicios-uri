/*
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 

Saída
Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pertenceAoIntervalo = 0;
let naoPertenceAoIntervalo = 0;
let numeroInteiro = parseInt(lines.shift());

for (let contagem = 1; contagem <= numeroInteiro; contagem++) {
  let numeroInteiro = lines.shift("");
  if (numeroInteiro >= 0) {
    if (numeroInteiro >= 10 && numeroInteiro <= 20) {
      pertenceAoIntervalo += 1;
    } else {
      naoPertenceAoIntervalo += 1;

    }
  } else {
    naoPertenceAoIntervalo += 1;
  }
}
console.log(`${pertenceAoIntervalo} in`);
console.log(`${naoPertenceAoIntervalo} out`);