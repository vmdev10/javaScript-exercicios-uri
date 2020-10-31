/*
Leia um valor de ponto flutuante com duas casas decimais.
Este valor representa um valor monetário.
A seguir, calcule o menor número de notas e moedas possíveis
no qual o valor pode ser decomposto.
As notas consideradas são de 100, 50, 20, 10, 5, 2.
As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01.
A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, 
nforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
*/

const valorMonetario = 91.01

const notasDe100 = parseInt(valorMonetario / 100)
const notasDe50 = parseInt((valorMonetario % 100) / 50)
const notasDe20 = parseInt((valorMonetario % 100 % 50) / 20)
const notasDe10 = parseInt((valorMonetario % 100 % 50 % 20) / 10)
const notasDe5 = parseInt((valorMonetario % 100 % 50 % 20 % 10) / 5)
const notasDe2 = parseInt((valorMonetario % 100 % 50 % 20 % 10 % 5) / 2)

const moedasDe1 = parseInt((valorMonetario % 100 % 50 % 20 % 10 % 5 % 2) / 1)
const moedasDe50 = parseInt((valorMonetario % 100 % 50 % 20 % 10 % 5 % 2 % 1) / 0.50)
const moedasDe25 = parseInt((valorMonetario % 100 % 50 % 20 % 10 % 5 % 2 % 1 % 0.50) / 0.25)
const moedasDe10 = parseInt((valorMonetario % 100 % 50 % 20 % 10 % 5 % 2 % 1 % 0.50 % 0.25) / 0.10)
const moedasDe05 = parseInt((valorMonetario % 100 % 50 % 20 % 10 % 5 % 2 % 1 % 0.50 % 0.25 % 0.10) / 0.05)
const moedasDe01 = parseInt((valorMonetario % 100 % 50 % 20 % 10 % 5 % 2 % 1 % 0.50 % 0.25 %0.10 % 0.05) / 0.01)

console.log('NOTAS:')
console.log(`${notasDe100} nota(s) de R$ 100.00`)
console.log(`${notasDe50} nota(s) de R$ 50.00`)
console.log(`${notasDe20} nota(s) de R$ 20.00`)
console.log(`${notasDe10} nota(s) de R$ 10.00`)
console.log(`${notasDe5} nota(s) de R$ 5.00`)
console.log(`${notasDe2} nota(s) de R$ 2.00`)

console.log('MOEDAS:')
console.log(`${moedasDe1} moeda(s) de R$ 1.00`)
console.log(`${moedasDe50} moeda(s) de R$ 0.50`)
console.log(`${moedasDe25} moeda(s) de R$ 0.25`)
console.log(`${moedasDe10} moeda(s) de R$ 0.10`)
console.log(`${moedasDe05} moeda(s) de R$ 0.05`)
console.log(`${moedasDe01} moeda(s) de R$ 0.01`)