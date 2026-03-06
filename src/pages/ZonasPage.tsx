import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation } from "@/i18n/context";

const zonasPrincipales = ["Alicante", "Elche", "Gran Alacant", "Santa Pola", "Torrevieja", "Guardamar del Segura"];
const alrededores = ["Campello", "Mutxamel", "San Juan de Alicante", "Villajoyosa", "Benidorm", "Altea", "Calpe", "Orihuela", "Pilar de la Horadada", "Rojales"];

const ZonasPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">{t.zonasPage.title}</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t.zonasPage.subtitle}</p>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">{t.zonasPage.zonasPrincipales}</h2>
              <div className="mb-10 flex flex-wrap gap-3">
                {zonasPrincipales.map((z) => (
                  <span key={z} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" />{z}
                  </span>
                ))}
              </div>
              <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">{t.zonasPage.alrededores}</h2>
              <div className="mb-12 flex flex-wrap gap-3">
                {alrededores.map((z) => (
                  <span key={z} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/70">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />{z}
                  </span>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-secondary/50 p-8 text-center">
                <h3 className="mb-2 text-lg font-bold text-foreground">{t.zonasPage.noAparece}</h3>
                <p className="mb-6 text-muted-foreground">{t.zonasPage.noApareceDesc}</p>
                <Button asChild size="lg">
                  <a href="tel:+34655020020"><Phone className="mr-2 h-4 w-4" />{t.zonasPage.llamar}</a>
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

export default ZonasPage;
