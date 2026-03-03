import { Briefcase, Users, CalendarCheck } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "350+", label: "Proyectos completados" },
  { icon: Users, value: "20+", label: "Trabajadores" },
  { icon: CalendarCheck, value: "15+", label: "Años de experiencia" },
];

const Zones = () => (
  <section id="zonas" className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center rounded-2xl border border-border/60 bg-card p-8 text-center shadow-sm"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="mb-1 text-4xl font-bold text-foreground">{s.value}</span>
            <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Zones;
