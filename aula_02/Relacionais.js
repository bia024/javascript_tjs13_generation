let numero1 = "1";
let numero2 = 2;
let numero3 = 10;

// fazendo a comparação entre eles:
console.log(`Comparação igual: ${numero1 == numero2}`); // true or false. neste caso será true, pq só compara o valor [1=1 mesmo sendo string]

// fazendo a comparação entre eles:
console.log(`Comparação estritamente igual: ${numero1 === numero2}`); // false pq compara o valor e o tipo de dado [uma é string e a outra number] - em calculadora é bem interessante

// nesse caso é pra criação de darkmode tambem ou nao?

if(numero2 < numero3){
    console.log("O valor armazenado na variável numero2 é menor do que o valor da variável numero3")
}