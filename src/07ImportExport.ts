import {ClaseCamiseta} from './06Constructor'; // ! asi se traen las clases exportadas desde otros archivos.

class Main { 
  constructor () { 
    console.log('Aplicacion JS cargada!')
  }

  getCamiseta () { 
    return new ClaseCamiseta('Rojo', 'asd', 'asdf', 'qwer', 20);
  }
}

let main = new Main();