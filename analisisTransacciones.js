// Análisis de transacciones
// 1. Imagina que tienes una lista de transacciones financieras y deseas realizar varias operaciones de
// procesamiento de datos. Usa las siguientes instrucciones como guía para completar el ejercicio:
// 2. Calcular el Saldo Total: - Utiliza el método reduce para calcular y mostrar el saldo total de todas las
// transacciones.
// 3. Encontrar la Transacción más Grande (Ingreso o Egreso): - Emplea el método reduce para encontrar
// la transacción con el mayor monto (ya sea ingreso o egreso) y muéstrala en la consola.
// 4. Filtrar Transacciones de Compra: - Usa el método filter para obtener y mostrar en la consola solo las
// transacciones de compra (con montos negativos).
// 5. Encontrar una Transacción por Descripción: - Utiliza el método find para buscar y mostrar en la
// consola una transacción específica por su descripción.
// 6. Encontrar el Índice de una Transacción por Monto: - Emplea el método findIndex para encontrar y
// mostrar en la consola el índice de una transacción específica por su monto.
// 7. Actualizar Descripciones de Transacciones: - Utiliza el método forEach para actualizar las
// descripciones de las transacciones. Añade el prefijo "Gasto: " a las transacciones con montos
// negativos y "Ingreso: " a las transacciones con montos positivos. Muestra las transacciones
// actualizadas en la consola.
// Recuerda adaptar y combinar estas operaciones según sea necesario.

const transacciones = [
    { id: 1, descripcion: "compra de supermercado", monto: -50 },
    { id: 2, descripcion: "venta de bicicleta", monto: 150 },
    { id: 3, descripcion: "compra de libros", monto: -30 },
    { id: 4, descripcion: "salario", monto: 2000 },
    { id: 5, descripcion: "venta de muebles", monto: 500 },
    { id: 6, descripcion: "compra de ropa", monto: -100 },
    { id: 7, descripcion: "pago de servicios", monto: -200 },
    { id: 8, descripcion: "freelance", monto: 300 },
    { id: 9, descripcion: "compra de electrónica", monto: -150 },
    { id: 10, descripcion: "regalo de cumpleaños", monto: 100 }
];

// saldo total de todas las transacciones
const calculobalanceTotal = transacciones.reduce((acc,transaccion)=>acc + transaccion.monto, 0)
console.log(`El balance total es ${calculobalanceTotal}`)

//Encontrar la transaccion con el mayor monto (ingreso o egreso)
const mayorTransaccion = transacciones.reduce((maximaTransaccion,transaccion)=>{
    return Math.abs(transaccion.monto)>Math.abs(maximaTransaccion.monto)?transaccion:maximaTransaccion
},transacciones[0]
)
console.log("la maxima transaccion es:" , mayorTransaccion)

//mostrar las transacciones de compra montos negativos mediante el metodo find
const transaccionescompra = transacciones.filter(transaccion=>transaccion.monto<0)
console.log(`Las transacciones por compras fueron:`,transaccionescompra)
