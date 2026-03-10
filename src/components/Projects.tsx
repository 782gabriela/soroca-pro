import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t.projectsHome.projects;
  const tags = [t.projectsHome.reforma, t.projectsHome.comunidad, t.projectsHome.negocio];

  return (
    <section id="proyectos" className="relative bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-primary sm:text-4xl">{t.projectsHome.title}</h2>
          <p className="mx-auto max-w-xl font-body text-muted-foreground">{t.projectsHome.subtitle}</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-secondary to-accent">
                <span className="font-body text-sm text-muted-foreground">{t.projectsHome.fotoProyecto}</span>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">{tags[i] || tags[0]}</span>
                  <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {p.location}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">{p.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="outline" asChild className="rounded-full font-body">
            <a href="#contacto">{t.projectsHome.verMas}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
