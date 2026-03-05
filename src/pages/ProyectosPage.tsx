import { useState } from "react";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const zones = ["Todos", "Alicante", "Elche", "Gran Alacant", "Torrevieja", "Santa Pola"];

const projects = [
  {
    title: "Reforma integral de vivienda",
    location: "Santa Pola",
    desc: "Renovación completa de cocina, baño y distribución. Coordinación de todos los gremios en 6 semanas.",
    tag: "Vivienda",
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
  {
    title: "Instalación de ascensor",
    location: "Alicante",
    desc: "Instalación completa de ascensor en edificio de 5 plantas sin ascensor previo.",
    tag: "Comunidad",
  },
  {
    title: "Reforma de baño completa",
    location: "Torrevieja",
    desc: "Sustitución de bañera por plato de ducha, nuevo alicatado e instalación de mampara.",
    tag: "Vivienda",
  },
  {
    title: "Climatización de oficinas",
    location: "Alicante",
    desc: "Instalación de sistema de aire acondicionado por conductos para oficina de 200 m².",
    tag: "Negocio",
  },
  {
    title: "Pintura y decoración de portal",
    location: "Elche",
    desc: "Pintura completa de portal, escaleras y zonas comunes. Acabados decorativos en paredes.",
    tag: "Comunidad",
  },
  {
    title: "Cerrajería de seguridad",
    location: "Gran Alacant",
    desc: "Cambio de cerraduras antibumping en 16 viviendas de una comunidad de propietarios.",
    tag: "Comunidad",
  },
  {
    title: "Reforma de cocina",
    location: "Santa Pola",
    desc: "Diseño y ejecución de cocina nueva con mobiliario a medida, encimera de cuarzo e iluminación LED.",
    tag: "Vivienda",
  },
];

const ProyectosPage = () => {
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.location === filter);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Nuestros proyectos
              </h1>
              <p className="text-lg text-muted-foreground">
                Así quedan los proyectos cuando se coordinan bien todos los oficios.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Filtros */}
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {zones.map((z) => (
                <button
                  key={z}
                  onClick={() => setFilter(z)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    filter === z
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground/70 hover:border-primary/40"
                  }`}
                >
                  {z}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
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

            <div className="mt-12 text-center">
              <Button asChild>
                <a href="/contacto">¿Quieres un proyecto así? Contáctanos</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProyectosPage;
