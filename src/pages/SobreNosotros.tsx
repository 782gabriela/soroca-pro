import { Users, FolderCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/context";

const SobreNosotros = () => {
  const { t, localePath } = useTranslation();

  const stats = [
    { icon: Users, value: "20+", label: t.sobreNosotros.statsLabels.trabajadores },
    { icon: FolderCheck, value: "400", label: t.sobreNosotros.statsLabels.proyectos },
    { icon: MapPin, value: "15+", label: t.sobreNosotros.statsLabels.experiencia },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{t.sobreNosotros.title}</h1>
              <p className="text-base font-normal leading-[1.75] text-foreground/90 md:text-lg" style={{ maxWidth: '780px' }}>{t.sobreNosotros.subtitle}</p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-3 gap-6 text-center">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                    <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <span className="block text-3xl font-bold text-foreground sm:text-4xl">{s.value}</span>
                    <span className="mt-1 block text-[15px] text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{t.sobreNosotros.conocenos}</div>
              <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">{t.sobreNosotros.quienesSomos}</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {t.sobreNosotros.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 md:p-8">
                    <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-[15px] leading-[1.7] text-muted-foreground md:text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl">
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">{t.sobreNosotros.ctaTitle}</h2>
              <p className="mx-auto mb-8 text-[15px] leading-[1.7] text-muted-foreground md:text-base">{t.sobreNosotros.ctaDesc}</p>
              <Button asChild size="lg" className="px-10 text-base">
                <Link to={localePath("/contacto")}>{t.sobreNosotros.ctaButton}</Link>
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

export default SobreNosotros;
