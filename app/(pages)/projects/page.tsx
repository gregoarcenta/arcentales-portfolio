import { PageLayout } from "@/components/custom/PageLayout";
import Projects from "@/components/custom/Projects";

const currentYear = new Date().getFullYear();

const ProjectsPage = () => {
  return (
    <PageLayout>
      <div className="min-h-screen pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          <div className="mb-8 md:mb-12 animate-fade-in max-w-4xl">
            <div className="inline-block px-4 py-2 rounded-full glass-card border border-primary/30 mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-semibold text-primary">
                💼 Portfolio {currentYear}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">Proyectos</span>{" "}
              <span className="text-foreground">que marcan la diferencia</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Cada proyecto es una historia de desafíos superados, código
              elegante y soluciones innovadoras.
            </p>
          </div>
          <Projects />
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
