import { Clock, Users, FileText, MapPin, CheckCircle } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const icons = [Clock, Users, FileText, MapPin, CheckCircle];

const ValueProposition = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {t.valueProp.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={p.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1.5 font-display text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="font-body text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
