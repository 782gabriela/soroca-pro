import { Ear, Search, FileText, HardHat, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

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
    <section className="relative bg-muted/20 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">{t.process.badge}</span>
          <h2 className="mb-4 font-display text-3xl font-bold text-primary sm:text-4xl">{t.process.title}</h2>
          <p className="mx-auto max-w-xl font-body text-base text-muted-foreground">{t.process.subtitle}</p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="relative mx-auto mb-10 max-w-5xl">
            <div className="absolute left-[10%] right-[10%] top-7 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid grid-cols-5">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/25">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="rounded-2xl glass-card p-5 text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
              >
                <span className="mb-2 inline-block font-body text-xs font-bold tracking-widest text-primary/60">{t.process.paso} {s.num}</span>
                <h3 className="mb-2 font-display text-sm font-semibold leading-snug text-foreground">{s.title}</h3>
                <p className="font-body text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="relative mx-auto max-w-md">
            <div className="absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />
            <div className="space-y-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  className="relative flex items-start gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/25">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="rounded-2xl glass-card p-4">
                    <span className="mb-1 block font-body text-xs font-bold tracking-widest text-primary/60">{t.process.paso} {s.num}</span>
                    <h3 className="mb-1 font-display text-sm font-semibold text-foreground">{s.title}</h3>
                    <p className="font-body text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
