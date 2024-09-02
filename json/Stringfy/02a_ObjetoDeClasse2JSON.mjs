import { UmaClasse } from "../../desestruturacao/03a_umaClasse.mjs"

let umObjetoDeClasse = new UmaClasse("um valor")
let json = JSON.stringify(umObjetoDeClasse);
console.log(json);

// Métodos não entram no JSON