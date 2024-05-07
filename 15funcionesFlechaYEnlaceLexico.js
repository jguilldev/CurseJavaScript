
// expression function expresion de funcion 
const saludar = function (name){
    return  ` hola, ${name}`
}

// Arrow function retorno explicito
const nuevosaludar = (name)=> {
    return  ` hola, ${name}`
}

// Arrow function retorno implicito (elimina el return y las llaves{})
const nuevosaludar1 = (name)=> ` hola, ${name}`// si es un solo parametro podemos quitar parentesis (name)

// lexical binding 


const fictionalCharacter ={
    nombre: 'Guillermo',
    // con una funcion tradicional 
    messageWithTraditionalFunction: function(message){
        console.log(`${this.nombre} dice ${message}`)
    },
    // con una funcion arrow (no genera enlace lexico)
    messageWithArrowFunction:(message)=>{
        console.log(`${this.nombre} dice ${message}`)
        // El console.log genera undefined en el this.nombre 
    }
}

fictionalCharacter.messageWithTraditionalFunction ('Este es un metodo con una funcion tradicional')
fictionalCharacter.messageWithArrowFunction('Este es un metodo con arrow function')


