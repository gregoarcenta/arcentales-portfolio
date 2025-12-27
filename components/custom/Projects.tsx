"use client";
import { Button } from "@/components/ui/button";
import { projectsData, Technologies } from "@/data/projects";
import { useState } from "react";
import ProjectCard from "@/components/custom/CardProject";

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
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
