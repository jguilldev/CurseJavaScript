// estructura
// Array.forEach((item)=>{
//     codigo a ejecutar
// })


let animals = ["perro", "gato", "raton", "tortuga", "serpiente"]

animals.forEach((item)=>{ //se paso como parametro la arrow function con el codigo a ejecutar
                        //el parametro de la arrow function define el nombre "Item" en este caso
    console.log(item) //codigo a ejecutar como parametro se llama el nombre definido en el parametro de 
    // la arrow function para este caso "item"
})