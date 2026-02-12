
import { Trabajador } from "../src/Trabajador";
export class Enfermero extends Trabajador {

    cirujano: boolean;
    constructor(name: string, trabajo: string, horasTrabajadas: number, cirujano: boolean,id : number) {
        super(name, trabajo, horasTrabajadas,id);
        this.cirujano = cirujano;
    }

    calcularSueldo(cobroHora: number, cantidad: number = 0): number {

        let total: number;

        if (this.cirujano) {

            total = super.calcularSueldo(cobroHora) + cantidad;

        } else {
            total = super.calcularSueldo(cobroHora);
        }

        return total;

    }



}