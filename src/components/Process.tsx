import { Ear, Search, FileText, HardHat, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Ear, num: "01", title: "Escuchamos tu necesidad", desc: "Nos cuentas qué necesitas y valoramos la mejor forma de resolverlo." },
  { icon: Search, num: "02", title: "Valoramos la actuación", desc: "Visitamos el espacio si hace falta y evaluamos el alcance del trabajo." },
  { icon: FileText, num: "03", title: "Preparamos presupuesto", desc: "Te entregamos un presupuesto detallado, cerrado y sin letra pequeña." },
  { icon: HardHat, num: "04", title: "Ejecutamos y coordinamos", desc: "Gestionamos todos los oficios para que tú no tengas que preocuparte." },
  { icon: CheckCircle2, num: "05", title: "Entregamos y revisamos", desc: "Repasamos el trabajo contigo. No cerramos hasta que esté correcto." },
];

const Process = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">Así trabajamos. Sin sorpresas.</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Un proceso claro y organizado, de principio a fin.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {steps.map((s, i) => (
          <div key={s.num} className="relative flex flex-col items-center text-center">
            {/* Connector line for desktop */}
            {i < steps.length - 1 && (
              <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-0.5 w-[calc(100%-4rem)] bg-border lg:block" />
            )}
            <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">{s.num}</span>
            <h3 className="mb-1.5 text-sm font-semibold text-foreground">{s.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
