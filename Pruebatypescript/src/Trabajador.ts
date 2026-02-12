export class Trabajador {
    name: string;
    trabajo: string;
    horasTrabajadas: number;
    id :number;

    constructor(name: string, trabajo: string, horasTrabajadas: number,id :number) {
        this.name = name;
        this.trabajo = trabajo;
        this.horasTrabajadas = horasTrabajadas;
        this.id = id;

    }

    getNombre():string{
        return this.name;
    }

    

    calcularSueldo(cobroHora: number): number {

        return cobroHora * this.horasTrabajadas;

    }

    mostrarInfo() : string {    

        return `ID :${this.id}  |   Name : ${this.name} |   Trabajo : ${this.trabajo}   |   Horas Trabajadas :  ${this.horasTrabajadas}` 

    }





}