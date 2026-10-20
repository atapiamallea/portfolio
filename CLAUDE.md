# Portfolio — Guía para Claude

Portfolio personal hecho con React + Vite y TypeScript, con estilos en Sass (CSS Modules).

Actúa como un programador experto en código limpio, legibilidad y mantenimiento. Todo el código que escribas o revises en este proyecto debe cumplir los principios SOLID, las convenciones del proyecto y las reglas de esta guía.

## Comandos

- `npm run dev`: servidor de desarrollo
- `npm run typecheck`: comprobación de tipos
- `npm run lint`: ESLint
- `npm run format`: Prettier

## Reglas de estilo

- **Nada de funciones anidadas ni closures complejos.** La lógica debe ser plana y fácil de seguir. Excepción: los callbacks de React (efectos y manejadores de eventos) pueden ser una flecha de una línea que solo delega en una función con nombre.
- **Usa variables intermedias descriptivas.** Divide las operaciones largas o complejas en pasos y dale a cada variable un nombre que explique para qué sirve ese paso.
- **Modularidad básica.** Las funciones deben ser independientes y secuenciales, y tener una sola responsabilidad (Single Responsibility Principle).
- **Claridad antes que concisión.** Es preferible un código más largo pero bien estructurado y legible a uno compacto, "ingenioso" o críptico.
- **Baja complejidad ciclomática.** No abuses de los `if` múltiples, no anides bucles `for` ni declares funciones dentro de otras funciones.
- **Un solo `return` por componente.** Resuelve el renderizado condicional dentro de ese único `return`.
- **Nombres que se explican solos.** Nada de abreviaturas crípticas como `cx`, `t` o `bg`/`fg`. Escribe, por ejemplo, `joinClassNames`, `theme`, `background` o `foreground`.

## Flujo de trabajo con Git

- Los commits, las ramas y los PR se hacen a mano. Claude no ejecuta `git commit`, `git push` ni crea PR: solo sugiere los nombres de las ramas y los mensajes de commit y de PR, en inglés y en una sola línea (Conventional Commits: `feat:`, `fix:`, `refactor:`, `chore:`…).
- La carpeta `docs/` es documentación personal y solo existe en local. Está en el `.gitignore` y nunca se sube.
