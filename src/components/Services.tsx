import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const Services = () => {
  const { t, localePath } = useTranslation();

  return (
    <section id="servicios" className="relative bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-primary sm:text-4xl">{t.servicesGrid.title}</h2>
          <p className="mx-auto max-w-xl font-body text-muted-foreground">{t.servicesGrid.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {services.map((s, i) => {
            const svcT = (t.services as any)[s.slug] || null;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to={localePath(`/servicios/${s.slug}`)} className="group overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 block">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img src={s.image} alt={svcT?.name || s.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-5 text-center">
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/80 backdrop-blur-sm">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-1.5 font-display text-sm font-semibold text-foreground">{svcT?.name || s.name}</h3>
                    <p className="font-body text-xs leading-relaxed text-muted-foreground">{svcT?.desc || s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="mt-12 text-center"
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
