import { AnimatedSection } from "@/components/custom/AnimatedSection";
import Hero from "@/components/custom/Hero";
import HeroStats from "@/components/custom/HeroStats";
import { ProgressScroll } from "@/components/custom/ProgressScroll";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projectsData } from "@/data/projects";
import { currentlyLearning } from "@/data/skills";
import { ArrowRight, Sparkles, User, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const featuredProjects = projectsData.slice(-2);
  // const latestPosts = blogPosts.slice(0, 3);
  return (
    <div className="relative min-h-screen">
      {/* Scroll progress indicator */}
      <ProgressScroll />

      {/* Hero section */}
      <Hero />

      {/* Stats Section - Projects, Technologies, Experience */}
      <HeroStats />

      {/* Featured Projects */}
      <section className="relative overflow-hidden px-4 py-20">
        {/* Animated background blob */}
        <div className="bg-primary/10 animate-pulse-slow absolute top-20 right-10 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-accent/10 animate-pulse-slow absolute bottom-20 left-10 h-96 w-96 rounded-full blur-3xl" />

        {/* Container with featured projects*/}
        <div className="relative z-10 container mx-auto">
          <AnimatedSection animation="fade">
            <div className="mb-12 text-center">
              <Badge className="bg-primary/20 text-primary border-primary/30 animate-shimmer bg-size[length:200%_100%] mb-4">
                ⚡ Proyectos Destacados
              </Badge>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="gradient-text">Últimos Proyectos</span>
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                Soluciones que combinan diseño moderno con código limpio
              </p>
            </div>
          </AnimatedSection>

          <div className="mx-auto mb-8 grid max-w-5xl gap-8 md:grid-cols-2">
            {featuredProjects.map((project, idx) => (
              <AnimatedSection
                key={project.id}
                animation={idx % 2 === 0 ? "slide-left" : "slide-right"}
                delay={idx * 150}
              >
                <Card className="glass-card border-primary/20 hover-lift group h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      height={1960}
                      width={1080}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="from-card via-card/50 absolute inset-0 bg-linear-to-t to-transparent opacity-90 transition-opacity group-hover:opacity-70" />
                    {/* Current project badge */}
                    {project.isCurrent && (
                      <Badge className="shadow-glow-accent absolute top-3 left-3 cursor-default bg-amber-600 text-xs md:top-4 md:left-4">
                        <Zap className="mr-1 h-3 w-3 animate-pulse" />
                        En Desarrollo
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="group-hover:text-primary mb-2 text-xl font-bold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="scale">
            <div className="text-center">
              <Link href="/projects">
                <Button className="bg-gradient-primary hover:shadow-glow-primary hover-lift group cursor-pointer">
                  Ver Todos los Proyectos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Latest Blog Posts */}
      {/*<section className="py-20 px-4 relative overflow-hidden">*/}
      {/*  /!* Section transition overlays *!/*/}
      {/*  <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background to-transparent pointer-events-none z-20" />*/}
      {/*  <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none z-20" />*/}

      {/*  /!* Background effect with accent color *!/*/}
      {/*  <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/5 to-transparent" />*/}

      {/*  /!* Animated background *!/*/}
      {/*  <div*/}
      {/*    className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"*/}
      {/*    style={{ animationDelay: "0.5s" }}*/}
      {/*  />*/}

      {/*  <div className="container mx-auto relative z-10">*/}
      {/*    <AnimatedSection animation="fade">*/}
      {/*      <div className="text-center mb-12">*/}
      {/*        <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">*/}
      {/*          📝 Blog*/}
      {/*        </Badge>*/}
      {/*        <h2 className="text-4xl md:text-5xl font-bold mb-4">*/}
      {/*          <span className="gradient-text">Últimos Artículos</span>*/}
      {/*        </h2>*/}
      {/*        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">*/}
      {/*          Comparto conocimiento, experiencias y aprendizajes del*/}
      {/*          desarrollo web*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </AnimatedSection>*/}

      {/*    /!* <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">*/}
      {/*        {latestPosts.map((post, idx) => (*/}
      {/*          <AnimatedSection*/}
      {/*            key={post.id}*/}
      {/*            animation="scale"*/}
      {/*            delay={idx * 100}*/}
      {/*          >*/}
      {/*            <Link to={`/blog/${post.id}`} className="block h-full">*/}
      {/*              <Card className="glass-card border-accent/20 overflow-hidden hover-lift group h-full transform transition-all duration-500 hover:border-accent/40">*/}
      {/*                <div className="relative h-40 overflow-hidden">*/}
      {/*                  <img*/}
      {/*                    src={post.image}*/}
      {/*                    alt={post.title}*/}
      {/*                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"*/}
      {/*                  />*/}
      {/*                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />*/}
      {/*                  {post.tags && post.tags.length > 0 && (*/}
      {/*                    <Badge className="absolute top-3 right-3 bg-accent text-white animate-bounce-in">*/}
      {/*                      {post.tags[0]}*/}
      {/*                    </Badge>*/}
      {/*                  )}*/}
      {/*                </div>*/}
      {/*                <CardContent className="p-6">*/}
      {/*                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">*/}
      {/*                    {post.title}*/}
      {/*                  </h3>*/}
      {/*                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">*/}
      {/*                    {post.excerpt}*/}
      {/*                  </p>*/}
      {/*                  <div className="flex items-center justify-between text-xs text-muted-foreground">*/}
      {/*                    <span>*/}
      {/*                      {new Date(post.date).toLocaleDateString("es-ES")}*/}
      {/*                    </span>*/}
      {/*                    <span>{post.readTime}</span>*/}
      {/*                  </div>*/}
      {/*                </CardContent>*/}
      {/*              </Card>*/}
      {/*            </Link>*/}
      {/*          </AnimatedSection>*/}
      {/*        ))}*/}
      {/*      </div> *!/*/}

      {/*    <AnimatedSection animation="scale">*/}
      {/*      <div className="text-center">*/}
      {/*        <Link href="/blog">*/}
      {/*          <Button className="cursor-pointer bg-gradient-accent hover:shadow-glow-accent hover-lift group">*/}
      {/*            Ver Todos los Artículos*/}
      {/*            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />*/}
      {/*          </Button>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </AnimatedSection>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Currently Learning */}
      <section className="relative overflow-hidden px-4 py-20">
        {/* Floating particles effect */}
        <div className="bg-primary/30 animate-float absolute top-10 left-20 h-4 w-4 rounded-full" />
        <div className="bg-accent/30 animate-float absolute top-40 right-32 h-6 w-6 rounded-full" />

        {/* Container with currently learning skills */}
        <div className="relative z-10 container mx-auto">
          <AnimatedSection animation="fade">
            <div className="mb-12 text-center">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                <Sparkles className="animate-pulse-slow mr-1 inline-block h-3 w-3" />
                En Constante Evolución
              </Badge>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="gradient-text">Aprendiendo Ahora</span>
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                Siempre actualizándome con las últimas tecnologías del
                ecosistema
              </p>
            </div>
          </AnimatedSection>

          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4">
              {currentlyLearning.map((skill, idx) => (
                <AnimatedSection
                  key={skill.name}
                  animation="scale"
                  delay={idx * 100}
                  className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
                >
                  <Card className="glass-card border-primary/20 hover-lift group hover:border-primary/40 hover:shadow-glow-primary h-full transform transition-all duration-500">
                    <CardContent className="p-6 text-center">
                      <div
                        className="animate-float mb-3 text-4xl transition-transform duration-500 group-hover:scale-110"
                        style={{ animationDelay: `${idx * 0.2}s` }}
                      >
                        {skill.icon}
                      </div>
                      <p className="text-foreground group-hover:text-primary font-semibold transition-colors">
                        {skill.name}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me CTA Section */}
      <section className="relative overflow-hidden px-4 py-20">
        {/* Section transition overlay */}
        <div className="from-background pointer-events-none absolute top-0 right-0 left-0 z-20 h-32 bg-linear-to-b to-transparent" />

        {/* Gradient blobs */}
        <div className="from-primary/20 to-accent/20 animate-pulse-slow absolute top-0 left-1/4 h-96 w-96 rounded-full bg-linear-to-r blur-3xl" />
        <div className="from-accent/20 to-secondary/20 animate-pulse-slow absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-linear-to-r blur-3xl" />

        {/* About me card */}
        <div className="relative z-10 container mx-auto max-w-4xl">
          <AnimatedSection animation="scale">
            <Card className="glass-card border-primary/30 from-primary/10 via-accent/10 to-primary/10 hover-lift group hover:shadow-glow-primary transform overflow-hidden bg-linear-to-r transition-all duration-500">
              <CardContent className="p-8 text-center md:p-12">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/20 group-hover:bg-primary/30 animate-bounce-in rounded-full p-4 transition-colors">
                    <User className="text-primary animate-pulse-slow h-8 w-8" />
                  </div>
                </div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  <span className="gradient-text">
                    ¿Quieres Saber Más Sobre Mí?
                  </span>
                </h2>
                <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                  Descubre mi trayectoria, filosofía de trabajo y cómo puedo
                  ayudarte a transformar tus ideas en soluciones digitales de
                  impacto.
                </p>
                <Link href="/about">
                  <Button className="bg-gradient-primary hover:shadow-glow-primary hover-lift group transform cursor-pointer transition-all duration-300 hover:scale-105">
                    Conoce Mi Historia
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
