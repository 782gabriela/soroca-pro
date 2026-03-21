import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { extraServices } from "@/data/extraServices";
import { useTranslation } from "@/i18n/context";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const { t, localePath } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="servicios" className="relative bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-primary sm:text-4xl">{t.servicesGrid.title}</h2>
          <p className="mx-auto max-w-xl font-body text-muted-foreground">{t.servicesGrid.subtitle}</p>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-4 gap-2 sm:gap-3">
          {services.map((s, i) => {
            const svcT = (t.services as any)[s.slug] || null;
            const cardClass = "group flex flex-col items-center overflow-hidden rounded-xl glass-card transition-all duration-400 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 block";

            const cardContent = (
              <>
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={s.image} alt={svcT?.name || s.name} className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col items-center px-2 py-2 text-center">
                  <div className="mb-1 flex h-5 w-5 items-center justify-center rounded bg-secondary/80">
                    <s.icon className="h-3 w-3 text-primary" />
                  </div>
                  <h3 className="mb-0.5 font-display text-[10px] font-semibold leading-tight text-primary sm:text-xs">{svcT?.name || s.name}</h3>
                  <p className="hidden font-body text-[9px] leading-snug text-muted-foreground sm:line-clamp-2 sm:block sm:text-[10px]">{svcT?.desc || s.desc}</p>
                  {s.externalUrl && (
                    <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 font-body text-[9px] font-medium text-primary">Acceder</span>
                  )}
                </div>
              </>
            );

            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                {s.externalUrl ? (
                  <a href={s.externalUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {cardContent}
                  </a>
                ) : (
                  <Link to={localePath(`/servicios/${s.slug}`)} className={cardClass}>
                    {cardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="mb-4 font-body text-sm text-muted-foreground">{t.servicesGrid.noEncuentras}</p>
          <Button variant="outline" asChild className="rounded-full font-body">
            <Link to={localePath("/contacto")}>{t.servicesGrid.cuentanosTuCaso}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
