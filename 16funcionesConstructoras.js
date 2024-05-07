function Rocket(nombre){  //los nombres de las funciones constructoras van en mayuscula
    ///Se puede agregar otro parametro, "mensajePropio" y pasarlo como argumento en la linea 5
    this.name= nombre 
    this.launchMessage = function(){
        console.log('Start launch ') ///"mensajePropio" aqui
         }
}

const falcon9Rocket = new Rocket ('falcon9') //La creacion de un nuevo objeto se hace con new 
///Aqui podriamos usar el mensajepropio pasandolo como segundo argumento linea 9
const falconHeavyRocket = new Rocket ('falcon Heavy')
///Aqui podriamos usar el mensajepropio pasandolo como segundo argumento linea 11
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage()) // no olvidar que launchMessage es una funcion y necesita()
//  para ejecutarse


// con arrow function no se puede usar "new" para crear nuevos objetos
// pero si se pueden crear objetos



// OBJETOS CON ARROW FUNCTION

// dentro de la estructura de los corchetes se usan ({})
const objetosConArrowFunction = (nombre, mensajePropio) => ({
  nombre: nombre,
  launchMessage: mensajePropio() //hay que usar () para que se ejecute la funcion
});

const personalizacionDelMensajeParaArrowFunction = () => 'lanzamiento realizado';
const falcon9Rocket1 = objetosConArrowFunction('falcon', personalizacionDelMensajeParaArrowFunction);

console.log(falcon9Rocket1.nombre); // 'falcon'
console.log(falcon9Rocket1.launchMessage); // 'lanzamiento realizado'