import { ArrowLeft, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

const Viviendas = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Servicios para viviendas
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Desde una pequeña reparación hasta una reforma integral, nos encargamos de todo lo que
              tu hogar necesita. Coordinamos todos los oficios para que tú solo te preocupes de
              disfrutar el resultado. Trabajamos con materiales de primera calidad y ofrecemos
              presupuestos cerrados sin sorpresas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="/#contacto">Pedir presupuesto</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:655020020">
                  <Phone className="mr-2 h-4 w-4" />
                  655 020 020
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
              ¿Qué podemos hacer por tu vivienda?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s}
                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-card p-4"
                >
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
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            ¿Necesitas un presupuesto para tu vivienda?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
            Cuéntanos tu proyecto y te preparamos un presupuesto detallado sin compromiso.
          </p>
          <Button asChild size="lg">
            <a href="/#contacto">Contactar ahora</a>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Viviendas;
