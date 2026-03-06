import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoSoroca from "@/assets/logo-soroca.jpeg";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  const { openCookieModal, openPrivacyModal } = useCookieConsent();

  return (
    <footer className="bg-soroca-dark text-primary-foreground/70">
      {/* Main grid */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 overflow-hidden rounded-lg">
                <img src={logoSoroca} alt="Grupo Soroca" className="h-full w-full object-cover" />
              </div>
              <span className="text-base font-bold text-primary-foreground">Grupo Soroca</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/50">
              Reformas, mantenimiento y rehabilitación en la provincia de Alicante.
            </p>
            <p className="text-xs font-medium tracking-wide text-primary-foreground/40">
              Equipo propio · Seriedad · Profesionalidad
            </p>
          </div>

          {/* Col 2 — Servicios */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/90">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {["Reformas integrales", "Mantenimiento", "Electricidad", "Fontanería", "Impermeabilización"].map((s) => (
                <li key={s} className="text-primary-foreground/50 transition-colors hover:text-primary-foreground/80">{s}</li>
              ))}
            </ul>
            <Link to="/#servicios" className="mt-3 inline-block text-xs font-medium text-primary/80 transition-colors hover:text-primary">
              Ver todos los servicios →
            </Link>
          </div>

          {/* Col 3 — Horario */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/90">Horario</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li>
                <span className="font-medium text-primary-foreground/70">L–V:</span> 8:00–18:00
              </li>
              <li>
                <span className="font-medium text-primary-foreground/70">S–D:</span> Cerrado
              </li>
            </ul>
            <span className="mt-3 inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-foreground/90">
              Averías 24 h / 365 días
            </span>
          </div>

          {/* Col 4 — Contacto + Redes */}
          <div className="space-y-5">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/90">Contacto</h4>
              <ul className="space-y-2.5 text-sm text-primary-foreground/50">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+34655020020" className="transition-colors hover:text-primary-foreground/80">655 020 020</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:info@soroca.com" className="transition-colors hover:text-primary-foreground/80">info@soroca.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Gran Alacant, Alicante</span>
                </li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div>
              <p className="mb-2 text-xs text-primary-foreground/40">Síguenos para ver nuestros trabajos más recientes.</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/soroca_proyectos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Grupo Soroca"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-primary/30 hover:text-primary-foreground"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/Soroca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Grupo Soroca"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-primary/30 hover:text-primary-foreground"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row">
          <p className="text-xs text-primary-foreground/35">© 2026 Grupo Soroca. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-xs text-primary-foreground/35">
            <button onClick={openPrivacyModal} className="transition-colors hover:text-primary-foreground/60">Privacidad</button>
            <span>·</span>
            <button onClick={openCookieModal} className="transition-colors hover:text-primary-foreground/60">Cookies</button>
            <span>·</span>
            <button className="transition-colors hover:text-primary-foreground/60">Aviso legal</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
