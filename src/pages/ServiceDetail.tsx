import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MapPin, ImageIcon, Users, ShieldCheck, Phone } from "lucide-react";
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
  const ctaParts = service.cta.split("Solicita presupuesto sin compromiso");
  const ctaQuestion = ctaParts[0]?.trim() || "";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        {/* ── INTRO ── */}
        <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4">
            <Link
              to="/#servicios"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a servicios
            </Link>
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 shadow-sm">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              {/* Service name — largest text on page */}
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                {service.name}
              </h1>
              {/* Intro — readable, uppercase visual, NOT giant */}
              <p className="text-base font-normal uppercase leading-[1.7] tracking-wide text-foreground/85 md:text-lg md:leading-[1.75]"
                 style={{ maxWidth: '780px' }}
              >
                {renderBold(service.intro)}
              </p>
            </div>
          </div>
        </section>

        {/* ── HERO IMAGE ── */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-muted/30 shadow-lg transition-shadow hover:shadow-xl">
                <div className="flex h-72 items-center justify-center md:h-96">
                  <div className="flex flex-col items-center gap-3 text-muted-foreground/60">
                    <ImageIcon className="h-12 w-12" />
                    <span className="text-sm font-medium tracking-wide">Imagen del servicio</span>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── QUÉ INCLUYE ── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Nuestro servicio</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">
                Qué incluye este servicio
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-6"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-[15px] font-medium leading-relaxed text-foreground md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── IMAGE SECONDARY ── */}
        <section className="py-6 md:py-10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-muted/20 shadow-md transition-shadow hover:shadow-lg">
                <div className="flex h-56 items-center justify-center md:h-72">
                  <div className="flex flex-col items-center gap-3 text-muted-foreground/60">
                    <ImageIcon className="h-10 w-10" />
                    <span className="text-sm font-medium tracking-wide">Imagen del servicio</span>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── PARA QUIÉN ── */}
        <section className="bg-muted/20 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Clientes</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">
                Para quién es este servicio
              </h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {service.audience.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/50 bg-card p-8 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-lg font-bold text-foreground">{item.label}</p>
                    {item.detail && (
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── POR QUÉ CONFIAR ── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Confianza</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">
                Por qué confiar en Grupo Soroca
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {service.trust.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-[15px] font-semibold leading-relaxed text-foreground">{renderBold(item)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ── */}
        <section className="bg-primary py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">Proceso</div>
              <h2 className="mb-10 text-2xl font-bold text-primary-foreground md:text-3xl">
                Cómo trabajamos
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {service.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center rounded-2xl bg-primary-foreground/10 p-8 text-center backdrop-blur-sm"
                  >
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-lg font-bold text-primary">
                      {idx + 1}
                    </span>
                    <p className="text-[15px] font-medium leading-relaxed text-primary-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ZONAS ── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Cobertura</div>
              <h2 className="mb-8 text-2xl font-bold leading-snug text-foreground md:text-3xl">
                Zonas donde trabajamos
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.zones.map((zone) => (
                  <Badge
                    key={zone}
                    variant="secondary"
                    className="px-6 py-3 text-lg font-bold shadow-sm"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
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
            <div className="mx-auto max-w-4xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Dudas</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">
                Preguntas frecuentes (FAQ)
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {service.faq.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="rounded-2xl border border-border/50 bg-card px-6 shadow-sm overflow-hidden"
                  >
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:no-underline py-5 md:text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-[1.7] text-muted-foreground pb-5">
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
            <div className="mx-auto max-w-xl">
              <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
              <p className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                {ctaQuestion}
              </p>
              <Button size="lg" className="px-10 text-base" onClick={() => openBudgetModal(service.name)}>
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
