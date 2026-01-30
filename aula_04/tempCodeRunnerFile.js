const leia = require("readline-sync");

let numerosPares = 0;
let numerosImpares = 0;

for (let contador = 1; contador <= 10; contador ++) {
    let numero = leia.questionInt(`Digite o ${contador} numero: `);

    if (numero % 2 === 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
}

console.log(`\nTotal de números pares: ${numerosPares}`);
console.log(`Total de números ímpares: ${numerosImpares}`);