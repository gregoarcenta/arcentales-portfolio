export interface ExperienceItem {
  id: string;
  type: "work" | "freelance" | "certificate";
  title: string;
  company?: string;
  period: string;
  description: string;
  technologies?: string[];
  certificateUrl?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Presente",
    description:
      "Liderando el desarrollo de aplicaciones web escalables usando React y Node.js. Implementé arquitecturas de microservicios que mejoraron el rendimiento en un 40%.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    id: "2",
    type: "freelance",
    title: "Desarrollador Full Stack Freelance",
    company: "Proyectos Independientes",
    period: "2020 - 2022",
    description:
      "Desarrollé más de 15 proyectos web para clientes internacionales, desde e-commerce hasta aplicaciones SaaS, manejando todo el ciclo de desarrollo.",
    technologies: ["React", "Next.js", "Firebase", "Stripe", "Tailwind"]
  },
  {
    id: "3",
    type: "certificate",
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    period: "2023",
    description:
      "Certificación profesional en arquitectura de soluciones cloud en AWS",
    certificateUrl: "https://aws.amazon.com/certification/"
  },
  {
    id: "4",
    type: "certificate",
    title: "Advanced React Patterns",
    company: "Frontend Masters",
    period: "2023",
    description:
      "Curso avanzado sobre patrones de diseño, performance y arquitectura en React",
    certificateUrl: "https://frontendmasters.com"
  },
  {
    id: "5",
    type: "work",
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2020",
    description:
      "Desarrollé interfaces de usuario modernas y responsivas para clientes enterprise. Colaboré con equipos de diseño para implementar experiencias de usuario excepcionales.",
    technologies: ["React", "Vue.js", "SASS", "JavaScript"]
  }
];
