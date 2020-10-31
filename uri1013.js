let entrada = '217 14 6'.split(' ');
const a = parseInt(entrada[0]);
const b = parseInt(entrada[1]);
const c = parseInt(entrada[2]);

let maior = (a + b + Math.abs(a - b)) / 2;
maior = (maior + c + Math.abs(maior - c)) / 2;
console.log(`${maior} eh o maior`);

/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = lines.shift().split(' ');
let a = parseInt(entrada[0]);
let b = parseInt(entrada[1]);
let c = parseInt(entrada[2]);

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;
console.log(`${maior} eh o maior`);
*/