// create objects of personajes


//creamos la funcion Constructora
function Tortugas (nombre, color, arma){ //la primera letra de la funcion constructora siempre va en mayuscula
    this.nombre = nombre
    this.color = color
    this.arma = arma
    this.lider = false

    this.displayInfo = function () { //se crea el metodo a llamar mediante una funcion
        console.log(`informacion de la tortuga
        Name: ${this.nombre}
        Color: ${this.color}
        Arma: ${this.arma}
        ${this.lider ? 'lider:Si':'lider:No'} 
        `)//Se usa un if para preguntar si es lider o no?
    }

    this.traeLider = function (){// Se crea funcion para llamar al lider
    this.lider=true //en minuscula la primera (no es python)
    console.log (`${this.nombre} es el lider de las tortugas`)
    }
}

//creamos los nuevos objetos usando la palabra new, y cambiando los argumentos
const donatello = new Tortugas ('Donatello','Purpura','Baston de combate')
const leonardo = new Tortugas ('Leonardo','Azul','Espada ninjitsu')
const raphael = new Tortugas ('Raphael','Rojo','Sai')
const michelAngelo= new Tortugas ('MichelAngelo','Naranja','Nunchakus')

donatello.traeLider() // mediante el metodo se le asigna el lider a donatello

donatello.displayInfo() //se llama el metodo creado en la funcion constructora para ver la info
leonardo.displayInfo() //se llama el metodo creado en la funcion constructora para ver la info
raphael.displayInfo() //se llama el metodo creado en la funcion constructora para ver la info
michelAngelo.displayInfo() //se llama el metodo creado en la funcion constructora para ver la info


