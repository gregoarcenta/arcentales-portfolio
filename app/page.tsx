import { AnimatedSection } from "@/components/custom/AnimatedSection";
import Hero from "@/components/custom/Hero";
import HeroStats from "@/components/custom/HeroStats";
import { ProgressScroll } from "@/components/custom/ProgressScroll";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { currentlyLearning } from "@/data/skills";
import { ArrowRight, Sparkles, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const featuredProjects = projects.slice(0, 2);
  // const latestPosts = blogPosts.slice(0, 3);
  return (
    <div className="min-h-screen relative">
      {/* Scroll progress indicator */}
      <ProgressScroll />

      <Hero />

      {/* Stats Section - Projects, Technologies, Experience */}
      <HeroStats />

      {/* Featured Projects */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Section transition overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background to-transparent pointer-events-none z-20" />

        {/* Background effect */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-card/20 to-transparent" />

        {/* Animated background blob */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 animate-shimmer bg-size[length:200%_100%]">
                ⚡ Proyectos Destacados
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Últimos Proyectos</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Soluciones que combinan diseño moderno con código limpio
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {featuredProjects.map((project, idx) => (
              <AnimatedSection
                key={project.id}
                animation={idx % 2 === 0 ? "slide-left" : "slide-right"}
                delay={idx * 150}
              >
                <Card className="glass-card border-primary/20 overflow-hidden hover-lift group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
                <Button className="bg-gradient-primary hover:shadow-glow-primary hover-lift group">
                  Ver Todos los Proyectos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Section transition overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none z-20" />

        {/* Background effect with accent color */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/5 to-transparent" />

        {/* Animated background */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "0.5s" }}
        />

        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                📝 Blog
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Últimos Artículos</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comparto conocimiento, experiencias y aprendizajes del
                desarrollo web
              </p>
            </div>
          </AnimatedSection>

          {/* <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {latestPosts.map((post, idx) => (
                <AnimatedSection
                  key={post.id}
                  animation="scale"
                  delay={idx * 100}
                >
                  <Link to={`/blog/${post.id}`} className="block h-full">
                    <Card className="glass-card border-accent/20 overflow-hidden hover-lift group h-full transform transition-all duration-500 hover:border-accent/40">
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                        {post.tags && post.tags.length > 0 && (
                          <Badge className="absolute top-3 right-3 bg-accent text-white animate-bounce-in">
                            {post.tags[0]}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>
                            {new Date(post.date).toLocaleDateString("es-ES")}
                          </span>
                          <span>{post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div> */}

          <AnimatedSection animation="scale">
            <div className="text-center">
              <Link href="/blog">
                <Button className="bg-gradient-accent hover:shadow-glow-accent hover-lift group">
                  Ver Todos los Artículos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Section transition overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none z-20" />

        {/* Background effect */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />

        {/* Floating particles effect */}
        <div className="absolute top-10 left-20 w-4 h-4 bg-primary/30 rounded-full animate-float" />
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-accent/30 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-5 h-5 bg-secondary/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Sparkles className="h-3 w-3 mr-1 inline-block animate-pulse-slow" />
                En Constante Evolución
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Aprendiendo Ahora</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Siempre actualizándome con las últimas tecnologías del
                ecosistema
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {currentlyLearning.map((skill, idx) => (
                <AnimatedSection
                  key={skill.name}
                  animation="scale"
                  delay={idx * 100}
                  className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
                >
                  <Card className="glass-card border-primary/20 hover-lift group h-full transform transition-all duration-500 hover:border-primary/40 hover:shadow-glow-primary">
                    <CardContent className="p-6 text-center">
                      <div
                        className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-500 animate-float"
                        style={{ animationDelay: `${idx * 0.2}s` }}
                      >
                        {skill.icon}
                      </div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
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
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Section transition overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background to-transparent pointer-events-none z-20" />

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="container mx-auto max-w-4xl relative z-10">
          <AnimatedSection animation="scale">
            <Card className="glass-card border-primary/30 bg-linear-to-r from-primary/10 via-accent/10 to-primary/10 overflow-hidden hover-lift group transform transition-all duration-500 hover:shadow-glow-primary">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors animate-bounce-in">
                    <User className="h-8 w-8 text-primary animate-pulse-slow" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text">
                    ¿Quieres Saber Más Sobre Mí?
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Descubre mi trayectoria, filosofía de trabajo y cómo puedo
                  ayudarte a transformar tus ideas en soluciones digitales de
                  impacto.
                </p>
                <Link href="/sobre-mi">
                  <Button className="cursor-pointer bg-gradient-primary hover:shadow-glow-primary hover-lift group transform transition-all duration-300 hover:scale-105">
                    Conoce Mi Historia
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
