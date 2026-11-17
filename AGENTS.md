# AGENTS.md — Guía para agentes

Portfolio personal de Andrea: React 19 + Vite 8 + TypeScript 6, con estilos en Sass (CSS Modules).
Node `>=22.12`.

Este archivo es la guía de trabajo para cualquier agente de IA. Todo el código que escribas o
revises debe cumplir los principios SOLID, las convenciones del proyecto y las reglas de esta guía.
Antes de tocar nada, lee el código cercano y sigue sus patrones; si algo no está claro, pregunta.

## Comandos

```bash
npm install        # primera vez
npm run dev        # servidor de desarrollo
npm run typecheck  # tsc -b
npm run lint       # ESLint
npm run build      # tsc -b + vite build
npm run preview    # sirve el resultado de dist/
npm run format     # Prettier en todo el repo
```

- Para formatear solo lo que has tocado: `npx prettier --write <archivos>`.
- **No hay tests automáticos.** No añadas un framework de tests salvo que se pida.

## Verificación antes de dar algo por terminado

1. `npm run typecheck`
2. `npm run lint`
3. `npm run build`
4. Si hay cambios visuales, comprueba con `npm run dev`: escritorio y móvil, tema claro y oscuro,
   e idioma ES y EN.
5. Revisa que la capitalización de los imports coincida con el nombre real del archivo: Vercel
   compila en Linux y distingue mayúsculas (`ProjectCard.tsx` ≠ `projectCard.tsx`).

## Estructura y arquitectura

Screaming architecture: al abrir `src/` se ven las partes del portfolio, no carpetas técnicas
genéricas.

```
src/
├── app/                 # Entrada, App y layout (skip-link, navbar, <main>, footer)
├── features/            # Una carpeta por sección: hero, about, projects, skills, contact, navigation
│   ├── components/      # Componentes de la feature + su .module.scss
│   ├── data/            # Contenido editable (proyectos, skills, enlaces…)
│   ├── model/           # Tipos y funciones puras sobre los datos
│   ├── hooks/           # Hooks propios, si hacen falta
│   └── index.ts         # API pública: lo único que otras partes pueden importar
├── shared/              # ui, i18n, config, lib, styles, theme (no conoce el dominio)
└── assets/              # Imágenes y archivos estáticos importados desde el código
```

Reglas:

1. **Una feature no importa el interior de otra.** Usa su API pública
   (`@/features/projects`), nunca `@/features/projects/model/...`. ESLint lo comprueba con
   `no-restricted-imports`.
2. **`shared` no importa de `features`.**
3. **El contenido no va en el JSX.** Los textos viven en los diccionarios de i18n y los datos en
   `data/`. Los componentes solo los pintan.
4. **Variantes como props tipadas** (`accent="green"`), no clases sueltas tipo `thumb--1`.
5. **Estilos por componente.** Cada componente tiene su `Componente.module.scss`; los estilos
   globales se limitan a tokens, reset y tipografía base.
6. **Un subcomponente que solo usa un componente** vive en la carpeta de ese componente
   (p. ej. `Navbar/MenuButton.tsx`).

Convenciones de nombres:

| Qué                         | Convención          | Ejemplo                                      |
| --------------------------- | ------------------- | -------------------------------------------- |
| Componentes                 | PascalCase          | `ProjectCard.tsx`, `ProjectCard.module.scss` |
| Hooks                       | camelCase con `use` | `useJellyGrid.ts`                            |
| Datos, modelos y utilidades | camelCase           | `projects.ts`, `projectSelectors.ts`         |
| Parciales de Sass           | `_` + kebab-case    | `_tokens.scss`                               |

Usa el alias `@/` para `src/` y exports nombrados (no `export default`).

## RULES — Clean code y estilo

Estas reglas son obligatorias en todo el código: componentes, hooks, datos y estilos. No son
sugerencias.

### Reglas de estilo generales

- **Cero funciones anidadas o closures complejos.** No declares funciones dentro de funciones ni
  uses IIFEs en el JSX: mantén la lógica plana y fácil de seguir. Excepción: los callbacks de React
  (efectos y manejadores) pueden ser una flecha de una línea que solo delega en una función con
  nombre.
- **Variables intermedias descriptivas.** Rompe las operaciones largas o complejas en pasos y dale a
  cada variable un nombre que explique el propósito de ese paso.
- **Modularidad básica.** Funciones independientes, secuenciales y con estricta responsabilidad
  única (SRP).
