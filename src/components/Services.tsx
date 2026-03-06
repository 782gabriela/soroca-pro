import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { useTranslation } from "@/i18n/context";

          {services.map((s) => {
            const svcT = (t.services as any)[s.slug] || null;
            return (
              <Link key={s.slug} to={localePath(`/servicios/${s.slug}`)} className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img src={s.image} alt={svcT?.name || s.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4 text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <s.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">{svcT?.name || s.name}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{svcT?.desc || s.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-muted-foreground">{t.servicesGrid.noEncuentras}</p>
          <Button variant="outline" asChild>
            <Link to={localePath("/contacto")}>{t.servicesGrid.cuentanosTuCaso}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
