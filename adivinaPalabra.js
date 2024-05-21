// El usuario tiene tres intentos para adivinar la palabra oculta 

// debe haber una palabra oculta
// se debe dar una pista de la palabra
// el usuario debe ingresar una suposicion
// el usuario debe verificar si la suposicion de la palabra es correcta
// /el juego debe tener un numero limitado de intentos 
//el juego debe terminar cuando el usuario encuentre la palabra o se quede sin intentos

// el juego siguiente se debe ejecutar en la consola del browser

let word = 'Perro';
let promptMessage = '¿Quieres jugar a adivinar? Adivina el nombre de un animal:';
let wordUsuario = prompt(promptMessage);

let count = 0;

do {
    switch (true) {
        case word.toLowerCase() === wordUsuario.toLowerCase():
            console.log(`Correcto, La palabra era ${word}`);
            count = 3; // Para salir del bucle
            break;
        default:
            count++;
            if (count < 3) {
                wordUsuario = prompt(`Incorrecto, intento ${count + 1}: Ingresa el nombre del animal`);
            } else {
                console.log(`Lo siento, has agotado tus intentos. La palabra era ${word}`);
            }
            break;
    }
} while (count < 3);
