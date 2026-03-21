import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MapPin, Users, ShieldCheck, Phone, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";

const renderBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-foreground">{part}</strong> : part);
};

// Default footer for most services (matches Ascensores y Elevadores)
const defaultServiceFooter = {
  companyName: "Soroca Proyectos y construcciones SL",
  nif: "B42664573",
  phones: [{ number: "959 000 000", href: "tel:+34959000000" }],
  hours: "Lunes a viernes: 8:00 – 14:00",
};

// Custom footer overrides ONLY for Fontanería and Pintura
const serviceFooterOverrides: Record<string, {
  companyName: string;
  nif?: string;
  phones: { number: string; href: string }[];
  hours?: string;
  location?: { text: string; href: string };
  hideDesc?: boolean;
  useDefaultFooter?: boolean;
}> = {
  fontaneria: {
    companyName: "Fontaneria e Instalaciones Soroca 2025 S.L",
    nif: "B21659784",
    phones: [
      { number: "959 000 000", href: "tel:+34959000000" },
      { number: "614 938 605", href: "tel:+34614938605" },
    ],
    hours: "Lunes a viernes: 8:00 – 14:00",
    location: {
      text: "Av. Noruega 162 puerta 21, Santa Pola (Alicante), 03130",
      href: "https://www.google.com/maps/search/Av.+Noruega+162+puerta+21,+Santa+Pola+(Alicante),+03130",
    },
  },
  "pintura-decoracion": {
    companyName: "Pinturas y Decoraciones Soroca S.L",
    nif: "B-21659776",
    phones: [{ number: "959 000 000", href: "tel:+34959000000" }],
    hideDesc: true,
  },
};

