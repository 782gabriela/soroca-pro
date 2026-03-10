import { useRef } from "react";
import Header from "@/components/Header";
import LandingHero from "@/components/LandingHero";
import Hero from "@/components/Hero";
import ServiceLines from "@/components/ServiceLines";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import Zones from "@/components/Zones";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <LandingHero onEnter={handleEnter} />
      <div ref={mainRef}>
        <Header />
        <main>
          <Hero />
          <ServiceLines />
          <Services />
          <Projects />
          <Process />
          <Trust />
          <Reviews />
          <Zones />
          <ContactForm />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Index;
