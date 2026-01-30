const leia = require("readline-sync");

let numero;
let somaPositivos = 0;

console.log("=== SOMA DE POSITIVOS (Digite 0 para encerrar) ===\n");

do {
    numero = leia.questionInt("Digite um numero: ", {
        limitMessage: "Por favor, digite um numero inteiro valido.",
    });

    if (numero > 0) {
        somaPositivos += numero;
    }

} while (numero !== 0);

console.log(`\nA soma dos numeros positivos é: ${somaPositivos}`);