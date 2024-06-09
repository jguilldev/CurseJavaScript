// concat 
// es un metodo de array que no modifica e array original, une 2 o mas arrays

const artistas = [`juanes`,`Silvio Rodriguez`]
const artistas2 = [`Victor Garcia`,`andres Calamaro`]

var ArtistasTodos = artistas.concat(artistas2)
console.log(ArtistasTodos)

// Usar concat para modificar mas de 2 arrays 

const numerosPares =[2,4,6,8,10]
const numerosImpares =[1,3,5,7,9]
const numerosNegativos =[-1,-3,-5,-7,-9]

const todosLosNumeros = [].concat(numerosPares,numerosImpares,numerosNegativos) // la estructura inicia con "[]"

console.log(todosLosNumeros)



