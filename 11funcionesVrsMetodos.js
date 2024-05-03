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
const funcionGuardadaEnVariable =function(){}  //esta funcion establecida mediante const no necesita nombre dentro de la estructura de la funcion


// 4. las funciones pueden tener PROPIEDADES Y METODOS 

function uno (){}
const obj ={}
uno.call(obj) //call es uno de los metodos por defecto, pero hay mas

// Aquí, la función uno() se define pero no se utiliza en ningún otro lugar del código. Además, se crea un objeto vacío llamado obj. Luego, se llama a uno.call(obj).
// // Como uno() no hace nada en particular y obj está vacío, esta llamada a uno.call(obj) tampoco tiene ningún efecto observable en el código. Esto se debe a que uno() no utiliza this para hacer referencia a propiedades o métodos del objeto obj.
// // En resumen, el efecto de este fragmento de código es crear una función llamada uno y un objeto vacío llamado obj, y luego llamar a uno con this establecido en obj, aunque no hay ningún comportamiento definido dentro de uno, por lo que el
//  resultado final sigue siendo sin cambios.

// METODOS 

// La propiedad name devuelve el nombre de la función como una cadena de texto. Por ejemplo:

function miFuncion() {}
console.log(miFuncion.name); // Salida: "miFuncion"

// La propiedad length devuelve la cantidad de parámetros que se esperan que la función acepte. Por ejemplo:

function sumar(a, b) {}
console.log(sumar.length); // Salida: 2

// La propiedad prototype es utilizada principalmente en la programación orientada a objetos en JavaScript.
// Permite agregar nuevas propiedades y métodos a todas las instancias de objetos creados por la función 
//constructora. Por ejemplo:

function Persona(nombre) {
    this.nombre = nombre;
  }
  
  Persona.prototype.saludar = function() {
    console.log('Hola, soy ' + this.nombre);
  };
  
  var juan = new Persona('Juan');
  juan.saludar(); // Salida: "Hola, soy Juan"


//   5 Anidar funciones => Nested Functions

function primeraAnidada (){
    function segundaAnidada () {
        function terceraAnidada (){

        }
    }
} //tambien se pueden llamar dentro de ellas mismas


// 6 las funciones tambien pueden funcionar como metodos de un objeto 

const objeto ={
    nombre : "airbus",
    mensaje : function lanzarMensaje(){
        console.log("Go rocket go")
    }

}
 objeto.mensaje()

  