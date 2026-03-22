import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";

const ContactoPage = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t, localePath } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">{t.contactoPage.title}</h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">{t.contactoPage.subtitle}</p>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><Phone className="h-5 w-5 text-primary" /></div>
                    <h3 className="font-semibold text-foreground">{t.contactoPage.telefono}</h3>
                  </div>
                  <a href="tel:+34959000000" className="text-lg font-medium text-primary hover:underline">959 000 000</a>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><Mail className="h-5 w-5 text-primary" /></div>
                    <h3 className="font-semibold text-foreground">{t.contactoPage.correo}</h3>
                  </div>
                  <a className="text-lg font-medium text-primary hover:underline" href="mailto:info@soroca.es">info@soroca.es</a>
                </div>
                <a href="https://maps.google.com/?q=AVDA+Noruega+162,+Santa+Pola,+Alicante,+03130" target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><MapPin className="h-5 w-5 text-primary" /></div>
                    <h3 className="font-semibold text-foreground">{t.contactoPage.ubicacion}</h3>
                  </div>
                  <p className="text-muted-foreground whitespace-pre-line">{t.contactoPage.direccion}</p>
                </a>
              </div>
              <div className="flex flex-col gap-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><Clock className="h-5 w-5 text-primary" /></div>
                    <h3 className="font-semibold text-foreground">{t.contactoPage.horario}</h3>
                  </div>
                  <p className="mb-4 text-muted-foreground">{t.contactoPage.consultaHorario}</p>
                  <Button asChild variant="outline"><Link to={localePath("/horario")}>{t.contactoPage.consultaHorarioBtn}</Link></Button>
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                  <h3 className="mb-2 font-semibold text-foreground">{t.contactoPage.necesitasPresupuesto}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{t.contactoPage.necesitasPresupuestoDesc}</p>
                  <div className="flex flex-col gap-2">
                    <Button onClick={() => openBudgetModal()}>{t.contactoPage.pedirPresupuesto}</Button>
                    <Button asChild variant="outline">
                      <a href="https://wa.me/34959000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </Button>
                  </div>
                </div>
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
