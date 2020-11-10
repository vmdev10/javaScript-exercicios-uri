/*
Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável.
Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. 
Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, 
o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

Entrada
A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir.
Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas
e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

Saída
Apresente o total de cobaias utilizadas,
o total de cada tipo de cobaia utilizada
e o percentual de cada uma em relação ao total de cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.
*/
let totalDeCobaias = 0;
let totalDeCoelhos = 0;
let totalDeRatos = 0;
let totalDeSapos = 0;

let casosDeTestes = parseInt(lines.shift());

for (contador = 1; contador <= casosDeTestes; contador++) {
  let entrada = lines.shift().split(" ");
  let quantidadeDeCobaias = parseInt(entrada[0]);
  let tipoDeCoabaia = entrada[1].toUpperCase();

  totalDeCobaias += quantidadeDeCobaias;

  if (tipoDeCoabaia === "C") {
    totalDeCoelhos += quantidadeDeCobaias;
  } else if (tipoDeCoabaia === "R") {
    totalDeRatos += quantidadeDeCobaias;
  } else if (tipoDeCoabaia === "S") {
    totalDeSapos += quantidadeDeCobaias;
  }
}
percentualDeCoelhos = ((totalDeCoelhos / totalDeCobaias) * 100).toFixed(2);
percentualDeRatos = ((totalDeRatos / totalDeCobaias) * 100).toFixed(2);
percentualDeSapos = ((totalDeSapos / totalDeCobaias) * 100).toFixed(2);

console.log(`Total: ${totalDeCobaias} cobaias`);
console.log(`Total de coelhos: ${totalDeCoelhos}`);
console.log(`Total de ratos: ${totalDeRatos}`);
console.log(`Total de sapos: ${totalDeSapos}`);

console.log(`Percentual de coelhos: ${percentualDeCoelhos} %`);
console.log(`Percentual de ratos: ${percentualDeRatos} %`);
console.log(`Percentual de sapos: ${percentualDeSapos} %`);
