import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const Hero = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        ref={(el) => {if (el) el.playbackRate = 0.5;}}>
        
        <source src="/videos/hero-video.mov" type="video/mp4" />
      </video>

      {/* Very light purple overlay */}
      <div className="absolute inset-0 bg-[hsla(270,48%,50%,0.12)]" />
      <div className="absolute inset-0 bg-[hsla(270,40%,95%,0.55)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsla(270,40%,96%,0.4)] via-transparent to-[hsla(270,40%,96%,0.6)]" />

      <div className="container relative z-10 mx-auto flex min-h-[85vh] items-center px-4 py-24 md:py-36">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          
          <h1 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            {t.hero.title}
            <span className="mt-3 block font-body text-lg font-light sm:text-xl text-muted-foreground">
              {t.hero.tagline}
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-body text-base leading-relaxed sm:text-lg text-muted-foreground">
            {t.hero.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="w-full rounded-full bg-primary px-8 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg sm:w-auto"
              onClick={() => openBudgetModal()}>
              
              {t.hero.ctaBudget}
            </Button>
            <Button
              size="lg"
              asChild
              className="w-full rounded-full border border-primary/20 bg-primary/8 font-body text-sm text-primary/70 backdrop-blur-sm transition-all hover:bg-primary/15 sm:w-auto">
              
              <a href="tel:+34655020020" className="bg-secondary">
                <Phone className="mr-1.5 h-4 w-4" />
                655 020 020
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;