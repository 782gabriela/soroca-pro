import { useState } from "react";
import { Star, User } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const reviews = [
  { name: "Ana Francisco", rating: 5, source: "Google", text: "Experimentamos una rehabilitación de edificio excepcional con esta empresa. Desde el inicio, el equipo demostró profesionalismo y experiencia. Cumplieron con plazos y presupuestos. Recomendamos a Soroca para proyectos de rehabilitación por su calidad y compromiso." },
  { name: "Carlos M.A.", rating: 5, source: "Google", text: "Excelentes trabajadores. Me han realizado varios trabajos en mi comunidad de propietarios en San Juan Playa. Los recomiendo encarecidamente. Trabajos perfectos, limpios y sin problema." },
  { name: "Magdalena Jacob", rating: 5, source: "Google", text: "Soroca ha realizado una reforma total de mi cuarto de baño. El resultado supera mis expectativas. Recomiendo sus servicios para cualquier proyecto o reforma. Muchísimas gracias." },
  { name: "Rafaela Pérez Borallo", rating: 5, source: "Google", text: "Una empresa seria y trabajan muy bien. Recomiendo. Contentísima con el trabajo que me han hecho." },
  { name: "Luis Manuel Lorenzo Ritas", rating: 5, source: "Google", text: "Me han hecho el aseo entero y han hecho un trabajo perfecto. Un 10 para esta gente." },
];

const MAX_LENGTH = 150;

const ReviewCard = ({ name, rating, source, text, t, index }: (typeof reviews)[0] & { t: any; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const needsTruncate = text.length > MAX_LENGTH;
  const displayText = !expanded && needsTruncate ? text.slice(0, MAX_LENGTH) + "…" : text;

  return (
    <motion.div
      className="flex flex-col justify-between rounded-2xl glass-card p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div>
        <div className="mb-3 flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="mb-3 font-body text-sm leading-relaxed text-foreground/80">
          "{displayText}"
          {needsTruncate && (
            <button onClick={() => setExpanded(!expanded)} className="ml-1 font-medium text-primary hover:underline">
              {expanded ? t.reviews.verMenos : t.reviews.verMas}
            </button>
          )}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-border/50 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
          <User className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-foreground">{name}</p>
          <p className="font-body text-xs text-muted-foreground">{t.reviews.resenaFrom} {source}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Reviews = () => {
  const { t } = useTranslation();

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
          <h2 className="mb-3 font-display text-3xl font-bold text-primary sm:text-4xl">{t.reviews.title}</h2>
          <p className="mx-auto max-w-xl font-body text-muted-foreground">{t.reviews.subtitle}</p>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} {...r} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
