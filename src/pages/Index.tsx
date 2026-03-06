import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceLines from "@/components/ServiceLines";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";

import Reviews from "@/components/Reviews";
import Zones from "@/components/Zones";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <ServiceLines />
      <Services />
      <Projects />
      <Process />
      
      <Reviews />
      <Zones />
      <ContactForm />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
