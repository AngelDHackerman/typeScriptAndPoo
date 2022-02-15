export {};

class ClaseCamiseta { // Esta es la CLASE
    // Esto de abajo son las PROPIEDADES
  private color: string; 
  private modelo: string; 
  private marca: string; 
  private talla: string; 
  private precio: number; 

    // Esto de abajo son los METODOS.

  public setColor (color: string) { 
    this.color = color;
  }

  public setModelo (modelo: string) {
    this.modelo = modelo;
  }


  public getColor () {
    return this.color;
  } 
}

// ! Clase Hija, asi me traigo todo lo que tiene la clase "madre" y puedo modificar a mi gusto la clase hija

class Sudadera extends ClaseCamiseta { 
  public capucha: boolean;
  
  setCapucha(capucha: boolean) { 
    this.capucha = capucha;
  }
  
  getCapucha():boolean { 
    return this.capucha;
  }
}


let myCamiseta = new ClaseCamiseta();
let mySudadera = new Sudadera();


mySudadera.setCapucha(true);
console.log(mySudadera)

console.log(mySudadera.getCapucha());
