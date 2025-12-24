"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certificatesData, experienceData } from "@/data/experience";
import { Award, Briefcase, ChevronDown, ChevronUp, Code2, ExternalLink, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Experience = () => {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-5 w-5" />;
      case "practices":
        return <GraduationCap className="h-5 w-5" />;
      case "certificate":
        return <Award className="h-5 w-5" />;
      case "freelance":
        return <Code2 className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work":
        return "Experiencia Laboral";
      case "practices":
        return "Contrato de practicas";
      case "certificate":
        return "Certificación";
      case "freelance":
        return "Freelance";
      default:
        return type;
    }
  };

  // Separate work experience and certificates
  const workExperience = experienceData;
  const certificates = certificatesData;

  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 6);
  return (
    <section className="py-12 md:py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="gradient-text">Experiencia & Certificaciones</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional y formación continua
          </p>
        </div>

        <Tabs defaultValue="experience" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 md:mb-12">
            <TabsTrigger
              value="experience"
              className="text-sm md:text-base mx-0 my-0"
            >
              Experiencia Profesional
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="text-sm md:text-base mx-0 py-1.5"
            >
              Certificaciones
            </TabsTrigger>
          </TabsList>

          {/* Work Experience Tab */}
          <TabsContent value="experience" className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div
                  className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-secondary to-accent" />

                <div className="space-y-6 md:space-y-8">
                  {workExperience.map((item, idx) => (
                    <div
                      key={item.id}
                      className="relative pl-12 md:pl-20 animate-slide-up"
                      style={{
                        animationDelay: `${idx * 100}ms`
                      }}
                    >
                      {/* Timeline dot */}
                      <div
                        className="absolute left-2 md:left-5 top-6 w-5 md:w-7 h-5 md:h-7 rounded-full bg-gradient-primary shadow-glow-primary flex items-center justify-center">
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-background" />
                      </div>

                      <Card className="glass-card border-primary/20 hover-lift group">
                        <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                          {/* Type badge */}
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge
                              variant="outline"
                              className="border-secondary/50 text-secondary text-xs"
                            >
                              {getIcon(item.type)}
                              <span className="ml-2">
                                {getTypeLabel(item.type)}
                              </span>
                            </Badge>
                            <span className="text-xs md:text-sm text-muted-foreground">
                              {item.period}
                            </span>
                          </div>

                          {/* Title and company */}
                          <div>
                            <h3
                              className="text-lg md:text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            {item.company && (
                              <p className="text-sm md:text-base text-muted-foreground font-medium">
                                {item.company}
                              </p>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>

                          {/* Technologies */}
                          {item.technologies &&
                            item.technologies.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 md:gap-2">
                                {item.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    className="bg-muted/50 hover:bg-primary/20 transition-colors text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            )}
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="animate-fade-in">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {visibleCertificates.map((cert, idx) => (
                <Card
                  key={cert.id}
                  className="glass-card border-accent/20 hover-lift group animate-scale-in"
                  style={{
                    animationDelay: `${idx * 50}ms`
                  }}
                >
                  <CardContent className="p-4 md:p-5 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="p-2 rounded-lg bg-accent/20 text-accent">
                        <Award className="h-4 md:h-5 w-4 md:w-5" />
                      </div>
                      <span className="text-xs text-muted-foreground flex-1 text-right">
                        {cert.period}
                      </span>
                    </div>

                    <div>
                      <h3
                        className="font-bold text-sm md:text-base mb-1 group-hover:text-accent transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      {cert.company && (
                        <p className="text-xs md:text-sm text-primary font-medium">
                          {cert.company}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>

                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors font-medium"
                      >
                        Ver certificado
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Show More/Less Button */}
            {certificates.length > 6 && (
              <div className="flex justify-center mt-6 md:mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowAllCertificates(!showAllCertificates)}
                  className="border-accent/50 hover:bg-accent/10 group"
                >
                  {showAllCertificates ? (
                    <>
                      Mostrar menos
                      <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      Ver todas las certificaciones ({certificates.length})
                      <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
export default Experience;
