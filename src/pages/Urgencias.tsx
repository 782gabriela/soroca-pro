import { ArrowLeft, Phone, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";
import urgenciasImg from "@/assets/urgencias-casco.png";

const relatedSlugs = ["fontaneria", "electricidad", "cerrajeria", "aire-acondicionado"];

const Urgencias = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t, localePath } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4">
            <Link to={localePath("/inicio")} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" />{t.urgencias.volverInicio}
            </Link>
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 flex items-center gap-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                <AlertTriangle className="h-8 w-8 text-destructive md:h-10 md:w-10" />{t.urgencias.title}
              </h1>
            </div>
          </div>
        </section>
        <section className="pb-8 md:pb-12"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-md"><img src={urgenciasImg} alt={t.urgencias.title} className="aspect-[16/9] w-full object-cover" /></div></div></section>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-6">
              <p className="text-base font-normal leading-[1.75] text-foreground/90 md:text-lg" style={{ maxWidth: '780px' }}>{t.urgencias.description}</p>
              <a href="tel:+34959000000" className="inline-flex items-center gap-3 text-xl font-bold text-primary md:text-2xl">
                <Phone className="h-6 w-6" />{t.urgencias.llamar}
              </a>
              <div className="rounded-2xl border border-border/50 bg-muted/40 p-6 md:p-8">
                <p className="text-base font-normal leading-[1.75] text-foreground/90">{t.urgencias.noEresCliente}</p>
                <Button size="lg" className="mt-5 px-10 text-base" onClick={() => openBudgetModal()}>{t.urgencias.hazteCliente}</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{t.urgencias.serviciosRelacionados}</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">{t.urgencias.serviciosUrgencia}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedSlugs.map((slug) => {
                  const name = (t.services as any)[slug]?.name || slug;
                  return (
                    <Link key={slug} to={localePath(`/servicios/${slug}`)} className="group flex items-center justify-between rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-6">
                      <span className="text-[15px] font-medium text-foreground md:text-base">{name}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl">
              <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
              <p className="mb-2 text-2xl font-bold text-foreground md:text-3xl">{t.urgencias.ctaTitle}</p>
              <p className="mx-auto mb-8 text-[15px] leading-[1.7] text-muted-foreground md:text-base">{t.urgencias.ctaDesc}</p>
              <Button size="lg" className="px-10 text-base" onClick={() => openBudgetModal()}>{t.urgencias.hazteCliente}</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Urgencias;
