import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoSorocaFull from "@/assets/logo-soroca-new.jpeg";
import landingBg from "@/assets/landing-bg.png";

const Landing = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/inicio");
  };

  const handleServices = () => {
    navigate("/inicio#servicios");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={landingBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6 sm:px-8">
        {/* Logo with subtle glow behind */}
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
            {/* Soft glow behind logo */}
            <div className="absolute -inset-8 rounded-full bg-primary/[0.06] blur-[40px]" />
            {/* Glow ring */}
            <div className="animate-pulse-glow absolute -inset-3 rounded-full" />
            {/* Glass disc behind logo */}
            <div className="absolute inset-0 rounded-full border border-border/20 bg-card/25 shadow-[0_4px_30px_-8px_hsl(var(--primary)/0.08)] backdrop-blur-xl" />
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
          <span className="mb-1 block text-3xl tracking-[0.01em] text-foreground/60 sm:text-4xl md:text-5xl leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <span className="text-5xl font-bold text-foreground/70 sm:text-6xl md:text-7xl">B</span>ienvenido
            <br />
            <span className="text-2xl tracking-[0.05em] text-foreground/50 sm:text-3xl md:text-[2rem]">a</span>
          </span>
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-light">Grupo Soroca</span>
          </h1>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary/30 to-transparent sm:w-24"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Subtitle */}
        <motion.p
          className="relative mb-14 max-w-md text-center font-body text-[0.95rem] font-light leading-[1.8] tracking-[0.08em] text-muted-foreground/80 sm:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Tus especialistas en construcción, mantenimiento y rehabilitación.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button
            onClick={handleEnter}
            className="group relative overflow-hidden rounded-full border border-border/30 bg-card/30 px-10 py-4 font-body text-sm font-medium tracking-[0.06em] text-foreground/85 shadow-[0_2px_20px_-6px_hsl(var(--primary)/0.1)] backdrop-blur-2xl transition-all duration-500 hover:border-primary/30 hover:bg-card/50 hover:shadow-[0_4px_40px_-8px_hsl(var(--primary)/0.18)] sm:px-12 sm:text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/[0.04] to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 rounded-full border border-card/20" />
            <span className="relative z-10">¿En qué te podemos ayudar?</span>
          </motion.button>

          <motion.button
            onClick={handleServices}
            className="group relative overflow-hidden rounded-full border border-border/30 bg-card/30 px-10 py-4 font-body text-sm font-medium tracking-[0.06em] text-foreground/85 shadow-[0_2px_20px_-6px_hsl(var(--primary)/0.1)] backdrop-blur-2xl transition-all duration-500 hover:border-primary/30 hover:bg-card/50 hover:shadow-[0_4px_40px_-8px_hsl(var(--primary)/0.18)] sm:px-12 sm:text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/[0.04] to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 rounded-full border border-card/20" />
            <span className="relative z-10">Ver servicios</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
