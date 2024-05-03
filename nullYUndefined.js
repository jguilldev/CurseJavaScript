//tipo de dato Null
const dataNull= null
console.log(dataNull)
console.log(typeof dataNull)
//null se presenta de tipo objeto a causa de los errores que tiene JS

//tipo de dato Undefined
let name // no se asigana
console.log(name) //en la consola es undefined, por que no se le ha asignado valor a la variable
// existe, pero no tiene un valor definido 

// Estos valores los retorna JSON, no se usa como asignacion por parte del programador 


//Symbol
// es un valor que quiero que sea unico como un id 

const uniqueId =Symbol('unico')
const Symbol1 = Symbol(1)
const Symbol2 = Symbol(1)
console.log(Symbol1===Symbol2) //false es decir que son diferentes

// establecer identificador con <symbol 

const ID=Symbol('id')
let user ={} // se crea el objeto user
user [ID]='1234' // se establece el id para users
console.log(user)//muestra el id para el usuario en consola


//bigInt para numeros demasiado grandes
const bigNumber= 161164684654654684684684684684684684684654654646468n
//se le agrega una n al final para indicar que es un bigInt
console.log(typeof bigNumber)
console.log(bigNumber)


