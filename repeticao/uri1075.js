/*
Leia um valor inteiro N. 
Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

Entrada
A entrada contém um valor inteiro N (N < 10000).

Saída
Imprima todos valores que quando divididos por N dão resto = 2, um por linha.
*/
const divisaoPorN = lines.shift()
for(let sequencia = 1; sequencia < 10000; sequencia++) {
    if(sequencia % divisaoPorN === 2) {
        console.log(`${sequencia}`)
    }
}
