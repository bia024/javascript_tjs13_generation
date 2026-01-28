import { question } from "readline-sync";

let palavra1 = question("Digite a primeira caracteristica (vertebrado ou invertebrado): ").toLowerCase();
let palavra2 = question("Digite a segunda caracteristica (ave, mamifero, inseto ou anelideo): ").toLowerCase();
let palavra3 = question("Digite a terceira caracteristica (carnivoro, onivoro, herbivoro ou hematofago): ").toLowerCase();

if (palavra1 == "vertebrado") {

    if (palavra2 == "ave") {
        if (palavra3 == "carnivoro") {
            console.log("aguia");
        } else {
            console.log("Pomba");
        }
    } else {
        if (palavra3 == "onivoro") {
            console.log("Homem");
        } else {
            console.log("Vaca");
        }
    }

} else {

    if (palavra2 == "inseto") {
        if (palavra3 == "hematofago") {
            console.log("Pulga");
        } else {
            console.log("Lagarta");
        }
    } else {
        if (palavra3 == "hematofago") {
            console.log("Sanguessuga");
        } else {
            console.log("Minhoca");
        }
    }
}