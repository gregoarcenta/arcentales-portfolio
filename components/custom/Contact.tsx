import {Card, CardContent} from "@/components/ui/card";
import {Github, Linkedin, Mail, MessageCircle} from "lucide-react";

const Contact = () => {
  return (
    <section className="px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Contact cards in symmetric grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* WhatsApp - Priority contact */}
            <Card className="glass-card border-primary/20 hover-lift group animate-slide-up h-full">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">+593983952152</p>
                    <a
                      href="https://wa.me/593983952152"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 text-sm hover:underline inline-block mt-2"
                    >
                      Enviar mensaje →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card
              className="glass-card border-primary/20 hover-lift group animate-slide-up h-full"
              style={{ animationDelay: "100ms" }}
            >
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      gregoarcenta@gmail.com
                    </p>
                    <a
                      href="mailto:gregoarcenta@gmail.com"
                      className="text-primary text-sm hover:underline inline-block mt-2"
                    >
                      Enviar email →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* GitHub */}
            <Card
              className="glass-card border-secondary/20 hover-lift group animate-slide-up h-full"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                    <Github className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <p className="text-muted-foreground text-sm">@gregoarcenta</p>
                    <a
                      href="https://github.com/gregoarcenta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary text-sm hover:underline inline-block mt-2"
                    >
                      Ver perfil →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card
              className="glass-card border-accent/20 hover-lift group animate-slide-up h-full"
              style={{ animationDelay: "300ms" }}
            >
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <p className="text-muted-foreground text-sm">Gregory Arcentales</p>
                    <a
                      href="https://linkedin.com/in/gregoarcenta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm hover:underline inline-block mt-2"
                    >
                      Conectar →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to action - Centered */}
          <Card
            className="glass-card border-primary/20 bg-linear-to-br from-primary/10 to-secondary/10 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <CardContent className="p-8 text-center">
              <h3 className="font-bold text-2xl mb-3 gradient-text">
                ¿Listo para empezar?
              </h3>
              <p className="text-muted-foreground">
                Transformemos tus ideas en realidad con código limpio y diseño
                excepcional
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
