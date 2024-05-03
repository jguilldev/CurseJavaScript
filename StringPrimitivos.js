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

//concatenacion con join
const primera= "con esta";
const segunda= "frase"
const tercera= "se concatena"
const concatenacion =[primera,segunda,tercera]

//concatenacion con concat

const hobbie1 = "Jugar futbol";
const hobbie2 = "Leer";
const hobbie3 = "Tocar Guitarra";
const hobbies = "Mis Hobbies son:".concat(hobbie1, hobbie2, hobbie3);

console.log(hobbies);

//caracteres de escape

// 1. alternar comillas 
const AlternarComillas = " ´Hola´ Se pueden alternar comillas"
console.log(AlternarComillas)
// 2.usar barra invertida 
const conBarraInv = " \"Hola\" la barra invertida va justo antes del caracter a escapar";
console.log(conBarraInv)

// 3.Template literals 
const mensaje = 'Esta es una cadena con una comilla invertida escapada: `';
console.log(mensaje);

// escribir strings largos \n

const poema ="Noche como ésta, y contemplada a solas \n"  +
"No la puede sufrir mi corazón: \n" +
"Da un dolor de hermosura irresistible \n"+
"Un miedo profundísimo de Dios. \n"+
"Rafael Pombo \n"

console.log(poema)

