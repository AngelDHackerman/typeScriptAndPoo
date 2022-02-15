export {} // !Esto nos ayuda a eliminar el mensaje de error porque estamos copiando y pegando el codigo de la clase pasada.

// * Clase (molde del objeto)
// * Propiedades (caracteristicas del objeto)
// * Metodos (funciones o acciones del objeto)

// ! el export class, nos permite exportar esta clase a cualquier otro archivo.
export class ClaseCamiseta { // Esta es la CLASE 
  // Esto de abajo son las PROPIEDADES
  private color: string; 
  private modelo: string; 
  private marca: string; 
  private talla: string; 
  private precio: number; 

    // * Esto de abajo son los METODOS.
      // * Asi se crean los constructores.
  constructor (color:string, modelo:string, marca:string, talla:string, precio:number) { 
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;

  }
    
  public setColor (color: string) { 
    this.color = color;
  }

  public getColor () {
    return this.color;
  } 

}

let myCamiseta = new ClaseCamiseta('rojo', 'manga larga', 'nike', 'l', 16);
myCamiseta.setColor('Rojo'); // ! este sobreescribe al parametro dado en el constructor


console.group(`Clases:`)
console.group(`Mi Camiseta:`)
  console.log(myCamiseta);
  console.log(myCamiseta.getColor())

console.groupEnd();