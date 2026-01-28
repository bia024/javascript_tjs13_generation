import { questionFloat } from "readline-sync";

// console.log("\n===========================================");
// console.log("\n       CALCULADORA COM SWITCH CASE         ");
// console.log("\n1 - Soma                                   ");
// console.log("\n2 - Subtração                              ");
// console.log("\n3 - Multiplicação                          ");
// console.log("\n4 - Divisão                                ");
// console.log("\n===========================================");
// console.log("\n                                           ");

// // questionFloat - refere-se a algo "quebrado(resultado, por exemplo)"
// let numero1 = questionFloat("Digite o primeiro numero: ", {
//                             limitMessage: 'Digite um numero float'}
//                             );
// let numero2 = questionFloat("Digite o segundo numero: ", {
//                             limitMessage: 'Digite um numero float'}
//                             );

// let operacao = questionFloat("Digite o numero da operacao: ", {
//                             limitMessage: 'Digite um numero inteiro'}
//                             );

                        
// // depois faremos, após esse exemplo, com template string, usando numeros
// switch(operacao){
//     case 1: 
//         console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
//     break;

//     case 2: 
//         console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
//     break;

//     case 3: 
//         console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
//     break;

//     case 4: 
//         console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
//     break;
//     default:
//         console.log("Operacao Invalida!")
//     // nao esquecer do default
// }

// 
console.log("===========================================");
console.log("       CALCULADORA COM SWITCH CASE         ");
console.log("(+) - Soma                                   ");
console.log("(-) - Subtração                              ");
console.log("(*) - Multiplicação                          ");
// na multiplicação pode ser x também
console.log("(/) - Divisão                                ");
console.log("===========================================");
console.log("                                           ");

// questionFloat - refere-se a algo "quebrado(resultado, por exemplo)"
let numero1 = questionFloat("Digite o primeiro numero: ", {
                            limitMessage: 'Digite um numero float'}
                            );
let numero2 = questionFloat("Digite o segundo numero: ", {
                            limitMessage: 'Digite um numero float'}
                            );

let operacao = keyIn("Digite a operacao: "
                            );

                        
// depois faremos, após esse exemplo, com template string, usando numeros
switch(operacao){
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
    // nao esquecer do default
}


// usaremos o switchCase para o projetinho da conta bancária

// pensar numa tabela de saúde