//los datos primitivos son:

// strings cadenas de texto 
// numbers numeros
// datos booleanos true y false
// null valores nulos
// undefined es un tipo de dato no definido
// Symbol elementos unicos
// biginit numeros demasiado grandes


// los datos complejos

// Object un objeto con sus caracteristicas
// Array un listado de un grupo
// function una accion reutilizable




// Tipos de datos

// Datos primitivos

// inmutables
// Se pasan por valor

let datoPrimitivo= 10
console.log("el dato primitivo original es " + datoPrimitivo)
datoPrimitivo=datoPrimitivo+10
console.log("El dato primitivo " + datoPrimitivo + " cambio al sumarle 10 por que SE CREA UN NUEVO VALOR y funciona con todos los datos primitivos")

//Datos complejos

// mutables
// Se pasan por referencia

let datoComplejo= {nombre: "Guillermo", edad:37}
console.log("el dato complejo originalmente es "+ datoComplejo.nombre + " " + datoComplejo.edad)
datoComplejo.edad=38
console.log(datoComplejo)
console.log("El dato complejo " + datoComplejo.nombre + " " + datoComplejo.edad + " cambio por que NO crea un nuevo valor sino que cambia el original")
console.log("y asi pasa con los datos complejos")