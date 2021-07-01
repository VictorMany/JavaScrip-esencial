"use strict"

//Version de antes
//Trabajando con clases
/*
function Pantalla(marca, modelo, pulgadas) {
    this.marca = marca;
    this.modelo = modelo;
    this.pulgadas = pulgadas;
}

Pantalla.prototype.encendido = function () {
    console.log(`La pantalla ${this.marca} se ha encendido`);
}
Pantalla.prototype.volumen = function () {
    console.log(`El volumen se ha modificado`);
}
Pantalla.prototype.info = function () {
    console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
}

const tvsala = new Pantalla('Master', 'Oasis', 55)
const tvHabitacion = new Pantalla('Origin', 'Artesic', 80)*/

//vERSIÓN MAS ACEPTADA

class Producto {
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }

    //Static --> nos permite acceder al método sin tener que hacer una instancia del método --> Incluso desde la clase del Hijo (Pantalla.infoTienda)
    static get infoTienda() {
        console.log('Productos de la tienda de vicmangoou Inc')
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }
    get garantia() {
        return this.tiempoGarantia;
    }


}

//Definimos que la clase padre es el Producto
class Pantalla extends Producto {
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie);
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        console.log(`La pantalla ${this.marca} se ha encendido`);
        this.garantia = 1;
    }
    volumen() { console.log(`El volumen se ha modificado`); }
    info() { console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`); }

    set peso(value) {
        this.kgs = value.trim();
    }
    get peso() {
        return this.kgs;
    }
}
const tvsala = new Pantalla('13579', 'Master', 'Oasis', 55)
const tvHabitacion = new Pantalla('13589', 'Origin', 'Artesic', 80)
