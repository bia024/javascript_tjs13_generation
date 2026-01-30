const leia = require("readline-sync");

let numero;
let somaMultiplos3 = 0;
let contadorMultiplos3 = 0;

console.log("=== MÉDIA DE MÚLTIPLOS DE 3 (Digite 0 para sair) ===\n");

do {
    numero = leia.questionInt("Digite um numero: ");

    if (numero !== 0 && numero % 3 === 0) {
        somaMultiplos3 += numero;
        contadorMultiplos3++;
    }

} while (numero !== 0);

let media = contadorMultiplos3 > 0 ? (somaMultiplos3 / contadorMultiplos3) : 0;

console.log(`\nA média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);