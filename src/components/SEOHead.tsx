import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation, type Language } from "@/i18n/context";

const BASE_URL = "https://gruposoroca.es";
const ALL_LANGS: Language[] = ["es", "en", "de", "ru"];

const SEOHead = () => {
  const { lang } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Remove old hreflang/canonical link tags
    document.querySelectorAll('link[data-seo-i18n]').forEach((el) => el.remove());

    // Compute base path (without lang prefix)
    let basePath = location.pathname;
    const langPrefixes = ["/en", "/de", "/ru"];
    for (const prefix of langPrefixes) {
      if (basePath === prefix || basePath.startsWith(prefix + "/")) {
        basePath = basePath.slice(prefix.length) || "/";
        break;
      }
    }

    // Add canonical
    const canonicalUrl = lang === "es"
      ? `${BASE_URL}${basePath}`
      : `${BASE_URL}/${lang}${basePath}`;
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = canonicalUrl;
    canonical.setAttribute("data-seo-i18n", "true");
    document.head.appendChild(canonical);

    // Add hreflang alternates
    ALL_LANGS.forEach((l) => {
      const href = l === "es"
        ? `${BASE_URL}${basePath}`
        : `${BASE_URL}/${l}${basePath}`;
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = l;
      link.href = href;
      link.setAttribute("data-seo-i18n", "true");
      document.head.appendChild(link);
    });

    // x-default → Spanish
    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = `${BASE_URL}${basePath}`;
    xDefault.setAttribute("data-seo-i18n", "true");
    document.head.appendChild(xDefault);

    // Update html lang attribute
    document.documentElement.lang = lang;
  }, [lang, location.pathname]);

  return null;
};

export default SEOHead;
