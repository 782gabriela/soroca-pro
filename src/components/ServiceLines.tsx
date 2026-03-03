import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const viviendaImg = "/lovable-uploads/7c7e7606-1c68-472e-a901-74e2ed0e001e.png";
import comunidadesImg from "@/assets/comunidades.jpeg";
import negociosImg from "@/assets/negocios.jpeg";
const urgenciasImg = "/lovable-uploads/6eb7a5d8-1282-4ef4-bfc2-c8a03657c1e0.png";

const lines = [
  {
    image: viviendaImg,
    title: "Viviendas",
    desc: "Reformas, reparaciones y mejoras para tu hogar. Desde una avería hasta una reforma integral.",
    cta: "Ver servicios para viviendas",
    href: "/viviendas",
  },
  {
    image: comunidadesImg,
    title: "Comunidades",
    desc: "Mantenimiento, fachadas, cubiertas e impermeabilización para comunidades de propietarios.",
    cta: "Ver servicios para comunidades",
    href: "/comunidades",
  },
  {
    image: negociosImg,
    title: "Negocios y locales",
    desc: "Adecuación, reforma y mantenimiento de locales comerciales y oficinas.",
    cta: "Ver servicios para negocios",
    href: "/negocios",
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
          <Link
            key={l.title}
            to={l.href}
            className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg md:p-8"
          >
            <div className="mb-4 h-14 w-14 overflow-hidden rounded-lg">
              <img src={l.image} alt={l.title} className="h-full w-full object-cover" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{l.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
              {l.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}

        {/* Urgencias - llamada directa */}
        <a
          href="tel:955000000"
          className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg md:p-8"
        >
          <div className="mb-4 h-14 w-14 overflow-hidden rounded-lg">
            <img src={urgenciasImg} alt="Urgencias" className="h-full w-full object-cover" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">Urgencias</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Reparaciones e incidencias que no pueden esperar. Respuesta rápida en tu zona.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
            <Phone className="h-3.5 w-3.5" />
            Llamar: 955 000 000
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default ServiceLines;
