import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  Github,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import NotFound from "@/app/not-found";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projectsData.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Gregory Arcentales",
      description: "El proyecto solicitado no existe o fue removido.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${project.title} | Proyecto ${project.type}`;
  const description = `Proyecto desarrollado por Gregory Arcentales utilizando ${project.technologies.join(
    ", "
  )}. Enfocado en buenas prácticas, rendimiento y arquitectura moderna.`;

  const url = `https://arcentales.dev/projects/${project.slug}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      "portfolio developer",
      `${project.type} project`,
      "web development",
      ...project.technologies,
      "Gregory Arcentales",
    ],
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `Proyecto ${project.title} desarrollado por Gregory Arcentales`,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((project) => project.slug === slug);

  // Get related blog posts for this project
  // const relatedPosts = blogPosts.filter((post) => post.projectId === id);
  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <div className="container mx-auto max-w-7xl px-4 py-6 md:py-12">
        {/* Back button */}
        <Link href="/projects">
          <Button
            variant="outline"
            className="group mb-4 cursor-pointer md:mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Volver a Proyectos
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="animate-fade-in relative mb-6 h-64 overflow-hidden rounded-2xl md:mb-12 md:h-80 md:rounded-3xl lg:h-96">
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading={"eager"}
            className="h-full w-full object-cover"
          />
          <div className="from-background via-background/50 absolute inset-0 bg-linear-to-t to-transparent" />
          <div className="absolute right-4 bottom-4 left-4 md:right-8 md:bottom-8 md:left-8">
            <h1 className="text-foreground mb-3 text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-primary/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 md:space-y-8 lg:col-span-2">
            {/* Overview */}
            <Card className="glass-card border-primary/20 animate-slide-up">
              <CardContent className="space-y-4 p-4 md:space-y-6 md:p-6 lg:p-8">
                <div>
                  <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Sobre el Proyecto
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed md:text-base">
                    {project.description}
                  </p>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed md:text-base">
                    <span className="text-accent font-semibold">Desafío:</span>{" "}
                    {project.problem}
                  </p>
                  <p
                    className={`text-muted-foreground text-sm leading-relaxed md:text-base ${project.adminCredentials && "mb-4"}`}
                  >
                    <span className="text-foreground font-semibold">
                      Solución:
                    </span>{" "}
                    {project.how}
                  </p>

                  {project.adminCredentials && (
                    <p className="text-muted-foreground text-sm">
                      Puedes explorar el panel de administrador con las
                      credenciales:{" "}
                      <code className="text-foreground">
                        {project.adminCredentials}
                      </code>
                      {/*{" / "}*/}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card
              className="glass-card border-primary/20 animate-slide-up"
              style={{
                animationDelay: "100ms",
              }}
            >
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
                  Funcionalidades Clave
                </h2>
                <div className="grid gap-3 md:gap-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0 md:h-6 md:w-6" />
                      <p className="text-muted-foreground text-sm md:text-base">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Screenshots/Mockups */}
            <Card
              className="glass-card border-primary/20 animate-slide-up"
              style={{
                animationDelay: "150ms",
              }}
            >
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
                  Capturas del Proyecto
                </h2>
                <div className="space-y-6">
                  {/* Desktop mockup */}
                  {project.mockups?.desktop && (
                    <div className="space-y-3">
                      {project.type === "frontend" && (
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                          <div className="bg-primary/50 h-3 w-3 rounded-full" />
                          <span className="font-medium">Vista Desktop</span>
                        </div>
                      )}
                      <div className="border-primary/20 bg-muted/5 group relative overflow-hidden rounded-xl border shadow-xl">
                        <Image
                          src={project.mockups.desktop}
                          alt={`${project.title} - Desktop`}
                          width={1920}
                          height={1080}
                          className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Tablet and Mobile */}
                  {project.mockups?.tablet && project.mockups?.mobile && (
                    <div className="flex flex-col items-start gap-10 md:flex-row">
                      <div className="w-full flex-1 space-y-3">
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                          <div className="bg-accent/50 h-3 w-3 rounded-full" />
                          <span className="font-medium">Vista Tablet</span>
                        </div>
                        <div className="border-primary/20 bg-muted/5 group relative overflow-hidden rounded-xl border shadow-lg">
                          <Image
                            src={project.mockups.tablet}
                            alt={`${project.title} - Tablet`}
                            width={768}
                            height={1024}
                            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      </div>

                      <div className="w-full flex-none space-y-3 md:w-auto">
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                          <div className="bg-secondary/50 h-3 w-3 rounded-full" />
                          <span className="font-medium">Vista Mobile</span>
                        </div>
                        <div className="border-primary/20 bg-muted/10 group relative mx-auto max-w-65 overflow-hidden rounded-4xl border-4 shadow-2xl md:mx-0">
                          <Image
                            src={project.mockups.mobile}
                            alt={`${project.title} - Mobile`}
                            width={390}
                            height={844}
                            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="h-fit space-y-4 md:space-y-6 lg:sticky lg:top-24">
            {/* Action buttons */}
            <Card
              className="glass-card border-primary/20 animate-slide-up z-10"
              style={{
                animationDelay: "200ms",
              }}
            >
              <CardContent className="space-y-3 p-4 md:space-y-4 md:p-6">
                <h3 className="mb-3 text-base font-bold md:mb-4 md:text-lg">
                  Enlaces del Proyecto
                </h3>

                {project.demoUrl && (
                  <Button
                    className="bg-gradient-primary hover:shadow-glow-primary w-full"
                    asChild
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {project.type === "backend"
                        ? "Ver documentación del API"
                        : "Ver Demo"}
                    </a>
                  </Button>
                )}

                {project.type === "frontend" && project.apiUrl && (
                  <Button
                    variant="outline"
                    className="border-accent/50 hover:bg-accent/10 w-full"
                    asChild
                  >
                    <a
                      href={project.apiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 className="mr-2 h-4 w-4" />
                      Ver API
                    </a>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 w-full"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código en GitHub
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Blog Post Card */}
            {project.blogUrl && (
              <Card
                className="glass-card border-accent/20 bg-accent/5 animate-slide-up"
                style={{
                  animationDelay: "300ms",
                }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="mb-4">
                    <div className="mb-3 flex items-center gap-2">
                      <FileText className="text-accent h-5 w-5" />
                      <h3 className="text-accent text-lg font-bold">
                        Profundiza en este Proyecto
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-2 text-sm leading-relaxed">
                      ¿Quieres conocer el proceso completo detrás de este
                      proyecto? Te cuento todos los desafíos técnicos y
                      lecciones aprendidas.
                    </p>
                    {/*<p className="text-sm font-semibold text-foreground">*/}
                    {/*  Lee mi artículo: "*/}
                    {/*  {blogPosts.find((p) => p.projectId === project.id)*/}
                    {/*    ?.title || "Detrás del Código"}*/}
                    {/*  "*/}
                    {/*</p>*/}
                  </div>
                  <Button
                    variant="default"
                    className="from-accent to-accent/80 hover:shadow-glow-accent group w-full bg-linear-to-r text-sm"
                    asChild
                  >
                    <a href={project.blogUrl}>
                      📖 Leer Artículo Completo
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Tech Stack */}
            <Card
              className="glass-card border-primary/20 animate-slide-up"
              style={{
                animationDelay: "400ms",
              }}
            >
              <CardContent className="p-4 md:p-6">
                <h3 className="mb-3 text-base font-bold md:mb-4 md:text-lg">
                  Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-primary/10 text-primary border-primary/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
