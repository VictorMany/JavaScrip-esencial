"use strict"

//Variable
var nombre = 'Victor';
console.log(nombre);

//Constante
const pi = 3.141615
console.log(pi);
//No se puede cambiar el valor de pi


function saludo() {
    let nombre = 'Manuel';
    console.log(nombre);

    let edad = 21;
    console.log(edad);

}
//Me va a dar error porque la edad es una variable local de mi funcion saludo
//console.log(edad);

saludo();