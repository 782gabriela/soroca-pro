import { useState, useRef, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Upload,
  X,
  FileImage,
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock,
  ChevronDown,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const SERVICE_OPTIONS = [
  "Fontanería",
  "Pintura y decoración",
  "Electricidad",
  "Cerrajería",
  "Carpintería metálica",
  "Ascensores y elevadores",
  "Aire acondicionado",
  "Otros",
];

const TRUST_ITEMS = [
  "Presupuesto sin compromiso",
  "Equipo profesional (20+ trabajadores)",
  "400+ proyectos finalizados",
  "Servicio en Alicante y provincia",
  "Respuesta rápida",
];

interface BudgetRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

const BudgetRequestModal = ({
  open,
  onOpenChange,
  defaultService,
}: BudgetRequestModalProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultService || "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const allowed = Array.from(newFiles).filter(
      (f) => f.type.startsWith("image/") && f.size <= 10 * 1024 * 1024
    );
    setFiles((prev) => [...prev, ...allowed].slice(0, 5));
  };

  const removeFile = (index: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  const onDragLeave = useCallback(() => setIsDragging(false), []);
  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Introduce tu nombre";
    if (!/^\+?\d{6,15}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Introduce un teléfono válido";
    if (!form.service) errs.service = "Selecciona un servicio";
    if (!form.message.trim()) errs.message = "Describe qué necesitas";
    if (!privacyAccepted) errs.privacy = "Debes aceptar la política de privacidad";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast({
      title: "✅ Solicitud enviada",
      description: "Te contactaremos lo antes posible.",
    });
  };

  const resetAndClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", service: defaultService || "", message: "" });
      setFiles([]);
      setPrivacyAccepted(false);
      setErrors({});
      setScheduleOpen(false);
    }, 300);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={resetAndClose}>
        <DialogContent className="max-h-[90vh] w-[95vw] max-w-4xl overflow-y-auto rounded-2xl border-border/50 p-0 shadow-2xl sm:rounded-2xl">
          {/* Header */}
          <DialogHeader className="border-b border-border/50 px-6 pt-8 pb-6 sm:px-10">
            <DialogTitle className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
              Pide presupuesto sin compromiso
            </DialogTitle>
            <DialogDescription className="mt-1.5 text-sm text-muted-foreground sm:text-base">
              Te respondemos en menos de 24 h
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center gap-4 px-10 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Solicitud enviada
              </h3>
              <p className="max-w-sm text-muted-foreground">
                Hemos recibido tu solicitud. Te contactaremos lo antes posible.
              </p>
              <Button onClick={resetAndClose} className="mt-4 h-12 px-8">
                Cerrar
              </Button>
            </div>
          ) : (
            /* ── Two-column layout ── */
            <div className="grid gap-0 lg:grid-cols-[1fr_340px]">
              {/* ─── LEFT: Form ─── */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5 px-6 py-8 sm:px-10"
                noValidate
              >
                {/* Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="budget-name" className="text-sm font-medium">
                    Nombre y apellidos <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="budget-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={100}
                    className={`h-12 ${errors.name ? "border-destructive" : ""}`}
                    placeholder="Ej.: Antonio García López"
                  />
                  {errors.name && (
                    <p className="text-xs font-medium text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label htmlFor="budget-phone" className="text-sm font-medium">
                    Teléfono <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="budget-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={20}
                    className={`h-12 ${errors.phone ? "border-destructive" : ""}`}
                    placeholder="Ej.: 655 020 020"
                  />
                  {errors.phone && (
                    <p className="text-xs font-medium text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">
                    Servicio <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => {
                      setForm((prev) => ({ ...prev, service: v }));
                      if (errors.service)
                        setErrors((prev) => ({ ...prev, service: "" }));
                    }}
                  >
                    <SelectTrigger
                      className={`h-12 ${errors.service ? "border-destructive" : ""}`}
                    >
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-xs font-medium text-destructive">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="budget-message" className="text-sm font-medium">
                    Cuéntanos qué necesitas{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="budget-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    maxLength={1000}
                    rows={4}
                    className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                    placeholder="Describe brevemente el trabajo que necesitas…"
                  />
                  {errors.message && (
                    <p className="text-xs font-medium text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* File upload */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">
                    Adjuntar fotos{" "}
                    <span className="text-muted-foreground font-normal">
                      (opcional)
                    </span>
                  </Label>
                  <div
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-colors ${
                      isDragging
                        ? "border-primary bg-primary/5"
                        : "border-muted-foreground/25 hover:border-primary/50"
                    }`}
                  >
                    <Upload className="mb-1.5 h-6 w-6 text-muted-foreground" />
                    <p className="text-sm font-medium text-foreground">
                      Arrastra fotos aquí
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Sube 1–5 fotos (máx. 10 MB cada una)
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFiles(e.target.files)}
                    />
                  </div>
                  {files.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {files.map((file, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm"
                        >
                          <FileImage className="h-4 w-4 shrink-0 text-muted-foreground" />
                          <span className="truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(i);
                            }}
                            className="ml-auto text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Privacy */}
                <div className="space-y-1">
                  <div className="flex items-start gap-2.5">
                    <Checkbox
                      id="privacy"
                      checked={privacyAccepted}
                      onCheckedChange={(v) => {
                        setPrivacyAccepted(v === true);
                        if (errors.privacy)
                          setErrors((prev) => ({ ...prev, privacy: "" }));
                      }}
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor="privacy"
                      className="text-sm leading-snug font-normal text-foreground/80"
                    >
                      He leído y acepto la{" "}
                      <button
                        type="button"
                        onClick={() => setPrivacyOpen(true)}
                        className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                      >
                        política de privacidad
                      </button>
                    </Label>
                  </div>
                  {errors.privacy && (
                    <p className="pl-7 text-xs font-medium text-destructive">
                      {errors.privacy}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="space-y-2 pt-2">
                  <Button type="submit" className="h-[52px] w-full text-base font-semibold">
                    Enviar solicitud
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Te contactaremos lo antes posible.
                  </p>
                </div>
              </form>

              {/* ─── RIGHT: Trust & quick contact ─── */}
              <aside className="border-t border-border/50 bg-muted/30 px-6 py-8 sm:px-8 lg:border-t-0 lg:border-l">
                {/* Call */}
                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    También puedes llamarnos
                  </p>
                  <a
                    href="tel:+34655020020"
                    className="flex items-center gap-2 text-lg font-bold text-primary"
                  >
                    <Phone className="h-5 w-5" />
                    655 020 020
                  </a>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-3 h-11 w-full gap-2"
                  >
                    <a href="tel:+34655020020">
                      <Phone className="h-4 w-4" />
                      Llamar ahora
                    </a>
                  </Button>
                </div>

                {/* WhatsApp */}
                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    O escríbenos por WhatsApp
                  </p>
                  <Button
                    asChild
                    className="h-11 w-full gap-2 bg-[hsl(142,70%,40%)] text-white hover:bg-[hsl(142,70%,35%)]"
                  >
                    <a
                      href="https://wa.me/34655020020"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Trust */}
                <div className="mb-6">
                  <ul className="space-y-2.5">
                    {TRUST_ITEMS.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule */}
                <div className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">
                      L–V: 8:00–18:00
                    </span>
                  </div>
                  <Collapsible
                    open={scheduleOpen}
                    onOpenChange={setScheduleOpen}
                  >
                    <CollapsibleTrigger className="mt-2 flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80">
                      {scheduleOpen ? "Ocultar horario" : "Ver horario completo"}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${scheduleOpen ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-3 space-y-2 border-t border-border pt-3">
                        <h4 className="text-base font-bold text-foreground">
                          Horario
                        </h4>
                        <div className="space-y-1 text-sm text-foreground/80">
                          <div className="flex justify-between">
                            <span>Lunes a Viernes</span>
                            <span className="font-medium">8:00 – 18:00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sábados</span>
                            <span className="font-medium text-muted-foreground">
                              Cerrado
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Domingos</span>
                            <span className="font-medium text-muted-foreground">
                              Cerrado
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Servicio de averías: 24 h / 365 días
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </aside>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <PrivacyPolicyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </>
  );
};

export default BudgetRequestModal;
