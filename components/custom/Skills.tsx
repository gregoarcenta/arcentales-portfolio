import {Badge} from "@/components/ui/badge";
import {currentlyLearning, skillsData} from "@/data/skills";
import {Sparkles} from "lucide-react";

const Skills = () => {
  return (
    <section className="pb-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillsData.map((category, idx) => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-2xl hover-lift animate-slide-up"
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="px-4 text-base bg-muted/50 hover:bg-primary/20 hover:shadow-glow-primary transition-all duration-300 cursor-default py-1.5"
                  >
                    <span className="mr-2 text-xl">{skill.icon}</span>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="glass-card p-8 rounded-2xl bg-linear-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 hover-lift animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
            <h3 className="text-2xl font-semibold gradient-text">
              Aprendiendo Actualmente
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {currentlyLearning.map((skill) => (
              <Badge
                key={skill.name}
                className="px-6 py-3 text-lg bg-gradient-accent hover:shadow-glow-accent transition-all duration-300 cursor-default"
              >
                <span
                  className="mr-2 text-2xl animate-bounce"
                  style={{
                    animationDuration: "2s"
                  }}
                >
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 text-sm">
            Siempre en constante aprendizaje para mantenerme actualizado con las
            últimas tecnologías
          </p>
        </div>
      </div>
    </section>
  );
};
export default Skills;
