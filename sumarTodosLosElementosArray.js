const numeros =[
    1,2,3,4,5,6,7,8,9,10
]

let sumaElementosArray = 0
for (let i = 0; i < numeros.length; i++) {
    sumaElementosArray += numeros[i] // se cambia el valor del contador sumaElementosArray 
    // numeros[i] mediante += se adigna el valor de la posicion del array numeros[posicion]
}

console.log(sumaElementosArray)