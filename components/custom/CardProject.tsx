import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
  idx: number;
}

export default function ProjectCard({ project, idx }: Props) {
  return (
    <Card
      key={project.id}
      className="glass-card border-primary/20 overflow-hidden hover-lift group animate-slide-up"
      style={{ animationDelay: `${idx * 150}ms` }}
    >
      {/* Wrap entire card in Link for md+ screens */}
      <Link href={`/projects/${project.slug}`} className="hidden md:block">
        {/* Project image with overlay */}
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            height={392}
            width={620}
            loading={idx < 2 ? "eager" : "lazy"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />

          {/* Click indicator - only visible on hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-full p-2">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          {/* Current project badge */}
          {project.isCurrent && (
            <Badge className="absolute top-3 md:top-4 left-3 md:left-4 bg-accent shadow-glow-accent text-xs">
              <Zap className="h-3 w-3 mr-1 animate-pulse" />
              En Desarrollo
            </Badge>
          )}
        </div>

        <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-primary/50 text-primary text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>

      {/* Mobile/Tablet version with button */}
      <div className="md:hidden">
        {/* Project image with overlay */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />

          {/* Current project badge */}
          {project.isCurrent && (
            <Badge className="absolute top-3 left-3 bg-accent shadow-glow-accent text-xs">
              <Zap className="h-3 w-3 mr-1 animate-pulse" />
              En Desarrollo
            </Badge>
          )}
        </div>

        <CardContent className="p-4 space-y-3">
          <div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-primary/50 text-primary text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* View Details Button - only on mobile */}
          <Link href={`/projects/${project.slug}`}>
            <Button className="w-full bg-gradient-primary hover:shadow-glow-primary group">
              Ver Detalles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
};
