import { Metadata } from "next";
import Image from "next/image";
import Experience from "@/components/custom/Experience";
import { PageLayout } from "@/components/custom/PageLayout";
import Skills from "@/components/custom/Skills";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description: "Conoce más sobre mi trayectoria como desarrollador",
};

export default function AboutPage() {
  const { name } = profileData;
  return (
    <PageLayout variant="secondary">
      <div className="min-h-screen pt-16 md:pt-20">
        <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
          {/* Hero Section with Text and Image Side by Side */}
          <div className="animate-fade-in">
            <div className="mx-auto grid max-w-7xl items-start gap-8 md:gap-12 lg:grid-cols-[2fr_1fr]">
              {/* Text Content - Left Side */}
              <div className="mb-8 space-y-6 text-center lg:text-left">
                <div className="bg-primary/20 border-primary/30 mb-3 inline-block rounded-full border px-4 py-2 md:mb-4">
                  <span className="text-primary-glow text-xs font-semibold md:text-sm">
                    Mi Historia
                  </span>
                </div>
                <h1 className="gradient-text mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                  Sobre Mí
                </h1>
                <h2 className="text-foreground/70 mb-6 text-lg font-medium md:text-xl lg:text-2xl">
                  Mi trayectoria como Full Stack Developer
                </h2>
                <p className="text-foreground/80 mb-6 text-base leading-relaxed md:mb-8 md:text-lg">
                  Soy {name}, desarrollador Full Stack con más de dos años de
                  experiencia creando aplicaciones web. A lo largo de este
                  tiempo he trabajado tanto en frontend como en backend,
                  participando en proyectos donde lo más importante no era solo
                  que funcionaran, sino que fueran claros, fáciles de mantener y
                  pensados para crecer.
                </p>
                <p>
                  Me gusta entender bien el problema antes de empezar a
                  programar y elegir la tecnología que mejor se adapte a cada
                  caso. Disfruto construir soluciones bien hechas, cuidando los
                  detalles y buscando siempre una forma simple y efectiva de
                  resolver las cosas.
                </p>

                {/* CV Download Button */}
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300"
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
              <div className="hidden md:justify-start lg:flex lg:justify-center">
                <div className="group relative w-full max-w-70 md:max-w-[320px] lg:max-w-95">
                  <div className="absolute -inset-4 opacity-20 transition duration-500 group-hover:opacity-30"></div>
                  <div className="relative">
                    <Image
                      src="/me.png"
                      alt="Perfil profesional"
                      className="h-auto w-full object-contain drop-shadow-2xl"
                      width={376}
                      height={535}
                      loading={"eager"}
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
}
