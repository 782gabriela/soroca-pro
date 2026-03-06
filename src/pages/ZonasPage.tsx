import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const zonasPrincipales = ["Alicante", "Elche", "Gran Alacant", "Santa Pola", "Torrevieja", "Guardamar del Segura", "Crevillente", "Aspe", "Novelda", "San Vicente del Raspeig"];
const alrededores = ["Campello", "Mutxamel", "San Juan de Alicante", "Villajoyosa", "Benidorm", "Altea", "Calpe", "Orihuela", "Pilar de la Horadada", "Rojales"];

const ZonasPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
              Zonas de trabajo
            </h1>
            <p className="text-base font-normal leading-[1.75] text-foreground/90 md:text-lg" style={{ maxWidth: '780px' }}>
              Trabajamos en toda la provincia de Alicante y alrededores. Nuestro equipo se desplaza donde nos necesites.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Cobertura</div>
            <h2 className="mb-8 text-2xl font-bold leading-snug text-foreground md:text-3xl">Zonas principales</h2>
            <div className="mb-12 flex flex-wrap gap-3">
              {zonasPrincipales.map((z) => (
                <Badge key={z} variant="secondary" className="px-5 py-2.5 text-base font-bold shadow-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  {z}
                </Badge>
              ))}
            </div>

            <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Más zonas</div>
            <h2 className="mb-8 text-2xl font-bold leading-snug text-foreground md:text-3xl">Alrededores</h2>
            <div className="mb-12 flex flex-wrap gap-3">
              {alrededores.map((z) => (
                <Badge key={z} variant="secondary" className="px-5 py-2.5 text-base font-bold shadow-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  {z}
                </Badge>
              ))}
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-8 text-center shadow-sm">
              <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-bold text-foreground">¿Tu zona no aparece?</h3>
              <p className="mb-6 text-[15px] leading-[1.7] text-muted-foreground md:text-base">
                Llámanos y lo confirmamos. Es posible que también cubramos tu zona.
              </p>
              <Button asChild size="lg" className="px-10 text-base">
                <a href="tel:+34655020020">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar: 655 020 020
                </a>
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

export default ZonasPage;
