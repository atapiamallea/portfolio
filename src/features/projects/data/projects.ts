import type { Project } from '../model/project'

// Para añadir un proyecto: un objeto más en esta lista. La tarjeta, su número, la etiqueta
// "Grupal" / "Individual" y las estadísticas de "Sobre mí" se actualizan solas.
// Con `demoVideo` (archivos en public/videos/) y `detail`, la tarjeta enlaza a la página de detalle.
// `satisfies` hace que falte lo que falte (una traducción, un campo), no compile.
export const PROJECTS = [
  {
    id: 'fundacion-verisure',
    title: 'Fundación Verisure',
    description: {
      es: 'Plataforma para gestionar el voluntariado de Fundación Verisure, de la inscripción al informe de impacto.',
      en: "Platform to run Fundación Verisure's volunteer program, from sign-up to impact report.",
    },
    teamType: 'team',
    technologies: [
      'React',
      'React Router',
      'Sass',
      'Vitest',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
    ],
    accent: 'green',
    demoVideo: {
      src: '/videos/fundacion-verisure-demo.mp4',
      poster: '/videos/fundacion-verisure-poster.jpg',
      summary: {
        es: 'Recorrido completo: primero la landing pública y después el backoffice con cada perfil: voluntaria, administradora y organización.',
        en: 'Full walkthrough: the public landing page first, then the back office with each role: volunteer, admin and organization.',
      },
      chapters: [
        { startSeconds: 0, title: { es: 'Landing pública', en: 'Public landing page' } },
        { startSeconds: 19, title: { es: 'Ana, voluntaria', en: 'Ana, volunteer' } },
        { startSeconds: 55, title: { es: 'Carmen, administradora', en: 'Carmen, admin' } },
        {
          startSeconds: 110,
          title: {
            es: 'Marta, de Cáritas (organización)',
            en: 'Marta from Cáritas (organization)',
          },
        },
      ],
    },
    detail: {
      contributions: {
        es: [
          'Como scrum master, participé en las reuniones con la fundación, convertí sus necesidades en tareas para el equipo y mantuve el proyecto en marcha hasta la entrega.',
          'Desarrollé la mayor parte del backend: inscripciones con lista de espera que pasa la plaza libre a la siguiente persona sin duplicarla (bloqueo pesimista), cambios de estado automáticos, favoritos y el panel de administración.',
          'Integré el frontend con la API: login, catálogo, inscripciones, rol de organización, cierres de actividad y el panel de impacto con sus exportaciones.',
          'Refactoricé el frontend a screaming architecture: dividí las páginas grandes en modelo, hook y componentes, cargué las rutas bajo demanda y rediseñé la interfaz con modo oscuro.',
          'Diseñé las plantillas de los correos automáticos con lo aprendido en marketing digital y simulé su envío con Mailpit para revisarlas tal como las vería cada persona.',
          'Añadí controles de calidad a la CI (ESLint, Prettier, cobertura mínima y auditoría de dependencias) y tests unitarios y de integración en el backend.',
        ],
        en: [
          'As scrum master, I joined the meetings with the foundation, turned their needs into tasks for the team and kept the project moving through delivery.',
          'Built most of the backend: registrations with a waitlist that hands a freed-up spot to the next person without double-booking it (pessimistic locking), automatic status changes, favorites and the admin dashboard.',
          'Integrated the frontend with the API: login, catalog, registrations, the organization role, activity closures and the impact dashboard with its exports.',
          'Refactored the frontend to a screaming architecture: split large pages into model, hook and components, loaded routes on demand and redesigned the UI with dark mode.',
          'Designed the automated email templates drawing on my digital marketing background, and simulated their delivery with Mailpit to review them exactly as each person would see them.',
          'Added quality gates to CI (ESLint, Prettier, minimum coverage and dependency audit) and unit and integration tests to the backend.',
        ],
      },
      overview: {
        es: 'Tres perfiles, un mismo flujo: los voluntarios encuentran actividades y se inscriben, las organizaciones proponen las suyas y el equipo de la fundación las revisa, las publica y mide su impacto en un panel que se exporta a PDF.',
        en: 'Three roles, one flow: volunteers find activities and sign up, partner organizations propose their own, and the foundation team reviews, publishes and measures their impact in a dashboard exported to PDF.',
      },
      architecture: [
        {
          title: { es: 'Frontend por funcionalidades', en: 'Feature-based frontend' },
          text: {
            es: 'Screaming architecture: el código se organiza por lo que hace la app (actividades, propuestas, organizaciones), no por tipo de archivo. Las decisiones quedan registradas en ADRs.',
            en: 'Screaming architecture: code is organized by what the app does (activities, proposals, organizations), not by file type. Decisions are recorded as ADRs.',
          },
        },
        {
          title: { es: 'API REST en capas', en: 'Layered REST API' },
          text: {
            es: 'Controladores, servicios y repositorios separados, con DTOs y mappers para no exponer las entidades. El contrato de la API se acordó antes de escribir código.',
            en: 'Separate controllers, services and repositories, with DTOs and mappers so entities are never exposed. The API contract was agreed before writing code.',
          },
        },
        {
          title: { es: 'Seguridad por roles', en: 'Role-based security' },
          text: {
            es: 'Autenticación con JWT y permisos distintos para voluntario, organización y administración con Spring Security.',
            en: 'JWT authentication with separate permissions for volunteer, organization and admin via Spring Security.',
          },
        },
        {
          title: { es: 'Estados y correos automáticos', en: 'Automatic statuses and emails' },
          text: {
            es: 'Cada cierto tiempo, el backend revisa las fechas y pasa cada actividad a "en curso", "finalizada" o "pendiente de cierre" sin que nadie lo haga a mano. Cada paso importante envía un correo con plantilla propia (inscripción, lista de espera, aprobación, plaza liberada…), probado con Mailpit, un buzón de pruebas que recibe los correos sin que lleguen a nadie real.',
            en: 'The backend periodically checks dates and moves each activity to "in progress", "finished" or "pending closure" with no manual step. Every key step sends an email with its own template (sign-up, waitlist, approval, freed-up spot…), tested with Mailpit, a test inbox that catches emails so they never reach anyone real.',
          },
        },
        {
          title: { es: 'Calidad en cada push', en: 'Quality on every push' },
          text: {
            es: 'GitHub Actions ejecuta los tests, el build, una cobertura mínima de tests y una auditoría de dependencias.',
            en: 'GitHub Actions runs the tests, the build, a minimum test coverage check and a dependency audit.',
          },
        },
      ],
    },
    repositories: [
      { kind: 'frontend', url: 'https://github.com/Proyecto-Fundacion-Verisure/frontend' },
      { kind: 'backend', url: 'https://github.com/Proyecto-Fundacion-Verisure/backend' },
    ],
  },
  {
    id: 'mundo-tech',
    title: 'Mundo Tech',
    description: {
      es: 'Back-office editorial para el periódico Mundo Tech: los autores escriben y envían artículos, y los editores los revisan, publican o rechazan.',
      en: 'Editorial back-office for the Mundo Tech newspaper: authors write and submit articles, and editors review, publish or reject them.',
    },
    teamType: 'team',
    technologies: ['React', 'React Router', 'Sass', 'Vitest', 'Java', 'Spring Boot', 'JPA'],
    accent: 'violet',
    repositories: [
      {
        kind: 'frontend',
        url: 'https://github.com/Periodico-Mundo-Tech-Team-3/mundo-tech-frontend',
      },
      {
        kind: 'backend',
        url: 'https://github.com/Periodico-Mundo-Tech-Team-3/mundo-tech-backend',
      },
    ],
  },
  {
    id: 'collapp',
    title: 'Collapp',
    description: {
      es: 'Plataforma de colaboración para creativos del sector audiovisual (maquillaje, fotografía, modelos y producción): publicar proyectos, encontrar oportunidades y gestionar candidaturas.',
      en: 'Collaboration platform for creatives in the audiovisual industry (makeup, photography, models and production): publish projects, find opportunities and manage applications.',
    },
    teamType: 'solo',
    technologies: [
      'React',
      'React Router',
      'Sass',
      'Vitest',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
    ],
    accent: 'ink',
    repositories: [
      { kind: 'frontend', url: 'https://github.com/Collapp-Project/collapp-frontend' },
      { kind: 'backend', url: 'https://github.com/Collapp-Project/collapp-backend' },
    ],
  },
] as const satisfies readonly Project[]
