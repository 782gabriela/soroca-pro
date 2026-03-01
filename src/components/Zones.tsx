import { MapPin } from "lucide-react";

const zones = ["Santa Pola", "Gran Alacant", "Elche", "Alicante", "Alrededores"];

const Zones = () => (
  <section id="zonas" className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">Estamos donde nos necesitas</h2>
        <p className="mb-10 text-muted-foreground">
          Empresa local con base en la zona. Nos desplazamos sin problema.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {zones.map((z) => (
            <span
              key={z}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {z}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Zones;
