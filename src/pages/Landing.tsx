import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoSorocaFull from "@/assets/logo-soroca-full.png";

const Landing = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/inicio");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Full-screen layered glass background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-accent/40" />

        {/* Ambient orbs */}
        <motion.div
          className="absolute -top-[20%] -left-[10%] h-[60vmax] w-[60vmax] rounded-full bg-primary/[0.07] blur-[120px]"
          animate={{ scale: [1, 1.08, 1], x: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[15%] -right-[10%] h-[55vmax] w-[55vmax] rounded-full bg-accent/[0.15] blur-[100px]"
          animate={{ scale: [1, 1.06, 1], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] right-[15%] h-[30vmax] w-[30vmax] rounded-full bg-primary/[0.04] blur-[80px]"
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[20%] h-[25vmax] w-[25vmax] rounded-full bg-secondary/[0.2] blur-[90px]"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glass panels — architectural layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/[0.08] to-card/[0.15] backdrop-blur-[2px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background/40 to-transparent" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6 sm:px-8">
        {/* Logo */}
        <motion.button
          onClick={handleEnter}
          className="group relative mb-12 cursor-pointer focus:outline-none sm:mb-14"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56">
            {/* Glow ring */}
            <div className="animate-pulse-glow absolute -inset-3 rounded-full" />
            {/* Glass disc behind logo */}
            <div className="absolute inset-0 rounded-full border border-border/30 bg-card/30 backdrop-blur-xl" />
            <img
              src={logoSorocaFull}
              alt="Grupo Soroca – Proyectos y Construcciones"
              className="relative h-full w-full rounded-full object-contain p-2 drop-shadow-lg transition-all duration-500 group-hover:drop-shadow-2xl"
            />
          </div>
        </motion.button>

        {/* Title — editorial hierarchy */}
        <motion.div
          className="relative mb-6 text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-2 block font-display text-xl tracking-[0.18em] uppercase text-muted-foreground/80 sm:text-2xl">
            <span className="text-3xl font-semibold tracking-[0.12em] sm:text-4xl">B</span>ienvenido a
          </span>
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-light">Grupo Soroca</span>
          </h1>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent sm:w-24"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Subtitle */}
        <motion.p
          className="relative mb-14 max-w-md text-center font-body text-base font-light leading-relaxed tracking-wide text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Tus especialistas en construcción, mantenimiento y reformas
        </motion.p>

        {/* CTA Button — glass pill */}
        <motion.button
          onClick={handleEnter}
          className="group relative overflow-hidden rounded-full border border-border/50 bg-card/40 px-10 py-4 font-body text-sm font-medium tracking-wide text-foreground backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-card/60 hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.2)] sm:px-12 sm:text-base"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Inner shimmer on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/[0.06] to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="relative z-10">¿En qué te podemos ayudar?</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Landing;
