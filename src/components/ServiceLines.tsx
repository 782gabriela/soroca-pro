import { ArrowRight, Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useBudgetModal } from "@/contexts/BudgetModalContext";

const viviendaImg = "/lovable-uploads/7c7e7606-1c68-472e-a901-74e2ed0e001e.png";
import comunidadesImg from "@/assets/comunidades.jpeg";
import negociosImg from "@/assets/negocios.jpeg";
import urgenciasImg from "@/assets/urgencias.jpeg";

const ServiceLines = () => {
  const { openBudgetModal } = useBudgetModal();

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">¿En qué podemos ayudarte?</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Trabajamos con particulares, comunidades de vecinos y negocios. Cada proyecto tiene su enfoque.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Viviendas */}
          <Link
            to="/categorias/viviendas"
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img src={viviendaImg} alt="Viviendas" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Viviendas</h3>
              <p className="mb-5 text-sm leading-relaxed text-foreground/80">
                Reformas y reparaciones para viviendas en Alicante, Elche, Gran Alacant y alrededores. Realizamos mejoras en baños y cocinas, trabajos de pintura y acabados, electricidad y fontanería, además de reparaciones generales y mantenimiento del hogar. Coordinamos los oficios para que el proceso sea más ágil y el resultado quede limpio y bien rematado.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Button size="sm" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>
                  Pide presupuesto
                </Button>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Ver más
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Comunidades */}
          <Link
            to="/categorias/comunidades"
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img src={comunidadesImg} alt="Comunidades" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Comunidades</h3>
              <p className="mb-5 text-sm leading-relaxed text-foreground/80">
                Mantenimiento y rehabilitación de comunidades de propietarios en Alicante, Elche, Gran Alacant y alrededores. Nos encargamos de actuaciones en fachadas y cubiertas, impermeabilización, reparaciones de albañilería, además de intervenciones de fontanería y electricidad en zonas comunes. Servicio planificado, coordinación de equipo y soluciones duraderas para mantener el edificio en buen estado.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Button size="sm" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>
                  Pide presupuesto
                </Button>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Ver más
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Negocios y locales */}
          <Link
            to="/categorias/negocios-locales"
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img src={negociosImg} alt="Negocios y locales" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Negocios y locales</h3>
              <p className="mb-5 text-sm leading-relaxed text-foreground/80">
                Reformas y mantenimiento de locales comerciales y oficinas en Alicante, Elche, Gran Alacant y alrededores. Hacemos adecuaciones, reparaciones y mejoras para que tu espacio sea funcional, seguro y con buena imagen: trabajos de pintura, electricidad, fontanería, acabados y pequeñas reformas. Planificamos el trabajo para reducir molestias y entregar un resultado profesional.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Button size="sm" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>
                  Pide presupuesto
                </Button>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Ver más
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Urgencias */}
          <Link
            to="/categorias/urgencias"
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img src={urgenciasImg} alt="Urgencias" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h3 className="mb-3 text-lg font-semibold text-foreground flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Urgencias
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                Servicio de urgencias exclusivo para clientes de Grupo Soroca en Alicante, Elche, Gran Alacant y alrededores. Atención prioritaria para incidencias que no pueden esperar, con respuesta rápida y coordinación del equipo para resolver la reparación con orden y seguridad.
              </p>
              <a href="tel:+34959000000" className="mb-3 inline-flex items-center gap-2 text-base font-bold text-primary">
                <Phone className="h-4 w-4" />
                Llamar: 959 000 000
              </a>
              <p className="mb-4 text-xs leading-relaxed text-foreground/70">
                ¿Aún no eres cliente? Contrata tu mantenimiento con Grupo Soroca y accede a urgencias prioritarias cuando lo necesites.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Button size="sm" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>
                  Hazte cliente
                </Button>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Ver más
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceLines;
