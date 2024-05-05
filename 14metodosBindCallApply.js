// Tres metodos para cambiar el contexto de ejecucion

const dueño = 'Jose';
const direccion = 'parque';

function saludoPerro(dueño, direccion) {
  console.log(`Hola yo me llamo ${this.nombrePerro} mi dueño se llama ${dueño} y mi dirección es ${direccion}`);
}

const dogname = {
  nombrePerro: 'Chispita',
};

// 1. usando call
saludoPerro.call(dogname, dueño, direccion);

// 2. usando apply

// recibe dos parametros, primero contexto de ejecucion 
// y segundo los demas valores (objetos) necesarios 
// Se pueden guardar estos objetos en un array 

const valoresNecesarios = [dueño,direccion] //Array
saludoPerro.apply(dogname,valoresNecesarios) //apply usando los dos parametros explicados

// 3. usando bind
//retorna una nueva funcion
 const bindingWithBind =saludoPerro.bind(dogname,dueño,direccion)
console.log(bindingWithBind) //en la ejecucion de codigo se ve la nueva funcion
bindingWithBind() //muestra el string con la frase
