import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useBudgetModal } from "@/contexts/BudgetModalContext";

const Hero = () => {
  const { openBudgetModal } = useBudgetModal();

  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(270_40%_45%/0.5),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(270_60%_20%/0.4),transparent_70%)]" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Reformas, mantenimiento y rehabilitación en Alicante.
            <span className="block text-xl font-normal text-primary-foreground/80 sm:text-2xl mt-3">Experiencia · Seriedad · Profesionalismo</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Prestamos servicios a viviendas, comunidades y negocios. Un solo equipo para todo lo que tu proyecto necesita.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="w-full bg-background text-primary hover:bg-background/90 sm:w-auto"
              onClick={() => openBudgetModal()}
            >
              Pide presupuesto sin compromiso
            </Button>
            <Button size="lg" asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 sm:w-auto">
              <a href="tel:+34655020020">
                <Phone className="mr-1.5 h-4 w-4" />
                655 020 020
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
