// for in se usa para iterar sobre objetos
//recordar los objetos tienen propiedades y valores
// color:rojo 

// color es la propiedad
// rojo es el valor 

// estructura:

// for (variable in objeto){
//     codigo a ejecutar
// }

let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "ingeniero",
    hobby: "jugar Futbol",
    }
;

for (caracteristica in persona){ //la primera palabra en el argumento "caracteristica" se bautiza por nosotros
    console.log(caracteristica)// se usa el nombre con el que se bautizo en la linea anterior
}
 
    for (caracteristica in persona){ //la primera palabra en el argumento "caracteristica" se bautiza por nosotros
        console.log(persona[caracteristica])// se usa el nombre del objeto "persona" y el nombre con 
        // el cual fue bautizado("caracteristica" in persona) entre [] para indicar que se refiere al valor y no a la propiedad
}