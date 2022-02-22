// Class Pattern : es un patron de diseño de creación. Va a definir como deben de crearce los objetos !

class Persona {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}

const persona = new Persona ('Gonzalo', 'correo@correo.com', 3435456424335)

// al ser un patron de diseño de creacion se puede usar este plano para crear varios objetos!!