- **Claridad antes que concisión.** Prioriza la verbosidad estructurada y legible antes que el
  código compacto, "inteligente" o críptico.
- **Baja complejidad ciclomática.** Prohibido abusar de múltiples `if`, anidar bucles `for` o
  declarar funciones dentro de funciones. Si una función necesita más de dos o tres ramas, divídela
  o usa un mapa de casos (`Record`).
- **Lógica fuera del JSX.** Calcula los valores antes del `return`; el JSX solo pinta.
- **Comentarios y JSDoc en español**, solo cuando expliquen el porqué o una decisión no obvia. Los
  identificadores, en inglés.

### SOLID

- **S — Responsabilidad única.** Cada componente, hook o función tiene una sola razón para cambiar.
  Separa datos (`data/`), lógica (`model/`) y presentación (`components/`).
- **O — Abierto/cerrado.** Extiende con props tipadas, variantes y composición; evita añadir un `if`
  nuevo a un componente existente por cada caso.
- **L — Sustitución de Liskov.** Los componentes de `shared/ui` respetan el contrato del elemento
  nativo y el de sus variantes: `Button` acepta las props de `<a>` o `<button>` y todas sus
  variantes comparten el mismo contrato visual y de clases.
- **I — Segregación de interfaces.** Props pequeñas y específicas; no obligues a quien usa un
  componente a pasar props que no necesita. Si una interfaz crece demasiado, divide el componente.
- **D — Inversión de dependencias.** Los componentes dependen de tipos, contexto (`useTranslation`,
  `useTheme`) y funciones puras, no de implementaciones concretas ni de datos hardcodeados.

### DRY — una sola fuente de verdad

- **Nada de duplicar conocimiento.** Textos en los diccionarios, colores y medidas en los tokens,
  ids de sección en `SECTION_IDS`, datos de contacto en `site.ts` y contenido en `data/`.
- Reutiliza antes de copiar: `shared/ui` para componentes, `shared/lib` para utilidades, `model/`
  para lógica pura y un hook para estado repetido.
- No dupliques bloques de JSX ni de Sass: usa un subcomponente, un mixin o una variable CSS.
- **Pero no abstraigas antes de tiempo.** DRY se aplica al conocimiento duplicado, no a dos trozos
  que solo se parecen. Extrae cuando el concepto se repita de verdad (regla de tres), no por dos
  usos que coinciden en la forma.

### Nombres autoexplicativos

- Identificadores en inglés; comentarios y documentación en español. Los textos de interfaz van
  traducidos (ver i18n).
- Prohibidas las abreviaturas crípticas (`cx`, `t`, `bg`, `fg`, `data1`, `props2`). Escribe
  `joinClassNames`, `theme`, `background`, `foreground`.
- El nombre dice **qué**, no **cómo**: `visibleProjects`, no `filtered`; `projectCards`, no `items`.
- Booleanos con `is`, `has`, `can` o `should`; manejadores con `handleX` y sus props con `onX`;
  hooks con `useX`; componentes y tipos en PascalCase.
- Las funciones empiezan por verbo (`get`, `build`, `render`, `pick`); los componentes son
  sustantivos.

### Renderizado condicional

- **Un solo `return` por componente.** Calcula las condiciones y los datos antes del `return`.
- Usa `&&` para mostrar u ocultar y el ternario solo para dos alternativas. **Nada de ternarios
  anidados** ni de condicionales complejos dentro de las props.
- Si una rama tiene varios elementos o se repite, extráela a un subcomponente o a una función de
  renderizado de módulo.
- No definas componentes dentro de componentes: se remontan en cada render y pierden el estado.
- En listas usa una `key` estable (el `id` del dato o el texto si es único); nunca el índice salvo
  en listas estáticas.
- Los estados de carga, vacío y error se renderizan de forma explícita y accesible.

## TypeScript

- El proyecto compila con `strict`, `noUnusedLocals`, `noUnusedParameters`,
  `noUncheckedIndexedAccess` y `verbatimModuleSyntax`.
- Importa los tipos con `import type { ... }`.
- **Nada de `any`.** Si el valor es externo, usa `unknown` y un type guard.
- Comprueba el `undefined` al acceder por índice (`noUncheckedIndexedAccess`).
- Modelos con propiedades `readonly` cuando no deban mutar.
- Usa `Record<Union, Valor>` para mapas que deban cubrir todas las variantes: si se añade una, no
  compila hasta elegir su valor.

## Textos e idiomas

