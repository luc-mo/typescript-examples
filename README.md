# Ejemplos de Typescript desde cero

En este proyecto podrás encontrar ejemplos básicos de cómo empezar a trabajar con TypeScript. Cada ejemplo cuenta con comentarios detallados para que puedas ejecutarlo en tu propio entorno o en el archivo creado para realizar pruebas dentro de este mismo proyecto.

## Advertencia

Algunas definiciones de los ejemplos pueden no ser las más adecuadas, pero se han realizado de esta manera para facilitar la comprensión de los conceptos básicos de TypeScript y de dar ejemplos prácticos de su uso, para ahondar más a fondo en el lenguaje, se recomienda consultar la [documentación oficial](https://www.typescriptlang.org/docs/handbook).

Adicionalmente, el archivo de configuración de TypeScript (tsconfig.json) se ha configurado de una forma "simple" para comenzar a trabajar con el lenguaje. Si más adelante deseas configurarlo de una forma más apegada a tus necesidades, puedes consultar la documentación de referencia de [tsconfig.json](https://www.typescriptlang.org/tsconfig) donde encontrarás todas las opciones disponibles.

## Instalación

Para utilizar estos ejemplos, es necesario tener Node.js instalado en tu sistema. Si aún no lo tienes, puedes descargarlo desde él [sitio web oficial](https://nodejs.org/es). También puedes utilizar un gestor de paquetes como [npm](https://www.npmjs.com) (incluido por defecto en Node.js), [yarn](https://yarnpkg.com) o [pnpm](https://pnpm.io) para instalar las dependencias de este proyecto.

Una vez que tengas Node.js instalado, puedes clonar este repositorio en tu máquina local usando el siguiente comando:

```bash
  git clone https://github.com/luc-mo/typescript-examples.git
```

Luego, desde la carpeta raíz del repositorio, instala las dependencias de Node.js utilizando alguno de los siguientes comandos (dependiendo de tu gestor de paquetes preferido):

```bash
  npm install
  yarn install
  pnpm install
```

## Ejecución

Una vez que se hayan instalado las dependencias, puedes ejecutar el archivo de pruebas con los siguientes comandos:
  
```bash
  # Transpilación de TypeScript a JavaScript
  npm run build
  yarn build
  pnpm build
```

```bash
  # Ejecución del archivo de pruebas
  npm run start
  yarn start
  pnpm start
```	

También es posible mantener la ejecución utilizando los siguientes comandos en dos terminales diferentes:

```bash
  # Transpilación de TypeScript a JavaScript
  npm run build:watch
  yarn build:watch
  pnpm build:watch
```

```bash
  # Ejecución del archivo de pruebas
  npm run start:watch
  yarn start:watch
  pnpm start:watch
```

Esto hará que su código de Typescript se transpile cada vez que se guarde un cambio en el archivo de pruebas y se ejecute una vez terminada la transpilación.

## Contribución

Si deseas contribuir a este repositorio o informar de algún problema, no dudes en [abrir un ticket](https://github.com/luc-mo/typescript-examples/issues) o enviar una [Pull Request](https://github.com/luc-mo/typescript-examples/pulls).