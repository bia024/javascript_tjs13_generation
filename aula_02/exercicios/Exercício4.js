import leia from 'readline-sync';

console.log("\n--- CÁLCULO DE DIFERENÇA DE PRODUTOS ---");

const sugestao = [5.0, 6.0, 7.0, 8.0];

let numeros = [];

for (let i = 0; i < 4; i++) {
    numeros[i] = leia.questionFloat(`Digite o número ${i + 1} (Sugestão: ${sugestao[i].toFixed(1)}): `);
}

let calculo = (numeros[0] * numeros[1]) - (numeros[2] * numeros[3]);

console.log("-----------------------------------------");
console.log(`Diferença: ${calculo.toFixed(1)}`);
console.log("-----------------------------------------");