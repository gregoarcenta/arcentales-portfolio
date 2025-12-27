export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "learning";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", category: "frontend" },
      { name: "Angular", icon: "🅰️", category: "frontend" },
      { name: "TypeScript", icon: "📘", category: "frontend" },
      { name: "Next.js", icon: "▲", category: "frontend" },
      { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
      { name: "RxJS", icon: "🔄", category: "frontend" },
      { name: "Jest", icon: "🃏", category: "frontend" },
      { name: "Cypress", icon: "🌲", category: "frontend" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢", category: "backend" },
      { name: "NestJS", icon: "🦅", category: "backend" },
      { name: "PostgreSQL", icon: "🐘", category: "backend" },
      { name: "Firebase", icon: "🔥", category: "backend" },
      { name: "Express", icon: "⚡", category: "backend" },
      { name: "Prisma", icon: "💎", category: "backend" },
      { name: "TypeORM", icon: "🗄️", category: "backend" },
      { name: "Socket.IO", icon: "🔌", category: "backend" },
      { name: "WebSockets", icon: "🌐", category: "backend" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "🌿", category: "tools" },
      { name: "Docker", icon: "🐳", category: "tools" },
      { name: "Vercel", icon: "▲", category: "tools" },
      { name: "VS Code", icon: "💻", category: "tools" },
      { name: "IntelliJ IDEA", icon: "💡", category: "tools" }
    ]
  }
];

export const currentlyLearning: Skill[] = [
  { name: "Java", icon: "☕", category: "learning" },
  { name: "Spring Boot", icon: "🍃", category: "learning" },
  // { name: "GraphQL", icon: "◐", category: "learning" },
  // { name: "Redis", icon: "🔴", category: "learning" },
  { name: "Microservicios", icon: "🔧", category: "learning" }
];
