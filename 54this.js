// el objeto this

// this hace referencia al objeto mismo o a la clase

class Persona{
    constructor(nombre, edad){
        this.nombre=nombre //this hace referencia a Persona
        this.edad=edad
    }
}

const persona1 = new Persona("Susana",42)//los dos parametros equivalen a this.nombre=nombre y this.edad=edad

console.log(persona1)
// retorna
//  Persona { nombre: 'Susana', edad: 42 }

console.log(persona1.nombre) //retorna susana

persona1.nuevoMetodo= function(){
    console.log(`Este es el metodo de la persona1 su nombre es ${this.nombre}`)// en creacion de metodos se debe hacer 
    // referencia con this, al constructor como aqui this.persona
}

persona1.nuevoMetodo()
