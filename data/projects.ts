export interface Project {
  id: string;
  title: string;
  slug?: string;
  description: string;
  problem: string;
  keyFeatures: string[];
  type: ProjectType;
  technologies: Technologies[];
  how: string;
  adminCredentials?: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  apiUrl?: string;
  blogUrl?: string;
  isCurrent?: boolean;
  mockups: {
    desktop: string;
    tablet?: string;
    mobile?: string;
  };
}

type ProjectType = "frontend" | "backend" | "fullstack" | "other";

export type Technologies =
  | "Angular"
  | "React"
  | "Next.js"
  | "Tailwind CSS"
  | "Bootstrap"
  | "Shadcn"
  | "Nest.js"
  | "WebSockets"
  | "TypeScript"
  | "Type ORM"
  | "Prisma"
  | "Docker"
  | "PostgreSQL"
  | "SQL server"
  | "Stripe"
  | "Java";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Api TesloShop",
    slug: "api-tesloshop",
    description:
      "API RESTful desarrollada con NestJS y PostgreSQL, que gestiona productos, favoritos, órdenes, pagos y autenticación para la plataforma de e‑commerce.",
    problem:
      "Era necesario construir un backend robusto y escalable que soportara la lógica de negocio completa del e‑commerce, incluyendo autenticación, pagos y gestión de productos.",
    how: "Construido con NestJS y arquitectura modular, usando TypeORM para manejar relaciones en PostgreSQL. Passport se utilizó para autenticación con JWT. Stripe se integró para pagos seguros y pruebas de flujo de compra. Cloudinary se implementó para almacenamiento de imágenes con endpoints dedicados. Swagger documenta todos los endpoints para facilitar pruebas y mantenimiento.",
    keyFeatures: [
      "Endpoints para crear, actualizar y eliminar productos",
      "Endpoint toggle para agregar/eliminar favoritos",
      "Integración con Stripe para pagos y pruebas",
      "Gestión de órdenes con estados dinámicos según el flujo de compra",
      "Carrito de compras persistente",
      "Autenticación con Passport (JWT)",
      "Integración con Cloudinary para subir, eliminar y visualizar imágenes",
      "Endpoint de seed para generar productos de prueba rápidamente",
      "Documentación completa con Swagger",
    ],
    type: "backend",
    technologies: ["Nest.js", "TypeScript", "PostgreSQL", "Type ORM", "Stripe"],
    demoUrl: "https://api.tesloshop.arcentales.dev/api",
    githubUrl: "https://github.com/gregoarcenta/teslo-shop-backend",
    isCurrent: false,
    image:
      "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766694898/portfolio/api_teslo.png",
    mockups: {
      desktop:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1736912160/portfolio/rbezwmog2qkqhq7aby5z.png",
    },
  },
  {
    id: "2",
    title: "TesloShop - Angular SSR",
    slug: "tesloshop-angular-ssr",
    description:
      "Aplicación de comercio electrónico desarrollada con Angular y SSR, enfocada en carrito de compras, login, favoritos y visualización de productos.",
    problem:
      "Quería practicar SSR con Angular y construir una tienda online escalable que resolviera necesidades reales de autenticación, pagos y gestión de productos.",
    how: "Construido con Angular SSR para renderizado del lado del servidor. Tailwind CSS se utilizó para el diseño responsivo y moderno. El proyecto incluye autenticación, carrito, favoritos y gestión de órdenes, todo integrado en el frontend.",
    keyFeatures: [
      "Carrito de compras",
      "Login funcional y sistema de favoritos",
      "Pasarela de pagos con Stripe",
      "Filtros y detalle completo de órdenes (precio, productos, etc)",
      "Grid de productos con vista detallada en perfil",
      "Copiar enlaces con metadata gracias al SSR de Angular",
    ],
    type: "frontend",
    technologies: ["Angular", "Tailwind CSS", "TypeScript", "Stripe"],
    demoUrl: "https://ng.tesloshop.arcentales.dev/",
    githubUrl: "https://github.com/gregoarcenta/teslo-shop-angular",
    apiUrl: "https://arcentales.dev/projects/api-tesloshop",
    blogUrl: "/blog/tesloshop",
    isCurrent: false,
    image:
      "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766695635/portfolio/ng_teslo.png",
    mockups: {
      desktop:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766690301/portfolio/ng_teslo_desktop.png",
      tablet:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766690544/portfolio/ng_teslo_tablet.png",
      mobile:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766690688/portfolio/ng_teslo_mobile.png",
    },
  },
  {
    id: "3",
    title: "Real-Time Chat App",
    slug: "real-time-chat",
    description:
      "Aplicación de chat en tiempo real construida con NestJS y React. Demuestra la implementación de comunicación por WebSockets para mensajería instantánea.",
    problem:
      "Quería aprender a integrar WebSockets en NestJS y React para construir un sistema de mensajería en tiempo real con salas dinámicas.",
    how: "Construido con NestJS para el backend usando WebSockets y arquitectura modular. El frontend en React maneja la interfaz y estados de conexión de usuarios. Tailwind CSS se utilizó para un diseño moderno y responsivo. El sistema permite crear salas dinámicas y enviar mensajes instantáneos.",
    keyFeatures: [
      "Mensajería instantánea con WebSockets",
      "Salas de chat dinámicas",
      "Estados de conexión de usuarios en tiempo real",
      "Interfaz responsiva con React y Tailwind",
    ],
    type: "fullstack",
    technologies: [
      "Nest.js",
      "TypeScript",
      "WebSockets",
      "React",
      "Tailwind CSS",
    ],
    demoUrl: "https://chat.arcentales.dev/",
    githubUrl: "https://github.com/gregoarcenta/realtime-chat",
    isCurrent: false,
    image:
      "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766713474/portfolio/chat.png",
    mockups: {
      desktop:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766712760/portfolio/chat_desktop.png",
      tablet:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766712743/portfolio/chat_tablet.png",
      mobile:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766712729/portfolio/chat_mobile.png",
    },
  },
  {
    id: "4",
    title: "TesloShop (React)",
    slug: "tesloshop-react",
    description:
      "Aplicación de comercio electrónico desarrollada con React, que consume la API del e‑commerce y replica las funcionalidades de un proyecto anterior hecho en Angular, pero con un stack moderno basado en React puro.",
    problem:
      "Quería aprender React y practicar las mismas ideas del e‑commerce que hice en Angular anteriormente, pero aplicadas con librerías y patrones propios del ecosistema React.",
    how: "Construido con React puro, usando TanStack Query para manejar estado asincrónico y sincronizar filtros con la URL. Zustand se utilizó para el estado global de la aplicación. shadcn/ui y Tailwind CSS aportaron una interfaz moderna y consistente. El dashboard protegido por rol de admin demuestra la integración de lógica de acceso en el frontend.",
    adminCredentials: "admin@admin.com | Admin123",
    keyFeatures: [
      "Carrito de compras en tiempo real",
      "Login funcional y sistema de favoritos",
      "Visualización de órdenes compradas con detalle",
      "Filtros avanzados de productos (precio, tipo, talla, género, búsqueda y ordenamiento)",
      "Dashboard de administración protegido por rol",
      "Panel de productos con lista y creación de nuevos ítems",
    ],
    type: "frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn", "Stripe"],
    demoUrl: "https://react.tesloshop.arcentales.dev/",
    githubUrl: "https://github.com/gregoarcenta/teslo-shop-react",
    apiUrl: "https://arcentales.dev/projects/api-tesloshop",
    blogUrl: "/blog/tesloshop-react",
    isCurrent: false,
    image:
      "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766698384/portfolio/react_teslo.png",
    mockups: {
      desktop:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766697813/portfolio/react_teslo_desktop.png",
      tablet:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766697483/portfolio/react_teslo_tablet.png",
      mobile:
        "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766697467/portfolio/react_teslo_mobile.png",
    },
  },
];
