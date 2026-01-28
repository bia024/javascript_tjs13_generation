import { questionInt } from "readline-sync";

let A = questionInt("Digite o numero A: ");
let B = questionInt("Digite o numero B: ");
let C = questionInt("Digite o numero C: ");

let soma = A + B;

if (soma > C) {
    console.log(A + " + " + B + " = " + soma + " > " + C);
    console.log("A soma de A + B e maior do que C");
} else if (soma < C) {
    console.log(A + " + " + B + " = " + soma + " < " + C);
    console.log("A soma de A + B e menor do que C");
} else {
    console.log(A + " + " + B + " = " + soma + " = " + C);
    console.log("A soma de A + B e igual a C");
}

let numero = questionInt("Digite um numero: ");

if (numero % 2 == 0 && numero >= 0) {
    console.log("O numero " + numero + " e par e positivo!");
} else if (numero % 2 == 0 && numero < 0) {
    console.log("O numero " + numero + " e par e negativo!");
} else if (numero % 2 != 0 && numero >= 0) {
    console.log("O numero " + numero + " e impar e positivo!");
} else {
    console.log("O numero " + numero + " e impar e negativo!");
}