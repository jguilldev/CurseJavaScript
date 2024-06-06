const participantes = [
    { id: 1, nombre: 'Juan', numero: 7 },
    { id: 2, nombre: 'Ana', numero: 3 },
    { id: 3, nombre: 'Luis', numero: 0 },
    { id: 4, nombre: 'Sofía', numero: 5 },
    { id: 5, nombre: 'Carlos', numero: 1 },
    { id: 6, nombre: 'María', numero: 8 },
    { id: 7, nombre: 'Pedro', numero: 4 },
    { id: 8, nombre: 'Laura', numero: 9 },
    { id: 9, nombre: 'Jorge', numero: 2 },
    { id: 10, nombre: 'Elena', numero: 6 }
];

function encontrarNombre(nombre) {
    const ganador = participantes.find(participante => participante.nombre === nombre);
    return ganador || 'No hay ganadores';
}

function encontrarNumero(numero) {
    const Numganador = participantes.find(participante => participante.numero === numero);
    return Numganador || 'No hay numero ganador';
}

function informacionDelGanador(ganador) {
    if (ganador !== 'No hay ganadores' && ganador !== 'No hay numero ganador') {
        console.log(`El ganador es ${ganador.nombre} con el número ${ganador.numero}`);
    } else {
        console.log(ganador);
    }
}

const nombreGanador = encontrarNombre('Ana');
const numeroGanador = encontrarNumero(3);

informacionDelGanador(nombreGanador); // Información del ganador por nombre
informacionDelGanador(numeroGanador); // Información del ganador por número
