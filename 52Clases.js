
//clase
// Es un mecanimos que hace crear objetos con propiedades y metodos especificos para 
// instanciar luego 

//es como una funcion constructora pero con una sintaxis distinta

class Persona {//Las clases tambien se crean con letra mayuscula
    constructor(nombre,apellido){ //los parametros son las llaves a utilizar
        this.nombre=nombre,// se usa this para configurar el constructor de la clase
        this.apellido=apellido
    
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y  mi apellido es ${this.apellido}`)
    }
}

// Crear instancias de la clase 

const persona1= new Persona('Jairo', 'Aranguren')

persona1.saludar()