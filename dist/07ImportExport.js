"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _06Constructor_1 = require("./06Constructor"); // ! asi se traen las clases exportadas desde otros archivos.
class Main {
    constructor() {
        console.log('Aplicacion JS cargada!');
    }
    getCamiseta() {
        return new _06Constructor_1.ClaseCamiseta('Rojo', 'asd', 'asdf', 'qwer', 20);
    }
}
let main = new Main();
