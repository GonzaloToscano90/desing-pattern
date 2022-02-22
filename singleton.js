// Singleton : No te permite crear multiples instancias de una misma clase, siempre va a retornar el objeto instanciado

let instancia = null;

class Persona{
    constructor(nombre, correo){
       if(!instancia){
            this.nombre = nombre;
            this.correo = correo;
            instancia = this;
       }else{
           return instancia;
       }
    }
}

const persona1 = new Persona('Gonzalo', 'correo@correo.com');
console.log(persona)

const persona2 = new Persona('Leon', 'correo2@correo.com');
console.log(persona2)
// En persona2 retornara el obteto de "persona1" porque se le aplico el patrón de singleton (La clase no puede ser instanciada mas de una vez)