# Ejemplo React: Rick and Morty

<p align="center">
    <img src="https://www.latercera.com/resizer/wYOVxpChZfy-GAe1pocnF7oUp68=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/MITDV2TMLRAIBAOKSLREQAFNTA.jpeg">
</p>

Ejemplo de sitio en React, utilizando la API pública de Rick and Morty. Versión desplegada en https://rickandmorty.sgarciad.me.

## API Rick and Morty

Para el desarrollo de este ejemplo, se usó la [API pública de Rick and Morty][ram-api-web]. Se puede visitar [su documentación][ram-api-docs-web] para mas detalles.

## Proyecto

### Git

#### Clonar proyecto

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
│   │   ├── ./src/components/Button.jsx
│   │   ├── ./src/components/Card.jsx
│   │   ├── ./src/components/Navbar.jsx
│   │   └── ./src/components/Pagination.jsx
│   ├── ./src/layouts/
│   │   └── ./src/layouts/Layout.jsx
│   ├── ./src/pages/
│   │   ├── ./src/pages/Episodios.jsx
│   │   ├── ./src/pages/Home.jsx
│   │   └── ./src/pages/Personajes.jsx
│   ├── ./src/styles/
│   │   ├── ./src/styles/modules/
│   │   │   ├── ./src/styles/modules/Card.module.scss
│   │   │   └── ./src/styles/modules/Home.module.scss
│   │   └── ./src/styles/main.scss
│   ├── ./src/App.jsx
│   └── ./src/main.jsx
├── ./.gitignore
├── ./CNAME
├── ./index.html
├── ./package-lock.json
├── ./package.json
├── ./README.md
└── ./vite.config.js
```

### Detalles de desarrollo

|                          |                                                               |
| ------------------------ | ------------------------------------------------------------- |
| **IDEs**                 | [![vscode-badge]][vscode-web]                                 |
| **Lenguajes y entornos** | [![js-badge]][js-web] [![react-badge]][react-web]             |
| **Estilos**              | [![bootstrap-badge]][bootstrap-web] [![sass-badge]][sass-web] |
| **Utilidades**           | [![vite-badge]][vite-web] [![npm-badge]][npm-web]             |

### Scripts de NPM

| Script            | Descripción                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Ejecuta el entorno de desarrollo con Vite                          |
| `npm run build`   | Construye la aplicación, para su posterior despliegue.             |
| `npm run preview` | Permite visualizar la versión final y construída de la aplicación. |

[ram-api-docs-web]: https://rickandmortyapi.com/documentation
[ram-api-web]: https://rickandmortyapi.com/documentation
[vscode-badge]: https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=for-the-badge
[vscode-web]: https://code.visualstudio.com/
[js-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge
[js-web]: https://developer.mozilla.org/es/docs/Web/JavaScript
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
