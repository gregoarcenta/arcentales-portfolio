import Contact from "@/components/custom/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <div className="text-center mb-8 md:mb-16 animate-fade-in relative">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-125 h-75 md:h-125 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full glass-card mb-4 md:mb-6">
            <span className="relative flex h-2.5 md:h-3 w-2.5 md:w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 md:h-3 w-2.5 md:w-3 bg-primary"></span>
            </span>
            <span className="text-xs md:text-sm font-medium">
              Disponible para nuevos proyectos
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Trabajemos</span>
            <br />
            <span className="text-foreground">juntos</span>
          </h1>
          <p className="text-foreground/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Tienes una idea? Un proyecto? O simplemente quieres charlar sobre
            tecnología?
            <br />
            <span className="text-primary font-semibold">
              Envíame un mensaje
            </span>
          </p>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
