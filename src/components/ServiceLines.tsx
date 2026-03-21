import { ArrowRight, Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const viviendaImg = "/lovable-uploads/7c7e7606-1c68-472e-a901-74e2ed0e001e.png";
import comunidadesImg from "@/assets/comunidades.jpeg";
import negociosImg from "@/assets/negocios.jpeg";
import averiasImg from "@/assets/averias-24h-v2.jpg";

const ServiceLines = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t, localePath } = useTranslation();

  const lines = [
    { img: viviendaImg, title: t.serviceLines.viviendas, path: "/categorias/viviendas", cta: t.serviceLines.pidePresupuesto },
    { img: comunidadesImg, title: t.serviceLines.comunidades, path: "/categorias/comunidades", cta: t.serviceLines.pidePresupuesto },
    { img: negociosImg, title: t.serviceLines.negociosLocales, path: "/categorias/negocios-locales", cta: t.serviceLines.pidePresupuesto },
    { img: averiasImg, title: t.serviceLines.urgencias, path: "/categorias/urgencias", cta: t.serviceLines.hazteCliente, isUrgency: true },
  ];

  return (
    <section className="relative bg-background py-8 md:py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-1 font-display text-lg font-bold text-primary sm:text-xl">{t.serviceLines.title}</h2>
          <p className="mx-auto max-w-xl font-body text-xs text-muted-foreground">{t.serviceLines.subtitle}</p>
        </motion.div>
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-2">
          {lines.map((line, i) => (
            <motion.div
              key={line.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link to={localePath(line.path)} className="group flex flex-col overflow-hidden rounded-lg glass-card transition-all duration-400 hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5">
                <div className={`aspect-[16/10] w-full overflow-hidden ${line.isUrgency ? 'bg-white flex items-center justify-center' : ''}`}>
                  <img src={line.img} alt={line.title} className={`h-full w-full transition-transform duration-600 group-hover:scale-105 ${line.isUrgency ? 'object-contain p-2' : 'object-cover'}`} />
                </div>
                <div className="flex flex-1 flex-col p-2">
                  <h3 className="mb-1 font-display text-[9px] font-semibold text-foreground flex items-center gap-1 sm:text-[11px]">
                    {line.isUrgency && <AlertTriangle className="h-2.5 w-2.5 text-destructive" />}
                    {line.title}
                  </h3>
                  <div className="mt-auto flex flex-wrap items-center gap-1.5">
                    <Button size="sm" className="h-5 rounded-full px-2 font-body text-[8px] sm:text-[10px]" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>{line.cta}</Button>
                    <span className="inline-flex items-center gap-0.5 font-body text-[9px] font-medium text-primary transition-colors group-hover:text-primary/80">
                      {t.serviceLines.verMas}
                      <ArrowRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
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
