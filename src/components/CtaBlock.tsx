import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Camera } from "lucide-react";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";

const CtaBlock = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t } = useTranslation();

  return (
    <section id="contacto" className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-primary-foreground sm:text-3xl">{t.cta.title}</h2>
          <p className="mb-10 text-primary-foreground/75">{t.cta.subtitle}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button size="lg" className="w-full bg-background text-primary hover:bg-background/90 sm:w-auto" onClick={() => openBudgetModal()}>{t.cta.pidePresupuesto}</Button>
            <Button size="lg" variant="outline" asChild className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
              <a href="tel:+34655020020"><Phone className="mr-1.5 h-4 w-4" />{t.cta.llamanos}</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
              <a href="https://wa.me/34655020020" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-1.5 h-4 w-4" />{t.cta.whatsapp}</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto" onClick={() => openBudgetModal()}>
              <Camera className="mr-1.5 h-4 w-4" />{t.cta.enviaFotos}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;
