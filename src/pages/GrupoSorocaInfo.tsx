import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Landmark, Mountain, Paintbrush, RectangleHorizontal, Wrench, Droplets, Phone, Users, Award, FolderCheck, MessageCircle, ClipboardList, Clock, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";

const serviceIcons = [Zap, Landmark, Mountain, Paintbrush, RectangleHorizontal, Wrench, Droplets];
const statIcons = [FolderCheck, Users, Award];
const stepIcons = [MessageCircle, ClipboardList, Clock, CheckSquare];

const GrupoSorocaInfo = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t, localePath } = useTranslation();
  const g = t.grupoSorocaInfo;

  const stats = [
    { value: t.stats.proyectosValue, label: t.stats.proyectosLabel, icon: statIcons[0] },
    { value: t.stats.trabajadoresValue, label: t.stats.trabajadoresLabel, icon: statIcons[1] },
    { value: "17", label: "Ganador del premio", icon: statIcons[2] },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Link
            to={localePath("/sobre-nosotros")}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-body text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {g.volver}
          </Link>
        </div>

        <section className="pb-16 pt-8 md:pb-24 md:pt-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">{g.badge}</p>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                {g.heroTitle}
              </h1>
              <p className="mb-4 text-lg font-semibold text-foreground/90 md:text-xl">
                {g.heroSubtitle}
              </p>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {g.heroDesc}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.servicios.map((s, i) => {
                const Icon = serviceIcons[i];
                return (
                  <div key={s.title} className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 md:p-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {g.serviciosFooter}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{g.ceo}</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 md:grid-cols-3">
                {g.fortalezas.map((f) =>
                  <div key={f.title} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
                    <h3 className="mb-4 text-lg font-bold text-foreground">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/50 bg-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8">
              {stats.map((s) =>
                <div key={s.label} className="text-center">
                  <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <span className="block text-4xl font-extrabold text-foreground md:text-5xl">{s.value}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">{s.label}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">{g.equipoTitle}</h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {g.equipoDesc}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{g.comoFunciona}</p>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">{g.comoFuncionaTitle}</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {g.pasos.map((p, i) => {
                  const StepIcon = stepIcons[i];
                  return (
                    <div key={p.step} className="relative rounded-2xl border border-border/50 bg-card p-6 shadow-sm text-center">
                      <span className="mb-3 inline-block text-3xl font-extrabold text-primary/20">{p.step}</span>
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <StepIcon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="mb-2 text-base font-bold text-foreground">{p.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+34959000000" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                  959 000 000
                </a>
              </div>
              <Button onClick={() => openBudgetModal()} size="lg" className="rounded-full px-10 text-base">
                {g.pedirPresupuesto}
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

export default GrupoSorocaInfo;
