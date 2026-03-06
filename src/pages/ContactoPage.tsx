import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";

const ContactoPage = () => {
  const { openBudgetModal } = useBudgetModal();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">Contacto</h1>
              <p className="text-base font-normal leading-[1.75] text-foreground/90 md:text-lg" style={{ maxWidth: '780px' }}>
                Ponte en contacto con nosotros. Estamos aquí para ayudarte.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Información</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">Cómo contactarnos</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">Teléfono</h3>
                  <a href="tel:+34655020020" className="text-[15px] font-medium text-primary hover:underline md:text-base">655 020 020</a>
                </div>

                <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">Correo electrónico</h3>
                  <a href="mailto:info@soroca.com" className="text-[15px] font-medium text-primary hover:underline md:text-base">info@soroca.com</a>
                </div>

                <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">Ubicación</h3>
                  <p className="text-[15px] leading-[1.7] text-muted-foreground md:text-base">Gran Alacant, Alicante</p>
                </div>

                <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">Horario</h3>
                  <p className="mb-4 text-[15px] leading-[1.7] text-muted-foreground md:text-base">Consulta nuestro horario de atención.</p>
                  <Button asChild variant="outline"><Link to="/horario">Consulta nuestro horario</Link></Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl">
              <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
              <p className="mb-4 text-2xl font-bold text-foreground md:text-3xl">¿Necesitas un presupuesto?</p>
              <p className="mx-auto mb-8 text-[15px] leading-[1.7] text-muted-foreground md:text-base">
                Llámanos o escríbenos y te preparamos un presupuesto sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" className="px-10 text-base" onClick={() => openBudgetModal()}>Pedir presupuesto</Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://wa.me/34655020020" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactoPage;
