import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Lock } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";

/* ── Banner (fixed bottom) ── */
export const CookieBanner = () => {
  const { showBanner, acceptAll, rejectAll, openCookieModal, openPrivacyModal } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 px-4 py-4 shadow-lg backdrop-blur sm:px-6">
      <div className="container mx-auto flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3 text-sm">
          <Shield className="h-5 w-5 shrink-0 text-primary" />
          <span className="font-semibold text-foreground">Cookies</span>
          <span className="text-muted-foreground">·</span>
          <button onClick={openCookieModal} className="font-medium text-primary underline underline-offset-2 hover:text-primary/80">
            Ver cookies
          </button>
          <span className="text-muted-foreground">·</span>
          <button onClick={openPrivacyModal} className="font-medium text-primary underline underline-offset-2 hover:text-primary/80">
            Política de privacidad
          </button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={rejectAll} className="h-10 px-5">
            Rechazar
          </Button>
          <Button size="sm" onClick={acceptAll} className="h-10 px-5">
            Aceptar todas
          </Button>
        </div>
      </div>
    </div>
  );
};

/* ── Cookie detail modal ── */
const CATEGORIES = [
  {
    id: "necessary" as const,
    label: "Necesarias (obligatorias)",
    desc: "Permiten el funcionamiento básico de la web (navegación, seguridad y guardar tu elección de cookies).",
    locked: true,
  },
  {
    id: "preferences" as const,
    label: "Preferencias",
    desc: "Recuerdan tus ajustes (por ejemplo, idioma u opciones de visualización).",
    locked: false,
  },
  {
    id: "analytics" as const,
    label: "Analíticas / medición",
    desc: "Nos ayudan a entender cómo se usa la web para mejorarla.",
    locked: false,
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    desc: "Se usan para medir campañas o mostrar anuncios.",
    locked: false,
  },
];

export const CookieDetailModal = () => {
  const { showCookieModal, closeCookieModal, acceptAll, rejectAll, saveSelection, consent } = useCookieConsent();
  const [prefs, setPrefs] = useState({ preferences: false, analytics: false, marketing: false });

  // Sync toggles when modal opens
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setPrefs({
        preferences: consent?.preferences ?? false,
        analytics: consent?.analytics ?? false,
        marketing: consent?.marketing ?? false,
      });
    } else {
      closeCookieModal();
    }
  };

  return (
    <Dialog open={showCookieModal} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-lg rounded-2xl p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Lock className="h-5 w-5 text-primary" />
            Configuración de cookies
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Elige qué cookies quieres aceptar.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[50vh] px-6">
          <div className="space-y-5 pb-2">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="flex items-start justify-between gap-4 rounded-xl border border-border bg-muted/30 p-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">{cat.label}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{cat.desc}</p>
                </div>
                {cat.locked ? (
                  <span className="mt-0.5 shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Siempre activa</span>
                ) : (
                  <Switch
                    checked={prefs[cat.id as keyof typeof prefs]}
                    onCheckedChange={(v) => setPrefs((p) => ({ ...p, [cat.id]: v }))}
                    className="mt-0.5 shrink-0"
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex flex-col gap-2 border-t border-border px-6 py-4 sm:flex-row sm:justify-end">
          <Button variant="outline" size="sm" className="h-10" onClick={() => { rejectAll(); }}>
            Rechazar todas
          </Button>
          <Button variant="outline" size="sm" className="h-10" onClick={() => { saveSelection(prefs); }}>
            Guardar selección
          </Button>
          <Button size="sm" className="h-10" onClick={() => { acceptAll(); }}>
            Aceptar todas
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* ── Privacy modal triggered from cookie banner ── */
export const CookiePrivacyModal = () => {
  const { showPrivacyModal, closePrivacyModal } = useCookieConsent();
  return <PrivacyPolicyModal open={showPrivacyModal} onOpenChange={closePrivacyModal} />;
};
