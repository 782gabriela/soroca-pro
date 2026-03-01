import {
  Hammer,
  Wrench,
  Zap,
  Droplets,
  ShieldCheck,
  Building,
  Paintbrush,
  Blocks,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Hammer, name: "Reformas integrales", desc: "Cocinas, baños, viviendas completas" },
  { icon: Wrench, name: "Mantenimiento", desc: "Preventivo y correctivo para cualquier inmueble" },
  { icon: Zap, name: "Electricidad", desc: "Instalaciones, averías y certificados" },
  { icon: Droplets, name: "Fontanería", desc: "Reparaciones, instalaciones y detección de fugas" },
  { icon: ShieldCheck, name: "Impermeabilización", desc: "Filtraciones, humedades y soluciones duraderas" },
  { icon: Building, name: "Fachadas y cubiertas", desc: "Rehabilitación, reparación y aislamiento" },
  { icon: Paintbrush, name: "Pintura y acabados", desc: "Interior, exterior y trabajos de detalle" },
  { icon: Blocks, name: "Albañilería", desc: "Reparaciones generales y obra menor" },
];

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
          <div
            key={s.name}
            className="rounded-xl border border-border bg-card p-5 text-center transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-foreground">{s.name}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="mb-4 text-sm text-muted-foreground">¿No encuentras lo que buscas?</p>
        <Button variant="outline" asChild>
          <a href="#contacto">Cuéntanos tu caso</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Services;
