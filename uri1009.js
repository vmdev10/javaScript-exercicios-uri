/*
Faça um programa que leia o nome de um vendedor,
o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro)
 Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas,
 informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor)
e 2 valores de dupla precisão (double) com duas casas decimais,
representando o salário fixo do vendedor
e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

const nomeDoVendendor = 'Ana'
const salarioFixo = 1700.00
const montanteDasVendas = 1230.50

const salarioTotal = salarioFixo + 0.15 * montanteDasVendas
console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)
*/

const salarioVendendor = {
  nomeDoVendendor: "Ana",
  salarioFixo: 1700.0,
  montanteDasVendas: 1230.5,
  salarioTotal() {
    return this.salarioFixo + 0.15 * this.montanteDasVendas;
  },
};
console.log(salarioVendendor.salarioTotal().toFixed(2));
