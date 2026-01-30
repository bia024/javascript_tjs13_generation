const leia = require("readline-sync");

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let diagonalPrincipal = "";
let diagonalSecundaria = "";
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    diagonalPrincipal += matriz[i][i] + " ";
    somaPrincipal += matriz[i][i];

    diagonalSecundaria += matriz[i][2 - i] + " ";
    somaSecundaria += matriz[i][2 - i];
}

console.log("\nElementos da Diagonal Principal:");
console.log(diagonalPrincipal);

console.log("\nElementos da Diagonal Secundária:");
console.log(diagonalSecundaria);

console.log(`\nSoma dos Elementos da Diagonal Principal: ${somaPrincipal}`);
console.log(`Soma dos Elementos da Diagonal Secundária: ${somaSecundaria}`);