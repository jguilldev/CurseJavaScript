// Cuatro metodos mutables

// 1. splice   
const nbaPlayers = [
    'LeBron James',
    'Kevin Durant',
    'Stephen Curry',
    'Giannis Antetokounmpo'
];

console.log(nbaPlayers);

// El método splice modifica el array original. Recibe tres parámetros:
// 1. Índice de inicio (start): Comienza en el índice 2 (que es 'Stephen Curry').
// 2. Número de elementos a eliminar (deleteCount): Elimina 1 elemento a partir del índice 2 ('Stephen Curry').
// 3. Elementos a agregar: Agrega 'James Harden' en la posición donde se eliminó 'Stephen Curry'.
const removePlayer = nbaPlayers.splice(2, 1, 'James Harden');

console.log(nbaPlayers); // ['LeBron James', 'Kevin Durant', 'James Harden', 'Giannis Antetokounmpo']
console.log(removePlayer); // ['Stephen Curry']


// 2. reverse 
//invierte el orden de los eleentos

const numeros = [0,1,2,3,4,5,6,7,8,9]
console.log(numeros)
const numerosReves = numeros.reverse()
console.log(numerosReves)

//3. sort Ordena los elementos
    // sort with numbers 
    const unsortedNumbers1 = [4,18,1,62,34]
    const sortedNumbers1 =unsortedNumbers1.sort() //sort convierte a string
    console.log(unsortedNumbers1)
    console.log(sortedNumbers1) //no ordena por que esta ordenando con base a strings

    const unsortedNumbers2 = [4, 18, 1, 62, 34];
    const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b);
    // Algoritmo de ordenamiento usado dentro de los parametros de sort como una funcion "(a, b) => a - b":
    // Utilizamos una función de comparación que resta b de a (a - b).
    // Si el resultado es negativo, a se coloca antes que b.
    // Si el resultado es positivo, b se coloca antes que a.
    // Si el resultado es cero, a y b se consideran iguales y su orden relativo se mantiene.
    // Esta función de comparación ordena los números de manera ascendente.
    
    console.log("Array ordenado:");
    console.log(sortedNumbers);

    // sort whit strings ordena segun UTF-8
    const cities=['New York','Paris','Tokyo','London']
    const sortedCities=cities.sort()
    console.log(cities)
    console.log(sortedCities)

    // 4. fill  
    // reemplaza todos los elementos desde el elemento [0], hasta Array.length

    const maravillas = [    "Gran Pirámide de Giza",
    "Jardines Colgantes de Babilonia",
    "Templo de Artemisa en Éfeso",
    "Estatua de Zeus en Olimpia",
    "Mausoleo de Halicarnaso",
    "Coloso de Rodas",
    "Faro de Alejandría"]
    maravillas.fill('cerro de monserrate',0,3)
    
    // Parámetros del método fill():
    // 1. value (obligatorio): El valor con el que se rellenará el array.
    // 2. start (opcional): Índice inicial desde donde se empezará a rellenar (por defecto es 0).
    // 3. end (opcional): Índice final hasta donde se rellenará (no se incluye este índice, por defecto es la longitud del array).
    console.log(maravillas)

