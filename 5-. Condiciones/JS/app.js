"use strict"

//CONDICIONES IF
var datoA = 20;
var datoB = 20;
var resultado = 'sin datos';

if (datoA > datoB) {
    resultado = 'La condición se cumplió';
}
else if (datoA == datoB) {
    resultado = "Segunda evaluacion verdadera";
}
else {
    resultado = 'La condición no se cumplió';
}

console.log('El resultado de la evaluación es: ', resultado);


//CONDICIONES ANIDADAS
var datoC = 21;
if (datoB == datoA) {
    if (datoC > datoA) {
        if (datoC > datoA) {
            console.log("El dato C es el mayor");
        }
    }
}

//ESTRUCTURA DE UN SWITCH
var edad = 12;
var resultado = '';

switch (edad) {
    case 10:
        console.log("La edad es 10 años");
        break;
    case 11:
        console.log("La edad es 11 años");
        break;
    case 12:
        console.log("La edad es 12 años");
        break;
    case 13:
        console.log("La edad es 13 años");
        break;
    default:
        console.log("La edad no está en el rango aceptado");
        break;
}