const leia = require("readline-sync");

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("=== PESQUISA EM VETOR ===");

let numeroProcurado = leia.questionInt("Digite o numero que voce deseja encontrar: ");

let posicao = vetor.indexOf(numeroProcurado);

if (posicao !== -1) {
    console.log(`O número ${numeroProcurado} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado!`);
}