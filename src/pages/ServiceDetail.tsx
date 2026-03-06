import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, MapPin, ImageIcon, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";

/** Render markdown bold (**text**) as <strong> */
const renderBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-foreground">{part}</strong> : part
  );
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const { openBudgetModal } = useBudgetModal();

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-foreground">Servicio no encontrado</h1>
            <Button asChild><Link to="/">Volver al inicio</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  // Split CTA into question part and "Solicita presupuesto sin compromiso."
  const ctaParts = service.cta.split("Solicita presupuesto sin compromiso");
  const ctaQuestion = ctaParts[0]?.trim() || "";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        {/* ── INTRO ── */}
        <section className="bg-muted/30 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto px-4">
            <Link
              to="/#servicios"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a servicios
            </Link>
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {renderBold(service.intro)}
              </p>
            </div>
          </div>
        </section>

        {/* ── HERO IMAGE PLACEHOLDER ── */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/20 md:h-80">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <ImageIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">Imagen del servicio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUÉ INCLUYE ── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
                Qué incluye este servicio
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 transition-shadow hover:shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PARA QUIÉN ── */}
        <section className="bg-muted/20 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
                Para quién es este servicio
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {service.audience.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border/60 bg-card p-6 text-center transition-shadow hover:shadow-sm"
                  >
                    <Users className="mx-auto mb-3 h-6 w-6 text-primary" />
                    <p className="font-semibold text-foreground">{item.label}</p>
                    {item.detail && (
                      <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── IMAGE PLACEHOLDER (optional mid-section) ── */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/20 md:h-64">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <ImageIcon className="h-10 w-10" />
                  <span className="text-sm font-medium">Imagen del servicio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── POR QUÉ CONFIAR ── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
                Por qué confiar en Grupo Soroca
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.trust.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-5 transition-shadow hover:shadow-sm"
                  >
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{renderBold(item)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ── */}
        <section className="bg-muted/20 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
                Cómo trabajamos
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {service.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center rounded-xl border border-border/60 bg-card p-6 text-center transition-shadow hover:shadow-sm"
                  >
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {idx + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ZONAS ── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                Zonas donde trabajamos
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.zones.map((zone) => (
                  <Badge
                    key={zone}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    <MapPin className="mr-1.5 h-3.5 w-3.5" />
                    {zone}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-muted/20 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
                Preguntas frecuentes (FAQ)
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {service.faq.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="rounded-xl border border-border/60 bg-card px-5 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-lg">
              <p className="mb-6 text-xl font-semibold text-foreground md:text-2xl">
                {ctaQuestion}
              </p>
              <Button size="lg" onClick={() => openBudgetModal(service.name)}>
                Solicita presupuesto sin compromiso
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

export default ServiceDetail;
