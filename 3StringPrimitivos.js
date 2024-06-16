// Creacion de strings 
const opcion1 ='creacion de string con comillas simples'
const opcion2 ="creacion de string con comillas dobles"
const opcion3 =`creacion de string con comillas invertida`
console.log(opcion1)
console.log(opcion2)
console.log(opcion3)

// concatenacion 
const direccion = "calle"
const numero = "1,2,3"
const ciudad = "Munchen"

console.log("la direccion concatenada es: " + direccion +" "+ numero + " "+ ciudad)

// String literals 
const nombre = "Guillermo"
const pais="Colombia"
const saludo= `Hola soy ${nombre} y soy de ${pais}`

//concatenacion con join funciona para concatenar elementos de un array[]
const primera= "con esta";
const segunda= "frase"
const tercera= "se concatena"
const concatenacion =[primera,segunda,tercera]
let resultado = concatenacion.join(" ") //el argumento es el separador entre palabras
console.log(resultado) //retorna: con esta frase se concatena

//concatenacion con concat

const hobbie1 = "Jugar futbol";
const hobbie2 = "Leer";
const hobbie3 = "Tocar Guitarra";
const hobbies = "Mis Hobbies son:".concat(hobbie1, hobbie2, hobbie3);

console.log(hobbies);


