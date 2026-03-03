import { Clock, Users, FileText, MapPin, CheckCircle } from "lucide-react";

const points = [
  { icon: Clock, title: "Respuesta rápida", desc: "Contacto ágil y valoración en la menor brevedad posible" },
  { icon: Users, title: "Coordinación de todos los oficios", desc: "Un solo interlocutor gestiona cada gremio implicado" },
  { icon: FileText, title: "Presupuesto claro y cerrado", desc: "Sabes lo que pagas antes de empezar, sin sorpresas" },
  { icon: MapPin, title: "Empresa local, trato directo", desc: "Base en la zona de Alicante. Cercanía real" },
  { icon: CheckCircle, title: "Seguimiento hasta el final", desc: "Revisamos cada fase y no cerramos hasta que esté bien" },
];

const ValueProposition = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
        {points.map((p) => (
          <div key={p.title} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1.5 text-sm font-semibold text-foreground">{p.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProposition;
