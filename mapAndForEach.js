// 1. map()
// permite aplicar una funcion a cada elemento de los arrays y con esos resultados
// obtener un nuevo array

const number =[ 1,2,3,4,5] //array original
console.log(number)
const squaredNumbers = number.map(num=>num*num)
console.log(squaredNumbers)//nuevo array


//for Each
//Itera sobre cada nuevo elemento, ejecutando la funcion asignada para cada elemento
//no se obtiene un nuevo array
// solo ejecuta la funcion, no modifica el array original ni genera un nuevo array

const colors =['red','blue,','green', 'orange']
const iterColors =colors.forEach(color => console.log(color))

console.log(colors)
console.log(iterColors)
