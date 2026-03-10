import { ArrowRight, Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const viviendaImg = "/lovable-uploads/7c7e7606-1c68-472e-a901-74e2ed0e001e.png";
import comunidadesImg from "@/assets/comunidades.jpeg";
import negociosImg from "@/assets/negocios.jpeg";
import urgenciasImg from "@/assets/urgencias-casco.png";

const ServiceLines = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t, localePath } = useTranslation();

  const lines = [
    { img: viviendaImg, title: t.serviceLines.viviendas, path: "/categorias/viviendas", cta: t.serviceLines.pidePresupuesto },
    { img: comunidadesImg, title: t.serviceLines.comunidades, path: "/categorias/comunidades", cta: t.serviceLines.pidePresupuesto },
    { img: negociosImg, title: t.serviceLines.negociosLocales, path: "/categorias/negocios-locales", cta: t.serviceLines.pidePresupuesto },
    { img: urgenciasImg, title: t.serviceLines.urgencias, path: "/categorias/urgencias", cta: t.serviceLines.hazteCliente, isUrgency: true },
  ];

  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-primary sm:text-4xl">{t.serviceLines.title}</h2>
          <p className="mx-auto max-w-xl font-body text-muted-foreground">{t.serviceLines.subtitle}</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lines.map((line, i) => (
            <motion.div
              key={line.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={localePath(line.path)} className="group flex flex-col overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={line.img} alt={line.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-3 font-display text-lg font-semibold text-foreground flex items-center gap-2">
                    {line.isUrgency && <AlertTriangle className="h-4 w-4 text-destructive" />}
                    {line.title}
                  </h3>
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Button size="sm" className="rounded-full font-body text-xs" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>{line.cta}</Button>
                    <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                      {t.serviceLines.verMas}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLines;
