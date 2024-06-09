// los metodos every y some permiten evaluar si se cumple con una condicion

// 1. every 
//no modifican el array y retornan un boolean, su parametro es una funcion

const numeros =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const multiplos3 = numeros.every((numero)=>numero%3===0)
console.log(multiplos3) //retorna false ya que todos los numeros no son multiplos de 3

const tipoNumero = numeros.every((numero)=>typeof Number)
console.log(tipoNumero) //retorna True ya que todos son tipo numero

// 2. some 
// returna True si al menos 1 cumple con la condicion 

const esPar = numeros.some((numero)=>numero%2===0)
console.log(esPar)//retorna True ya que al menos un numeto es par


