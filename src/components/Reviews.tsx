import { useState } from "react";
import { Star, User } from "lucide-react";

const reviews = [
  {
    name: "Ana Francisco",
    rating: 5,
    source: "Google",
    text: "Experimentamos una rehabilitación de edificio excepcional con esta empresa. Desde el inicio, el equipo demostró profesionalismo y experiencia. Cumplieron con plazos y presupuestos. Recomendamos a Soroca para proyectos de rehabilitación por su calidad y compromiso.",
  },
  {
    name: "Carlos M.A.",
    rating: 5,
    source: "Google",
    text: "Excelentes trabajadores. Me han realizado varios trabajos en mi comunidad de propietarios en San Juan Playa. Los recomiendo encarecidamente. Trabajos perfectos, limpios y sin problema.",
  },
  {
    name: "Magdalena Jacob",
    rating: 5,
    source: "Google",
    text: "Soroca ha realizado una reforma total de mi cuarto de baño. El resultado supera mis expectativas. Recomiendo sus servicios para cualquier proyecto o reforma. Muchísimas gracias.",
  },
  {
    name: "Rafaela Pérez Borallo",
    rating: 5,
    source: "Google",
    text: "Una empresa seria y trabajan muy bien. Recomiendo. Contentísima con el trabajo que me han hecho.",
  },
  {
    name: "Luis Manuel Lorenzo Ritas",
    rating: 5,
    source: "Google",
    text: "Me han hecho el aseo entero y han hecho un trabajo perfecto. Un 10 para esta gente.",
  },
];

const MAX_LENGTH = 150;

const ReviewCard = ({ name, rating, source, text }: (typeof reviews)[0]) => {
  const [expanded, setExpanded] = useState(false);
  const needsTruncate = text.length > MAX_LENGTH;
  const displayText = !expanded && needsTruncate ? text.slice(0, MAX_LENGTH) + "…" : text;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div>
        <div className="mb-3 flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="mb-3 text-sm leading-relaxed text-foreground">
          "{displayText}"
          {needsTruncate && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-1 font-medium text-primary hover:underline"
            >
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
          <User className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">Reseña de {source}</p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => (
  <section className="bg-muted py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">Reseñas</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Lo que dicen nuestros clientes sobre Grupo Soroca.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <ReviewCard key={r.name} {...r} />
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
