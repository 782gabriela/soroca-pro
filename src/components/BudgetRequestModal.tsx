import { useState, useRef, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Upload, X, FileImage, Phone, MessageCircle, CheckCircle2, Clock, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import { useTranslation } from "@/i18n/context";

interface BudgetRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

const BudgetRequestModal = ({ open, onOpenChange, defaultService }: BudgetRequestModalProps) => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", companyName: "", phone: "", service: defaultService || "", message: "" });

  const isAscensores = defaultService === "Ascensores y elevadores" || form.service === "Ascensores y elevadores";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const allowed = Array.from(newFiles).filter((f) => f.type.startsWith("image/") && f.size <= 10 * 1024 * 1024);
    setFiles((prev) => [...prev, ...allowed].slice(0, 5));
  };

  const removeFile = (index: number) => setFiles((prev) => prev.filter((_, i) => i !== index));
  const onDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); }, []);
  const onDragLeave = useCallback(() => setIsDragging(false), []);
  const onDrop = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = t.budgetModal.errorNombre;
    if (!/^\+?\d{6,15}$/.test(form.phone.replace(/\s/g, ""))) errs.phone = t.budgetModal.errorTelefono;
    if (!form.service) errs.service = t.budgetModal.errorServicio;
    if (!form.message.trim()) errs.message = t.budgetModal.errorMensaje;
    if (!privacyAccepted) errs.privacy = t.budgetModal.errorPrivacidad;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast({ title: t.budgetModal.solicitudEnviadaTitle, description: t.budgetModal.solicitudEnviadaDesc });
  };

  const resetAndClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", companyName: "", phone: "", service: defaultService || "", message: "" });
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
          <DialogHeader className="border-b border-border/50 px-6 pt-8 pb-6 sm:px-10">
            <DialogTitle className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">{t.budgetModal.title}</DialogTitle>
            <DialogDescription className="mt-1.5 text-sm text-muted-foreground sm:text-base">{t.budgetModal.subtitle}</DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 px-10 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"><CheckCircle2 className="h-8 w-8 text-primary" /></div>
              <h3 className="text-xl font-bold text-foreground">{t.budgetModal.solicitudEnviada}</h3>
              <p className="max-w-sm text-muted-foreground">{t.budgetModal.solicitudEnviadaDesc}</p>
              <Button onClick={resetAndClose} className="mt-4 h-12 px-8">{t.budgetModal.cerrar}</Button>
            </div>
          ) : (
            <div className="grid gap-0 lg:grid-cols-[1fr_340px]">
              <form onSubmit={handleSubmit} className="space-y-5 px-6 py-8 sm:px-10" noValidate>
                <div className="space-y-1.5">
                  <Label htmlFor="budget-name" className="text-sm font-medium">{t.budgetModal.nombreLabel} <span className="text-destructive">*</span></Label>
                  <Input id="budget-name" name="name" value={form.name} onChange={handleChange} maxLength={100} className={`h-12 ${errors.name ? "border-destructive" : ""}`} placeholder={t.budgetModal.nombrePlaceholder} />
                  {errors.name && <p className="text-xs font-medium text-destructive">{errors.name}</p>}
                </div>
                {isAscensores && (
                  <div className="space-y-1.5">
                    <Label htmlFor="budget-company" className="text-sm font-medium">Nombre de empresa</Label>
                    <Input id="budget-company" name="companyName" value={form.companyName} onChange={handleChange} maxLength={100} className="h-12" placeholder="Ej.: Ascensores García S.L." />
                  </div>
                )}
                <div className="space-y-1.5">
                  <Label htmlFor="budget-phone" className="text-sm font-medium">{t.budgetModal.telefonoLabel} <span className="text-destructive">*</span></Label>
                  <Input id="budget-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} maxLength={20} className={`h-12 ${errors.phone ? "border-destructive" : ""}`} placeholder={t.budgetModal.telefonoPlaceholder} />
                  {errors.phone && <p className="text-xs font-medium text-destructive">{errors.phone}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{t.budgetModal.servicioLabel} <span className="text-destructive">*</span></Label>
                  <Select value={form.service} onValueChange={(v) => { setForm((prev) => ({ ...prev, service: v })); if (errors.service) setErrors((prev) => ({ ...prev, service: "" })); }}>
                    <SelectTrigger className={`h-12 ${errors.service ? "border-destructive" : ""}`}><SelectValue placeholder={t.budgetModal.servicioPlaceholder} /></SelectTrigger>
                    <SelectContent>{t.budgetModal.serviceOptions.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}</SelectContent>
                  </Select>
                  {errors.service && <p className="text-xs font-medium text-destructive">{errors.service}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="budget-message" className="text-sm font-medium">{t.budgetModal.mensajeLabel} <span className="text-destructive">*</span></Label>
                  <Textarea id="budget-message" name="message" value={form.message} onChange={handleChange} maxLength={1000} rows={4} className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`} placeholder={t.budgetModal.mensajePlaceholder} />
                  {errors.message && <p className="text-xs font-medium text-destructive">{errors.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{t.budgetModal.fotosLabel} <span className="text-muted-foreground font-normal">{t.budgetModal.fotosOpcional}</span></Label>
                  <div onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop} onClick={() => fileInputRef.current?.click()} className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-colors ${isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"}`}>
                    <Upload className="mb-1.5 h-6 w-6 text-muted-foreground" />
                    <p className="text-sm font-medium text-foreground">{t.budgetModal.arrastrarFotos}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{t.budgetModal.subeFotos}</p>
                    <input ref={fileInputRef} type="file" multiple accept="image/*" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
                  </div>
                  {files.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {files.map((file, i) => (
                        <li key={i} className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm">
                          <FileImage className="h-4 w-4 shrink-0 text-muted-foreground" />
                          <span className="truncate">{file.name}</span>
                          <button type="button" onClick={(e) => { e.stopPropagation(); removeFile(i); }} className="ml-auto text-muted-foreground hover:text-destructive"><X className="h-4 w-4" /></button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-start gap-2.5">
                    <Checkbox id="privacy" checked={privacyAccepted} onCheckedChange={(v) => { setPrivacyAccepted(v === true); if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: "" })); }} className="mt-0.5" />
                    <Label htmlFor="privacy" className="text-sm leading-snug font-normal text-foreground/80">
                      {t.budgetModal.privacyText}{" "}
                      <button type="button" onClick={() => setPrivacyOpen(true)} className="font-medium text-primary underline underline-offset-2 hover:text-primary/80">{t.budgetModal.politicaPrivacidad}</button>
                    </Label>
                  </div>
                  {errors.privacy && <p className="pl-7 text-xs font-medium text-destructive">{errors.privacy}</p>}
                </div>
                <div className="space-y-2 pt-2">
                  <Button type="submit" className="h-[52px] w-full text-base font-semibold">{t.budgetModal.enviarSolicitud}</Button>
                  <p className="text-center text-xs text-muted-foreground">{t.budgetModal.contactaremos}</p>
                </div>
              </form>

              <aside className="border-t border-border/50 bg-muted/30 px-6 py-8 sm:px-8 lg:border-t-0 lg:border-l">
                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold text-foreground">{t.budgetModal.llamarnos}</p>
                  <a href="tel:+34959000000" className="flex items-center gap-2 text-lg font-bold text-primary"><Phone className="h-5 w-5" />959 000 000</a>
                  <Button asChild variant="outline" className="mt-3 h-11 w-full gap-2"><a href="tel:+34959000000"><Phone className="h-4 w-4" />{t.budgetModal.llamarAhora}</a></Button>
                </div>
                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold text-foreground">{t.budgetModal.escribirWhatsapp}</p>
                  <Button asChild className="h-11 w-full gap-2 bg-[hsl(142,70%,40%)] text-white hover:bg-[hsl(142,70%,35%)]">
                    <a href="https://wa.me/34959000000" target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" />WhatsApp</a>
                  </Button>
                </div>
                <div className="mb-6">
                  <ul className="space-y-2.5">
                    {t.budgetModal.trustItems.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-primary" /><span className="font-medium text-foreground">L–V: 8:00–14:00</span></div>
                  <Collapsible open={scheduleOpen} onOpenChange={setScheduleOpen}>
                    <CollapsibleTrigger className="mt-2 flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80">
                      {scheduleOpen ? t.budgetModal.horarioLabel : t.budgetModal.verHorario}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${scheduleOpen ? "rotate-180" : ""}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-3 space-y-2 border-t border-border pt-3">
                        <h4 className="text-base font-bold text-foreground">{t.budgetModal.horarioLabel}</h4>
                        <div className="space-y-1 text-sm text-foreground/80">
                          <div className="flex justify-between"><span>{t.budgetModal.lunesJueves}</span><span className="font-medium">8:00 – 14:00</span></div>
                          <div className="flex justify-between"><span>{t.budgetModal.finDeSemana}</span><span className="font-medium text-muted-foreground">{t.budgetModal.cerradoLabel}</span></div>
                        </div>
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
