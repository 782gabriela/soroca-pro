import { useState } from "react";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectGallery from "@/components/ProjectGallery";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/context";

const zones = ["Todos", "Alicante", "Elche", "Gran Alacant", "Torrevieja", "Santa Pola"];

const ProyectosPage = () => {
  const { t, localePath } = useTranslation();
  const [filter, setFilter] = useState(t.proyectosPage.todos);
  const projects = t.proyectosPage.projects;
  const filtered = filter === t.proyectosPage.todos ? projects : projects.filter((p) => p.location === filter);

  // Build zone filters: first is "Todos" translated, rest are location names
  const zoneFilters = [t.proyectosPage.todos, ...zones.slice(1)];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl">{t.proyectosPage.title}</h1>
              <p className="text-base font-normal leading-[1.75] text-foreground/90 md:text-lg" style={{ maxWidth: '780px' }}>{t.proyectosPage.subtitle}</p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 flex flex-wrap justify-center gap-2">
                {zoneFilters.map((z) => (
                  <button key={z} onClick={() => setFilter(z)} className={`rounded-full border px-5 py-2.5 text-[15px] font-medium transition-colors ${filter === z ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary/40"}`}>{z}</button>
                ))}
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex h-48 items-center justify-center bg-muted/30">
                      <span className="text-sm font-medium text-muted-foreground">{t.proyectosPage.fotoProyecto}</span>
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">{p.tag}</span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {p.location}</span>
                      </div>
                      <h3 className="mb-1.5 text-base font-bold text-foreground">{p.title}</h3>
                      <p className="text-[15px] leading-[1.7] text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="px-10 text-base">
                  <a href={localePath("/contacto")}>{t.proyectosPage.ctaButton}</a>
                </Button>
              </div>
              <ProjectGallery />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProyectosPage;
