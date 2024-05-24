//Para manipular arrays se usan varios metodos, pero unos son mutables y otros inmutables

//1. mutables
// Luego de la aplicacion del metodo se crea un nuevo array 

const jugadores =['James Rodriguez','Falcao Garcia','Luis Diaz']
console.log(jugadores)

jugadores.push('Oscar Cordoba')
console.log(jugadores) // al ejecutar el codigo nuevamente el array original fue cambiado, modificado o muto

//2. Inmutables

const perros = ['Akita','Siberiano','Pastor Aleman','Gran Danes']
console.log(perros)

const jugadoresyPerros=[jugadores.concat(perros)] // Se debe crear un nuevo array para modificar
console.log(jugadoresyPerros)


// Métodos Mutables
// Los métodos mutables modifican el array original:

// push(): Añade uno o más elementos al final del array.
// pop(): Elimina el último elemento del array.
// shift(): Elimina el primer elemento del array.
// unshift(): Añade uno o más elementos al principio del array.
// splice(): Añade, elimina o reemplaza elementos del array.
// sort(): Ordena los elementos del array en su lugar y devuelve el array.
// reverse(): Invierte el orden de los elementos del array en su lugar.



// Métodos Inmutables
// Los métodos inmutables no modifican el array original, sino que devuelven un nuevo array o valor:

// concat(): Devuelve un nuevo array que es la combinación del array original con otros valores o arrays.
// slice(): Devuelve una copia superficial de una parte del array en un nuevo array.
// map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array.
// filter(): Crea un nuevo array con todos los elementos que pasan una prueba implementada por una función.
// reduce(): Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor.
// reduceRight(): Aplica una función a un acumulador y a cada valor del array (de derecha a izquierda) para reducirlo a un solo valor.
// find(): Devuelve el primer elemento que pasa una prueba.
// findIndex(): Devuelve el índice del primer elemento que pasa una prueba.
// includes(): Comprueba si un array contiene un valor específico.
// indexOf(): Devuelve el primer índice en el que se puede encontrar un elemento.
// join(): Une todos los elementos de un array en una cadena.
// every(): Comprueba si todos los elementos del array pasan una prueba.
// some(): Comprueba si al menos uno de los elementos del array pasa una prueba.


// Checkeara si un array es un array 

const esUnArray= Array.isArray(perros)
console.log(esUnArray) //producira un true
