import { Carro } from "./05a_carro.mjs";

export class CarroComPlaca extends Carro {
    #_placa
    constructor(umaPlaca) {
        super(55) // Referência para o construtor de Carro()
        this.#_placa = umaPlaca
    }
    get placa() {
        return this.#_placa
    }
}