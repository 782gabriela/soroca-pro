import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => (
  <section className="relative overflow-hidden bg-primary py-20 md:py-32">
    {/* Overlay pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(270_40%_45%/0.5),transparent_70%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(270_60%_20%/0.4),transparent_70%)]" />

    <div className="container relative mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
          Reformas, mantenimiento y rehabilitación en Alicante.{" "}
          <span className="text-primary-foreground/80">Todo coordinado, bien hecho.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
          Viviendas, comunidades y negocios en Santa Pola, Gran Alacant, Elche y alrededores.
          Un solo equipo para todo lo que tu proyecto necesita.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            size="lg"
            asChild
            className="w-full bg-background text-primary hover:bg-background/90 sm:w-auto"
          >
            <a href="#contacto">Pide presupuesto sin compromiso</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
          >
            <a href="tel:+34600000000">
              <Phone className="mr-1.5 h-4 w-4" />
              Llámanos ahora
            </a>
          </Button>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
