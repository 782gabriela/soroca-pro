import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Reforma integral de vivienda",
    location: "Santa Pola",
    desc: "Renovación completa de cocina, baño y distribución. Coordinación de todos los gremios en 6 semanas.",
    tag: "Reforma",
  },
  {
    title: "Rehabilitación de fachada",
    location: "Gran Alacant",
    desc: "Reparación estructural, impermeabilización y acabado de pintura para comunidad de 24 viviendas.",
    tag: "Comunidad",
  },
  {
    title: "Adecuación de local comercial",
    location: "Elche",
    desc: "Instalación eléctrica, fontanería, tabiquería y acabados para apertura de clínica dental.",
    tag: "Negocio",
  },
];

const Projects = () => (
  <section id="proyectos" className="bg-muted py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">Trabajos que hablan por nosotros</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Así quedan los proyectos cuando se coordinan bien todos los oficios.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex h-48 items-center justify-center bg-secondary">
              <span className="text-sm text-muted-foreground">Foto del proyecto</span>
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-primary">
                  {p.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {p.location}
                </span>
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button variant="outline" asChild>
          <a href="#contacto">Ver más proyectos</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Projects;
