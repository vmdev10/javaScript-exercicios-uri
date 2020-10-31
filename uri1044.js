let entrada = '5 24'.split(' ');
let a = parseInt(entrada[0]);
let b = parseInt(entrada[1]);

if(a % b == 0 || b % a == 0) {
    console.log(`Sao multiplos`);
}
else {
    console.log(`Nao Sao Multiplos`);
}
/*
let entrada = lines.shift().split(' ');
let a = parseInt(entrada[0]);
let b = parseInt(entrada[1]);

if(a % b == 0 || b % a == 0) {
    console.log(`Sao multiplos`);
}
else {
    console.log(`Nao Sao Multiplos`);
}
*/