import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const Hero = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-soroca-dark">
      {/* Ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsla(270,50%,45%,0.4),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsla(270,60%,25%,0.3),transparent_60%)]" />

      <div className="container relative mx-auto px-4 py-24 md:py-36">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-primary-foreground/90 sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            {t.hero.title}
            <span className="mt-3 block font-body text-lg font-light text-primary-foreground/50 sm:text-xl">
              {t.hero.tagline}
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-body text-base leading-relaxed text-primary-foreground/40 sm:text-lg">
            {t.hero.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="w-full rounded-full bg-primary-foreground px-8 font-body text-sm font-medium text-soroca-dark transition-all hover:bg-primary-foreground/90 hover:shadow-lg sm:w-auto"
              onClick={() => openBudgetModal()}
            >
              {t.hero.ctaBudget}
            </Button>
            <Button
              size="lg"
              asChild
              className="w-full rounded-full border border-primary-foreground/15 bg-primary-foreground/8 font-body text-sm text-primary-foreground/70 backdrop-blur-sm transition-all hover:bg-primary-foreground/15 sm:w-auto"
            >
              <a href="tel:+34655020020">
                <Phone className="mr-1.5 h-4 w-4" />
                655 020 020
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Video section */}
      <motion.div
        className="relative w-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-soroca-dark via-transparent to-soroca-dark/80 z-10 pointer-events-none" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          style={{ playbackRate: 0.5 }}
          ref={(el) => { if (el) el.playbackRate = 0.5; }}
        >
          <source src="/videos/hero-video.mov" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
};

export default Hero;
