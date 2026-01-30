const leia = require("readline-sync");

let vetor = [];
let soma = 0;
let elementosIndicesImpares = "";
let elementosPares = "";

console.log("=== ANÁLISE DE VETOR (10 NÚMEROS) ===\n");

for (let i = 0; i < 10; i++) {
    vetor[i] = leia.questionInt(`Digite o ${i + 1}º numero: `);
    soma += vetor[i];
}

for (let i = 0; i < 10; i++) {

    if (i % 2 !== 0) {
        elementosIndicesImpares += vetor[i] + " ";
    }

    if (vetor[i] % 2 === 0) {
        elementosPares += vetor[i] + " ";
    }
}

let media = soma / 10;

console.log("\nElementos nos índices ímpares:");
console.log(elementosIndicesImpares);

console.log("\nElementos pares:");
console.log(elementosPares);

console.log(`\nSoma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);