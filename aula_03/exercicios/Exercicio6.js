import { question, questionInt, questionFloat } from "readline-sync";

let nome = question("Nome do Colaborador: ");
let codigoCargo = questionInt("Cargo (1 a 6): ");
let salario = questionFloat("Salario: ");

let cargo;
let percentual;

switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentual = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        percentual = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        percentual = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        percentual = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        percentual = 0.05;
        break;
    case 6:
        cargo = "Tecnico de TI";
        percentual = 0.08;
        break;
    default:
        console.log("Codigo de cargo invalido!");
}

if (codigoCargo >= 1 && codigoCargo <= 6) {
    let novoSalario = salario + (percentual * salario);

    console.log("\nNome do Colaborador: " + nome);
    console.log("Cargo: " + cargo);
    console.log("Salario: R$ " + novoSalario.toFixed(2));
}