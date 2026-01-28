// const leia = require("readline-sync");
import { questionFloat } from "readline-sync";

// questionFloat - refere-se a algo "quebrado(resultado, por exemplo)"
let media = questionFloat("Digite a media do aluno: ", {
                            limitMessage: 'Digite um numero float'}
                            );

if (media >= 7) {
  console.log("Aluno Aprovado!");
}else if(media >= 5 && media < 7){
    console.log("Aluno de exame");
}else {
  console.log("Aluno Reprovado!");
}

// dá pra passar por lista de dados especificos de usuarios, mas primeiro vamos por vetores
// variável de dados de entrada - estudar