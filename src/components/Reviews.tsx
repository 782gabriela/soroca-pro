import { Star } from "lucide-react";

const Reviews = () => (
  <section className="bg-muted py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">Reseñas</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Opiniones reales de clientes sobre Grupo Soroca.
        </p>
      </div>

      <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
          <Star className="h-6 w-6 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">
          No se han podido cargar reseñas en este momento.
        </p>
      </div>
    </div>
  </section>
);

export default Reviews;
