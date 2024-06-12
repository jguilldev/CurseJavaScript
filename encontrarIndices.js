const objetosMagicos = [
    "Espada Maestra (The Legend of Zelda)",
    "Anillo Único (El Señor de los Anillos)",
    "Pokebola (Pokémon)"
];

const elemento = "Espada Maestra (The Legend of Zelda)";

function encontrarIndice(objetosMagicos, elemento) {
    const primerIndice = objetosMagicos.indexOf(elemento);
    const ultimoIndice = objetosMagicos.lastIndexOf(elemento);
    
    if (primerIndice === -1) {
        return -1;
    }
    
    return {
        primerIndice: primerIndice,
        ultimoIndice: ultimoIndice
    };
}

const resultado = encontrarIndice(objetosMagicos, elemento);
console.log(resultado); // { primerIndice: 0, ultimoIndice: 0 } o -1 si no se encuentra
