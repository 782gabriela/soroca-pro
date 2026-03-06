import { Briefcase, Users, CalendarCheck } from "lucide-react";
import { useTranslation } from "@/i18n/context";

const icons = [Briefcase, Users, CalendarCheck];

const Zones = () => {
  const { t } = useTranslation();
  const stats = [
    { icon: icons[0], value: t.stats.proyectosValue, label: t.stats.proyectosLabel },
    { icon: icons[1], value: t.stats.trabajadoresValue, label: t.stats.trabajadoresLabel },
    { icon: icons[2], value: t.stats.experienciaValue, label: t.stats.experienciaLabel },
  ];

  return (
    <section id="zonas" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center rounded-2xl border border-border/60 bg-card p-8 text-center shadow-sm">
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
};

export default Zones;
