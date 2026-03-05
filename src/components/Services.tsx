import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const Services = () => (
  <section id="servicios" className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">Nuestros servicios</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Todos los oficios que necesitas, coordinados por un solo equipo.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/servicios/${s.slug}`}
            className="group rounded-xl border border-border bg-card p-5 text-center transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-foreground">{s.name}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="mb-4 text-sm text-muted-foreground">¿No encuentras lo que buscas?</p>
        <Button variant="outline" asChild>
          <Link to="/contacto">Cuéntanos tu caso</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Services;
