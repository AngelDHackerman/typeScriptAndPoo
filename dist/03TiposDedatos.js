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
