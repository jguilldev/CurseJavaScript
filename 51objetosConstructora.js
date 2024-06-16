let persona ={
    nombre: 'Guillemo',
    apellido: 'Vasquez', 
    direccion: 'transversal 7 #160 -23'
}

// Funcion constructor 
// los parametros de la funcion constructora, son las llaves de el objeto a construir

function Persona (nombre,apellido,direccion){//el nombre de la funciion constructora empieza con mayuscula(Persona)
    this.nombre = nombre // el ultimo nombre hace referencia al nombre como parametro
    this.apellido = apellido // el ultimo apellido hace referencia al apellido como parametro
    this.direccion = direccion // el ultimo direccion hace referencia a la direccion como parametro
} //this en cada uno hace referencia la objeto Persona (objeto principal)

// Crear las instancias en base al objeto persona 

const persona1 = new Persona ('Juan', 'Salgado','diagonal 300 # 0 - 82')
console.log(persona1)

// Agregar una propiedad al un objeto creado desde la funcion constructora
persona1.nacionalidad='Colombiano'
console.log(persona1)

//agregar un objeto a la funcion constructora (prototype)

Persona.prototype.saludar = function(){
    console.log(`Hola mi nombre completo es: ${this.nombre} ${this.apellido}`) //se debe usar this. ya 
    // que apunta a la funcion constructora
}

persona1.saludar()
