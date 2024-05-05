// funciones puras
// dada una entrada tenemos una misma salida

// no produce efectos secundarios sin embargo hacer lo siguiente dentro de estas operaciones
// causaria que se transformara en una funcion impura

// 1. modificar variables globales
// 2. Modificar parametros
// 3.Solicitud htttp como llamados a APIs 
// 4.Imprimir mensajes en la pantalla o consola, como console.log o alert
// 5.Manipulacion del DOM 
// 6.Obtener hora o el dia 

function sum (a,b){
    
return a+b
}

sum(3,5)

//la funcion anterior siempre tendra los mismos datos de entrada y de salida, no se modifican
//variables globales, ni parametros, no hay solicitudes http, ni se imprimen mensajes en pantalla o consola
// no se manipula el DOM, ni se obtienen horas o fechas lo que lo hace una funcion pura


// funcion impura
//imprimir en consola hace que deje de ser pura de forma inmediata
function sum2 (a,b){
    console.log('a :', a)
    return a+b
    }
    
    sum2(3,5)

    //modificar variables globales

    let total =0
    function sumaConSideEffect(a){
        total+=a
        return total
    }

    //