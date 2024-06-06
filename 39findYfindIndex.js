
// find y finIndex
// No  modifican el array original, pero ayudan a encontrar valores e indices

// 1. find 
// Devuelve el primer elemento que cumpla  con la condicion en la funcion
const num =[2,4,6,8,1,2,34,5,67,8,33,22,4,33] 

const min20 = num.find(num=>num<=20)//find devuelve el primer elemento que cumple la funcion
// en este caso el primer numero menor a 20 es 2
console.log(min20)

// 1. findIndex
// Devuelve el indice del primer elemento que cumpla  con la condicion en la funcion
const num1 =[1,2,0,33,12,22,21,18] 

const min21 = num1.findIndex(num=>num<=21)//find devuelve el primer elemento que cumple la funcion
// en este caso el indice del primer numero menor a 21 es 0
console.log(min21)