import { Code2, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Proyectos", path: "/projectos" },
  { name: "Blog", path: "/blog" },
  { name: "Sobre Mí", path: "/sobre-mi" }
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-card/30 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Tu Nombre</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer especializado en crear soluciones web
              innovadoras.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navegación</h3>
            <ul className="space-y-2">
              {navItems.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Enviar Mensaje
                </a>
              </li>
              <li>
                <a
                  href="mailto:tu@email.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  tu@email.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Social</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2 rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2 rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:tu@email.com"
                className="glass-card p-2 rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/40 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Tu Nombre. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
