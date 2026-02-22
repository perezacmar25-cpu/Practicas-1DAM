"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestion = void 0;
const Enfermero_1 = require("./Enfermero");
class Gestion {
    constructor(lista, listado) {
        this.listado = new Map();
        this.t1 = new Enfermero_1.Enfermero('Mario', 'Auxiliar', 30, true, 1);
        this.listado = listado;
        this.lista = lista;
    }
    findById(id) {
        let encontrado = undefined;
        this.lista.forEach(trabajador => {
            if (trabajador.id === id) {
                encontrado = trabajador;
                
            }
        });
        return encontrado;
    }

    findById2(id) {
        let indice = -1;
        this.lista.forEach((trabajador, index) => {
            if (trabajador.id === id) {
                indice = index;
            }
        });
        return indice;
    }
    anadirHoras(horas, id) {
        let index = this.findById2(id);
        if (index !== -1) {
            this.lista[index].horasTrabajadas += horas;
        }
    }

    
}
exports.Gestion = Gestion;
