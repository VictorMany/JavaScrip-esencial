"use strict"

//INT
    var edad = 35;
    //STRING
    var cantidad = "100";
    //Conversión de datos de string a un número
    var nuevaCantidad = Number(cantidad);
    //parseInt() --> Convierte a enteros
    //parseFloat() --> Convierte a flotantes
//Strings (Podemos usar comillas simples y comillas dobles)
    var bebida = "Agua"
    var comida = 'Ceviche'
    //Hago la conversion de mis datos enteros a cadenas de texto
    var edadTxt = String(edad);
//BOOLEAN
    var activo = true;
    //Evaluamos con la funcion por default de Boolean
    var estado = Boolean(10 > 20);
//DATE
    var fecha = new Date();
    //Me trae el dia de la semana actual
    fecha.getDay();
    //Me trae el dia del mes actual
    fecha.getDate();
    //Me trae el mes de la fecha actual
    fecha.getMonth();
    //Seteamos el mes que deseamos tener en nuestra fecha
    fecha.setMonth(12);
//SYMBOL --> Valores unicos e inmutables 
    var simbolo1 = Symbol();
    var simbolo2 = Symbol();
    //Evaluamos la apariencia, pero debe de dar un false porque son valores completamente diferentes
    console.log(Boolean(simbolo1 === simbolo2));
    //Saber mi entorno de desarrollo
    var ambiente = Symbol('dev');
//JSON --> Formato de intercambio de datos
    var persona = { nombre: 'Víctor', twitter: 'dcVictor' }
    //Array
    var personas = 
    [
        {nombre: 'Víctor', twitter: 'dcVictor'},
        {nombre: 'Paco', twitter: 'dcPaco'},
        {nombre: 'Luis', twitter: 'dcLuis'},
    ]
    //Convertir a una cadena de texto sin estructura de interpretacion como obj
    var personaJSON = JSON.stringify(persona);
    //Convertir de cadena de texto a estructura de JSON
    var nuevaPersona = JSON.parse(personaJSON);


