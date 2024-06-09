// Spread Operator [...]
// es un metodo de array que no modifica e array original, une 2 o mas arrays 

const instrumentos = ["Hang", "Didgeridoo", "Arpa de boca"]
const animalesFascinantes = ["Quokka", "Aye-aye", "Narval"]
const objetosEspaciales = ["Agujero negro", "Nebulosa", "Estrella de neutrones"]

function instruanimales (instrumentos,animalesFascinantes){
    return [...instrumentos,...animalesFascinantes]//los dos elementoas a combinar deben tener el "..."
}

const resultado = instruanimales(instrumentos,animalesFascinantes)
console.log (resultado)

// Ejercicio 2

function EspacioAnimales(animalesFascinantes,objetosEspaciales){
    return [...instrumentos,...objetosEspaciales]
}

const resultado2 = EspacioAnimales(animalesFascinantes,objetosEspaciales)
console.log (resultado2)

// Los strings con spread operator se descomponen en letras cuando se combinan con otro dato

const numeros =[1,2,3]
const palabra = 'serendipia'

const combinacion =[...numeros,...palabra]
console.log(combinacion) 