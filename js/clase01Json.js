let bicicleta = { 
  color: 'Rojo',
  modelo: 'bmw',
  frenos: 'de disco',
  velodicadMaxima: '180km/h',
  cambiaColor: function (nuevoColor) { 
    this.color = nuevoColor;
    console.log(this)
  }
}

bicicleta.cambiaColor('Azul')

