"use strict"

//Ciclos
var productos = 5;

//CICLO FOR
for (var i = 0; i < productos; i++) {
    console.log("Producto # " + i);
    //Usar un debugger del ciclo en la consola del navegador
    debugger;
}
//CICLO WHILE
while (productos > 0) {
    console.log('Producto vendido');
    productos--;
    debugger;
}
//CICLO DO WHILE
do {
    console.log('Producto agregado');
    productos++;
    debugger;
}
while (productos < 5)

//CONTINUE
var contador = 0;
var cuenta = 0;

for (contador = 0; contador <= 20; contador++) {
    if (contador == 5) {
        //El flujo se rompe si la condicion del contador es igual a 5
        break;
    }
    if (contador % 2 == 0) {
        //si se cumple la condición se salta lo siguiente y vuelve a aevaluar en el ciclo
        continue;
    }
    cuenta++;
}