const leia = require("readline-sync");

let matrizNotas = Array.from({ length: 10 }, () => Array(4).fill(0));
let vetorMedias = new Array(10);

console.log("=== SISTEMA DE NOTAS - 4 BIMESTRES ===\n");

for (let i = 0; i < 10; i++) {
    let somaNotas = 0;
    console.log(`\nNotas do Participante ${i + 1}:`);

    for (let j = 0; j < 4; j++) {
        matrizNotas[i][j] = leia.questionFloat(`Digite a nota do ${j + 1}o bimestre: `);
        somaNotas += matrizNotas[i][j];
    }

    vetorMedias[i] = parseFloat((somaNotas / 4).toFixed(1));
}

console.log("\n--- Médias Finais da Turma ---");
console.log(vetorMedias.join(" | "));