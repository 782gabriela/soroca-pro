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
      <section className="flex flex-1 items-center justify-center py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-12 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Horario
          </h1>

          <div className="mx-auto max-w-md">
            {horario.map((h) => (
              <div
                key={h.dia}
                className={`flex items-center justify-between border-b border-border px-4 py-4 text-lg ${
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
            <Button asChild size="lg">
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
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default HorarioPage;
