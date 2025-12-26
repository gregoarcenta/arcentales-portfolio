import { Hammer } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="bg-primary/10 p-6 rounded-full mb-6 animate-bounce">
        <Hammer className="w-12 h-12 text-primary" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
        Sección en construcción
      </h1>
      <p className="text-lg text-muted-foreground max-w-125 mb-8">
        Estoy trabajando duro para traerte el mejor contenido.
        ¡Vuelve pronto para ver las novedades del blog!
      </p>
      <div className="flex gap-4">
        <div className="h-1.5 w-12 rounded-full bg-primary/20" />
        <div className="h-1.5 w-12 rounded-full bg-primary" />
        <div className="h-1.5 w-12 rounded-full bg-primary/20" />
      </div>
    </div>
  );
}
