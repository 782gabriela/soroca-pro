import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Hero from "@/components/Hero";
import ServiceLines from "@/components/ServiceLines";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import Zones from "@/components/Zones";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
          <Hero />
          <ServiceLines />
          <Services />
          <Process />
          <Trust />
          <Reviews />
          <Zones />
          <ContactForm />
      </main>
      <Footer />

      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
};

export default Index;
