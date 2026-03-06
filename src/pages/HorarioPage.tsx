import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const horario = [
  { dia: "Lunes", horas: "08:00 – 18:00" },
  { dia: "Martes", horas: "08:00 – 18:00" },
  { dia: "Miércoles", horas: "08:00 – 18:00" },
  { dia: "Jueves", horas: "08:00 – 18:00" },
  { dia: "Viernes", horas: "08:00 – 15:00" },
  { dia: "Sábado", horas: "Cerrado" },
  { dia: "Domingo", horas: "Cerrado" },
];

const HorarioPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
              Horario
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-md">
              {horario.map((h) => (
                <div
                  key={h.dia}
                  className={`flex items-center justify-between border-b border-border/50 px-4 py-4 text-base ${
                    h.horas === "Cerrado" ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  <span className="font-medium">{h.dia}</span>
                  <span className={h.horas === "Cerrado" ? "text-destructive/70" : "font-semibold"}>
                    {h.horas}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="px-10 text-base">
                <a href="tel:+34655020020">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar: 655 020 020
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://wa.me/34655020020" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default HorarioPage;
