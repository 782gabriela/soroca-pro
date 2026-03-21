import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Landmark, Mountain, Paintbrush, RectangleHorizontal, Wrench, Droplets, Phone, Users, Award, FolderCheck, MessageCircle, ClipboardList, Clock, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";

const GrupoSorocaInfo = () => {
  const { openBudgetModal } = useBudgetModal();
  const { localePath } = useTranslation();

  const servicios = [
  { icon: Zap, title: "Electricidad", text: "Nuestra experiencia en electricidad nos permite abordar con confianza todas sus necesidades eléctricas, desde la instalación y reparación de sistemas hasta la consultoría en ahorro de energía." },
  { icon: Landmark, title: "Servicios de Arquitectura", text: "Colaboramos con arquitectos talentosos para dar vida a sus visiones arquitectónicas. Nuestros proyectos son cuidadosamente planificados y ejecutados para cumplir con sus requisitos exactos." },
  { icon: Mountain, title: "Trabajos Verticales", text: "Nos especializamos en trabajos verticales, ofreciendo soluciones de acceso y reparación en alturas. Nuestro equipo cumple con todas las medidas de seguridad para realizar trabajos con profesionalismo y precisión." },
  { icon: Paintbrush, title: "Servicios de Pintura", text: "Transformamos espacios interiores y exteriores con pinturas de alta calidad y técnicas de aplicación avanzadas. Puede confiar en que los colores perdurarán con el tiempo." },
  { icon: RectangleHorizontal, title: "Carpintería Metálica y de Aluminio", text: "Ofrecemos servicios de carpintería metálica y de aluminio para crear estructuras duraderas y elegantes, desde ventanas y puertas hasta barandas y portones." },
  { icon: Wrench, title: "Albañería en General", text: "Realizamos trabajos de albañería general, asegurando que cada proyecto se construya sobre bases sólidas." },
  { icon: Droplets, title: "Fontanería", text: "Soluciones completas de fontanería para garantizar que su sistema de agua funcione de manera adecuada y eficiente." }];


  const stats = [
  { value: "400+", label: "Proyectos completados", icon: FolderCheck },
  { value: "20", label: "Trabajadores", icon: Users },
  { value: "17", label: "Ganador del premio", icon: Award }];


  const fortalezas = [
  {
    title: "Amplia experiencia en múltiples áreas",
    text: "Con un equipo experimentado y calificado en una variedad de servicios de construcción, nuestra empresa puede satisfacer las necesidades de los clientes desde múltiples perspectivas. Desde albañilería (albañilería) y electricidad (electricidad) hasta soluciones de accesibilidad (soluciones de accesibilidad) y mantenimientos (mantenimiento), estamos preparados para ofrecer una amplia gama de servicios de alta calidad."
  },
  {
    title: "Flexibilidad y adaptabilidad",
    text: "Ofrecemos soluciones personalizadas para las necesidades únicas de cada cliente. Ya sea en reformas (reformas), reparaciones (reparaciones), impermeabilizaciónes (impermeabilización) o servicios de arquitectura (servicios de arquitectura), somos flexibles y nos adaptamos a los requisitos específicos de los proyectos para garantizar resultados excelentes."
  },
  {
    title: "Calidad y compromiso con los detalles",
    text: "Nos enorgullecemos de la calidad de nuestro trabajo y de nuestra atención a los detalles. Desde pintura (pintura) y fontanería (fontanería) hasta carpintería metálica y aluminio (carpintería metálica y de aluminio), ofrecemos servicios de alta calidad y estamos comprometidos a brindar un alto nivel de precisión en cada aspecto de nuestros proyectos."
  }];


  const pasos = [
  { icon: MessageCircle, title: "Contáctanos", text: "El primer paso es ponerte en contacto con nosotros para discutir tu proyecto y tus necesidades.", step: "01" },
  { icon: ClipboardList, title: "Proporciona Detalles Sobre tu Proyecto", text: "Después de contactarnos, proporciona detalles sobre tu proyecto. Cuanta más información tengamos, más personalizada será nuestra solución.", step: "02" },
  { icon: Clock, title: "Evaluación Gratuita", text: "Realizaremos una evaluación gratuita de tu proyecto para comprender mejor los requisitos y proporcionar una estimación detallada.", step: "03" },
  { icon: CheckSquare, title: "Planifica y Realiza el Proyecto", text: "Después de evaluar el proyecto, trabajaremos juntos para establecer la planificación y comenzar la realización del proyecto.", step: "04" }];


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Back navigation */}
        <div className="container mx-auto px-4 pt-6">
          <Link
            to={localePath("/sobre-nosotros")}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-body text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
            
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
        </div>

        {/* Hero section */}
        <section className="pb-16 pt-8 md:pb-24 md:pt-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Más de 15 años de experiencia</p>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                Bienvenidos a Soroca Proyectos Y Construcciones S.L
              </h1>
              <p className="mb-4 text-lg font-semibold text-foreground/90 md:text-xl">
                Expertos en una Amplia Gama de Servicios para su Hogar
              </p>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Somos un equipo de profesionales altamente calificados que se especializa en una amplia gama de servicios para su hogar. Nos enorgullece nuestras habilidades y estamos aquí para hacer que su hogar sea más cómodo y hermoso. Estos son nuestros principales servicios:
              </p>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {servicios.map((s) =>
              <div
                key={s.title}
                className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 md:p-8">
                
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              )}
            </div>
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Estamos aquí para satisfacer todas sus necesidades de construcción y mantenimiento, y nuestro equipo dedicado está a su disposición para ayudarlo a realizar sus proyectos soñados.
              </p>
            </div>
          </div>
        </section>

        {/* CEO */}
        <section className="border-t border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">CEO de la empresa: Andrei</p>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 md:grid-cols-3">
                {fortalezas.map((f) =>
                <div key={f.title} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
                    <h3 className="mb-4 text-lg font-bold text-foreground">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border/50 bg-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) =>
              <div key={s.label} className="text-center">
                  <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <span className="block text-4xl font-extrabold text-foreground md:text-5xl">{s.value}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">{s.label}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Team commitment */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">Equipo experimentado y profesional</h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Nuestra empresa está dedicada a ofrecer soluciones completas y confiables para cualquier proyecto de construcción, contando con la competencia y el compromiso necesarios para satisfacer las necesidades de nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">CÓMO FUNCIONA</p>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">Paso a paso, tu sueño se hace realidad con nosotros</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {pasos.map((p) =>
                <div key={p.step} className="relative rounded-2xl border border-border/50 bg-card p-6 shadow-sm text-center">
                    <span className="mb-3 inline-block text-3xl font-extrabold text-primary/20">{p.step}</span>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <p.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-foreground">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+34666666666" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                  ​959 000 000  
                </a>
              </div>
              <Button onClick={() => openBudgetModal()} size="lg" className="rounded-full px-10 text-base">
                Pedir presupuesto
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>);

};

export default GrupoSorocaInfo;