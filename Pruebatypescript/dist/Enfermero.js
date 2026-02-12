"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enfermero = void 0;
const Trabajador_1 = require("../src/Trabajador");
class Enfermero extends Trabajador_1.Trabajador {
    constructor(name, trabajo, horasTrabajadas, cirujano, id) {
        super(name, trabajo, horasTrabajadas, id);
        this.cirujano = cirujano;
    }
    calcularSueldo(cobroHora, cantidad = 0) {
        let total;
        if (this.cirujano) {
            total = super.calcularSueldo(cobroHora) + cantidad;
        }
        else {
            total = super.calcularSueldo(cobroHora);
        }
        return total;
    }
}
exports.Enfermero = Enfermero;
