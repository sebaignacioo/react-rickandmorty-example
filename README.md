# Ejemplo React: Rick and Morty

<p align="center">
    <img src="https://www.latercera.com/resizer/wYOVxpChZfy-GAe1pocnF7oUp68=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/MITDV2TMLRAIBAOKSLREQAFNTA.jpeg">
</p>

Ejemplo de sitio en React, utilizando la API pública de Rick and Morty. Versión desplegada en https://rickandmorty.sgarciad.me.

## Tabla de contenidos <!-- omit from toc -->

- [API Rick and Morty](#api-rick-and-morty)
- [Proyecto](#proyecto)
  - [Clonar proyecto con Git](#clonar-proyecto-con-git)
  - [Estructura de directorios](#estructura-de-directorios)
  - [Detalles de desarrollo](#detalles-de-desarrollo)
  - [Scripts de NPM](#scripts-de-npm)
  - [Dependencias externas utilizadas](#dependencias-externas-utilizadas)
    - [Dependencias de desarrollo](#dependencias-de-desarrollo)
    - [Dependencias del proyecto](#dependencias-del-proyecto)

## API Rick and Morty

Para el desarrollo de este ejemplo, se usó la [API pública de Rick and Morty][ram-api-web]. Se puede visitar [su documentación][ram-api-docs-web] para mas detalles.

## Proyecto

### Clonar proyecto con Git

Para clonar el proyecto:

```
git clone https://github.com/sebaignacioo/react-rickandmorty-example.git
```

Para clonar el proyecto con TypeScript:

```
git clone -b typescript https://github.com/sebaignacioo/react-rickandmorty-example.git
```

### Estructura de directorios

```
.
├── ./.github/
├── ./.vscode/
├── ./dist/
├── ./node_modules/
├── ./public/
├── ./src/
│   ├── ./src/assets/
│   ├── ./src/components/
│   │   ├── ./src/components/Button.tsx
│   │   ├── ./src/components/Card.tsx
│   │   ├── ./src/components/Navbar.tsx
│   │   └── ./src/components/Pagination.tsx
│   ├── ./src/layouts/
│   │   └── ./src/layouts/Layout.tsx
│   ├── ./src/pages/
│   │   ├── ./src/pages/Episodios.tsx
│   │   ├── ./src/pages/Home.tsx
│   │   └── ./src/pages/Personajes.tsx
│   ├── ./src/styles/
│   │   ├── ./src/styles/modules/
│   │   │   ├── ./src/styles/modules/Card.module.scss
│   │   │   └── ./src/styles/modules/Home.module.scss
│   │   └── ./src/styles/main.scss
│   ├── ./src/App.tsx
│   ├── ./src/main.tsx
│   └── ./src/vite-env.d.ts
├── ./.gitignore
├── ./CNAME
├── ./index.html
├── ./package-lock.json
├── ./package.json
├── ./README.md
├── ./vite.config.ts
├── ./tsconfig.json
└── ./tsconfig.node.json
```

### Detalles de desarrollo

|                          |                                                               |
| ------------------------ | ------------------------------------------------------------- |
| **IDEs**                 | [![vscode-badge]][vscode-web]                                 |
| **Lenguajes y entornos** | [![ts-badge]][ts-web] [![react-badge]][react-web]             |
| **Estilos**              | [![bootstrap-badge]][bootstrap-web] [![sass-badge]][sass-web] |
| **Utilidades**           | [![vite-badge]][vite-web] [![npm-badge]][npm-web]             |

### Scripts de NPM

| Script            | Descripción                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Ejecuta el entorno de desarrollo con Vite                          |
| `npm run build`   | Construye la aplicación, para su posterior despliegue.             |
| `npm run preview` | Permite visualizar la versión final y construída de la aplicación. |

### Dependencias externas utilizadas

#### Dependencias de desarrollo

| Paquete                           | Descripción                                                |
| --------------------------------- | ---------------------------------------------------------- |
| [`vite`][devdep1]                 | Herramientas de desarrollo frontend. Reemplazo de Webpack. |
| [`sass`][devdep2]                 | Preprocesador de CSS                                       |
| [`typescript`][devdep6]           | Soporte para lenguaje TypeScript                           |
| [`@vitejs/plugin-react`][devdep3] | Plugin de Vite para soportar React                         |
| [`@types/node`][devdep7]          | Tipos para Node.js (para path)                             |
| [`@types/react`][devdep4]         | Tipos para la librería React                               |
| [`@types/react-dom`][devdep5]     | Tipos para la librería ReactDOM                            |

#### Dependencias del proyecto

| Paquete                    | Descripción                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [`react`][dep1]            | Librería de JavaScript que permite crear interfaces de usuario.                                                           |
| [`react-dom`][dep2]        | Permite la interacción entre la librería de React, y el DOM en desarrollo web.                                            |
| [`react-router-dom`][dep3] | Librería que permite generar enrutamiento en la aplicación de React.                                                      |
| [`@popperjs/core`][dep4]   | Librería con utilidades para mostrar mensajes y avisos.                                                                   |
| [`bootstrap`][dep5]        | Librería de estilos, muy conocida y con gran cantidad de documentación y ejemplos.                                        |
| [`react-icons`][dep6]      | Librería que permite incorporar una gran cantidad de librerías de íconos con licencia libre, como un componente de React. |

[ram-api-docs-web]: https://rickandmortyapi.com/documentation
[ram-api-web]: https://rickandmortyapi.com/documentation
[vscode-badge]: https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=for-the-badge
[vscode-web]: https://code.visualstudio.com/
[ts-badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge
[ts-web]: https://www.typescriptlang.org/
[react-badge]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge
[react-web]: https://reactjs.org/
[sass-badge]: https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=for-the-badge
[sass-web]: https://sass-lang.com/
[bootstrap-badge]: https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=for-the-badge
[bootstrap-web]: https://getbootstrap.com/
[vite-badge]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=for-the-badge
[vite-web]: https://vitejs.dev/
[npm-badge]: https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=for-the-badge
[npm-web]: https://www.npmjs.com/
[devdep1]: https://www.npmjs.com/package/vite
[devdep2]: https://www.npmjs.com/package/sass
[devdep3]: https://www.npmjs.com/package/@vitejs/plugin-react
[devdep4]: https://www.npmjs.com/package/@types/react
[devdep5]: https://www.npmjs.com/package/@types/react-dom
[devdep6]: https://www.npmjs.com/package/typescript
[devdep7]: https://www.npmjs.com/package/@types/node
[dep1]: https://www.npmjs.com/package/react
[dep2]: https://www.npmjs.com/package/react-dom
[dep3]: https://www.npmjs.com/package/react-router-dom
[dep4]: https://www.npmjs.com/package/@popperjs/coreOK
[dep5]: https://www.npmjs.com/package/bootstrap
[dep6]: https://www.npmjs.com/package/react-icons
