# Eldoria 🏰✨

Un mundo mágico diseñado para aprender programación a través de ejercicios interactivos. En este proyecto, los estudiantes resolverán desafíos mágicos mientras aprenden conceptos fundamentales de programación.

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm (viene con Node.js)

Instala Node.js en: https://nodejs.org/es

## 🚀 Configuración del Proyecto

En la terminal de Visual Studio Code, ejecuta los siguientes comandos:

1. Clona el repositorio:

```bash
git clone https://github.com/AzuNico/eldoria.git
cd eldoria
```

2. Instala las dependencias:

```bash
npm install
```

## 💻 Ejecutar el Proyecto

Para ejecutar el proyecto en modo desarrollo con recarga automática:

```bash
npm run eldoria
```

Este comando ejecutará todos los ejercicios que hayas completado y mostrará los resultados en la consola.

## 📁 Estructura del Proyecto

```
eldoria/
├── src/
│   └── ejercicios/
│       ├── pe/                    # Programación Estructurada
│       ├── pf/                    # Programación Funcional
│       └── poo/                   # Programación Orientada a Objetos
├── machetes/                      # Archivos de ayuda y referencia
├── index.js                       # Punto de entrada
├── app.js                         # Donde se ejecutan los ejercicios
└── package.json
```

## 🎯 Ejercicios

### Programación Estructurada (PE)

#### 1. Abrir Portal

- Ubicación: `src/ejercicios/pe/00-abrir-portal/`
- Objetivo: Aprender condicionales y operadores lógicos

#### 2. Recolectar Cristales

- Ubicación: `src/ejercicios/pe/01-recolectar-cristales/`
- Objetivo: Aprender bucles y arrays

#### 3. Inventario

- Ubicación: `src/ejercicios/pe/02-inventario/`
- Objetivo: Aprender a reutilizar código mediante funciones, y practicar sobre manipulación de arrays

### Programación Funcional (PF)

- Próximamente...

### Programación Orientada a Objetos (POO)

- Próximamente...

## 🧪 Cómo Probar Nuevos Ejercicios

1. Implementa tu solución en TypeScript (archivo index.ts) en /ejercicios
2. Importa y usa tu nuevo ejercicio en `app.js`
3. Ejecuta `npm run eldoria` en la terminal de Visual Studio Code para ver los resultados

## 📚 Archivos de Ayuda

En la carpeta `machetes/` encontrarás archivos con ejemplos y referencias útiles:

- `macheteArreglos.js` - Ejemplos de operaciones con arrays
- `macheteFor.js` - Ejemplos de diferentes tipos de bucles

## 🛠️ Tecnologías Utilizadas

- Node.js - Entorno de ejecución
- TypeScript - Lenguaje de programación
- ts-node - Ejecución de TypeScript
- nodemon - Recarga automática durante desarrollo

## 📝 Notas

- Los ejercicios están escritos en TypeScript para aprender sobre tipado e interfaces.
- El código principal (app.js e index.js) está en JavaScript
- La recarga automática está configurada para archivos .ts y .js
