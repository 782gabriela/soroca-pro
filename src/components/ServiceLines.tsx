import { ArrowRight, Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useBudgetModal } from "@/contexts/BudgetModalContext";
import { useTranslation } from "@/i18n/context";

const viviendaImg = "/lovable-uploads/7c7e7606-1c68-472e-a901-74e2ed0e001e.png";
import comunidadesImg from "@/assets/comunidades.jpeg";
import negociosImg from "@/assets/negocios.jpeg";
import urgenciasImg from "@/assets/urgencias-casco.png";

const ServiceLines = () => {
  const { openBudgetModal } = useBudgetModal();
  const { t, localePath } = useTranslation();

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">{t.serviceLines.title}</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">{t.serviceLines.subtitle}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Viviendas */}
          <Link to={localePath("/categorias/viviendas")} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={viviendaImg} alt={t.serviceLines.viviendas} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-3 text-base font-semibold text-foreground">{t.serviceLines.viviendas}</h3>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Button size="sm" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>{t.serviceLines.pidePresupuesto}</Button>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  {t.serviceLines.verMas}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Comunidades */}
          <Link to={localePath("/categorias/comunidades")} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={comunidadesImg} alt={t.serviceLines.comunidades} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-3 text-base font-semibold text-foreground">{t.serviceLines.comunidades}</h3>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Button size="sm" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>{t.serviceLines.pidePresupuesto}</Button>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  {t.serviceLines.verMas}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Negocios */}
          <Link to={localePath("/categorias/negocios-locales")} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={negociosImg} alt={t.serviceLines.negociosLocales} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-3 text-base font-semibold text-foreground">{t.serviceLines.negociosLocales}</h3>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Button size="sm" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>{t.serviceLines.pidePresupuesto}</Button>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  {t.serviceLines.verMas}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Urgencias */}
          <Link to={localePath("/categorias/urgencias")} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={urgenciasImg} alt={t.serviceLines.urgencias} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-3 text-base font-semibold text-foreground flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                {t.serviceLines.urgencias}
              </h3>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Button size="sm" onClick={(e) => { e.preventDefault(); openBudgetModal(); }}>{t.serviceLines.hazteCliente}</Button>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  {t.serviceLines.verMas}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceLines;
