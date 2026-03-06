import { ArrowLeft, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import comunidadesImg from "@/assets/comunidades.jpeg";

const relatedServices = [
  { name: "Fontanería", slug: "fontaneria" },
  { name: "Electricidad", slug: "electricidad" },
  { name: "Pintura y decoración", slug: "pintura-decoracion" },
  { name: "Carpintería metálica", slug: "carpinteria-metalica" },
  { name: "Ascensores y elevadores", slug: "ascensores-elevadores" },
];

const Comunidades = () => {
  const { openBudgetModal } = useBudgetModal();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4">
            <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">Comunidades</h1>
            </div>
          </div>
        </section>

        <section className="pb-8 md:pb-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-md">
              <img src={comunidadesImg} alt="Servicios para comunidades" className="aspect-[16/9] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <p className="text-base font-normal leading-[1.75] text-foreground/90 md:text-lg" style={{ maxWidth: '780px' }}>
                Mantenimiento y rehabilitación de comunidades de propietarios en Alicante, Elche, Gran Alacant y alrededores. Nos encargamos de actuaciones en fachadas y cubiertas, impermeabilización, reparaciones de albañilería, además de intervenciones de fontanería y electricidad en zonas comunes. Servicio planificado, coordinación de equipo y soluciones duraderas para mantener el edificio en buen estado.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Servicios relacionados</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">Servicios para tu comunidad</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/servicios/${s.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-6"
                  >
                    <span className="text-[15px] font-medium text-foreground md:text-base">{s.name}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl">
              <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
              <p className="mb-4 text-2xl font-bold text-foreground md:text-3xl">¿Tu comunidad necesita un presupuesto?</p>
              <p className="mx-auto mb-8 text-[15px] leading-[1.7] text-muted-foreground md:text-base">Cuéntanos las necesidades de tu comunidad y te preparamos una propuesta detallada.</p>
              <Button size="lg" className="px-10 text-base" onClick={() => openBudgetModal()}>Pide presupuesto</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Comunidades;
