// Array unidimensional

let array1D = [1,2,3]

// Arrays de mas de 1 dimension

let array2D =[[1,2,3],[4,5,6],[7,8,9]]

//Array de tipo matriz
let matriz =[
    [1,2,3],
    [4,5,6], 
    [7,8,9]
]

//1.cambiar valor a elemento en la matriz

matriz[1][2]=12 //tanto filas como columnas el conteo empieza en 0
// el valor 6 es cambiado a 12
console.log(matriz)

// consultar por el valor de un elemento en la matriz
let elemento = matriz[0][0]
console.log(elemento)

//Operaciones comunes con arrays multidimensionales

//recorrer un array (mediante 2 for anidados)
for(let i=0;i<matriz.length;i++){ //un for recorre i filas
    for(let j=0;j<matriz[i].length;j++){ //otro for recorre j columnas
        console.log(matriz[i][j])}}


        function findElement(matrix, element) {
            for (let i = 0; i < matrix.length; i++) { 
              for (let j = 0; j < matrix[i].length; j++) { 
                if (matrix[i][j] === element) { 
                  return true; 
                }
              }
            }
            return false
        }

            console.log(findElement(matriz,5))//el segundo argumento seria el valor a buscar dentro de la matriz

            //Si el valor existe retorna True




    //  Duplicar una matriz

    // Función para crear una matriz duplicada
function duplicateMatrix(matriz) {
    // Inicializar una matriz vacía para almacenar la matriz duplicada
    let newMatriz = [];
  
    // Recorrer cada fila de la matriz original
    for (let i = 0; i < matriz.length; i++) {
      // Crear una nueva fila para la matriz duplicada usando el operador spread (...)
      newMatriz[i] = [...matriz[i]];
    }
  
    // Devolver la matriz duplicada
    return newMatriz;
  }
  
  // Suponiendo que tiene una variable matriz definida
  console.log(duplicateMatrix(matriz));
  


