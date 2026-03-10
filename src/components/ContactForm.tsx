import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X, FileImage } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", postalCode: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const allowed = Array.from(newFiles).filter((f) => f.type.startsWith("image/") || f.type === "application/pdf");
    setFiles((prev) => [...prev, ...allowed].slice(0, 5));
  };

  const removeFile = (index: number) => setFiles((prev) => prev.filter((_, i) => i !== index));
  const onDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); }, []);
  const onDragLeave = useCallback(() => setIsDragging(false), []);
  const onDrop = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.postalCode || !form.phone || !form.message) {
      toast({ title: t.contactForm.toastError, variant: "destructive" });
      return;
    }
    toast({ title: t.contactForm.toastSuccess, description: t.contactForm.toastSuccessDesc });
    setForm({ name: "", email: "", postalCode: "", phone: "", message: "" });
    setFiles([]);
  };

  return (
    <section id="contacto" className="relative bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-start gap-3">
            <div className="mt-1 h-14 w-1 shrink-0 rounded-full bg-gradient-to-b from-primary to-primary/30" />
            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{t.contactForm.badge}</p>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">{t.contactForm.title}</h2>
            </div>
          </div>
          <p className="mb-10 font-body text-muted-foreground">{t.contactForm.subtitle}</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" placeholder={t.contactForm.nombre} value={form.name} onChange={handleChange} required maxLength={100} className="h-12 rounded-xl border-border/50 bg-background font-body" />
              <Input name="email" type="email" placeholder={t.contactForm.email} value={form.email} onChange={handleChange} required maxLength={255} className="h-12 rounded-xl border-border/50 bg-background font-body" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="postalCode" placeholder={t.contactForm.codigoPostal} value={form.postalCode} onChange={handleChange} required maxLength={10} className="h-12 rounded-xl border-border/50 bg-background font-body" />
              <Input name="phone" type="tel" placeholder={t.contactForm.telefono} value={form.phone} onChange={handleChange} required maxLength={20} className="h-12 rounded-xl border-border/50 bg-background font-body" />
            </div>
            <Textarea name="message" placeholder={t.contactForm.mensaje} value={form.message} onChange={handleChange} required maxLength={1000} className="min-h-[160px] rounded-xl border-border/50 bg-background font-body" />
            <div onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop} onClick={() => fileInputRef.current?.click()} className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 transition-all duration-300 ${isDragging ? "border-primary bg-primary/5" : "border-border/50 hover:border-primary/40"}`}>
              <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
              <p className="text-center font-body font-medium text-foreground">{t.contactForm.arrastrar}</p>
              <p className="mt-1 font-body text-sm text-muted-foreground">{t.contactForm.o}</p>
              <button type="button" className="mt-1 font-body text-sm font-medium text-primary hover:underline">{t.contactForm.buscar}</button>
              <input ref={fileInputRef} type="file" multiple accept="image/*,.pdf" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
            </div>
            {files.length > 0 && (
              <ul className="space-y-2">
                {files.map((file, i) => (
                  <li key={i} className="flex items-center gap-2 rounded-xl glass-card px-3 py-2 font-body text-sm">
                    <FileImage className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="truncate">{file.name}</span>
                    <button type="button" onClick={() => removeFile(i)} className="ml-auto text-muted-foreground hover:text-destructive"><X className="h-4 w-4" /></button>
                  </li>
                ))}
              </ul>
            )}
            <Button type="submit" size="lg" className="w-full rounded-full font-body sm:w-auto">{t.contactForm.enviar}</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
