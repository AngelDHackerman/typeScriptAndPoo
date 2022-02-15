"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaseCamiseta = void 0;
// * Clase (molde del objeto)
// * Propiedades (caracteristicas del objeto)
// * Metodos (funciones o acciones del objeto)
// ! el export class, nos permite exportar esta clase a cualquier otro archivo.
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
exports.ClaseCamiseta = ClaseCamiseta;
let myCamiseta = new ClaseCamiseta('rojo', 'manga larga', 'nike', 'l', 16);
myCamiseta.setColor('Rojo'); // ! este sobreescribe al parametro dado en el constructor
console.group(`Clases:`);
console.group(`Mi Camiseta:`);
console.log(myCamiseta);
console.log(myCamiseta.getColor());
console.groupEnd();
