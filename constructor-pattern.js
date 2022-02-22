// Constructor Pattern : En este patron de diseño se utiliza una clase "BASE o Padre" que sirve como plano para que las demas clases hereden sobre esta.
// 

// Clase Base 
class Persona {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}
class Cliente extends Persona {
    constructor(nombre, email, password, empresa) {
        super(nombre, email, password);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Leon', 'correoLeon@correo.comm', 089798667, 'YoutubeLion')

console.log(cliente)

// Utilizamos "extends" para heredar de la clase (Persona)"BASE o Padre" el nombre, email y password!