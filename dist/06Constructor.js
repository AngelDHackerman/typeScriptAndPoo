"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// * Clase (molde del objeto)
// * Propiedades (caracteristicas del objeto)
// * Metodos (funciones o acciones del objeto)
class ClaseCamiseta {
    // * Esto de abajo son los METODOS.
    // * Asi se crean los constructores.
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
let myCamiseta = new ClaseCamiseta('rojo', 'manga larga', 'nike', 'l', 16);
myCamiseta.setColor('Rojo'); // ! este sobreescribe al parametro dado en el constructor
console.group(`Clases:`);
console.group(`Mi Camiseta:`);
console.log(myCamiseta);
console.log(myCamiseta.getColor());
console.groupEnd();
