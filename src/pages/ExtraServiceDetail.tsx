import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";
import { extraServices, type ContentBlock } from "@/data/extraServices";

const ExtraServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { openBudgetModal } = useBudgetModal();
  const { t, lang } = useTranslation();

  const basePath = lang === "es"
    ? location.pathname
    : location.pathname.replace(`/${lang}`, "");

  const service = extraServices.find((s) => s.path === basePath);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", service.metaDescription);
    }
  }, [service]);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-foreground">{t.serviceDetail.servicioNoEncontrado}</h1>
            <Button onClick={() => navigate(-1)}>{t.serviceDetail.paginaAnterior}</Button>
          </div>
        </main>
        <footer className="glass-dark py-12 text-primary-foreground/70"><div className="container mx-auto px-4"><p className="font-body text-xs text-primary-foreground/30">{t.serviceDetail.servicioNoEncontrado}</p></div></footer>
      </div>
    );
  }

  const renderBlock = (block: ContentBlock, i: number) => {
    switch (block.type) {
      case "location":
        return <p key={i} className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{block.text}</p>;
      case "h2":
        return <h2 key={i} className="mb-6 mt-12 text-2xl font-bold leading-snug text-foreground md:text-3xl first:mt-0">{block.text}</h2>;
      case "h3":
        return <h3 key={i} className="mb-4 mt-10 text-xl font-bold text-foreground md:text-2xl first:mt-0">{block.text}</h3>;
      case "p":
        return <p key={i} className="mb-6 font-body text-base leading-[1.8] text-foreground/80">{block.text}</p>;
      case "list":
        return (
          <ul key={i} className="mb-8 space-y-3 pl-1">
            {block.items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-base leading-relaxed text-foreground/80">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        );
      case "highlights":
        return (
          <div key={i} className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((item, j) => (
              <div key={j} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                <h4 className="mb-2 font-display text-base font-bold text-foreground">{item.title}</h4>
                {item.desc && <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate(-1)}
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.serviceDetail.paginaAnterior}
            </button>
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                {service.title}
              </h1>
            </div>
          </div>
        </section>

        {service.content.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                {service.content.map(renderBlock)}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl">
              <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
              <p className="mb-2 text-2xl font-bold text-foreground md:text-3xl">{service.title}</p>
              <a href="tel:+34959000000" className="mb-6 inline-block text-lg font-semibold text-primary hover:underline">
                959 000 000
              </a>
              <div>
                <Button size="lg" className="px-10 text-base" onClick={() => openBudgetModal(service.title)}>
                  {t.grupoSorocaInfo.pedirPresupuesto}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="glass-dark py-12 text-primary-foreground/70">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-2 font-display text-lg font-bold text-primary-foreground">Soroca Proyectos y construcciones SL</p>
              <p className="font-body text-sm text-primary-foreground/50">NIF: B42664573</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-primary-foreground/50">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">{t.footer.horario}</h4>
              <ul className="space-y-3 font-body text-sm text-primary-foreground/50">
                <li><span className="font-medium text-primary-foreground/70">{t.footer.lunesViernes}</span><br />Lunes a viernes: 8:00 – 14:00</li>
                <li><span className="font-medium text-primary-foreground/70">{t.footer.urgencias24h}</span><br />{t.footer.dias365}</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">{t.footer.contacto}</h4>
              <ul className="space-y-3 font-body text-sm text-primary-foreground/50">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><a href="tel:+34959000000" className="transition-colors hover:text-primary-foreground">959 000 000</a></li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /><a href="mailto:info@soroca.es" className="transition-colors hover:text-primary-foreground">info@soroca.es</a></li>
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><a href="https://www.google.com/maps/search/AVDA+noruega+162,+Santa+Pola,+Alicante" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-foreground">AVDA noruega 162,<br />Santa Pola, Alicante</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/8 pt-6 sm:flex-row">
            <p className="font-body text-xs text-primary-foreground/30">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default ExtraServiceDetail;
