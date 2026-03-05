import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export interface CookieConsent {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  showBanner: boolean;
  showCookieModal: boolean;
  showPrivacyModal: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveSelection: (consent: Omit<CookieConsent, "necessary">) => void;
  openCookieModal: () => void;
  closeCookieModal: () => void;
  openPrivacyModal: () => void;
  closePrivacyModal: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

export const useCookieConsent = () => {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
};

const STORAGE_KEY = "soroca_cookie_consent";

const readStored = (): CookieConsent | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<CookieConsent | null>(readStored);
  const [showBanner, setShowBanner] = useState(!readStored());
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const persist = useCallback((c: CookieConsent) => {
    setConsent(c);
    setShowBanner(false);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  }, []);

  const acceptAll = useCallback(() => {
    persist({ necessary: true, preferences: true, analytics: true, marketing: true });
    setShowCookieModal(false);
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist({ necessary: true, preferences: false, analytics: false, marketing: false });
    setShowCookieModal(false);
  }, [persist]);

  const saveSelection = useCallback((sel: Omit<CookieConsent, "necessary">) => {
    persist({ necessary: true, ...sel });
    setShowCookieModal(false);
  }, [persist]);

  const openCookieModal = useCallback(() => {
    setShowCookieModal(true);
    setShowBanner(false);
  }, []);

  return (
    <CookieConsentContext.Provider value={{
      consent,
      showBanner,
      showCookieModal,
      showPrivacyModal,
      acceptAll,
      rejectAll,
      saveSelection,
      openCookieModal,
      closeCookieModal: () => setShowCookieModal(false),
      openPrivacyModal: () => setShowPrivacyModal(true),
      closePrivacyModal: () => setShowPrivacyModal(false),
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
