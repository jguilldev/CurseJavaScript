// strings primitivos Al modificar no se cambia el valor original, se crea uno nuevo)
const StringPrim1 ='Soy un string '
console.log(typeof StringPrim1)


const StringPrim2 =String('Tambien Soy un string ')
console.log(typeof StringPrim2)

//String de tipo objetos
// se modifica el valor original 

const StringObjeto2 = new String('Tambien Soy un string objeto')
console.log(typeof StringObjeto2)

// acceder a caracteres 
const saludo = 'Hola como vas'

console.log(saludo[2]) // se trae el numero del indice esta seria la letra l ya que se cuenta desde 0
console.log(saludo.charAt(2)) // se trae el numero del indice con el metodo char At esta seria la letra l ya que se cuenta desde 0

// si queremos saber el numero del sitio donde esta la letra usamos indexOf
console.log(saludo.indexOf('o'))
//el retorna el valor del sitio de la "o"

// si queremos saber el numero del sitio donde comienza la letra de una palabra
console.log(saludo.indexOf('vas'))
//el retorna el valor desde donde comienza la palabra

// Cuando las palabras no estan retorna -1
console.log(saludo.indexOf('tren'))

// Para ubicar la posicion de la ultima palabra usamos lastIndexOf
console.log(saludo.lastIndexOf('o'))

//para recortar palabras de una frase s eusa slice
console.log(saludo.slice(5,9))
//Recibe 2 parametros desde el index del inicio hata la posicion final

//saber el tamaño del string
console.log(saludo.length)

//para poner todo en mayuscula toUpperCase o toLocalUpperCase
console.log(saludo.toUpperCase())
//al usar toLocaleUpperCase, se garantiza que si existen acentos propios del idioma, el
// cambio a mayusculas se conserve adecuadamente, lo cual no hace toUppercase 

//para poner todo en mayuscula toUpperCase
console.log(saludo.toLocaleLowerCase())

//Dividir un string
const saludoSplit = saludo.split('')

console.log(saludoSplit) //trae cada letra entre los caracteres para este caso ' '

console.log(saludoSplit[3]) //o puede traer la letra correspondiente al index

const saludoSinEspacios = " saludo, saludo, saludo"
console.log(saludoSinEspacios.trim())//Elimina los espacios inecesarios al principio y al final del string


const holaHola = " saludo, saludo, saludo"
console.log(saludoSinEspacios.replace('saludo', 'adios'))
//el primer argumento es la palabra a remplazar
//el segundo argumento es la palabra a reemplazada

