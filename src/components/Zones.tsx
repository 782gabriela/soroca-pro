import { Briefcase, Users, CalendarCheck } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const icons = [Briefcase, Users, CalendarCheck];

const Zones = () => {
  const { t } = useTranslation();
  const stats = [
    { icon: icons[0], value: t.stats.proyectosValue, label: t.stats.proyectosLabel },
    { icon: icons[1], value: t.stats.trabajadoresValue, label: t.stats.trabajadoresLabel },
    { icon: icons[2], value: t.stats.experienciaValue, label: t.stats.experienciaLabel },
  ];

  return (
    <section id="zonas" className="relative bg-muted/20 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center rounded-2xl glass-card p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="mb-1 font-display text-4xl font-bold text-foreground">{s.value}</span>
              <span className="font-body text-sm font-medium text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Zones;
