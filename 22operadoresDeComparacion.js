//Operadores de comparacion 
//1. == compara entre datos

verdaderoOFalso= 3==3

console.log(verdaderoOFalso)




//2. === compara entre datos de forma estricta igualdad en el valor y el tipo de dato

let num1 = 10;
let num2 = "10";

if (num1 === num2) {
    console.log("Los números son iguales en valor y tipo de dato.");
} else {
    console.log("Los números no son iguales en valor o tipo de dato.");

    
    
    
    // 3. != este pregunta si es diferente de
}

let Nnum1 = 10;
let Nnum2 = "10";

if (Nnum1 !== Nnum2) {
    console.log("Los números no son iguales en valor o tipo de dato.");
} else {
    console.log("Los números son iguales en valor y tipo de dato.");
}



// 4. !== DESIGUALDAD ESTRICTA 

let newNum1 = 10;
let newNum2 = "10";

if (newNum1 !== newNum2) {
    console.log("Los números no son iguales en valor o tipo de dato.");
} else {
    console.log("Los números son iguales en valor y tipo de dato.");
}


// 5. > Mayor que

let n1 = 10;
let n2 = 5;

if (n1 > n2) {
    console.log("El primer número es mayor que el segundo.");
} else {
    console.log("El primer número no es mayor que el segundo.");
}

// 6. < Mayor que

let valor1 = 10;
let valor2 = 5;

if (valor1 < valor2) {
    console.log("El primer valor es menor que el segundo.");
} else {
    console.log("El primer valor no es menor que el segundo.");
}


// 7. >= Mayor o igual que

let var1 = 10;
let var2 = 10;

if (var1 >= var2) {
    console.log("El primer número es mayor o igual que el segundo.");
} else {
    console.log("El primer número no es mayor o igual que el segundo.");
}

// 8. <= Menor o igual que

// Menor o igual que (<=)
let variable1 = 5;
let variable2 = 10;

if (variable1 <= variable2) {
    console.log("El primer valor es menor o igual que el segundo.");
} else {
    console.log("El primer valor no es menor o igual que el segundo.");
}