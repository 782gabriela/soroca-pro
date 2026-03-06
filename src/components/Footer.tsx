import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoSoroca from "@/assets/logo-soroca.jpeg";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const Footer = () => {
  const { openCookieModal, openPrivacyModal } = useCookieConsent();

  return (
    <footer className="bg-soroca-dark py-10 text-primary-foreground/80">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Col 1 — Marca */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-9 w-9 overflow-hidden rounded-lg">
                <img src={logoSoroca} alt="Grupo Soroca" className="h-full w-full object-cover" />
              </div>
              <span className="text-base font-bold text-primary-foreground">Grupo Soroca</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Reformas, mantenimiento y rehabilitación en la provincia de Alicante.
            </p>
          </div>

          {/* Col 2 — Horario */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Horario</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <span className="font-medium text-primary-foreground/80">Lunes - Viernes</span>
                <br />8:00 - 18:00
              </li>
              <li>
                <span className="font-medium text-primary-foreground/80">Sábado / Domingo</span>
                <br />Cerrado
              </li>
              <li>
                <span className="font-medium text-primary-foreground/80">Servicio Urgencias 24h</span>
                <br />365 días
              </li>
            </ul>
          </div>

          {/* Col 3 — Contacto + Redes */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Contacto</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+34655020020" className="transition-colors hover:text-primary-foreground">655 020 020</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@soroca.es" className="transition-colors hover:text-primary-foreground">info@soroca.es</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Gran Alacant, Alicante</span>
              </li>
            </ul>

            <p className="mt-5 text-xs leading-relaxed text-primary-foreground/50">
              Síguenos en redes para ver nuestros trabajos más recientes.
            </p>
            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://www.instagram.com/soroca_proyectos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/60 transition-colors hover:border-primary/60 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/Soroca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/60 transition-colors hover:border-primary/60 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">© 2026 Grupo Soroca. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-xs text-primary-foreground/40">
            <button onClick={openPrivacyModal} className="transition-colors hover:text-primary-foreground/60">Privacidad</button>
            <span className="text-primary-foreground/20">·</span>
            <button onClick={openCookieModal} className="transition-colors hover:text-primary-foreground/60">Cookies</button>
            <span className="text-primary-foreground/20">·</span>
            <button className="transition-colors hover:text-primary-foreground/60">Aviso legal</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
