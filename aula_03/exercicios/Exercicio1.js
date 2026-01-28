import { questionInt } from "readline-sync";

console.log("--- Comparador de Somas ---");

const algoritmoA = questionInt("Digite o numero A: ");
const algoritmoB = questionInt("Digite o numero B: ");
const algoritmoC = questionInt("Digite o numero C: ");
const soma = algoritmoA + algoritmoB;

console.log("\nResultado:");

if (soma > algoritmoC) {
    console.log(`${algoritmoA} + ${algoritmoB} = ${soma} > ${algoritmoC}`);
    console.log("A soma de A + B e maior do que C");
} else if (soma < algoritmoC) {
    console.log(`${algoritmoA} + ${algoritmoB} = ${soma} < ${algoritmoC}`);
    console.log("A soma de A + B e menor do que C");
} else {
    console.log(`${algoritmoA} + ${algoritmoB} = ${soma} = ${algoritmoC}`);
    console.log("A soma de A + B e igual a C");
}