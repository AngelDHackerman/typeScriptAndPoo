      // ? String

console.group(`Strings, numbers, boolean:`);
let cadena: string = "google.com";

console.log(cadena)

      // ? Number 

let numero: number = 26; 

console.log(numero);


      // ? Boolean 

let verdaderoFalso: boolean = true;

console.log(verdaderoFalso);

console.groupEnd();


      // ? Any (puede ser cualquier tipo. (NO RECOMENDADO USAR ESTE TIPO))

console.group('tipo Any (NO recomendable):');

let cualquiera: any = "hola";
console.log(cualquiera);

cualquiera = 12; 
console.log(cualquiera);

cualquiera = true;
console.log(cualquiera);

console.groupEnd();


      // ? Arrays: 

let nombres: Array<string> = ['angel', 'dario', 'roberto', 'paola'];
let numeros: Array<number> = [1, 2, 3, 4, 5, 6,];
let cualquierArray: Array<any> = [1, 2, 3, 'yo', 'arbol',]; // ! NO recomendable

let años: number[] = [12, 15, 94, 29] // * otra forma de crear un array.

console.group(`Arrays:`)
  console.log(nombres);
  console.log(numeros);
  console.log(cualquierArray);
  console.log(años);
console.groupEnd();


      // ! Multiples tipos de datos

let cadenaNumber: string | number = "angelDariaux.com"; // ? Tuplas, asi se le pueden agregar los valores opcionales.
cadenaNumber += 12;

console.group(`Multiples tipos de datos:`)

console.log(cadenaNumber);


console.groupEnd();


      // ! Datos personalizados

// Asi se crean los tipos de datos personalizados: 

type letrasONumeros = string | number;

let cadenaV3: letrasONumeros = 12;
cadenaV3 = 'letras';

// cadenaV3 = true; //Esto es un error porque no se le paso la opcion de ser boolean.

console.group(`Datos personalizados:`)

  console.log(cadenaV3)

console.groupEnd();
