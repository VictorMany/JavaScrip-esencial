"use strict"

//Causar errores de adrede
try {
    var array = new Array(100000000000);
} catch (error) {
    console.log(error)
}

//Mandando el error con el mensaje
try {
    var x = y
} catch (error) {
    console.log(error.message)
}

//Mandando el error con el nombre
try {
    decodeURIComponent("http://%ominio.com");
} catch (error) {
    console.log(error.name)
}

var valor1 = 10;
var valor2 = 20;

try {
    if (valor1 > valor2) {
        console.log(`Mensaje de validacion: ${valor1} si es mayor que ${valor2}`);
    }
    else {
        //Detonar un error planeado por el programador
        throw new Error(`${valor1} no es mayor que ${valor2}`)
    }
} catch (error) {
    console.log(error)

}


//DEPURANDO el codigo CON EL NAVEGADOR CON BREAKPOINTS 
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


/////////////////////////////DEBUGGER
//Obteniendo datos con fetch

var boton = document.getElementById('boton')
var contenedor = document.getElementById('contenedor')
var posts = null;

boton.addEventListener('click', function () {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => {
            posts = data;
            mostrarDatos(posts)
        });
});

function mostrarDatos(posts) {
    posts.map((post, i) => {
        debugger;
        let titulo = document.createElement('h3')
        let contenido = document.createElement('p')

        titulo.innerHTML = (i + 1) + "-" + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo)
        contenedor.appendChild(contenido)
    })
}


//Trabajando con promesas
//Manejo de los errores de JavaScript
var boton2 = document.getElementById('boton2')
var contBanderas = document.getElementById('banderas');
var mensajes = document.getElementById('mensajes');

boton2.addEventListener('click', function () {
    getPosts()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts)
            return (getCountries())
        })
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries)
        }).catch(error => {
            mensajes.classList.toggle('hide');
            mensajes.innerHTML = error;
            setTimeout(() => mensajes.classList.toggle('hide'), 3000)
        })
})

function getPosts() {
    return fetch('http://jsonplaceholder.typicode.com/posts')
}

function getCountries() {
    return fetch('http://restcountries.eu/rest/v2/all')
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
}

