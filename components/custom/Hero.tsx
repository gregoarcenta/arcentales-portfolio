import {
  Code2,
  Braces,
  Terminal,
  Database,
  GitBranch,
  Cpu,
  TrendingUp,
  MessageCircle,
  Github,
  Linkedin
} from "lucide-react";
import { TechBackground } from "./TechBackground";
import { Button } from "../ui/button";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  //   const latestPost = blogPosts[0];
  const latestProject = projects[0];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 px-4 bg-background">
      {/* Tech network background */}
      <TechBackground />

      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2
          className="absolute top-[15%] left-[8%] w-6 h-6 text-primary/20 animate-float blur-[1px]"
          style={{ animationDelay: "0s", animationDuration: "6s" }}
        />
        <Braces
          className="absolute top-[25%] right-[12%] w-8 h-8 text-accent/25 animate-float blur-[1px]"
          style={{ animationDelay: "1s", animationDuration: "7s" }}
        />
        <Terminal
          className="absolute top-[60%] left-[15%] w-7 h-7 text-primary-glow/20 animate-float blur-[1px]"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <Database
          className="absolute top-[45%] right-[18%] w-6 h-6 text-secondary/25 animate-float blur-[1px]"
          style={{ animationDelay: "1.5s", animationDuration: "6.5s" }}
        />
        <GitBranch
          className="absolute bottom-[30%] left-[25%] w-7 h-7 text-accent/20 animate-float blur-[1px]"
          style={{ animationDelay: "0.5s", animationDuration: "7.5s" }}
        />
        <Cpu
          className="absolute bottom-[45%] right-[25%] w-8 h-8 text-primary/15 animate-float blur-[1px]"
          style={{ animationDelay: "2.5s", animationDuration: "9s" }}
        />
        <Code2
          className="absolute top-[35%] left-[35%] w-5 h-5 text-accent/15 animate-float blur-[1px]"
          style={{ animationDelay: "3s", animationDuration: "5.5s" }}
        />
        <Braces
          className="absolute bottom-[20%] right-[35%] w-6 h-6 text-primary-glow/20 animate-float blur-[1px]"
          style={{ animationDelay: "1.8s", animationDuration: "6.8s" }}
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/40 to-background/70 pointer-events-none" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,153,225,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,153,225,.03)_1px,transparent_1px)] bg-size[size:80px_80px] md:bg-size[size:100px_100px] mask-[radial-gradient(ellipse_80%_60%_at_50%_50%,#000,transparent)] opacity-40" />

      <div className="container mx-auto relative z-10 max-w-7xl mt-2 md:mt-14">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Main Intro */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="glass-card px-6 py-2 rounded-full text-sm font-medium text-secondary inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Disponible para proyectos freelance
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground max-w-4xl">
              <span className="block gradient-text">Full Stack Developer.</span>
              <span className="block text-foreground mt-2">
                Transformando ideas en software rentable.
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Experiencia en soluciones web optimizadas para escalar y crecer
              rápido.
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2 md:pt-4">
              <Link href="/projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group bg-linear-to-r from-[hsl(212,100%,48%)] to-[hsl(212,100%,58%)] hover:shadow-[0_0_40px_hsl(212,100%,58%,0.6)] transition-all duration-300 hover-lift px-6 md:px-8 w-full text-white border-0"
                >
                  <TrendingUp className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  Explora mi Trabajo
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-foreground/20 bg-transparent hover:bg-foreground/5 hover:border-foreground/40 transition-all duration-300 px-6 md:px-8 w-full sm:w-auto text-foreground"
                asChild
              >
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  Hablemos por WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2.5 md:p-3 rounded-full hover:bg-primary/20 hover:shadow-glow-primary transition-all duration-300 hover-lift"
              >
                <Github className="h-4 md:h-5 w-4 md:w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2.5 md:p-3 rounded-full hover:bg-secondary/20 hover:shadow-glow-secondary transition-all duration-300 hover-lift"
              >
                <Linkedin className="h-4 md:h-5 w-4 md:w-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Latest Activity */}
          <div className="space-y-4 md:space-y-6 animate-slide-up">
            {/* Latest Project */}
            {latestProject && (
              <div className="glass-card p-4 md:p-6 rounded-2xl border-2 border-primary/30 hover-lift group">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <TrendingUp className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                  <h3 className="text-xs md:text-sm font-semibold text-primary">
                    Último Proyecto
                  </h3>
                </div>
                <Link href={`/projects/${latestProject.id}`} className="block">
                  <div className="relative h-24 md:h-32 rounded-lg overflow-hidden mb-2 md:mb-3">
                    <Image
                      src={latestProject.image}
                      alt={latestProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                    {latestProject.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {latestProject.description}
                  </p>
                </Link>
              </div>
            )}

            {/* Latest Post */}
            {/* {latestPost && (
              <div className="glass-card p-4 md:p-6 rounded-2xl border-2 border-accent/30 hover-lift group">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <TrendingUp className="h-3 md:h-4 w-3 md:w-4 text-accent" />
                  <h3 className="text-xs md:text-sm font-semibold text-accent">
                    Último Post
                  </h3>
                </div>
                <Link to={`/blog/${latestPost.id}`} className="block">
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1 md:mb-2 group-hover:text-accent transition-colors">
                    {latestPost.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-3 mb-2 md:mb-3">
                    {latestPost.excerpt}
                  </p>
                  <div className="flex items-center gap-3 md:gap-4 text-xs text-muted-foreground">
                    <span>
                      {new Date(latestPost.date).toLocaleDateString("es-ES")}
                    </span>
                    <span>•</span>
                    <span>{latestPost.readTime}</span>
                  </div>
                </Link>
              </div>
            )} */}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-8 md:pt-12 animate-bounce text-center hidden md:block">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
