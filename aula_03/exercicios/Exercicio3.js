import { question, questionInt, keyInYNStrict } from "readline-sync";

let nome = question("Digite o Nome do Doador: ");

let diaNasc = questionInt("Digite o dia de nascimento: ");
let mesNasc = questionInt("Digite o mes de nascimento (1-12): ");
let anoNasc = questionInt("Digite o ano de nascimento: ");

let dataAtual = new Date();
let diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth() + 1;
let anoAtual = dataAtual.getFullYear();
let idade = anoAtual - anoNasc;

if (mesAtual < mesNasc || (mesAtual == mesNasc && diaAtual < diaNasc)) {
    idade--; 
}

let primeiraDoacao = keyInYNStrict("Primeira doacao de sangue? ");

if (idade >= 18 && idade <= 69) {
    
    if (idade >= 60 && primeiraDoacao == true) {
        console.log(nome + " tem " + idade + " anos e nao esta apto para doar sangue!");
    } else {
        console.log(nome + " tem " + idade + " anos e esta apto para doar sangue!");
    }

} else {
    console.log(nome + " tem " + idade + " anos e nao esta apto para doar sangue!");
}