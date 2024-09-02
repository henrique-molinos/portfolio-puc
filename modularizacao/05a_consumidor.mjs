import { Carro } from "./05a_carro.mjs";

var carro = new Carro(55)
console.log(`Capacidade -> ${carro.capacidade}L`) // get capacidade();
console.log(`Tanque -> ${carro.tanque}L`) // get tanque();

carro.tanque = 30 // set tanque(30);
console.log(`Tanque -> ${carro.tanque}L`)

carro.tanque = 10
console.log(`Tanque -> ${carro.tanque}L`)

carro.tanque = 30
console.log(`Tanque -> ${carro.tanque}L`)