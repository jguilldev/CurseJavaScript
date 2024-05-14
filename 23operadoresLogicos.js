//Operadores logicos

// 1. Operador && (and)

let edad = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Puede conducir legalmente.");
} else {
    console.log("No puede conducir legalmente.");
}


// 2. Operador || (or)

let tieneDescuento = true;
let esClienteVIP = false;

if (tieneDescuento || esClienteVIP) {
    console.log("¡Puede obtener un descuento especial!");
} else {
    console.log("No hay descuento disponible.");
}

// 3. Operador || (not)

let llueve = false;

if (!llueve) {
    console.log("No llueve, puedes salir a pasear.");
} else {
    console.log("Llueve, es mejor quedarse en casa.");
}
