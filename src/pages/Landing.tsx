import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoSorocaFull from "@/assets/logo-soroca-full.png";

const Landing = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/inicio");
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-muted via-background to-secondary/40">
      {/* Soft ambient blurs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[140px]"
        animate={{ scale: [1, 1.12, 1], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
        animate={{ scale: [1, 1.08, 1], y: [0, -15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 h-[200px] w-[200px] rounded-full bg-primary/5 blur-[90px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glass card */}
      <motion.div
        className="relative z-10 mx-4 flex w-full max-w-lg flex-col items-center rounded-3xl border border-border/40 bg-card/50 px-8 py-14 shadow-[0_8px_60px_-12px_hsla(270,48%,50%,0.12)] backdrop-blur-2xl sm:px-14 sm:py-20"
        initial={{ opacity: 0, scale: 0.93, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-card/60 via-transparent to-primary/5" />

        {/* Logo */}
        <motion.button
          onClick={handleEnter}
          className="group relative mb-8 cursor-pointer focus:outline-none"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          <div className="relative h-44 w-44 sm:h-52 sm:w-52">
            <div className="animate-pulse-glow absolute inset-0 rounded-full" />
            <img
              src={logoSorocaFull}
              alt="Grupo Soroca – Proyectos y Construcciones"
              className="relative h-full w-full rounded-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:drop-shadow-2xl"
            />
          </div>
        </motion.button>

        {/* Title */}
        <motion.h1
          className="relative mb-3 text-center font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Bienvenido a <span className="text-gradient">Grupo Soroca</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="relative mb-10 max-w-sm text-center font-body text-base font-light italic leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          Tus especialistas en construcción, mantenimiento y reformas
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={handleEnter}
          className="group relative overflow-hidden rounded-full border border-border bg-card/80 px-10 py-3.5 font-body text-sm font-medium text-foreground backdrop-blur-md transition-all duration-400 hover:border-primary/30 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10">¿En qué te podemos ayudar?</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Landing;
