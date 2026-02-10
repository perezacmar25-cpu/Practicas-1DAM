class Trabajador {
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

    calcularSueldo(cobroHora: number): number {

        return cobroHora * this.horasTrabajadas;


    }



}

class Enfermero extends Trabajador {

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

class Gestion{

    lista:Trabajador[];

    constructor(lista:Trabajador[]){

        this.lista = lista;
    }

    


    findById(id:number) : Trabajador | undefined{

        let encontrado : Trabajador | undefined = undefined;
    this.lista.forEach(trabajador => {
        if(trabajador.id === id){
            encontrado = trabajador;
        }
        
    });
    return encontrado;
    }

    t1:Trabajador  = new Enfermero('Mario','Auxiliar',30,true,1);

    

}

const gestion = new Gestion([]);
    gestion.lista = [];







