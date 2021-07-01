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
    { nombre: 'Quesadillas', precio: 20, pais: 'México' },
    { nombre: 'Pasta', precio: 19, pais: 'Italia' }
]
var pElegido = menu.find(platillo => platillo.nombre == "Pasta");
console.log(pElegido);

//Filtrar arreglos--> Crea un arreglo nuevo
var pElegidos = menu.filter(platillo => platillo.pais == "México");
console.log(pElegidos);

//Validacion de los elementos de un arreglo (minimo uno de los elementos) --> Retorna un booleano
var resultado = menu.some((platillo) => platillo.precio < 20)
console.log(resultado)
//Validacion de los elementos de un arreglo (Todos los elementos) --> Retorna un booleano
resultado = menu.every(platillo => platillo.precio < 20)
console.log(resultado)
