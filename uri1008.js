/*
Escreva um programa que leia o número de um funcionário, 
seu número de horas trabalhadas, o valor que recebe por hora 
e calcula o salário desse funcionário. 
A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

Entrada
O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais,
representando o número,
quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada,
respectivamente.

Saída
Imprima o número e o salário do funcionário,
conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade.
No caso do salário, também deve haver um espaço em branco após o $.

const numeroFuncionario = 6
const horasTrabalhadas = 145
const valorPorHora = 15.55

const salario = horasTrabalhadas * valorPorHora
console.log(`NUMBER = ${numeroFuncionario}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)
*/

const salario = {
    numeroFuncionario: 6,
    horasTrabalhadas: 145,
    valorPorHora: 15.55,
    salarioFuncionario(){
        return this.horasTrabalhadas * this.valorPorHora
    }
}
console.log(salario.salarioFuncionario())