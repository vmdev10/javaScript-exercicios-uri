/*
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas)
no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida,
a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido.
Não esqueça de imprimir o fim de linha após cada linha,
caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/

const valorMonetario = 11257

const notasDe100 = parseInt(valorMonetario / 100)
const notasDe50 = parseInt((valorMonetario % 100) / 50)
const notasDe20 = parseInt((valorMonetario % 100 % 50) / 20)
const notasDe10 = parseInt((valorMonetario % 100 % 50 % 20) / 10)
const notasDe5 = parseInt((valorMonetario % 100 % 50 % 20 % 10) / 5)
const notasDe2 = parseInt((valorMonetario % 100 % 50 % 20 % 10 % 5) / 2)
const notasDe1 = parseInt((valorMonetario % 100 % 50 % 20 % 10 % 5 % 2))

console.log(valorMonetario)
console.log(`${notasDe100} nota(s) de R$ 100.00`)
console.log(`${notasDe50} nota(s) de R$ 50.00`)
console.log(`${notasDe20} nota(s) de R$ 20.00`)
console.log(`${notasDe10} nota(s) de R$ 10.00`)
console.log(`${notasDe5} nota(s) de R$ 5.00`)
console.log(`${notasDe2} nota(s) de R$ 2.00`)
console.log(`${notasDe1} nota(s) de R$ 1.00`)