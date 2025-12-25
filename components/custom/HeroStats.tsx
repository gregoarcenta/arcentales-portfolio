import { Card, CardContent } from "@/components/ui/card";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { Briefcase, Code2, FolderGit2 } from "lucide-react";

const HeroStats = () => {
  // Calculate total technologies
  const totalTechnologies = skillsData.reduce(
    (acc, category) => acc + category.skills.length,
    0
  );
  return (
    <section className="py-12 md:py-20 px-4 bg-linear-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Projects Card */}
          <Card className="glass-card border-primary/30 hover-lift group animate-slide-up">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-4 inline-flex p-4 rounded-2xl bg-primary/10 text-primary">
                <FolderGit2 className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {projectsData.length}+
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Proyectos
              </h3>
              <p className="text-sm text-muted-foreground">
                Completados con éxito
              </p>
            </CardContent>
          </Card>

          {/* Technologies Card */}
          <Card
            className="glass-card border-secondary/30 hover-lift group animate-slide-up"
            style={{
              animationDelay: "100ms"
            }}
          >
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-4 inline-flex p-4 rounded-2xl bg-secondary/10 text-secondary">
                <Code2 className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {totalTechnologies}+
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Tecnologías
              </h3>
              <p className="text-sm text-muted-foreground">
                Dominadas y en constante aprendizaje
              </p>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card
            className="glass-card border-accent/30 hover-lift group animate-slide-up"
            style={{
              animationDelay: "200ms"
            }}
          >
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-4 inline-flex p-4 rounded-2xl bg-accent/10 text-accent">
                <Briefcase className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                2+
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Años de Experiencia
              </h3>
              <p className="text-sm text-muted-foreground">
                Desarrollando soluciones innovadoras
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HeroStats;
