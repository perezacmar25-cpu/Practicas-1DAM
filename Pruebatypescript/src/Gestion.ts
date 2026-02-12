
import { Enfermero } from "./Enfermero";
import { Trabajador } from "./Trabajador";


export class Gestion{

    lista:Trabajador[];
    listado : Map<number,Trabajador> = new Map();

    constructor(lista:Trabajador[],listado:Map<number,Trabajador>){

        this.listado = listado;
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

    findById2(id:number) : number {

        let indice: number = -1;

        this.lista.forEach((trabajador,index) => {
            if(trabajador.id === id){
                
                indice = index;
            }

            
        }) 

        return indice;


    }

    t1:Trabajador  = new Enfermero('Mario','Auxiliar',30,true,1);

    anadirHoras(horas : number, id : number) : void{

        let index:number=this.findById2(id);

        if(index!==-1){

            this.lista[index].horasTrabajadas += horas;
            
            
        }
        
    }


    
}
