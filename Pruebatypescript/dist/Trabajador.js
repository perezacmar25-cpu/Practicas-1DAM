"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabajador = void 0;
class Trabajador {
    constructor(name, trabajo, horasTrabajadas, id) {
        this.name = name;
        this.trabajo = trabajo;
        this.horasTrabajadas = horasTrabajadas;
        this.id = id;
    }
    getNombre() {
        return this.name;
    }
    calcularSueldo(cobroHora) {
        return cobroHora * this.horasTrabajadas;
    }
    mostrarInfo() {
        return `ID :${this.id}  |   Name : ${this.name} |   Trabajo : ${this.trabajo}   |   Horas Trabajadas :  ${this.horasTrabajadas}`;
    }
}
exports.Trabajador = Trabajador;
