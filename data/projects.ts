export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  keyFeatures: string[];
  technologies: Technologies[];
  how: string;
  image: string;
  demoUrl?: string;
  apiUrl?: string;
  blogUrl?: string;
  isCurrent?: boolean;
  mockups: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

export type Technologies =
  | "Angular"
  | "React"
  | "Next.js"
  | "Tailwind"
  | "Bootstrap"
  | "Shadcn"
  | "Node.js"
  | "Nest.js"
  | "TypeScript"
  | "Docker"
  | "PostgreSQL"
  | "SQL server"
  | "Stripe"
  | "Java";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico full-stack con panel de administración y pasarela de pagos integrada",
    problem:
      "Las pequeñas empresas necesitaban una solución escalable y personalizable para vender online sin costos prohibitivos",
    keyFeatures: [
      "Carrito de compras en tiempo real",
      "Panel de administración completo",
      "Integración con Stripe",
      "Sistema de inventario automático",
      "Notificaciones por email"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    how: "Construido con arquitectura modular usando React para el frontend, Node.js/Express para el backend API REST, PostgreSQL como base de datos, y Stripe para procesamiento de pagos. Implementé caché con Redis para optimizar consultas frecuentes.",
    image: "/placeholder.svg",
    demoUrl: "https://demo.example.com",
    apiUrl: "https://api.example.com/docs",
    blogUrl: "/blog/ecommerce-platform",
    isCurrent: false,
    mockups: {
      desktop: "/placeholder.svg",
      tablet: "/placeholder.svg",
      mobile: "/placeholder.svg"
    }
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas colaborativa con tableros Kanban y chat en tiempo real",
    problem:
      "Los equipos remotos necesitaban una herramienta intuitiva para coordinar tareas sin la complejidad de soluciones enterprise",
    keyFeatures: [
      "Tableros Kanban drag & drop",
      "Chat en tiempo real",
      "Asignación de tareas",
      "Notificaciones push",
      "Modo offline"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Socket.io",
      "Framer Motion"
    ],
    how: "Utilicé Firebase para autenticación y base de datos en tiempo real, Socket.io para el chat, y Framer Motion para animaciones fluidas. Implementé service workers para funcionalidad offline.",
    image: "/placeholder.svg",
    demoUrl: "https://tasks-demo.example.com",
    blogUrl: "/blog/task-management",
    isCurrent: true,
    mockups: {
      desktop: "/placeholder.svg",
      tablet: "/placeholder.svg",
      mobile: "/placeholder.svg"
    }
  },
  {
    id: "3",
    title: "AI Content Generator",
    description:
      "Generador de contenido con IA para redes sociales y blogs usando GPT-4",
    problem:
      "Creadores de contenido necesitaban herramientas para acelerar la creación sin perder su voz única",
    keyFeatures: [
      "Generación de posts optimizados",
      "Análisis de tono y estilo",
      "Templates personalizables",
      "Historial de generaciones",
      "Exportación múltiple formatos"
    ],
    technologies: ["Next.js", "OpenAI API", "Prisma", "Tailwind", "Vercel"],
    how: "Desarrollado en Next.js con rutas API para manejar llamadas a OpenAI. Usé Prisma ORM con PostgreSQL para almacenar templates y generaciones. Implementé rate limiting y caché para optimizar costos de API.",
    image: "/placeholder.svg",
    demoUrl: "https://ai-content.example.com",
    apiUrl: "https://ai-content.example.com/api",
    blogUrl: "/blog/ai-content-generator",
    isCurrent: true,
    mockups: {
      desktop: "/placeholder.svg",
      tablet: "/placeholder.svg",
      mobile: "/placeholder.svg"
    }
  }
];
