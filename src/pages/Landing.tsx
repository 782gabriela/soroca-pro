import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoSorocaFull from "@/assets/logo-soroca-full.png";
import landingBg from "@/assets/landing-bg.png";

const Landing = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/inicio");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={landingBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
  );
};

export default Landing;
