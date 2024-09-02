import { UmaClasse } from "./03a_umaClasse.mjs"

let umaClasse = new UmaClasse("Primeiro atributo")

let { capturaPrimeiroAtributo: umAtributo, 
    outroAtributo } = umaClasse;

console.log("um Atributo: " + umAtributo) // Deveria rodar a  função
console.log("Outro Atributo: " + outroAtributo)