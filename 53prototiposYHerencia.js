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