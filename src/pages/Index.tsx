import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ServiceLines from "@/components/ServiceLines";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Trust from "@/components/Trust";
import Zones from "@/components/Zones";
import CtaBlock from "@/components/CtaBlock";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <ValueProposition />
      <ServiceLines />
      <Services />
      <Projects />
      <Process />
      <Trust />
      <Zones />
      <CtaBlock />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
