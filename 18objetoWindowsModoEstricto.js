// este codigo interactua con el HTML en el Browser
// el codigo siguiente se debe de ejecutar en la consola del browser


// CASO 1

function favoriteCharacter() {
    console.log(`I am ${this.name}`)
}
const character = {
    name:batman,
    age:30
}

favoriteCharacter()
// la respuesta en la consola sera undifined

// CASO 2 

// si usamos el codigo siguiente en la consola de windows
function whoIsThisInTheBrowser() {
    console.log(this)
}
whoIsThisInTheBrowser() //apuntara al objeto window desde el browser

// CASO 3 

window.name='batman' //this en el browser hace referencia al objeto global window

function siCorre (){
    console.log(this.name)
}

siCorre() //ahora si recibiremos como respuesta BATMAN


// caso 4 
// Prara no hacer referencia dentro ddel browser al objeto window mediante el this 
// se usa el modo estricto 'use strict'

'use strict'

function conModoStricto (){
    console.log('${this.name')
}

//causaria error en el browser, ya que se esta usando el modo estricto