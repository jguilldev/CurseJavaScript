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
