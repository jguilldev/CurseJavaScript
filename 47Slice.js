// Slice 
// NO modifica el array origina

//  selecciona solo una parte del array 

const inventosRevolucionarios = ["Imprenta", "Motor de combustión interna", "Penicilina"];

// 1. con un argumento
const elemento2y3 = inventosRevolucionarios.slice(1)//el argumento es desde que elemento, hasta el final del array
console.log(elemento2y3)

// 1. con dos argumento
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
console.log(animals.slice(2, 4)) //Selecciona partiendo desde la 2 hasta la 3, no incluye el 4 intervalo [2,4)


// slice permite usar numeros negativos, para contar de atras hacia adelante
console.log(animals.slice(1, -1))