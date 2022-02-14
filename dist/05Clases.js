"use strict";
// * Clase (molde del objeto)
// * Propiedades (caracteristicas del objeto)
// * Metodos (funciones o acciones del objeto)
class ClaseCamiseta {
    // Esto de abajo son los METODOS.
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
let myCamiseta = new ClaseCamiseta();
myCamiseta.setColor('Rojo');
let playera = new ClaseCamiseta();
playera.setColor('Azul');
console.group(`Clases:`);
console.group(`Mi Camiseta:`);
console.log(myCamiseta);
console.log(myCamiseta.getColor());
console.groupEnd();
console.group(`Playera:`);
console.log(playera);
console.log(playera.getColor());
console.groupEnd();
console.groupEnd();
