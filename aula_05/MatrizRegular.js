// const nao entra aqui porque não tem entrada de dados. se tivesse, ai sim colocaria o require
let matriz = [
    [1, 7, 9],
    [2, 6, 4],
    [3, 5, 8]
]

//comentario reserva/ exemplo em aula Leonardo I
// int matriz[3][3] = [
//     // { snesse caso aqui, sempre trabalhar com colchetes}
// ]

// console.table(matriz);

for (let linha = 0; linha < matriz.length; linha ++){
    for (let coluna = 0; coluna < matriz.length; coluna ++){
        console.log(`matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
    }
}
