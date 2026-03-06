import { Ear, Search, FileText, HardHat, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n/context";

const icons = [Ear, Search, FileText, HardHat, CheckCircle2];

const Process = () => {
  const { t } = useTranslation();
  const steps = t.process.steps.map((s, i) => ({
    icon: icons[i],
    num: String(i + 1).padStart(2, "0"),
    title: s.title,
    desc: s.desc,
  }));

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">{t.process.badge}</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{t.process.title}</h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground">{t.process.subtitle}</p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="relative mx-auto mb-10 max-w-5xl">
            <div className="absolute left-[10%] right-[10%] top-7 h-px bg-border" />
            <div className="grid grid-cols-5">
              {steps.map((s) => (
                <div key={s.num} className="flex justify-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-5 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="rounded-xl border border-border/60 bg-background p-5 text-center shadow-sm transition-shadow hover:shadow-md">
                <span className="mb-2 inline-block text-xs font-bold tracking-widest text-primary/70">{t.process.paso} {s.num}</span>
                <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground">{s.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="relative mx-auto max-w-md">
            <div className="absolute bottom-0 left-7 top-0 w-px bg-border" />
            <div className="space-y-8">
              {steps.map((s) => (
                <div key={s.num} className="relative flex items-start gap-5">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background p-4 shadow-sm">
                    <span className="mb-1 block text-xs font-bold tracking-widest text-primary/70">{t.process.paso} {s.num}</span>
                    <h3 className="mb-1 text-sm font-semibold text-foreground">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
