import { Phone, Mail, MapPin } from "lucide-react";
import logoSoroca from "@/assets/logo-soroca.jpeg";

const Footer = () =>
<footer className="bg-soroca-dark py-12 text-primary-foreground/80 md:py-16">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="h-9 w-9 overflow-hidden rounded-lg">
              <img src={logoSoroca} alt="Grupo Soroca" className="h-full w-full object-cover" />
            </div>
            <span className="text-base font-bold text-primary-foreground">Grupo Soroca</span>
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/60">
            Reformas, mantenimiento y rehabilitación en la provincia de Alicante.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Servicios</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Reformas integrales</li>
            <li>Mantenimiento</li>
            <li>Electricidad y fontanería</li>
            <li>Fachadas y cubiertas</li>
            <li>Impermeabilización</li>
          </ul>
        </div>

        {/* Horario */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Horario</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li>
              <span className="block font-medium text-primary-foreground/80">Lunes - Viernes</span>
              8:00 - 18:00
            </li>
            <li>
              <span className="block font-medium text-primary-foreground/80">Sábado / Domingo</span>
              Cerrado
            </li>
            <li>
              <span className="block font-medium text-primary-foreground/80">Servicio de Averías 24h</span>
              365 días
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Contacto</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+34655020020" className="transition-colors hover:text-primary-foreground">655 020 020</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@gruposoroca.es" className="transition-colors hover:text-primary-foreground">info@soroca.es</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Avenida Noruega 1, BUNGALOW 21 URB NOVAMAR Alicante · Gran Alacant</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
        <p className="text-xs text-primary-foreground/40">© 2026 Grupo Soroca. Todos los derechos reservados.</p>
        <div className="flex gap-4 text-xs text-primary-foreground/40">
          <a href="#" className="transition-colors hover:text-primary-foreground/60">Aviso legal</a>
          <a href="#" className="transition-colors hover:text-primary-foreground/60">Privacidad</a>
          <a href="#" className="transition-colors hover:text-primary-foreground/60">Cookies</a>
        </div>
      </div>
    </div>
  </footer>;
export default Footer;
