import leia from 'readline-sync';

const brutoRef = 2000.00;
const adicionalRef = 500.00;
const horasRef = 100.00;
const descontosRef = 200.00;
    
const formatar = (v) => v.toFixed(2);

console.log("\n--- CÁLCULO DE SALÁRIO LÍQUIDO ---");

let salarioBruto = leia.questionFloat(`Salário Bruto (Sugestão: ${formatar(brutoRef)}): `);
let adicionalNoturno = leia.questionFloat(`Adicional Noturno (Sugestão: ${formatar(adicionalRef)}): `);
let horasExtras = leia.questionFloat(`Horas Extras (Sugestão: ${formatar(horasRef)}): `);
let descontos = leia.questionFloat(`Descontos (Sugestão: ${formatar(descontosRef)}): `);
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("\n=============================================");
console.log("RESULTADO DO CÁCULO:");
console.log(`Salário Líquido Final: ${formatar(salarioLiquido)}`);
console.log("=============================================");