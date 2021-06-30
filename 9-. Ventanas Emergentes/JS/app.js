"use strict"

//ALERTAS
const video = document.querySelector('.bostonVideo');


video.addEventListener('ended', function () {
    //Manda una alerta importante
    alert('MENSAJE \nEl video finalizó')
    //Pide una confiormacion al usuario
    let resultado = confirm('¿Quieres repetir el video?');
    //volvemos a reproducir el archivo
    if (resultado) {
        video.play();
    }
    else {
        window.location('http://www.google.com')
    }
})

video.addEventListener('ended', function () {
    //Pide informacion al usuario
    let email = prompt('Escribe tu correo para ver mas videos', 'data@info.com');
    if (email === null || email == "") {
        console.log("Sin datos");
    }
    else {
        console.log(email);
    }

})
