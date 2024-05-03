const isActive =true
const hasPermision= false

// conversion implicita = conversion a booleano por el propio Js 
const resultado = 5>4
console.log(resultado)


const name= 'Guillermo'
console.log(!!name)

// l doble signo de exclamación (!!), a menudo denominado "doble negación",
//  se utiliza para convertir un valor en su equivalente booleano de manera explícita.
//   Si se coloca antes de una expresión, convierte el valor en su forma booleana.

// Un solo signo de exclamación (!) indica negación, mientras que dos signos (!!) (doble negación)
//  se utilizan para convertir el valor a su equivalente booleano.

// Dentro de la función console.log, el nombre 'name' puede aparecer subrayado en Visual Studio 
// Code (VSC) porque ese nombre de variable ya fue utilizado a nivel 
// global, es decir, se usó en otro archivo, pero dentro de la misma carpeta del proyecto.

// conversion implicita = conversion a booleano por el propio Js 
const value = 0
const otherValue =24
const explicitBoolean=Boolean(value)// establece value como false
const explicitBoolean2=Boolean(otherValue)
console.log(explicitBoolean)
console.log(explicitBoolean2)
