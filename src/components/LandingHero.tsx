import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSorocaFull from "@/assets/logo-soroca-full.png";

interface LandingHeroProps {
  onEnter: () => void;
}

const LandingHero = ({ onEnter }: LandingHeroProps) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-soroca-dark">
      {/* Ambient background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,hsla(270,52%,36%,0.3),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,hsla(270,60%,50%,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,hsla(270,40%,60%,0.1),transparent_60%)]" />
      </div>

      {/* Floating glass orbs */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[15%] bottom-[25%] h-48 w-48 rounded-full bg-primary/8 blur-3xl"
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Title line: "Bienvenido a" + Logo */}
          <motion.div
            className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-4xl font-light tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Bienvenido a
            </h1>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="animate-pulse-glow relative h-20 w-20 overflow-hidden rounded-2xl sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32">
                <img
                  src={logoSorocaFull}
                  alt="Soroca"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Glass reflection on logo */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="mb-12 max-w-2xl font-body text-lg font-light leading-relaxed text-primary-foreground/60 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Somos tus especialistas en construcción, mantenimiento y reformas
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              size="lg"
              onClick={onEnter}
              className="group relative overflow-hidden rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-8 py-6 font-body text-base font-medium text-primary-foreground backdrop-blur-md transition-all duration-500 hover:border-primary-foreground/40 hover:bg-primary-foreground/20 hover:shadow-lg hover:shadow-primary/20 sm:px-10 sm:text-lg"
            >
              <span className="relative z-10">¿En qué te podemos ayudar?</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            onClick={onEnter}
            className="mt-16 flex flex-col items-center gap-2 text-primary-foreground/30 transition-colors hover:text-primary-foreground/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.2em]">Explorar</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-soroca-dark to-transparent" />
    </section>
  );
};

export default LandingHero;
