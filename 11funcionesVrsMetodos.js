// Capacidades que tienen las funciones similares a los objetos

// 1. Pasar las funciones como argumentos=>callback 
// Una funcion completa se puede pasar como parametro de otra funcion 

function primeraFuncion(){

}
function segundaFuncion(primeraFuncion){

}

//2. retornar funciones
function a(){
    function b (){
    }
    return b
}

//3.Asignar funciones a variables (expresion de funcion)
const a =function(){}  //esta funcion establecida mediante const no necesita nombre dentro de la estructura de la funcion
