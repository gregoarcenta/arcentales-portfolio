import { Technologies } from "@/data/projects";

export interface ExperienceItem {
  id: string;
  type: "work" | "practices" | "certificate" | "freelance";
  title: string;
  company?: string;
  period: string;
  description: string;
  technologies?: Technologies[];
  certificateUrl?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    type: "work",
    title: "Desarrollador Full Stack Freelance",
    company: "Proyectos Independientes",
    period: "2024 - 2025",
    description:
      "Período de desarrollo profesional enfocado en fortalecer habilidades técnicas mediante cursos especializados y participación en proyectos de desarrollo web, aplicando tecnologías modernas del ecosistema JavaScript y frameworks actuales.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Stripe",
      "Tailwind CSS",
      "Shadcn",
      "Docker",
      "Nest.js",
    ],
  },
  {
    id: "2",
    type: "work",
    title: "Frontend Developer",
    company: "Diverzu",
    period: "2022 - 2023",
    description:
      "Como Frontend Developer, fui responsable de crear experiencias de usuario para un sitio de comercio electrónico, utilizando las últimas tecnologías y enfoques de desarrollo web.\n" +
      "Mi enfoque principal estuvo en Angular y tecnologías relacionadas para ofrecer soluciones de alto rendimiento y visualmente atractivas",
    technologies: ["Angular", "Bootstrap", "Docker", "TypeScript"],
  },
  {
    id: "3",
    type: "practices",
    title: "Full Stack Developer",
    company: "Facultad de ciencias de la educación ULEAM",
    period: "2021 - 2022",
    description:
      "Durante mis prácticas preprofesionales en la Facultad de Ciencias de la Educación de la Universidad Laica Eloy Alfaro de Manabí, contribuí activamente al desarrollo de un aplicativo web para la elaboración y actualización de documentos de adaptaciones curriculares (DIAC).",
    technologies: ["Angular", "Bootstrap", "TypeScript", "PostgreSQL"],
  },
  {
    id: "4",
    type: "work",
    title: "Full Stack Developer",
    company: "Clear Minds Consultores",
    period: "2021 - 2021",
    description:
      "Como Desarrollador Full Stack, tuve la responsabilidad de participar en un proyecto clave relacionado con el desarrollo de interfaces web y formularios. Mi rol consistió en diseñar y desarrollar interfaces de usuario eficientes y atractivas, así como gestionar la comunicación entre el frontend y el backend del sistema.\n" +
      "Este emocionante proyecto involucró tecnologías como Docker, Java, JavaScript, Bootstrap y Angular.\n",
    technologies: ["Angular", "Bootstrap", "Java", "Docker", "SQL server"],
  },
];

export const certificatesData: ExperienceItem[] = [
  {
    id: "1",
    type: "certificate",
    title: "Docker - Guía práctica de uso para desarrolladores",
    company: "Devtalles",
    period: "2023",
    description:
      "Dominio de la contenedorización de aplicaciones, creación de imágenes y servicios con Docker Compose para entornos de desarrollo y producción.",
    certificateUrl: "https://frontendmasters.com",
  },
  {
    id: "2",
    type: "certificate",
    title: "ReactiveX - RxJS",
    company: "Devtalles",
    period: "2024",
    description:
      "Programación reactiva y manejo de flujos de datos asíncronos complejos, optimizando el rendimiento y la respuesta de aplicaciones JavaScript/TypeScript.",
    certificateUrl: "https://cursos.devtalles.com/certificates/jcqu0uprib",
  },
  {
    id: "3",
    type: "certificate",
    title: "Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN",
    company: "Udemy",
    period: "2024",
    description:
      "Implementación de arquitecturas robustas con el stack MEAN, profundizando en lazy loading, Guards, interceptores y despliegue de aplicaciones escalables.",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-42c27ef1-c341-4a95-93f8-2dfe5c4bf9aa/",
  },
  {
    id: "4",
    type: "certificate",
    title: "SQL de cero: Tu guía práctica con PostgreSQL",
    company: "Devtalles",
    period: "2024",
    description:
      "Diseño y administración de bases de datos relacionales, optimización de consultas complejas, uso de funciones, triggers y procedimientos almacenados.",
    certificateUrl: "https://cursos.devtalles.com/certificates/o7c6td1t9r",
  },
  {
    id: "5",
    type: "certificate",
    title: "Nest: Desarrollo Backend escalable con Node",
    company: "Devtalles",
    period: "2024",
    description:
      "Construcción de APIs modulares y escalables bajo arquitectura limpia, integrando TypeORM, validaciones, y seguridad.",
    certificateUrl: "https://cursos.devtalles.com/certificates/kwufposps0",
  },
  {
    id: "6",
    type: "certificate",
    title: "Java: trabajando con lambdas, streams y Spring Framework",
    company: "Alura Latam",
    period: "2025",
    description:
      "Modernización de código Java utilizando programación funcional y aprovechamiento del ecosistema de Spring para el desarrollo de aplicaciones empresariales.",
    certificateUrl:
      "https://app.aluracursos.com/certificate/a2331744-de13-404e-b074-9799628c2293?lang",
  },
  {
    id: "7",
    type: "certificate",
    title: "Java: persistencia de datos y consultas con Spring Data JPA",
    company: "Alura Latam",
    period: "2025",
    description:
      "Gestión eficiente de la capa de datos mediante JPA e Hibernate, implementando repositorios, relaciones complejas y optimización de acceso a datos.",
    certificateUrl:
      "https://app.aluracursos.com/certificate/52601d1f-fdce-4cb1-b1c9-7f5020f8b024?lang",
  },
  {
    id: "8",
    type: "certificate",
    title: "Foundational C# with Microsoft",
    company: "FreeCodeCamp.org",
    period: "2025",
    description:
      "Fundamentos sólidos de C# y .NET, incluyendo lógica de programación, manejo de colecciones y programación orientada a objetos certificados por Microsoft.",
    certificateUrl:
      "https://freecodecamp.org/certification/gregoarcenta/foundational-c-sharp-with-microsoft",
  },
  {
    id: "9",
    type: "certificate",
    title: "React: De cero a Experto",
    company: "Devtalles",
    period: "2025",
    description:
      "Desarrollo de aplicaciones modernas con React. Manejo de componentes funcionales, hooks, context API, integración con librerías externas y despliegue.",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-def1a8aa-726c-443a-a5f3-833a18f8d98a",
  },
  {
    id: "10",
    type: "certificate",
    title: "Java: creando tu primera API y conectándola al Front End",
    company: "Alura Latam",
    period: "2026",
    description:
      "Fundamentos de APIs REST con Spring Boot, estructura MVC, uso de DTOs y conexión con aplicaciones front-end.",
    certificateUrl:
      "https://app.aluracursos.com/certificate/1a0a9017-707f-4a8a-a1a7-b4377414d2cc?lang",
  },
];
