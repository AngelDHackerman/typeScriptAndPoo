const getNumero = (numero: number = 12):string => { // ? :number tipo de dato para el parametro, :string tipo de salida que debe tener la funcion. 12 es un parametro opcional si no se le pasa nada.
  return `El numero es un ${numero}`;
}

console.log(getNumero())