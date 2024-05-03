// type castin y cohercion
// conversion de tipos en javaScript

// lenguajes compilados = estos se deben traducir a lenguaje maquina
// completos antes de la ejecucion
// chequeo estatico de tipos = Se chequea el valor de las variables (entero, decimal booleano) como 
// en java 

// lenguajes interpretados = estos se van traduciendo a lenguaje maquina a medida 
// que se van ejecutando
// chequeo dinamico de tipos = se chequea a medida que se ejecuta, y si encuentra un error
// para la ejecucion del programa en ese momento y detiene el error como en javaScript


// 1. conversion implicita o implicit type casting


// Esto hace que JavaScript busca solucionar de la manera mas conveniente 
const numero =2
const boolean =true
console.log (numero + boolean)
//el resultado en consola es 3 ya que java Script convirtio el true en un 1 para resolver

const sum = '3' + 4
console.log(sum)
//el resultado es 34 ya que implicitamente java script convirtio la operacion en una 
// concatenacion

const sum2 = '3' + true
console.log(sum2)
//el resultado es 3true ya que implicitamente java script convirtio la operacion en una 
// concatenacion





// 2. conversion explicita (Type Casting)
// // se convierte con aplicacion de funciones predeterminadas
// String()
// Number()
// Boolean()
// parseInt()

const numeroValor =87
const numeroValorString= String(numeroValor)
console.log(typeof numeroValorString)

const numeroString ='87'
const numeroStringtoInteger= parseInt(numeroString)
console.log(typeof numeroStringtoInteger)

const stringDecimal ='3.1416'
const numeroStringDecimaltoFloat= parseFloat(stringDecimal)
console.log(typeof numeroStringDecimaltoFloat)

//decimal o entero son de tipo number

//de binario a decimal

const binary='10001'
const binaryToDecimal=parseInt(binary,2)
//el segundo parametro indica la base del numero a convertir
console.log (binaryToDecimal)
console.log(typeof binaryToDecimal)// es de tipo number


