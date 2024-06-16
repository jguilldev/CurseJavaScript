//Solo las clases y funciones constructoras generan un prototipo

class Animal {
    constructor (nombre,tipo,sonido){
        this.nombre=nombre,
        this.tipo=tipo
        this.sonido
    }
    EmitirSonido(){
        console.log(`El ${this.nombre} hace ${sonido}`)
    }
}


//herencia (extends)

// se traen propiedades desde el objeto Animal (super)

class Perro extends Animal{  //usar extends indica que extiende de la raza animal
    constructor (nombre,tipo,raza){
        super(nombre,tipo) //La palabra super me permite extender y usar el this de la clase anterior Animal
        this.raza=raza
}
emitirSonido(){
    console.log("El perro ladra")
}
correr(){
    console.log(`${this.nombre} corre feliz`)
}
}

const perro1 = new Perro('Sultan','perro', 'Pastor aleman')
console.log(perro1)
perro1.correr()

// añadir un nuevo metodo a una instancia

perro1.nuevoMetodo =function(){
    console.log(`Se ha añadido un nuevo metodo a ${perro1.nombre}`)
}
perro1.nuevoMetodo()
console.log(perro1)//mostrara todo el objeto incluyendo el nuevo metodo

// añadir un nuevo metodo a la clase constructora (cadena de objetos hasta llegar a object objeto general)
Perro.prototype.segundoNuevoMetodo = function(){//prototype solo funciona para clases constructoras Perro en este caso
    console.log(`Este es el segundo nuevo metodo`)
}

console.log(Perro.prototype)//se debe mostrar la clase padre con el nuevo metodo que ya tiene el prototype con el nuevo
// metodo
