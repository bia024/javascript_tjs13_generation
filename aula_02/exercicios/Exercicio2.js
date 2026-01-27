import leia from 'readline-sync';

console.log("\n--- SISTEMA PARA CÁLCULO DE MÉDIA ---");

const n1_ref = 10.0;
const n2_ref = 8.0;
const n3_ref = 7.0;
const n4_ref = 7.5;

let nota1 = leia.questionFloat(`Digite a Nota 1 (Sugestao: ${n1_ref.toFixed(1)}): `);
let nota2 = leia.questionFloat(`Digite a Nota 2 (Sugestao: ${n2_ref.toFixed(1)}): `);
let nota3 = leia.questionFloat(`Digite a Nota 3 (Sugestao: ${n3_ref.toFixed(1)}): `);
let nota4 = leia.questionFloat(`Digite a Nota 4 (Sugestao: ${n4_ref.toFixed(1)}): `);
let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("-----------------------------------");
console.log(`Media final: ${media.toFixed(1)}`);
console.log("-----------------------------------");

if (media >= 7) {
    console.log("Status: Aprovado(a)!");
} else {
    console.log("Status: Reprovado(a)!");
}
console.log("-----------------------------------");