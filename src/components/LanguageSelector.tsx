import { useTranslation, LANGUAGES, type Language } from "@/i18n/context";

interface LanguageSelectorProps {
  className?: string;
  onSelect?: () => void;
}

const LanguageSelector = ({ className = "", onSelect }: LanguageSelectorProps) => {
  const { lang, switchLanguage } = useTranslation();

  const handleSwitch = (code: Language) => {
    if (code === lang) return;
    switchLanguage(code);
    onSelect?.();
  };

  // Show ES when not on Spanish, hide ES when on Spanish
  const buttons = lang === "es"
    ? LANGUAGES // show EN, DE, RU
    : [{ code: "es" as Language, label: "ES" }, ...LANGUAGES.filter((l) => l.code !== lang)];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {buttons.map((l) => (
        <button
          key={l.code}
          onClick={() => handleSwitch(l.code)}
          className={`rounded px-2 py-1 text-xs font-semibold tracking-wide transition-colors ${
            l.code === lang
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
          aria-label={l.label}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
