import { Phone, Mail, MapPin } from "lucide-react";
import logoSoroca from "@/assets/logo-soroca.jpeg";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Footer = () => {
  const { openCookieModal, openPrivacyModal } = useCookieConsent();

  return (
    <footer className="bg-soroca-dark py-10 text-primary-foreground/80">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 — Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-9 w-9 overflow-hidden rounded-lg">
                <img src={logoSoroca} alt="Grupo Soroca" className="h-full w-full object-cover" />
              </div>
              <span className="text-base font-bold text-primary-foreground">Grupo Soroca</span>
            </div>
            <p className="mb-2 text-sm leading-relaxed text-primary-foreground/60">
              Reformas, mantenimiento y rehabilitación en la provincia de Alicante.
            </p>
            <p className="text-xs font-medium text-primary-foreground/40">
              Equipo propio · Seriedad · Profesionalidad
            </p>
          </div>

          {/* Column 2 — Schedule */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Horario</h4>
            <ul className="space-y-1.5 text-sm text-primary-foreground/60">
              <li><span className="font-medium text-primary-foreground/80">L–V:</span> 8:00–18:00</li>
              <li><span className="font-medium text-primary-foreground/80">S–D:</span> Cerrado</li>
            </ul>
            <span className="mt-3 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-foreground/80">
              Averías 24h · 365 días
            </span>
          </div>

          {/* Column 3 — Contact + Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Contacto</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+34655020020" className="transition-colors hover:text-primary-foreground">655 020 020</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@soroca.com" className="transition-colors hover:text-primary-foreground">info@soroca.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Gran Alacant (Alicante)</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-4">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Síguenos en redes</p>
              <p className="mb-3 text-xs text-primary-foreground/40">
                Síguenos para ver nuestros trabajos más recientes y avances de obra.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/soroca_proyectos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Grupo Soroca"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:bg-primary/30 hover:text-primary-foreground hover:-translate-y-0.5"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/Soroca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Grupo Soroca"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:bg-primary/30 hover:text-primary-foreground hover:-translate-y-0.5"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/40 sm:flex-row">
          <p>© 2026 Grupo Soroca. Todos los derechos reservados.</p>
          <div className="flex gap-3">
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
