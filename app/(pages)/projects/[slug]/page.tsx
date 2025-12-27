import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Code2, ExternalLink, FileText, Github } from "lucide-react";
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
        follow: false
      }
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
      <div className="container mx-auto px-4 py-6 md:py-12 max-w-7xl">
        {/* Back button */}
        <Link href="/projects">
          <Button
            variant="outline"
            className="cursor-pointer mb-4 md:mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a Proyectos
          </Button>
        </Link>

        {/* Hero Image */}
        <div
          className="relative h-64 md:h-80 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-12 animate-fade-in">
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading={"eager"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
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

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Overview */}
            <Card className="glass-card border-primary/20 animate-slide-up">
              <CardContent className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    Sobre el Proyecto
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    <span className="font-semibold text-accent">Desafío:</span>{" "}
                    {project.problem}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-secondary">
                      Solución:
                    </span>{" "}
                    {project.how}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card
              className="glass-card border-primary/20 animate-slide-up"
              style={{
                animationDelay: "100ms"
              }}
            >
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Funcionalidades Clave
                </h2>
                <div className="grid gap-3 md:gap-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="h-5 md:h-6 w-5 md:w-6 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base text-muted-foreground">
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
                animationDelay: "150ms"
              }}
            >
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Capturas del Proyecto
                </h2>
                <div className="space-y-6">
                  {/* Desktop mockup */}
                  {project.mockups?.desktop && (
                    <div className="space-y-3">
                      {project.type === "frontend" && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-3 h-3 rounded-full bg-primary/50" />
                          <span className="font-medium">Vista Desktop</span>
                        </div>
                      )}
                      <div
                        className="relative rounded-xl overflow-hidden border border-primary/20 bg-muted/5 group shadow-xl">
                        <Image
                          src={project.mockups.desktop}
                          alt={`${project.title} - Desktop`}
                          width={1920}
                          height={1080}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Tablet and Mobile */}
                  {project.mockups?.tablet && project.mockups?.mobile && (
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                      <div className="space-y-3 flex-1 w-full">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-3 h-3 rounded-full bg-accent/50" />
                          <span className="font-medium">Vista Tablet</span>
                        </div>
                        <div
                          className="relative rounded-xl overflow-hidden border border-primary/20 bg-muted/5 group shadow-lg">
                          <Image
                            src={project.mockups.tablet}
                            alt={`${project.title} - Tablet`}
                            width={768}
                            height={1024}
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      </div>

                      <div className="space-y-3 flex-none w-full md:w-auto">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-3 h-3 rounded-full bg-secondary/50" />
                          <span className="font-medium">Vista Mobile</span>
                        </div>
                        <div
                          className="relative rounded-4xl overflow-hidden border-4 border-primary/20 bg-muted/10 shadow-2xl group max-w-65 mx-auto md:mx-0">
                          <Image
                            src={project.mockups.mobile}
                            alt={`${project.title} - Mobile`}
                            width={390}
                            height={844}
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.05]"
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
          <div className="space-y-4 md:space-y-6 lg:sticky lg:top-24 h-fit">
            {/* Action buttons */}
            <Card
              className="glass-card border-primary/20 z-10 animate-slide-up"
              style={{
                animationDelay: "200ms"
              }}
            >
              <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">
                  Enlaces del Proyecto
                </h3>

                {project.demoUrl && (
                  <Button
                    className="w-full bg-gradient-primary hover:shadow-glow-primary"
                    asChild
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>
                )}

                {project.type === "frontend" && project.apiUrl && (
                  <Button
                    variant="outline"
                    className="w-full border-accent/50 hover:bg-accent/10"
                    asChild
                  >
                    <a
                      href={project.apiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 className="h-4 w-4 mr-2" />
                      Ver API
                    </a>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
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
                  animationDelay: "300ms"
                }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-5 w-5 text-accent" />
                      <h3 className="font-bold text-lg text-accent">
                        Profundiza en este Proyecto
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
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
                    className="w-full bg-linear-to-r from-accent to-accent/80 hover:shadow-glow-accent group text-sm"
                    asChild
                  >
                    <a href={project.blogUrl}>
                      📖 Leer Artículo Completo
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Tech Stack */}
            <Card
              className="glass-card border-primary/20 animate-slide-up"
              style={{
                animationDelay: "400ms"
              }}
            >
              <CardContent className="p-4 md:p-6">
                <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">
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
