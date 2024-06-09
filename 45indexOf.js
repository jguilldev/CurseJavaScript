// indexOf
// retorna el indice del elemento que cumple con la condicion

const colores = ['amarillo','azul','rojo','verde']

const indiceVerde = colores.indexOf('verde')
const indiceNoExiste = colores.indexOf('naranja')
console.log(indiceVerde)//retorna 3 el indice del elemento del array donde esta la palabra 'verde'
console.log(indiceNoExiste)//retorna -1 si envismos un valor que no existe