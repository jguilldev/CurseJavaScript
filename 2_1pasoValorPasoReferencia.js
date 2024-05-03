// Paso por valor (dato primitivo)
console.log("el Paso por valor (dato primitivo) ")

let x = 5;
console.log("el valor de x es:"+ x)


function duplicar(numero) {
    numero *= 2;
    console.log("Dentro de la función el numero se duplica:", numero);
}

duplicar(x); // se le pasa la funcion a x declarada al inicio 
console.log("Fuera de la función, el numero se mantiene:", x)

// Paso por referencia (dato complejo)
console.log("el Paso por referencia (dato complejo) ")

let miArray = [1, 2, 3];
console.log("el array es: "+ miArray)

function agregarElemento(array) {
    array.push("Nuevo elemento");
    console.log("Dentro de la función el array cambia:", array);
}


agregarElemento(miArray);
console.log("Fuera de la función, tambien cambia, es decir el array original:", miArray);
console.log("el cambio se realiza al sitio donde apunta")


console.log("(nemotecnia) Paso por valor Es copiar y pegar un archivo en windows cambiándole el contenidoPaso, por referencia Es similar  crear un acceso directo, asi los cambios que hagas en el nuevo archivo son referenciados al archivo original")