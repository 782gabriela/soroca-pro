import { motion } from "framer-motion";
import logoSorocaFull from "@/assets/logo-soroca-full.png";

interface LandingHeroProps {
  onEnter: () => void;
}

const LandingHero = ({ onEnter }: LandingHeroProps) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-soroca-lavender via-white to-secondary">
      {/* Ambient glass blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/30 blur-[100px]"
        animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-[250px] w-[250px] rounded-full bg-primary/5 blur-[80px]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glass card container */}
      <motion.div
        className="relative z-10 mx-4 flex flex-col items-center rounded-3xl border border-white/40 bg-white/50 px-8 py-16 shadow-[0_8px_60px_-12px_hsla(270,52%,50%,0.15)] backdrop-blur-2xl sm:mx-8 sm:px-16 sm:py-20 md:px-24 md:py-24"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-primary/5" />

        {/* Logo */}
        <motion.button
          onClick={onEnter}
          className="group relative mb-10 cursor-pointer focus:outline-none"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56">
            <div className="animate-pulse-glow absolute inset-0 rounded-full" />
            <img
              src={logoSorocaFull}
              alt="Grupo Soroca – Proyectos y Construcciones"
              className="relative h-full w-full rounded-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:drop-shadow-2xl"
            />
          </div>
        </motion.button>

        {/* Heading */}
        <motion.h1
          className="relative mb-4 text-center font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Bienvenido a{" "}
          <span className="text-gradient">Grupo Soroca</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="relative mb-12 max-w-md text-center font-body text-lg font-light leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Tus especialistas en construcción, mantenimiento y reformas
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={onEnter}
          className="group relative overflow-hidden rounded-full border border-primary/20 bg-primary/10 px-10 py-4 font-body text-base font-medium text-primary backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/15 sm:text-lg"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10">¿En qué te podemos ayudar?</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default LandingHero;