// Custom title overrides (only inside the service detail page)
const serviceTitleOverrides: Record<string, string> = {
  fontaneria: "FONTANERIA E INSTALACIONES SOROCA",
  "pintura-decoracion": "Pinturas y decoraciones soroca",
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);
  const { openBudgetModal } = useBudgetModal();
  const { t, localePath } = useTranslation();

  const svcT = slug ? (t.services as any)[slug] : null;

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-foreground">{t.serviceDetail.servicioNoEncontrado}</h1>
            <Button asChild><Link to={localePath("/")}>{t.serviceDetail.volverInicio}</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;
  const titleOverride = slug ? serviceTitleOverrides[slug] : undefined;
  const name = titleOverride || svcT?.name || service.name;
  const intro = svcT?.intro || service.intro;
  const features = svcT?.features || service.features;
  const audience = svcT?.audience || service.audience;
  const trust = svcT?.trust || service.trust;
  const processSteps = svcT?.process || service.process;
  const faq = svcT?.faq || service.faq;
  // Use specific override for fontaneria/pintura, otherwise use default service footer
  const footerOverride = slug && serviceFooterOverrides[slug]
    ? serviceFooterOverrides[slug]
    : defaultServiceFooter;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4">
            <button onClick={() => navigate(-1)} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" />{t.serviceDetail.paginaAnterior}
            </button>
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 shadow-sm"><Icon className="h-7 w-7 text-primary" /></div>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{name}</h1>
              <p className={`text-base font-normal uppercase leading-[1.7] tracking-wide text-foreground/85 md:text-lg md:leading-[1.75] ${slug === 'ascensores-elevadores' ? 'font-body text-[15px] normal-case tracking-normal leading-[1.85] md:text-base md:leading-[1.9]' : ''}`} style={{ maxWidth: '780px' }}>{renderBold(intro)}</p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-muted/30 shadow-lg transition-shadow hover:shadow-xl">
                <img src={service.image} alt={name} className="h-72 w-full object-cover md:h-96" loading="lazy" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{t.serviceDetail.nuestroServicio}</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">{t.serviceDetail.queIncluye}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature: string) => {
                  const isRepuestosLink = slug === 'ascensores-elevadores' && feature === "Suministro de repuestos para ascensores multimarca";
                  const cardContent = (
                    <>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-[15px] font-medium leading-relaxed text-foreground md:text-base">{feature}</span>
                      {isRepuestosLink && <ExternalLink className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-primary" />}
                    </>
                  );
                  return isRepuestosLink ? (
                    <a key={feature} href="https://prolift.es/es" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-6">
                      {cardContent}
                    </a>
                  ) : (
                    <div key={feature} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-6">
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/20 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{t.serviceDetail.clientes}</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">{t.serviceDetail.paraQuien}</h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {audience.map((item: any) => (
                  <div key={item.label} className="rounded-2xl border border-border/50 bg-card p-8 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"><Users className="h-6 w-6 text-primary" /></div>
                    <p className="text-lg font-bold text-foreground">{item.label}</p>
                    {item.detail && <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{t.serviceDetail.confianza}</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">{t.serviceDetail.porQueConfiar}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {trust.map((item: string) => (
                  <div key={item} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><ShieldCheck className="h-5 w-5 text-primary" /></div>
                    <span className="text-[15px] font-semibold leading-relaxed text-foreground">{renderBold(item)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">{t.serviceDetail.proceso}</div>
              <h2 className="mb-10 text-2xl font-bold text-primary-foreground md:text-3xl">{t.serviceDetail.comoTrabajamos}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step: string, idx: number) => (
                  <div key={idx} className="flex flex-col items-center rounded-2xl bg-primary-foreground/10 p-8 text-center backdrop-blur-sm">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-lg font-bold text-primary">{idx + 1}</span>
                    <p className="text-[15px] font-medium leading-relaxed text-primary-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{t.serviceDetail.cobertura}</div>
              <h2 className="mb-8 text-2xl font-bold leading-snug text-foreground md:text-3xl">{t.serviceDetail.dondeTrabajamos}</h2>
              <div className="flex flex-wrap gap-3">
                {service.zones.map((zone) => (
                  <Badge key={zone} variant="secondary" className="px-6 py-3 text-lg font-bold shadow-sm"><MapPin className="mr-2 h-5 w-5" />{zone}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/20 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{t.serviceDetail.dudas}</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">{t.serviceDetail.preguntasFrecuentes}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faq.map((item: any, idx: number) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="rounded-2xl border border-border/50 bg-card px-6 shadow-sm overflow-hidden">
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:no-underline py-5 md:text-base">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-[1.7] text-muted-foreground pb-5">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl">
              <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
              <p className="mb-8 text-2xl font-bold text-foreground md:text-3xl">{svcT?.name || service.name}</p>
              <Button size="lg" className="px-10 text-base" onClick={() => openBudgetModal(svcT?.name || service.name)}>{t.serviceDetail.solicitar}</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="glass-dark py-12 text-primary-foreground/70">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-2 font-display text-lg font-bold text-primary-foreground">{footerOverride.companyName}</p>
              {footerOverride.nif && <p className="font-body text-sm text-primary-foreground/50">NIF: {footerOverride.nif}</p>}
              {!footerOverride.hideDesc && <p className="mt-2 font-body text-sm leading-relaxed text-primary-foreground/50">{t.footer.desc}</p>}
            </div>
            <div>
              <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">{t.footer.horario}</h4>
              <ul className="space-y-3 font-body text-sm text-primary-foreground/50">
                <li><span className="font-medium text-primary-foreground/70">{t.footer.lunesViernes}</span><br />{footerOverride.hours || "8:00 - 14:00"}</li>
                <li><span className="font-medium text-primary-foreground/70">{t.footer.urgencias24h}</span><br />{t.footer.dias365}</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">{t.footer.contacto}</h4>
              <ul className="space-y-3 font-body text-sm text-primary-foreground/50">
                {footerOverride.phones.map((p) => (
                  <li key={p.number} className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><a href={p.href} className="transition-colors hover:text-primary-foreground">{p.number}</a></li>
                ))}
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /><a href="mailto:info@soroca.es" className="transition-colors hover:text-primary-foreground">info@soroca.es</a></li>
                {footerOverride.location ? (
                  <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><a href={footerOverride.location.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-foreground">{footerOverride.location.text}</a></li>
                ) : (
                  <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><a href="https://www.google.com/maps/search/AVDA+noruega+162,+Santa+Pola,+Alicante" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-foreground">AVDA noruega 162,<br />Santa Pola, Alicante</a></li>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/8 pt-6 sm:flex-row">
            <p className="font-body text-xs text-primary-foreground/30">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
