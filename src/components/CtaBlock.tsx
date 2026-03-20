import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Camera } from "lucide-react";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const CtaBlock = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t } = useTranslation();

  return (
    <section id="contacto" className="relative overflow-hidden bg-soroca-dark py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(270,52%,36%,0.2),transparent_70%)]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">{t.cta.title}</h2>
          <p className="mb-10 font-body text-primary-foreground/50">{t.cta.subtitle}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button size="lg" className="w-full rounded-full bg-primary-foreground px-8 font-body text-soroca-dark transition-all hover:bg-primary-foreground/90 hover:shadow-lg sm:w-auto" onClick={() => openBudgetModal()}>{t.cta.pidePresupuesto}</Button>
            <Button size="lg" variant="outline" asChild className="w-full rounded-full border-primary-foreground/20 font-body text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10 sm:w-auto">
              <a href="tel:+34959000000"><Phone className="mr-1.5 h-4 w-4" />{t.cta.llamanos}</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full rounded-full border-primary-foreground/20 font-body text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10 sm:w-auto">
              <a href="https://wa.me/34655020020" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-1.5 h-4 w-4" />{t.cta.whatsapp}</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full rounded-full border-primary-foreground/20 font-body text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10 sm:w-auto" onClick={() => openBudgetModal()}>
              <Camera className="mr-1.5 h-4 w-4" />{t.cta.enviaFotos}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBlock;
