
// Spread operator no muta el array original

// 1.  copiar un array 
const faraonesEgipcios = ["Tutankamón","Ramsés II","Cleopatra VII",]
const copiaFaraonesEgipcios = [...faraonesEgipcios]
console.log(faraonesEgipcios)

//2. combinar un array
const fenomenosNaturales = ["Aurora boreal", "Migración de las mariposas monarca", "Erupción volcánica"]
const frutasTropicales = ["Rambutan", "Mangostán", "Durian"];

const nuevoFenomenos =[...fenomenosNaturales,...frutasTropicales]

console.log(nuevoFenomenos)

//3. agregar elementos al array con spread operator

const animalesMiticosJaponeses = ["Kitsune","Kappa","Tengu"]
  
const masUnAnimalMiticoJapones =[...animalesMiticosJaponeses,"Baku"]

console.log(masUnAnimalMiticoJapones)

// pasar parametros a una funcion

function sumar(a,b,c){
    return  a+b+c
}

const numeros =[2,4,6]

const total = sumar(...numeros)

console.log(total)

