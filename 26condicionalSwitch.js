// Dependiendo del numero del dia se ejecuta el codigo en cada case

let dia = 3;
let mensaje;

switch (dia) { //como una funcion se debe pasar como argumento algo para que funcione () la expresion
  case 1:
    mensaje = 'Hoy es lunes';
    break;
  case 2:
    mensaje = 'Hoy es martes';
    break;
  case 3:
    mensaje = 'Hoy es miércoles';
    break;
  case 4:
    mensaje = 'Hoy es jueves';
    break;
  case 5:
    mensaje = 'Hoy es viernes';
    break;
  case 6:
    mensaje = 'Hoy es sábado';
    break;
  case 7:
    mensaje = 'Hoy es domingo';
    break;
  default: //Este se ejecuta en caso de que ninguno de los case se ejecuten
    mensaje = 'Día no válido';
}

console.log(mensaje); 