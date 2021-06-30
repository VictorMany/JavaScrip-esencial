"use strict"

//Iterando los arreglos con for ... in
var platillos = ["ceviche", "tacos", "pasta"];

for (let i in platillos) {
    console.log(platillos[i])
}

//Iterando arreglos con forEach
platillos.forEach((platillo, i) => console.log(i, platillo))

//Buscando en un arreglo
var pElegido = platillos.find(platillo => platillo == "pasta");
console.log(pElegido)

//Con estructuras un poco mas complejas
var menu = [
    { nombre: 'Ceviche', precio: 20, pais: 'Perú' },
    { nombre: 'Tacos', precio: 20, pais: 'México' },
    { nombre: 'Pasta', precio: 20, pais: 'Italia' }
]
var pElegido = menu.find(platillo => platillo.nombre == "Pasta");


console.log(pElegido)