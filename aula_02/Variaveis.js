"use strict";
// console.log(bonus); // dá erro, porque o strict mode força a gente a declarar variáveis antes de usá-las
var nome;
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.9;
// cammelCase [salarioBruto] / mesmo padrão de java, typescript
const bonus = 0.05;
// dentro do exemplo strict mode
let numero;
console.log(numero);

console.log("O tipo da variável nome é: ", typeof nome); // Deve exibir: string, por mais que seja '' aspas simples ou "" aspas duplas

if (salarioBruto > 1000) {
  let mensagem = "Salário > 1000";
  // se fosse com let, daria erro, por nos proteger do que o var nao protege e por estar dentro do escopo
  // console.log(bonus);
}
// console.log(mensagem)

console.log(
  "Salário Líquido: ",
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(salarioBruto + bonus * salarioBruto),
);

// comentários extras:
//boolean aceita true ou false
// let nome = batatinha [sem "aspas""] -> errado dá is not defined, porque é texto direto, sem nada
//null : quando tentamos fazer uma operação e essa operação nao retorna nada. uma busca não encontrada, por exemplo
// undefined : quando a variável é declarada, mas não inicializada. (não recebe absolutamente nada)
// NaN : Not a Number (resultado de uma operação matemática inválida). quando dividimos um número por 0, por exemplo.
// infinity : resultado de uma operação matemática que excede o limite máximo representável. quando dividimos um número muito grande por um número muito pequeno, por exemplo.
// uma variavel nao pode começar com acento
// exemploErrado:
// let NOME // errado, porque nao tem o let, const ou var
// não psosso ter um nome let = let
// usar nomes descritivos e autoexplicativos. exemplo: media, soma. isso evita puxões de orelha no futuro
// nomes assertivos, diretos e objetivos
// palavras que sao comandos, nao usar. exemplo- catch, a nao ser que sejam palavras compostas, como catchError
// exemplo:
// let whileTime
// nesses casos nem usar

// exemplo do var dado ao Matheus:
// console.log(nome); // undefined
// var nome = "Rafael";
// let profissao = "Pessoa Desenvolvedora";
// let salarioBruto = 3500.9;
// // cammelCase [salarioBruto] / mesmo padrão de java, typescript
// const bonus = 0.05;

// console.log("O tipo da variável nome é: ", typeof nome); // Deve exibir: string, por mais que seja '' aspas simples ou "" aspas duplas

// console.log(mensagem) // dá erro de referência, porque o var tem escopo de função, e não de bloco (undefined)
// if (salarioBruto > 1000){
//     var mensagem = "Salário > 1000";
//     // se fosse com let, daria erro, por nos proteger do que o var nao protege e por estar dentro do escopo
// }
// console.log(mensagem) // funciona, porque o var tem escopo de função, e não de bloco (undefined)
// agora, e se declararmos com var? com o var ele mostra. ele pega a variavel, joga pro topo e exibe a mensagem. let respeita o escopo
// if (salarioBruto > 1000){
//     var mensagem = "Salário > 1000";
//     // se fosse com let, daria erro, por nos proteger do que o var nao protege e por estar dentro do escopo
// }
// if (salarioBruto > 1000){
//     var mensagem = "Salário > 1000";
//     // console.log(mensagem) dentro do escopo, ai funciona.
// }

// ---------------

// strict mode
// modo estrito, que ajuda a evitar alguns erros comuns no JavaScript
// ele força a gente a declarar variáveis antes de usá-las, entre outras coisas

// exemplo de formatação monetaria
// (LINHA 22)
