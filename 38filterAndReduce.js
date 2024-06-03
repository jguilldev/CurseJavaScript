// Filter y reduce 
//  No modifican el, array original

// 1. filter 
// Cada elemento del array se pasa por una funcion, esta funcion debe ser una condicion
// si la condicion se cumple se crea un nuevo array con los elementos que pasaron dicha condicion

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const numberPair = numbers.filter(number=>number%2===0)

console.log(numbers)
console.log(numberPair)

// 2.Reduce
// Reduce todos los elementos del array a un solo valor

const numbers2 =[1,2,3,4,5]
const sum = numbers2.reduce((accumulator,currentValue)=>accumulator + currentValue, 0)
// reduce(acumulador,currentValue,initializator)
//recibe 2 parametros acumulador, currentValue
// acumulador es como una variable que va almacenando

console.log(numbers2)
console.log(sum)


//reduce 
// Que tanto se repite un objeto en un array

const words =["sol","perro","casa","sol","luna","libro","sol","ciudad","sol","río"]
console.log(words)

const frequency =words.reduce((acc,cuVal)=>{
  if (acc[cuVal]) {
    acc[cuVal]++
  }  else{
    acc[cuVal]=1
  }
  return acc
},{})

console.log(frequency)