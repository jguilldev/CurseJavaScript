// Ganador del torneo algorítmico
// Está teniendo lugar un torneo algorítmico en el que equipos de programadores compiten entre sí para resolver
// problemas algorítmicos lo más rápido posible. Los equipos compiten en un formato de todos contra todos,
// donde cada equipo se enfrenta a todos los demás. Solo dos equipos compiten entre sí en cada enfrentamiento,
// y en cada competición, un equipo es designado como equipo local, mientras que el otro es el equipo visitante.
// Siempre hay un claro ganador y perdedor en cada competición, sin empates. Los equipos obtienen 3 puntos
// por una victoria y 0 puntos por una derrota. El ganador general del torneo es el equipo con la mayor cantidad
// de puntos.
// Tu tarea es escribir una función que determine al ganador del torneo en función de los resultados de las
// competiciones. La entrada consta de dos arrays: competitions y results. El array competitions contiene
// pares de equipos representados como [equipoLocal, equipoVisitante], donde cada equipo es una cadena de
// hasta 30 caracteres. El array results indica el ganador de cada competición correspondiente en el array
// competitions. Específicamente, results[i] denota el ganador de competitions[i], donde un 1 en el array results
// significa que el equipo local ganó y un 0 significa que el equipo visitante ganó.
// Se garantiza que exactamente un equipo ganará el torneo, y cada equipo competirá contra todos los demás
// equipos exactamente una vez. Además, se garantiza que el torneo siempre tendrá al menos dos equipos.

  // Arreglo que contiene pares de equipos representados como `[equipoLocal, equipoVisitante]`
  const competidores = [//a los que nos gusta el futbol sabemos que siempre se escribe primero el local
    ["JavaScript", "Python"], //este es el array [0]

    ["C++", "C#"],//este es el array [1]

    ["Swift", "Go", ],//este es el array [2]
  ];
  
  // Arreglo que indica el ganador de cada competición en `competiciones`
  // El array resultados denota el ganador de la competicion 
  const resultados = [0, 0, 1];

  //competidores[0] = a 0, es decir que entre ["JavaScript", "Python"] gano el visitante python
  //competidores[1] = a 0, es decir que entre ["C++", "C#"] gano el visitante C#
  //competidores[2] = a 0, es decir que entre ["Swift", "Go", ] gano el local Swift

// Función para determinar al ganador de un torneo algorítmico
function ganadorTorneo(competiciones, resultados) {
    const puntuaciones = {};// Inicializa un objeto vacío para almacenar las puntuaciones de cada equipo

    let ganador = '';// Inicializa una variable vacía para almacenar el nombre del equipo ganador
  
    // Recorre cada competición en el arreglo `competiciones`
    for (let i = 0; i < competiciones.length; i++) {
      // Desestructura el arreglo actual de la competición para obtener los nombres de los equipos local y visitante
      const [equipoLocal, equipoVisitante] = competiciones[i]; //para esto debes entender destructuracion de arrays
      // que creo que hasta donde vamos en este curso no se ha visto, o debo repasar esa clase jejej
      // la destructuracion permite asignar elementos de un array a variables individuales
      //es decir se toma equipoLocal, equipoVisitante directamente del array principal [competidores]

      // Determina el equipo ganador de la competición actual
      const equipoGanador = resultados[i] === 0 ? equipoVisitante : equipoLocal;
      // si el resultado es 0 se asigna equipoVisitante  a la constante equipoGanador
      // de lo contrario e asigna equipoLocal a la constante equipoGanador
  
      // Actualiza la puntuación del equipo ganador en el objeto `puntuaciones`
      puntuaciones[equipoGanador] = (puntuaciones[equipoGanador] || 0) + 3;
      //primero se accede al elemento [equipoGanador] del objeto puntuaciones que se inicializo vacio antes
      // como esta linea const equipoGanador = resultados[i] === 0 ? equipoVisitante : equipoLocal;
      //  ya corrio en el programa 
  
      // Compara la puntuación del equipo actual con el ganador actual o con el valor inicial vacío
      if (!ganador || puntuaciones[equipoGanador] > puntuaciones[ganador]) {
        // Si la puntuación del equipo actual es mayor o no hay un ganador actual, actualiza la variable `ganador`
        // la primera condicion !ganador contiene un string vacio si es asi volvera TRUE o usando
        // el operador logico or (||)
        // evaluando la segunda parte, accede a las puntuaciones del equipo ganador (puntuaciones[equipoGanador] ),
        //  y a la puntuacion del equipo que esta almacenado en la variable ganador puntuaciones[ganador])

        ganador = equipoGanador;// despues de evaluar la condicion de la linea anterior se asigna equipo ganador
        // a la variable ganador
      }
    }
  
    // Devuelve el nombre del equipo ganador
    return ganador;
  }
  

  // Ejecuta la función equipoGanador  que contiene el for para determinar el ganador del torneo
  const equipoGanador = ganadorTorneo(competidores, resultados);
  
  // Imprime el nombre del equipo ganador mediante string literals
  console.log(`El equipo ganador del torneo es: ${equipoGanador}`);
  