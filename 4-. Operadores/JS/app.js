"use strict"

//////////////////// OPERADORES ARITMETICOS  ////////////////

var datoA = 10;
var datoB = 20;

//SUMA +
var suma = datoA + datoB;
console.log('La suma de los datos es: ' + suma);

//RESTA 
var resta = datoA - datoB;
console.log('La resta de los datos es: ' + resta);

//MULTIPLICACION
var multiplicacion = datoA * datoB;
console.log('La multiplicación de los datos es: ' + multiplicacion);

//DIVISION
var division = datoA / datoB;
console.log('La división de los datos es: ' + division);

//MODULO O RESIDUO
var modulo = datoA % datoB;
console.log('El modulo de los datos es: ' + modulo);

//INCREMENTO
var incremento = datoA;
incremento++;
console.log('El incremento del valor nos da : ' + incremento);


//DECREMENTO 
var decremento = datoA;
incremento--;
console.log('El decremento del valor nos da : ' + decremento);

//////////////  Operadores relacionales //////////////////////
//MAYOR QUE
var mayorQue = datoA > datoB;
console.log('Dato A mayor que dato B ', mayorQue);
//MENOR QUE
var menorQue = datoA < datoB;
console.log('Dato A menor que dato B ', menorQue);
//IGUAL QUE
var igualQue = datoA == datoB;
console.log('Dato A igual que dato B ', igualQue);
//DIFERENTE QUE
var diferenreQue = datoA != datoB;
console.log('Dato A diferente que dato B ', diferenreQue);


////////////// Operadores Lógicos //////////////////////
//OPERADOR AND
var and = (datoA > 10 && datoB > 10);
console.log('Evaluación and ', and);
//OPERADOR OR
var or = (datoA > 10 || datoB > 10);
console.log('Evaluación or ', or);
//OPRADOR NOT
var not = !(datoA > 10);
console.log('Evaluación not ', not);


///////////////// Operadores de asignación //////////////////////
var igual = datoA;
console.log('El resultado de la asignación simple es: ', igual);
var masIgual = 10;
masIgual += datoA;
console.log('El resultado de la asignación simple es: ', masIgual);
var menosIgual = 10;
menosIgual -= datoA;
console.log('El resultado de la asignación simple es: ', menosIgual);
var porIgual = 10;
porIgual *= datoA;
console.log('El resultado de la asignación simple es: ', porIgual);
var entreIgual = 10;
entreIgual /= datoA;
console.log('El resultado de la asignación simple es: ', entreIgual);


//////////////// OPERADOR NEGATIVO ////////////////////
datoB = -datoA;
console.log("El valor de dato B después del operador negativo es: ", datoB);


/////////// OPERADOR TERNARIO O CONDICIONAL ////////////
var resultado = datoA > datoB ? 'Es mayor el dato A' : 'Es mayor el dato B';
console.log(resultado);

//////////// VALIDAR EL TIPO DE DATO ////////////////////////////
var nombre = 'Victor';
var edad = 33;
var casado = false;
var estatura = 1.86;
var persona = {
    nombre: nombre,
    edad: edad,
    casado: casado,
    estatura: estatura
}
var nombre = 'Victor';
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof casado);
console.log(typeof estatura);
console.log(typeof persona);