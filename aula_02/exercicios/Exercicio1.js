import { questionFloat } from 'readline-sync';

const nomeColaboradora = "Bianca Caetano dos Reis";
const salarioOficial = 10000.00;
const abonoOficial = 1000.00;
const formatar = (valor) => "R$ " + valor.toFixed(2).replace('.', ',');

console.log(`\n--- SISTEMA DE SEGURANCA: ${nomeColaboradora} ---`);

let salario = questionFloat(`Confirme o salário base (${formatar(salarioOficial)}): `);

if (salario !== salarioOficial) {
    console.log("\n[ERRO DE SEGURANCA]: Salário divergente do sistema! Operação cancelada.");
    process.exit();
}

let abono = questionFloat(`Confirme o abono previsto (${formatar(abonoOficial)}): `);

if (abono !== abonoOficial) {
    console.log("\n[ERRO DE SEGURANCA]: Valor de abono não autorizado! Operação cancelada.");
    process.exit();
}

let novoSalario = salario + abono;

console.log("\n==================================================");
console.log("DADOS VALIDADOS COM SUCESSO!");
console.log(`Colaboradora: ${nomeColaboradora}`);
console.log(`Novo Salário: ${formatar(novoSalario)}`);
console.log("==================================================");