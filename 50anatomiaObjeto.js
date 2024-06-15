// 1. objeto
//estructura de datos. dos valores generales
// key: Propiedad
// value:Valor

// estuctura
// nombreObjeto{
//     propiedad=valor
// }

carro={
    marca:"Ferrari",
    color:"rojo"
}
console.log(carro)

//se pueden poner objetos dentro de objetos
const estudiante = {
    nombre: "Juan Pérez",
    edad: 25,
    direccion: {
      calle: "Calle Mayor 123",
      ciudad: "Ciudad del Sol",
      pais: "Colombia"
    },
    cursos: ["Matemáticas", "Física", "Informática"]
  };

  //metodos de los objetos (tambien tienen metodos)

  const guitarristas = {
    JimiHendrix: "Fender Stratocaster",
    AngusYoung: "Gibson SG",
    KirkHammett: "ESP LTD MH-2",
    JimmyPage: "Gibson Les Paul",
    tocar(){
        console.log(`la mejor guitarra es la de ${this.KirkHammett}`)// se debe usar this para referenciar al objeto
    }
  }

  console.log(guitarristas)

    // consumir los valores dentro de el objeto
 
  console.log(guitarristas.JimmyPage)
  guitarristas.tocar()//Se debe llamar al metodo como una funcion es decir con ()

//   agregar una propiedad al objeto

guitarristas.EricClapton="Fender Stratocaster"
console.log(guitarristas)

//   agregar una funcion al objeto

guitarristas.saludar = ()=>{
    console.log(`Hola`)
}
 
console.log(guitarristas)

// llegar a un objeto dentro de un objeto (Aqui se usa el objeto estudiante)

console.log(estudiante.direccion.pais)

// borrar un metodo 

delete carro.color
console.log(carro)

// una vez asignado un metodo a un objeto no se puede borrar, la solucion seria asignarlo como un undifined
