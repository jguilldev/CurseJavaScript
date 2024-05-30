// ejercicio managing a stack 

let carrito =[] //creacion del array donde se guardan los libros

const accionAgregarAlCarro = 'AñadirAlCarrito'
const accionEliminardelCarro = 'eliminarDelCarrito'
const accionVerContenidoDelCarrito = 'verContenidoCarrito'

function verContenidoCarrito(carrito) {
    console.log(`tu stack de libros esta compuesto por ${carrito}`)
}

function accionesEnCarrito(acciones, nuevoLibro){
    switch (acciones) {
        case accionAgregarAlCarro:
            carrito.push(nuevoLibro)
            break;

        case accionEliminardelCarro:
            if (carrito.length===0) {
                console.log('Tu carrito esta vacio')
            } else{
               const libroRemovido = carrito.pop()
               console.log(`El libro ha sido ${libroRemovido} removido`)
            }
            
            break;

        case accionVerContenidoDelCarrito:
            verContenidoCarrito(carrito)
            break;
    
        default:
            console.log("Debes seleccionar añadir, remover o visualizar tu carrito de compras")
            break;
    }
}

accionesEnCarrito(accionAgregarAlCarro, 'Crimen y castigo')
accionesEnCarrito(accionAgregarAlCarro, 'El tunel')
accionesEnCarrito(accionVerContenidoDelCarrito)
accionesEnCarrito(accionEliminardelCarro, 'El tunel')
accionesEnCarrito(accionVerContenidoDelCarrito)
