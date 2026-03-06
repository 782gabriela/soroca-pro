import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoSoroca from "@/assets/logo-soroca.jpeg";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useTranslation } from "@/i18n/context";

const Footer = () => {
  const { openCookieModal, openPrivacyModal } = useCookieConsent();
  const { t } = useTranslation();

  return (
    <footer className="bg-soroca-dark py-10 text-primary-foreground/80">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-9 w-9 overflow-hidden rounded-lg">
                <img src={logoSoroca} alt="Grupo Soroca" className="h-full w-full object-cover" />
              </div>
              <span className="text-base font-bold text-primary-foreground">Grupo Soroca</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">{t.footer.desc}</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">{t.footer.horario}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><span className="font-medium text-primary-foreground/80">{t.footer.lunesViernes}</span><br />8:00 - 18:00</li>
              <li><span className="font-medium text-primary-foreground/80">{t.footer.sabDom}</span><br />{t.footer.cerrado}</li>
              <li><span className="font-medium text-primary-foreground/80">{t.footer.urgencias24h}</span><br />{t.footer.dias365}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">{t.footer.contacto}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><a href="tel:+34655020020" className="transition-colors hover:text-primary-foreground">655 020 020</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /><a href="mailto:info@soroca.es" className="transition-colors hover:text-primary-foreground">info@soroca.es</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>Gran Alacant, Alicante</span></li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-primary-foreground/50">{t.footer.followSocial}</p>
            <div className="mt-3 flex items-center gap-4">
              <a href="https://www.instagram.com/soroca_proyectos/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/60 transition-colors hover:border-primary/60 hover:text-primary" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
              <a href="https://www.facebook.com/Soroca/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/60 transition-colors hover:border-primary/60 hover:text-primary" aria-label="Facebook"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">{t.footer.copyright}</p>
          <div className="flex gap-4 text-xs text-primary-foreground/40">
            <button onClick={openPrivacyModal} className="transition-colors hover:text-primary-foreground/60">{t.footer.privacidad}</button>
            <span className="text-primary-foreground/20">·</span>
            <button onClick={openCookieModal} className="transition-colors hover:text-primary-foreground/60">{t.footer.cookies}</button>
            <span className="text-primary-foreground/20">·</span>
            <button className="transition-colors hover:text-primary-foreground/60">{t.footer.avisoLegal}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
