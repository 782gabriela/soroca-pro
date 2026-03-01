import { Eye, Users, RefreshCw, Star, Quote } from "lucide-react";

const trustPoints = [
  { icon: Eye, text: "Te informamos en cada fase del trabajo" },
  { icon: Users, text: "Coordinamos todos los gremios necesarios" },
  { icon: RefreshCw, text: "Si algo no está bien, lo corregimos" },
];

const testimonials = [
  {
    quote: "Nos reformaron el baño y la cocina. Todo coordinado, limpio y en el plazo que dijeron. Repetiríamos sin duda.",
    name: "María L.",
    location: "Santa Pola",
  },
  {
    quote: "Como administradora de fincas, valoro mucho la seriedad. Grupo Soroca cumple plazos y comunica bien.",
    name: "Carlos R.",
    location: "Gran Alacant",
  },
  {
    quote: "Tuvimos una urgencia de fontanería un sábado y respondieron rápido. Trabajo resuelto y precio justo.",
    name: "Ana P.",
    location: "Elche",
  },
];

const Trust = () => (
  <section className="bg-secondary py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
          La tranquilidad de trabajar con quien cumple
        </h2>
      </div>

      {/* Trust points */}
      <div className="mx-auto mb-14 grid max-w-3xl gap-4 sm:grid-cols-3">
        {trustPoints.map((tp) => (
          <div key={tp.text} className="flex flex-col items-center gap-3 rounded-xl bg-card p-5 text-center shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <tp.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground">{tp.text}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-card p-6">
            <Quote className="mb-3 h-5 w-5 text-primary/40" />
            <p className="mb-4 text-sm leading-relaxed text-foreground/80">{t.quote}</p>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google reviews placeholder */}
      <div className="mt-10 flex items-center justify-center gap-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">Valoraciones en Google</span>
      </div>
    </div>
  </section>
);

export default Trust;
