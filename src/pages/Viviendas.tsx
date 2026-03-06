import { ArrowLeft, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";

const services = [
  "Reformas integrales de cocinas y baños",
  "Reparación de averías domésticas",
  "Instalaciones eléctricas y de fontanería",
  "Pintura interior y exterior",
  "Cambio de suelos y revestimientos",
  "Impermeabilización de terrazas",
  "Carpintería y cerrajería",
  "Mejoras de eficiencia energética",
];

const Viviendas = () => {
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
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">Servicios para viviendas</h1>
              <p className="text-base font-normal leading-[1.75] text-foreground/90 md:text-lg" style={{ maxWidth: '780px' }}>
                Desde una pequeña reparación hasta una reforma integral, nos encargamos de todo lo que tu hogar necesita. Coordinamos todos los oficios para que tú solo te preocupes de disfrutar el resultado. Trabajamos con materiales de primera calidad y ofrecemos presupuestos cerrados sin sorpresas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="px-10 text-base" onClick={() => openBudgetModal()}>Pedir presupuesto</Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+34655020020"><Phone className="mr-2 h-4 w-4" />655 020 020</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Nuestro servicio</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">¿Qué podemos hacer por tu vivienda?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((s) => (
                  <div key={s} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-6">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-[15px] font-medium leading-relaxed text-foreground md:text-base">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl">
              <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
              <p className="mb-4 text-2xl font-bold text-foreground md:text-3xl">¿Necesitas un presupuesto para tu vivienda?</p>
              <p className="mx-auto mb-8 text-[15px] leading-[1.7] text-muted-foreground md:text-base">Cuéntanos tu proyecto y te preparamos un presupuesto detallado sin compromiso.</p>
              <Button size="lg" className="px-10 text-base" onClick={() => openBudgetModal()}>Contactar ahora</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Viviendas;