- **Todo texto visible de la interfaz va en los diccionarios** de
  `src/shared/i18n/dictionaries/`; nunca hardcodeado en el JSX.
- `es.ts` es la fuente de verdad: `en.ts` se tipa con `Dictionary`, así que si falta una clave o una
  traducción, no compila. Añade siempre los dos idiomas.
- Usa `useTranslation()` para obtener `locale`, `dictionary` y `changeLocale`. Para contenido
  traducible en datos, usa `Localized<T>` y `pickLocalized(value, locale)`.
- Los datos que no se traducen (nombre, correo, redes) viven en `src/shared/config/site.ts`.
- Respeta las claves de `localStorage` (`portfolio-locale`, `portfolio-theme`) y el script de
  `index.html` que aplica el tema antes de pintar: si cambias una, cambia también la otra.

## Estilos y sistema de diseño

- Usa **variables CSS y mixins** de `src/shared/styles/`; no escribas colores ni medidas mágicas.
  Los componentes usan tokens semánticos (`--color-text`, `--color-surface`, `--color-line`), no
  `ink`/`paper` directamente, para que el tema claro/oscuro funcione solo.
- Usa `joinClassNames` para componer clases; evita concatenaciones a mano.
- Los acentos se pasan con la prop tipada `accent` (`Accent` en `src/shared/styles/tokens.ts`). Ese
  tipo debe coincidir con el mapa `$accents` de `_tokens.scss`; si añades uno, actualiza ambos.
- Mobile-first: usa el mixin `respond-to('sm' | 'md' | 'lg')`, no media queries sueltas.
- Los ajustes de modo oscuro van con `:global(:root[data-theme='dark'])`, como en `Button`.
- No uses estilos inline; si un valor es dinámico, usa una variable CSS.

## Accesibilidad

Objetivo: **WCAG 2.2 AA**. No la sacrificies por estética.

- Usa HTML semántico y elementos nativos (`<a>`, `<button>`, `<section aria-labelledby>`); nunca un
  `<div onClick>`.
- Mantén la jerarquía de encabezados (un solo `<h1>`; h2 → h3), el foco visible y el orden lógico
  del DOM; sin `tabindex` positivos.
- Todo control debe funcionar con teclado. Cierra menús con Escape y devuelve el foco al botón.
- `alt` descriptivo en imágenes con contenido; `aria-hidden` en decoración.
- Respeta `prefers-reduced-motion` y ofrece pausa en contenido que se mueve más de 5 s.
- Los enlaces que abren pestaña nueva avisan con texto oculto; los enlaces tienen texto con sentido
  propio ("Ver demo de …", no "Demo" repetido).
- No uses pares de color con contraste insuficiente: consulta `docs/accesibilidad.md`.

## Git, ramas y despliegue

- **Los commits, ramas y PR los hace Andrea a mano.** No ejecutes `git switch -c`, `git commit`,
  `git push` ni abras PR: solo sugiere nombres y mensajes, **en inglés y en una sola línea**.
- Ramas: `type/short-description` en kebab-case (`feat/design-system`, `fix/mobile-navbar`).
- Commits: Conventional Commits, `type(scope): short description`, imperativo, minúscula
  (`feat(projects): add ProjectCard`).
- `docs/` es documentación personal, está en `.gitignore` y nunca se sube. No la borres ni la
  commitees; puedes actualizarla si se pide.
- Despliegue en Vercel: `main` es producción y `dev` es la preview estable. Las ramas de trabajo
  generan previews.

## Límites

- **No añadas dependencias sin pedirlo.** El proyecto solo usa `react` y `react-dom`; no hay router,
  librería de estado ni de UI.
- No toques `node_modules/`, `dist/` ni `package-lock.json` salvo que la tarea lo requiera.
- No hagas refactors, renombrados o reformateos masivos fuera del alcance pedido.
- Si una instrucción choca con el código existente o con la petición del usuario, pregunta antes de
  improvisar.

## Añadir un proyecto

1. Si tiene captura, guárdala en `src/assets/projects/` e impórtala en `projects.ts`.
2. Añade un objeto al array de `src/features/projects/data/projects.ts` con `id` único en kebab-case,
   `title`, `description: { es, en }`, `teamType`, `technologies`, `accent` y `repositories`; opcional:
   `image: { src, alt: { es, en } }` y `demoUrl`.
3. La tarjeta, la numeración y la etiqueta se actualizan solas. Si falta un campo o una traducción,
   TypeScript lo marca.
