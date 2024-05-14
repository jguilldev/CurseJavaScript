
//Este codigo se debe ejecutar en la consola del navegador
let numeroUsuario = parseInt( prompt("ingresa tu numero del 1 al 10"))
console.log('el numero que digitaste es:' + numeroUsuario)

let numeroOculto = Math.floor(Math.random() * 10 + 1)

if (numeroUsuario===numeroOculto) {
    alert('Tu nacertaste el numero, el numero era: ' + numeroOculto)
} else {
    alert ('No acertaste el numero, el numero era: ' + numeroOculto)
}

