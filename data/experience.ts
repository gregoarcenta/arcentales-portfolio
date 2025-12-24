import { Technologies } from "@/data/projects";

export interface ExperienceItem {
  id: string;
  type: "work" | "practices" | "certificate"| "freelance";
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
      "Desarrollé más de 15 proyectos web para clientes internacionales, desde e-commerce hasta aplicaciones SaaS, manejando todo el ciclo de desarrollo.",
    technologies: [
      "React",
      "Next.js",
      "Stripe",
      "Tailwind",
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
    technologies: ["Angular", "Node.js", "Bootstrap", "Docker"],
  },
  {
    id: "3",
    type: "practices",
    title: "Full Stack Developer",
    company: "Facultad de ciencias de la educación ULEAM",
    period: "2021 - 2022",
    description:
      "Durante mis prácticas preprofesionales en la Facultad de Ciencias de la Educación de la Universidad Laica Eloy Alfaro de Manabí, contribuí activamente al desarrollo de un aplicativo web para la elaboración y actualización de documentos de adaptaciones curriculares (DIAC).",
    technologies: [
      "Angular",
      "Bootstrap",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
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
    technologies: [
      "Angular",
      "Bootstrap",
      "Java",
      "Docker",
      "SQL server"
    ],
  },
];

export const certificatesData: ExperienceItem[] = [
  {
    id: "5",
    type: "certificate",
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    period: "2023",
    description:
      "Certificación profesional en arquitectura de soluciones cloud en AWS",
    certificateUrl: "https://aws.amazon.com/certification/",
  },
  {
    id: "6",
    type: "certificate",
    title: "Advanced React Patterns",
    company: "Frontend Masters",
    period: "2023",
    description:
      "Curso avanzado sobre patrones de diseño, performance y arquitectura en React",
    certificateUrl: "https://frontendmasters.com",
  },
];
