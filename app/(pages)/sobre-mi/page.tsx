import Experience from "@/components/custom/Experience";
import { PageLayout } from "@/components/custom/PageLayout";
import Skills from "@/components/custom/Skills";
import Image from "next/image";

const AboutPage = () => {
  return (
    <PageLayout variant="secondary">
      <div className="min-h-screen pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          {/* Hero Section with Text and Image Side by Side */}
          <div className="mb-12 md:mb-20 animate-fade-in">
            <div className="grid md:grid-cols-[1.5fr_1fr] lg:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-start max-w-7xl mx-auto">
              {/* Text Content - Left Side */}
              <div className="text-center md:text-left space-y-6">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-3 md:mb-4">
                  <span className="text-xs md:text-sm font-semibold text-primary-glow">
                    Mi Historia
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text">
                  Sobre Mí
                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-6 font-medium">
                  Mi Trayatecria como Full Stack Developer
                </h2>
                <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  Soy un Full Stack Developer con una sólida base técnica y dos
                  años de experiencia transformando retos de negocio en
                  soluciones de software rentables. Mi valor no se limita a un
                  stack específico; tengo experiencia comprobada en múltiples
                  tecnologías de Frontend, Backend y Bases de Datos. Me enfoco
                  en la arquitectura limpia, el código escalable y la resolución
                  de problemas a través de la herramienta más eficiente para el
                  trabajo. Mi objetivo es que cada proyecto no solo cumpla con
                  los requisitos, sino que esté optimizado para crecer y generar
                  un retorno de la inversión tangible.
                </p>

                {/* CV Download Button */}
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-glow-primary font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Descargar CV
                </a>
              </div>

              {/* Profile Image - Right Side - PNG with transparent background */}
              <div className="flex justify-center md:justify-start">
                <div className="relative group w-full max-w-70 md:max-w-[320px] lg:max-w-95">
                  <div className="absolute -inset-4 bg-linear-to-r from-primary to-secondary blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg"
                      alt="Perfil profesional"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      width={380}
                      height={380}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
