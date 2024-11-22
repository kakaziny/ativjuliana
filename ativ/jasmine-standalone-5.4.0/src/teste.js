/*function inteiro(inteiro) {
    if (inteiro % 3 == 0) {
        return "Fizz";
    }
    if (inteiro % 5 == 0) {
        return "buzz";
    
    
    
    
    return inteiro;
}


function escola(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}*/

// ex 1
// teste.js
/* 
function multiplicarTresNumeros(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error('Todos os argumentos devem ser números.');
    }
    return a * b * c;
} 
    */


// ex 2
/*
function dividir(a, b) {
    if (b === 0) {
        return "Não é possível dividir por 0";
    }
    return a / b;
} 
*/


// ex 3
/*
function celsiusFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}
*/


//ex 4
/*
function calcularMedia(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error('Todos os argumentos devem ser números.');
    }
    return (a + b + c) / 3;
} 
*/


//ex 5
/*
function contarCaracteres(str) {
    if (typeof str !== 'string') {
        throw new Error('O argumento deve ser uma string.');
    }
    return str.length;
}
*/


//ex 6
function calculadora(num1, num2, operador) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Os dois primeiros argumentos devem ser números.');
    }
    if (!['+', '-', '*', '/'].includes(operador)) {
        throw new Error('O operador deve ser "+", "-", "*" ou "/".');
    }

    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Não é possível dividir por 0.');
            }
            return num1 / num2;
        default:
            throw new Error('Operador inválido.');
    }
}






