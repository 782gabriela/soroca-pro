import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/context";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t.projectsHome.projects;
  const tags = [t.projectsHome.reforma, t.projectsHome.comunidad, t.projectsHome.negocio];

  return (
    <section id="proyectos" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">{t.projectsHome.title}</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">{t.projectsHome.subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.title} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex h-48 items-center justify-center bg-secondary">
                <span className="text-sm text-muted-foreground">{t.projectsHome.fotoProyecto}</span>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-primary">{tags[i] || tags[0]}</span>
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
            <a href="#contacto">{t.projectsHome.verMas}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
