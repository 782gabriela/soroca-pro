import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoSoroca from "@/assets/logo-soroca-new.jpeg";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useTranslation } from "@/i18n/context";

const Footer = () => {
  const { openCookieModal, openPrivacyModal } = useCookieConsent();
  const { t } = useTranslation();

  return (
    <footer className="glass-dark py-12 text-primary-foreground/70">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-xl shadow-md">
                <img src={logoSoroca} alt="Grupo Soroca" className="h-full w-full object-cover" />
              </div>
              <span className="font-display text-lg font-bold text-primary-foreground">Grupo Soroca</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-primary-foreground/50">{t.footer.desc}</p>
          </div>

          <div>
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">{t.footer.horario}</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/50">
              <li><span className="font-medium text-primary-foreground/70">{t.footer.lunesViernes}</span><br />8:00 - 18:00</li>
              <li><span className="font-medium text-primary-foreground/70">{t.footer.sabDom}</span><br />{t.footer.cerrado}</li>
              <li><span className="font-medium text-primary-foreground/70">{t.footer.urgencias24h}</span><br />{t.footer.dias365}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">{t.footer.contacto}</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/50">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><a href="tel:+34655020020" className="transition-colors hover:text-primary-foreground">655 020 020</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /><a href="mailto:info@soroca.es" className="transition-colors hover:text-primary-foreground">info@soroca.es</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>Gran Alacant, Alicante</span></li>
            </ul>
            <p className="mt-5 font-body text-xs leading-relaxed text-primary-foreground/40">{t.footer.followSocial}</p>
            <div className="mt-3 flex items-center gap-3">
              <a href="https://www.instagram.com/soroca_proyectos/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/50 transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-md hover:shadow-primary/20" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/Soroca/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/50 transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-md hover:shadow-primary/20" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/8 pt-6 sm:flex-row">
          <p className="font-body text-xs text-primary-foreground/30">{t.footer.copyright}</p>
          <div className="flex gap-4 font-body text-xs text-primary-foreground/30">
            <button onClick={openPrivacyModal} className="transition-colors hover:text-primary-foreground/50">{t.footer.privacidad}</button>
            <span className="text-primary-foreground/15">·</span>
            <button onClick={openCookieModal} className="transition-colors hover:text-primary-foreground/50">{t.footer.cookies}</button>
            <span className="text-primary-foreground/15">·</span>
            <button className="transition-colors hover:text-primary-foreground/50">{t.footer.avisoLegal}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
