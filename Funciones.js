//estructura de una funcion
function suma (a,b){
	return a + b
}


let resultado=suma(5,6)// el return se guarda en una variable, para trerlo despues
console.log(resultado)

//ejercicio de la clase

const precio = 100
const descuentoPorcentaje = 10

function descuentoPrecio (precio, descuentoPorcentaje){
	const descuento = (precio*descuentoPorcentaje)/100
	return precioConDescuento = precio-descuento
}
const precioFinal =descuentoPrecio(precio,descuentoPorcentaje)

console.log("el precio original es:" + precio)
console.log("el porcentaje de descuento  es: " + descuentoPorcentaje + " %")
console.log("el precio final con descuento es: " + precioFinal)
console.log (typeof descuentoPrecio)