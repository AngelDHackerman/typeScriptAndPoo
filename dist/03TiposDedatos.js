"use strict";
// ? String
console.group(`Strings, numbers, boolean:`);
let cadena = "google.com";
console.log(cadena);
// ? Number 
let numero = 26;
console.log(numero);
// ? Boolean 
let verdaderoFalso = true;
console.log(verdaderoFalso);
console.groupEnd();
// ? Any (puede ser cualquier tipo. (NO RECOMENDADO USAR ESTE TIPO))
console.group('tipo Any (NO recomendable):');
let cualquiera = "hola";
console.log(cualquiera);
cualquiera = 12;
console.log(cualquiera);
cualquiera = true;
console.log(cualquiera);
console.groupEnd();
// ? Arrays: 
let nombres = ['angel', 'dario', 'roberto', 'paola'];
let numeros = [1, 2, 3, 4, 5, 6,];
let cualquierArray = [1, 2, 3, 'yo', 'arbol',]; // ! NO recomendable
let años = [12, 15, 94, 29]; // * otra forma de crear un array.
console.group(`Arrays:`);
console.log(nombres);
console.log(numeros);
console.log(cualquierArray);
console.log(años);
console.groupEnd();
// ! Multiples tipos de datos
let cadenaNumber = "angelDariaux.com"; // ? Tuplas, asi se le pueden agregar los valores opcionales.
cadenaNumber += 12;
console.group(`Multiples tipos de datos:`);
console.log(cadenaNumber);
console.groupEnd();
let cadenaV3 = 12;
cadenaV3 = 'letras';
// cadenaV3 = true; //Esto es un error porque no se le paso la opcion de ser boolean.
console.group(`Datos personalizados:`);
console.log(cadenaV3);
console.groupEnd();
