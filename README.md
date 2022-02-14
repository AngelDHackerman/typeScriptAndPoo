### lista de comandos utiles: 

```
npm install -g typescript // instalamos typescript
tsc --version             // verficamos la version de Ts 
tsc -w *.ts               // watcher automatico para compliar todos los archivos ts

tsc --init                // Creamos el archivo de configuracion de Ts.

```

# necesitamos installar npm y typeScript

* npm se isntala desde la pagina web. 

* TypeScript se instala asi: 

    `npm install -g typescript`

* `tsc --version`: nos dice la version de typeScript que tenemos instalada

# tsconfig.js Archivo de configuracion de typeScript

`tsc --init` // Crear el archivo de configuracion de typescript
  #### En el archivo tsconfig.json: 
  Debemos descomentar el "outDir": "./",

  y debemos modificarla por **"outDir": "./dist",** (o el directorio que deseemos)

  #### luego debemos ejecutar: 
  `tsc` para que ejecute los cambios en el tsconfig 

# Compilacion automatica: 

Debemos usar el siguiente comando:
* `tsc -watch `

Esto hace que se el active el watcher y todos los archivos ".ts" dentro de la carpeta donde estamos sean compilados















