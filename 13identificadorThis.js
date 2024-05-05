//Para vincula una funcion con un objeto


// Enlace implicito o implicit biding

const house ={
    dogName:'fido',
    dogGretting: function(){
        console.log(`hola I am ${this.dogName}`) //Para interpolar siempre se usan comillas invertidas
    }// en este caso this hace referencia a propiedades que se encuntran dentro del mismo objeto 
    // de la funcion

}

house.dogGretting()

//Enlace explicito Explicit binding


// Si existiera la funcion saludar perro como PRIMER objeto y la funcion nuevaCasa como SEGUNDO objeto
// estas se pueden casi combinar usando el metodo CALL asi:

function saludarPerro(){
    console.log(`hola I am ${this.nombrePerro}`) // Dentro de esta funcion no existe nombrePerro
}

const newHouse={
    nombrePerro :'Chispita', //Dentro de este objeto si existe el nombrePerro
}

saludarPerro.call(newHouse) //esto llama a el segundo objeto, el cual si tiene nombrePerro
