/*
Leia um valor inteiro N. 
Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

Entrada
A entrada contém um valor inteiro N (5 < N < 2000).

Saída
Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada.
Neste caso, configure a precisão adequadamente para que isso não ocorra.
*/
valorInteiro = 6;
for (const valorInicial = 1; valorInicial <= valorInteiro; valorInicial++) {
    if (valorInicial % 2 === 0) {
        quadradoDosPares = Math.pow(valorInicial, 2);
        console.log(`${valorInicial}^2 = ${quadradoDosPares}`);
    }
}

// Resposta URI:
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let valorInteiro = lines.shift();
for (let valorInicial = 1; valorInicial <= valorInteiro; valorInicial++) {
  if (valorInicial % 2 === 0) {
    quadradoDosPares = Math.pow(valorInicial, 2);
    console.log(`${valorInicial}^2 = ${quadradoDosPares}`);
  }
}
