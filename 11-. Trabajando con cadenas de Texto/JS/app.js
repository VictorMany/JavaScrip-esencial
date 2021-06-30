"use strict"

//Cadenas de texto
var pais = "México";
//Tambien es una cadena, pero tambien es un obj
var comida = new String("Ceviche");
//Medir una cadena de texto
console.log('La cadena de texto tiene: ', comida.length, 'caracteres');
//Búsqueda de texto por indides y por expresiones regulares
var mensaje = 'Estoy aprendiendo JavaScript y estoy aprendiendo mucho';
var resultado;
//indexOf --> Buscar la primera incidencia 
resultado = mensaje.indexOf('aprendiendo');
console.log(resultado)

//lastindexOf --> Buscar la ultima incidencia dentro de la cadena de texto
resultado = mensaje.lastIndexOf("aprendiendo");
console.log(resultado)

//seach
resultado = mensaje.search("aprendiendo");
console.log(resultado)

//search -- expresion regular --> La i la hace InCaseSensitive (no importa mayusculas ni minusculas)
resultado = mensaje.search(/Ja/i);
console.log(resultado)


//Métodos de búsqueda parte 2
var mensaje = 'Estoy aprendiendo JavaScript y estoy aprendiendo mucho';
//Match --> la g es para que busque todas las coincidencias de la cadena
// la i es para inCaseSensitive
resultado = mensaje.match(/aprendiendo/gi);
console.log(resultado)
console.log(resultado);

//substr --> Cortar un pedazo de texto que ando buscando
resultado = mensaje.substr(6, 11);
console.log(resultado);
console.log(resultado);

//substring --> comienza a contar desde el incio de la cadena
resultado = mensaje.substring(6, 17);
console.log(resultado);
console.log(resultado);

//charAt --> Pones el indice del caracter dentro de la cadena
resultado = mensaje.charAt(3);
console.log(resultado);
console.log(resultado);


//Métodos de búsqueda parte 3 --> Todos son case sensitive
var mensaje = 'Estoy aprendiendo JavaScript y estoy aprendiendo mucho';

//startsWith --> Verifica si empieza con eso
resultado = mensaje.startsWith("Es");
console.log(resultado);

//Podemos mandar la posicion de incio de nuestro startsWith
var textoEn = mensaje.indexOf('JavaScript');
console.log(textoEn)
resultado = mensaje.startsWith('Ja', textoEn)
console.log(resultado);

//endWith --> Verificamos si terminamos con ese pedazo de texto
resultado = mensaje.endsWith("mucho");
console.log(resultado);

//includes
resultado = mensaje.includes('JavaScript', 6);
console.log(resultado);
//Inlcudes -- delimitado desde un incio hasta al final 
resultado = mensaje.includes('estoy', 3); //--> True
resultado = mensaje.includes('Estoy', 3); //--> False
console.log(resultado);


//Métodos de generación, reeemplazo y separación
var mensaje = 'Estoy aprendiendo JavaScript y estoy aprendiendo mucho';

//Repeat --> Repetir las cadenas
resultado = mensaje.repeat(3);
console.log(resultado)

//Replace --> Busca una cadena de texto y la reemplza
resultado = mensaje.replace("JavaScript", 'a programar')
console.log(resultado)

//Slice
resultado = mensaje.slice(6, mensaje.length - 32)
console.log(resultado)

//Split --> Distribuye las palabras en un arreglo
resultado = mensaje.split(" ")
console.log(resultado)

//Trim --> Elimina los espacios en blanco que hay antes y despues de una cadena
resultado = mensaje.trim()
console.log(resultado)

//Métodos de transformación
var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2 = ' y programación';
var total = 1234546;

var resultado;
//A cadena de texto
resultado = total.toString();
console.log(resultado)
//A minusculas
resultado = mensaje.toLowerCase();
console.log(resultado)
//A mayusculas
resultado = mensaje.toUpperCase();
console.log(resultado)

//Texto de concatenacion
resultado = mensaje.concat(mensaje2, ' y tengo muchas ideas');
console.log(resultado)

//Plantillas y literales
var lenguaje = 'JavaScript';
var lenguaje2 = 'HTML';
var mensaje = `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;

console.log(mensaje);

//Mensaje multilinea
var mensajeMultilinea =
    `
Hola mundo,
estoy aprendiendo
${mensaje} y me gusta como se integra con ${mensaje2}
`;

console.log(mensajeMultilinea)
