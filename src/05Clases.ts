// * Clase (molde del objeto)
// * Propiedades (caracteristicas del objeto)
// * Metodos (funciones o acciones del objeto)

class ClaseCamiseta { // Esta es la CLASE
    // Esto de abajo son las PROPIEDADES
  private color: string; 
  private modelo: string; 
  private marca: string; 
  private talla: string; 
  private precio: number; 

    // Esto de abajo son los METODOS.

  public setColor (color: string) { // ! asi se crean metodos para acceder a las propiedades de la clase y poder modificarlas
    this.color = color;
  }

  public getColor () {
    return this.color;
  } 
  
}

let myCamiseta = new ClaseCamiseta();
myCamiseta.setColor('Rojo');


let playera = new ClaseCamiseta();
playera.setColor('Azul');



console.group(`Clases:`)
  console.group(`Mi Camiseta:`)
    console.log(myCamiseta);
    console.log(myCamiseta.getColor())

  console.groupEnd();


  console.group(`Playera:`)
    console.log(playera)
    console.log(playera.getColor())

  console.groupEnd();
console.groupEnd();