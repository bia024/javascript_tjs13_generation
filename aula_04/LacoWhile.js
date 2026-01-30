import { questionInt } from "readline-sync";

let numero = questionInt("Digite um numero inteiro: ");

let contador = 1;

while(contador <= 10) {
  console.log(`${numero} x ${contador} = ${numero * contador}`);
  contador ++;
}

//no caso do while, nao sabemos exatamente onde termina o laço. ele primeiro testa a condição e só depois executa o bloco