"use strict"

//Creando nuestro primer arreglo
var platillos = ["ceviche", "tacos", "pasta"];
var bebidas = new Array("Jamaica", "Chica Morada", "Pozol");

console.log(platillos, bebidas);

//Medir y acceder a un arreglo
console.log("Hay " + platillos.length + " platillos en el menú")
//Acceder a una posicion especifica
var platillo = platillos[1];
console.log("El platillo seleccionado es: " + platillo);
//Arreglos multidimensionales
var paises = ['Perú', 'México', 'Italia'];
var menu = [platillos, paises];
console.log(menu[0][0]);
//Operaciones basicas de un arreglo
console.log("Antes: ", platillos)
//--> Le damos un push
platillos.push("Tostadas");
console.log("Despues: ", platillos);
//--> Le damos pop dos veces
platillos.pop();
platillos.pop();
console.log("Despues: ", platillos);
//Formar una cadena con las partes de un arreglo
var mensaje = platillos.join();
console.log("Al ultimo: ", mensaje);
//Genercion de arreglos
var platillos = null;
//SPLIT()
var mensaje = "ceviche, tacos, pasta, guacamole";
platillos = mensaje.split(", ")
console.log("Mi arreglo generado con split es: ", platillos);
//Array from()
//Obtener un arreglo de mi HTML
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'));
var platillos = platillosHTML.map((platillo) =>
    platillo.textContent
)
console.log(platillos)

//Array.of()
var platillos = Array.of("ceviche", "tacos", "pasta", "hamburguesa");
console.log(platillos)
//Ordenando un arreglo
console.log("antes: ", platillos)
//Ordenar
platillos.sort();
console.log("despues: ", platillos)
//Ordenar el arreglo al revés
platillos.reverse();
console.log("despues: ", platillos)

//Desesctructuración de arreglos

//var platillo1 = platillos[0];
//var platillo3 = platillos[2];
//var platillo2 = platillos[1];

//var platillo1 = null;
//var platillo2 = null;
//var platillo3 = null;
//var platillo4 = null;

//Aplicando la desestructuración no tenemos que crear variable por variable
var [platillo1, platillo2, platillo3] = platillos;

console.log(platillo1, platillo2, platillo3)

