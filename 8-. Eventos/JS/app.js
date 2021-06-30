"use strict"

const boton = document.querySelector('.boton');

boton.addEventListener('click', function () {
    console.log('El botón se ha pulsado');
})

boton.addEventListener('mouseover', function () {
    console.log('El mouse está sobre el botón ');
})

boton.addEventListener('mouseout', function () {
    console.log('El mouse esta fuera del botón');
})

//Eventos del teclado
window.addEventListener('keydown', function (event) {
    console.log('Pulsando la tecla');
    console.log(String.fromCharCode(event.keyCode))
})

window.addEventListener('keypress', function (event) {
    console.log('Tecla pulsada');
})

window.addEventListener('keyup', function (event) {
    console.log('Tecla liberada');
})



//CARGA DE DOCUMENTO
//Hasta que ya haya cargado todo
window.addEventListener('load', function () {
    console.log('El contenido de la ventana se ha cargado');

    //DE aqui ya podemos hacer invocaciones de recursos, etc
})

//EVENTOS MULTIMEDIA
const video = document.querySelector('.bostonVideo');

video.addEventListener('play', function () {
    console.log("El video ha iniciado");
})

video.addEventListener('seeking', function () {
    console.log("Se esta buscando en el video", this.currentTime);
})

video.addEventListener('ended', function () {
    console.log("El video ha terminado");
})


//TEMPORIZADORES
//Un loop infinito

var temporizador = setInterval(function () {
    setColor()
}, 500);

//solo cuando se mande a ejecutar
setTimeout(function () {
    setColor();
}, 500)

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == 'pink' ? 'yellow' : 'pink'
}

function stopChangingColor() {
    clearInterval(temporizador);
}