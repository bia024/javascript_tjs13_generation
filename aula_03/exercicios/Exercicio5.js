import { questionInt } from "readline-sync";

let codigo = questionInt("Codigo do Produto: ");
let quantidade = questionInt("Quantidade: ");

let produto;
let precoUnitario;

switch (codigo) {
    case 1:
        produto = "Cachorro-Quente";
        precoUnitario = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        precoUnitario = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        precoUnitario = 18.00;
        break;
    case 4:
        produto = "Bauru";
        precoUnitario = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        precoUnitario = 8.00;
        break;
    case 6:
        produto = "Suco de laranja";
        precoUnitario = 13.00;
        break;
    default:
        console.log("Código de produto inválido!");
}

if (codigo >= 1 && codigo <= 6) {
    let valorTotal = quantidade * precoUnitario;

    console.log("\nProduto: " + produto);
    console.log("Valor total: R$ " + valorTotal.toFixed(2));
}