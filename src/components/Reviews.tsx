import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Soroca+Proyectos+y+Construcciones";

const Reviews = () => (
  <section className="bg-muted py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">Reseñas</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Opiniones reales de clientes sobre Grupo Soroca.
        </p>
      </div>

      <div className="mx-auto max-w-lg rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
          <Star className="h-7 w-7 text-primary" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          Consulta nuestras reseñas en Google
        </h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Descubre lo que nuestros clientes opinan sobre nuestro trabajo, calidad y profesionalismo.
        </p>
        <Button asChild>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver reseñas en Google
          </a>
        </Button>
      </div>

      <div className="mt-8 text-center">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Ver todas las reseñas en Google
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;
