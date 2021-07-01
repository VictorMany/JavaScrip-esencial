"use strict"

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

