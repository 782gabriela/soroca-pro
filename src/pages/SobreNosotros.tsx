import { Users, FolderCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, value: "20+", label: "Trabajadores" },
  { icon: FolderCheck, value: "400", label: "Proyectos finalizados" },
  { icon: MapPin, value: "15+", label: "Años de experiencia" },
];

const SobreNosotros = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Sobre nosotros
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Somos un equipo de profesionales comprometidos con la calidad y el servicio en la provincia de Alicante.
          </p>
        </div>
      </section>

      {/* Cifras */}
      <section className="border-b border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <span className="block text-3xl font-bold text-foreground sm:text-4xl">{s.value}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Quiénes somos</h2>
              <p className="leading-relaxed text-muted-foreground">
                Grupo Soroca es una empresa de reformas y mantenimiento con raíces en la provincia de Alicante.
                Contamos con un equipo de más de 20 profesionales especializados en distintos oficios, lo que nos
                permite ofrecer un servicio integral y coordinado en cada proyecto.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Qué hacemos</h2>
              <p className="leading-relaxed text-muted-foreground">
                Ofrecemos servicios de fontanería, electricidad, pintura, cerrajería, carpintería metálica,
                ascensores y aire acondicionado. Trabajamos tanto para particulares como para comunidades de
                propietarios y negocios, adaptándonos a las necesidades de cada cliente.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Por qué elegirnos</h2>
              <p className="leading-relaxed text-muted-foreground">
                Porque coordinamos todos los oficios bajo un solo equipo. Sin intermediarios, con presupuestos
                claros y un seguimiento constante hasta la entrega final. Nuestros más de 400 proyectos finalizados
                son nuestra mejor carta de presentación.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Para quién trabajamos</h2>
              <p className="leading-relaxed text-muted-foreground">
                Trabajamos para viviendas particulares, comunidades de vecinos y negocios. Desde una reparación
                puntual hasta una reforma integral, cada cliente recibe el mismo nivel de atención y profesionalidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">¿Hablamos?</h2>
          <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
            Cuéntanos tu proyecto y te ayudamos a hacerlo realidad.
          </p>
          <Button asChild size="lg">
            <Link to="/contacto">Contactar</Link>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default SobreNosotros;
