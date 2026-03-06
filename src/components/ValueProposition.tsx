import { Clock, Users, FileText, MapPin, CheckCircle } from "lucide-react";
import { useTranslation } from "@/i18n/context";

const icons = [Clock, Users, FileText, MapPin, CheckCircle];

const ValueProposition = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {t.valueProp.map((p, i) => {
            const Icon = icons[i];
            return (
              <div key={p.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
