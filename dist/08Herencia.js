"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClaseCamiseta {
    // Esto de abajo son los METODOS.
    setColor(color) {
        this.color = color;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getColor() {
        return this.color;
    }
}
// ! Clase Hija, asi me traigo todo lo que tiene la clase "madre" y puedo modificar a mi gusto la clase hija
class Sudadera extends ClaseCamiseta {
    setCapucha(capucha) {
        this.capucha = capucha;
    }
    getCapucha() {
        return this.capucha;
    }
}
let myCamiseta = new ClaseCamiseta();
let mySudadera = new Sudadera();
mySudadera.setCapucha(true);
console.log(mySudadera);
console.log(mySudadera.getCapucha());
