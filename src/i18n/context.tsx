import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { es, type Translations } from "./es";
import { en } from "./en";
import { de } from "./de";
import { ru } from "./ru";
import { ro } from "./ro";

export type Language = "es" | "en" | "de" | "ru" | "ro";

const translationsMap: Record<Language, Translations> = { es, en, de, ru, ro };

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
  { code: "ro", label: "RO" },
];

interface LanguageContextType {
  lang: Language;
  t: Translations;
  localePath: (path: string) => string;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useTranslation = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
};

export const LanguageProvider = ({ language, children }: { language: Language; children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const t = translationsMap[language];

  const localePath = useMemo(
    () => (path: string) => {
      if (language === "es") return path;
      // Ensure path starts with /
      const cleanPath = path.startsWith("/") ? path : `/${path}`;
      return `/${language}${cleanPath}`;
    },
    [language]
  );

  const switchLanguage = (newLang: Language) => {
    const currentPath = location.pathname;
    let basePath = currentPath;

    // Remove current language prefix
    const langPrefixes = ["/en", "/de", "/ru", "/ro"];
    for (const prefix of langPrefixes) {
      if (currentPath === prefix || currentPath.startsWith(prefix + "/")) {
        basePath = currentPath.slice(prefix.length) || "/";
        break;
      }
    }

    const newPath = newLang === "es" ? basePath : `/${newLang}${basePath}`;
    navigate(newPath);
  };

  return (
    <LanguageContext.Provider value={{ lang: language, t, localePath, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

/** Language-aware redirect component for use in route definitions */
export const LocaleNavigate = ({ to }: { to: string }) => {
  const { localePath } = useTranslation();
  return <Navigate to={localePath(to)} replace />;
};
