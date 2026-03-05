import { ArrowLeft, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";

const services = [
  "Rehabilitación integral de fachadas",
  "Reparación y mantenimiento de cubiertas",
  "Impermeabilización de terrazas y azoteas",
  "Pintura de zonas comunes y garajes",
  "Mantenimiento preventivo programado",
  "Reparación de bajantes y canalizaciones",
  "Adecuación de instalaciones comunitarias",
  "Trabajos en altura con seguridad certificada",
];

const Comunidades = () => {
  const { openBudgetModal } = useBudgetModal();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Servicios para comunidades</h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Ofrecemos soluciones integrales de mantenimiento y rehabilitación para comunidades de propietarios. Nos encargamos de fachadas, cubiertas, zonas comunes e instalaciones comunitarias. Un solo interlocutor gestiona cada gremio implicado para que la comunidad no tenga que preocuparse de nada.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={() => openBudgetModal()}>Pedir presupuesto</Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+34655020020"><Phone className="mr-2 h-4 w-4" />655 020 020</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">¿Qué podemos hacer por tu comunidad?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((s) => (
                  <div key={s} className="flex items-start gap-3 rounded-lg border border-border/60 bg-card p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">¿Tu comunidad necesita un presupuesto?</h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">Cuéntanos las necesidades de tu comunidad y te preparamos una propuesta detallada.</p>
            <Button size="lg" onClick={() => openBudgetModal()}>Contactar ahora</Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Comunidades;
