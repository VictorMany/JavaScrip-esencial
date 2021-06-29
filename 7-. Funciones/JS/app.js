//"use strict"

//FUNCIONES
function saludar() {
    var saludo = 'Hola mundo';
    console.log(saludo)
}

saludar();

//FUNCIONES con parametros
function saludar2(nombre, edad) {
    console.log("Nombre", nombre)
    console.log("Edad", edad);
    var resultado = 'Su nombre es: ' + nombre + " y su edad es: " + edad;
    return resultado;
}

saludar();
console.log(saludar2('Victor', 21));


//FUNCIONES CON PARAMETROS PREINICIALIZADOS
function contar(cantidad = 20) {
    console.log('Total: ' + cantidad)
}
//El parametro mas importante es el que le envias por parametros
contar(100);

//PARAMETROS REST
function cocinar(in1, in2, ...restoIngredientes) {
    console.log(in1, in2, restoIngredientes);
}

cocinar("Tomate", "Cebolla", "Jitomate", "Lechuga", "Pepino");

//SPREAD OPERATOR
function cocinar2(in1, in2, in3, ...otros) {
    console.log(in1, in2, in3, otros);
    console.log(otros);
}
var ingredientesBase = ['pollo', 'tomate'];
cocinar2(...ingredientesBase, "Jitomate", "Lechuga", "Pepino", 'chile', 'pescado');


//FUNCIONES ANONIMAS
//tenemos que quitar el use strict
(
    function () {
        var mensaje = 'Hola desde una funcioón anónima';
        console.log(mensaje);
    }
)()
//oTRA FORMA DE FUNCION ANONIMA
var saludar = function () {
    return ('Hola desde una función');
}

//CALLBACKS
function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB;
    var resta = datoA - datoB;
    restarCB(resta);
    sumarCB(suma);
}
//Estas funciones reciben de parametros otreas funciones
calcular(2, 3, function (resultado) {
    console.log("Suma", resultado);
}, function (resultado) {
    console.log('Resta', resultado);
})
//FUNCIONES ARROW
var saludar = nombre => 'Hola ' + nombre

console.log(saludar("Susana"));
//Mas de un parametro
var sumar = (n1, n2) => (n1 + n2)
console.log(sumar(1, 2));
//ningún parametro
var saludar3 = () => {
    console.log('saludar')
}

const boton = document.querySelector('.boton');

/*
boton.addEventListener('click', function () {
 console.log('boton pulsado');
})

*/

boton.addEventListener('click', () => {
    console.log(this)
})