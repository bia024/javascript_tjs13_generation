// const leia = require("readline-sync");
import leia from 'readline-sync';
import { questionFloat, keyIn } from "readline-sync";

let continua = 'S';

while(continua === 'S') {

    console.log("===========================================");
    console.log("       CALCULADORA COM SWITCH CASE         ");
    console.log("===========================================");
    console.log("(+) - Soma                                 ");
    console.log("(-) - Subtração                            ");
    console.log("(*) - Multiplicação                        ");
    console.log("(/) - Divisão                              ");
    console.log("===========================================");
    console.log("                                           ");

    let numero1 = questionFloat("Digite o primeiro numero: ", {
        limitMessage: "Digite um numero float",
    });
    let numero2 = questionFloat("Digite o segundo numero: ", {
        limitMessage: "Digite um numero float",
    });

    let operacao = keyIn("Digite a operacao: ");

    switch (operacao) {
        case "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;

        case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;

        case "*":
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;

        case "/":
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
        default:
        console.log("Operacao Invalida!");
    }

    continua = leia.keyIn("Deseja continuar (S/N)?").toUpperCase();
    
}

//toUpperCase = transforma em letra maiuscula para entendimento do sistema


//aprenderemos a usar debug agora, após as 4 exemplificações 09:41. funcionará com js, ts e para testes
