"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData, Technologies } from "@/data/projects";
import { ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const newProjectData = projectsData.sort((a, b) => (a.id ? -1 : 1));

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<Technologies | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(newProjectData.flatMap((project) => project.technologies)),
  ).sort();

  // Filter projects by selected tag
  const filteredProjects = selectedTag
    ? newProjectData.filter((project) =>
        project.technologies.includes(selectedTag),
      )
    : newProjectData;

  return (
    <section className="relative">
      {/* Filter Tags */}
      <div className="mb-6 md:mb-8 animate-fade-in">
        <h3 className="text-xs md:text-sm font-semibold text-muted-foreground mb-3 md:mb-4">
          Filtrar por tecnología:
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(null)}
            className={
              selectedTag === null
                ? "bg-gradient-primary"
                : "border-primary/30 hover:bg-primary/10"
            }
          >
            Todos
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className={
                selectedTag === tag
                  ? "bg-gradient-primary"
                  : "border-primary/30 hover:bg-primary/10"
              }
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((project, idx) => (
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />

                {/* Click indicator - only visible on hover */}
                <div
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  <h3
                    className="text-lg md:text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
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
                <Link href={`/projects/${project.id}`}>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow-primary group">
                    Ver Detalles
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
