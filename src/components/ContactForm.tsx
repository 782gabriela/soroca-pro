import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X, FileImage } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    postalCode: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const allowed = Array.from(newFiles).filter((f) =>
      f.type.startsWith("image/") || f.type === "application/pdf"
    );
    setFiles((prev) => [...prev, ...allowed].slice(0, 5));
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.postalCode || !form.phone || !form.message) {
      toast({ title: "Por favor, rellena todos los campos obligatorios.", variant: "destructive" });
      return;
    }
    toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo lo antes posible." });
    setForm({ name: "", email: "", postalCode: "", phone: "", message: "" });
    setFiles([]);
  };

  return (
    <section id="contacto" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Header with accent bar */}
          <div className="mb-8 flex items-start gap-3">
            <div className="mt-1 h-14 w-1 shrink-0 rounded-full bg-primary" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Grupo Soroca
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                Trabajamos para su comodidad
              </h2>
            </div>
          </div>

          <p className="mb-10 text-muted-foreground">
            Cuéntanos en qué podemos asistirte y nos comunicaremos contigo lo más pronto posible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1 */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                name="name"
                placeholder="Nombre y apellidos*"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
                className="h-12"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email*"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={255}
                className="h-12"
              />
            </div>

            {/* Row 2 */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                name="postalCode"
                placeholder="Código postal*"
                value={form.postalCode}
                onChange={handleChange}
                required
                maxLength={10}
                className="h-12"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Teléfono*"
                value={form.phone}
                onChange={handleChange}
                required
                maxLength={20}
                className="h-12"
              />
            </div>

            {/* Message */}
            <Textarea
              name="message"
              placeholder="Mensaje*"
              value={form.message}
              onChange={handleChange}
              required
              maxLength={1000}
              className="min-h-[160px]"
            />

            {/* Drag & Drop */}
            <div
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/30 hover:border-primary/50"
              }`}
            >
              <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
              <p className="text-center font-medium text-foreground">
                Arrastra y suelta archivos aquí
              </p>
              <p className="mt-1 text-sm text-muted-foreground">o</p>
              <button
                type="button"
                className="mt-1 text-sm font-medium text-primary hover:underline"
              >
                Buscar archivos
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>

            {/* File list */}
            {files.length > 0 && (
              <ul className="space-y-2">
                {files.map((file, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-2 text-sm"
                  >
                    <FileImage className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="ml-auto text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
