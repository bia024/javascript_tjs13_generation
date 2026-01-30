const leia = require("readline-sync");

let numero = questionInt("Digite um numero inteiro: ");

let contador = 1;

do {
  console.log(`${numero} x ${contador} = ${numero * contador}`);
  contador ++;
} while (contador <= 10);

//pelo menos uma vez ele vai rodar independente da condição. ai so depois ele roda a condição