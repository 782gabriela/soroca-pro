import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-foreground">Servicio no encontrado</h1>
            <Button asChild>
              <Link to="/">Volver al inicio</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero del servicio */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link
              to="/#servicios"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a servicios
            </Link>

            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                {service.name}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {service.longDesc}
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

        {/* Qué incluye */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
                ¿Qué incluye este servicio?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-lg border border-border/60 bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              ¿Necesitas un presupuesto?
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
};

export default ServiceDetail;
