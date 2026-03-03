import { Building2, Store, AlertTriangle, ArrowRight } from "lucide-react";
import viviendaImg from "@/assets/viviendas.png";

const lines = [
  {
    image: viviendaImg,
    title: "Viviendas",
    desc: "Reformas, reparaciones y mejoras para tu hogar. Desde una avería hasta una reforma integral.",
    cta: "Ver servicios para viviendas",
  },
  {
    icon: Building2,
    title: "Comunidades",
    desc: "Mantenimiento, fachadas, cubiertas e impermeabilización para comunidades de propietarios.",
    cta: "Ver servicios para comunidades",
  },
  {
    icon: Store,
    title: "Negocios y locales",
    desc: "Adecuación, reforma y mantenimiento de locales comerciales y oficinas.",
    cta: "Ver servicios para negocios",
  },
  {
    icon: AlertTriangle,
    title: "Urgencias",
    desc: "Reparaciones e incidencias que no pueden esperar. Respuesta rápida en tu zona.",
    cta: "Contactar por urgencia",
  },
];

const ServiceLines = () => (
  <section className="bg-muted py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">¿En qué podemos ayudarte?</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Trabajamos con particulares, comunidades de vecinos y negocios. Cada proyecto tiene su enfoque.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {lines.map((l) => (
          <div
            key={l.title}
            className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg md:p-8"
          >
            {'image' in l && l.image ? (
              <div className="mb-4 h-14 w-14 overflow-hidden rounded-lg">
                <img src={l.image} alt={l.title} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                {'icon' in l && l.icon && <l.icon className="h-6 w-6 text-primary" />}
              </div>
            )}
            <h3 className="mb-2 text-lg font-semibold text-foreground">{l.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              {l.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceLines;
