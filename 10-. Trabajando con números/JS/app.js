"use strict"

//Propiedades numericas

console.log('MAX_VALUE: ', Number.MAX_VALUE);
console.log('MIN_VALUE: ', Number.MIN_VALUE);
console.log('NEGATIVE_INFINITY: ', Number.NEGATIVE_INFINITY);
console.log('POSITIVE_INFINITY: ', Number.POSITIVE_INFINITY);
console.log('NaN: ', Number.NaN);

//Métodos numéricos
var numero = "10.30"
console.log('Number: ', Number(numero))
console.log('parseInt: ', parseInt(numero))
console.log('parseFloat: ', parseFloat(numero))
console.log('isNaN: ', isNaN(numero))
console.log('isInteger: ', Number.isInteger(numero))

//Propiedades numéricas de instancias
var numero = 2.5;
console.log("toExponencial: ", numero.toExponential(4));
console.log("toFixed: ", numero.toFixed(2));
console.log("toPrecision: ", numero.toPrecision(6));
console.log("toString: ", numero.toString());
