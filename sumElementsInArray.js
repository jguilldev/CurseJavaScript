//Un programa que crea un array de numeros como entrada y calcula la suma de todos
// los elementos de un array

const numbers= [1,4,65,32,8,1]
let sum=0

numbers.forEach(number=>{
    sum += number
})

console.log(numbers)
console.log(sum)