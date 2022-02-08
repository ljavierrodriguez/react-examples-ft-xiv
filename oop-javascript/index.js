// herencia, encapsulamiento, polimorfismo, abstraccion

class Persona {
    nombre = null;
    apellido = null;
    edad = null;
    genero = null;

    comer = function(){}
    correr = function(){
       return 'Ejecutando el metodo correr de Persona';
    }
    dormir =  function(){}
    nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }

    constructor(nombre, apellido, edad, genero){
        console.log("Instanciando la clase Persona");
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
    }

}

class Estudiante extends Persona { // herencia
    constructor(nombre, apellido, edad, genero){
        super(nombre, apellido, edad, genero);
        console.log("Instanciando la clase Estudiante");
    }

    correr = function(){ // polimorfismo
        return 'Ejecutando el metodo correr de Estudiante';
    }
}

class Profesor extends Persona {
    constructor(nombre, apellido, edad, genero){
        super(nombre, apellido, edad, genero);
        console.log("Instanciando la clase Profesor");
    }

    calcularNotas = function(){
        return 'Ejecutando el metodo calcularNotas de Profesor';
    }
}
let p1 = new Persona("Luis", "Rodriguez", 40, "M"); // instanciando

let e1 = new Estudiante("Javier", "Ortega", 40, "M"); // instanciando


console.log(p1.correr());
console.log(e1.correr());