import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal = ({ open, onOpenChange }: PrivacyPolicyModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-h-[85vh] max-w-2xl rounded-2xl p-0">
      <DialogHeader className="px-8 pt-8 pb-4">
        <DialogTitle className="text-xl font-bold text-foreground">
          Política de Privacidad
        </DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground">
          Grupo Soroca — Última actualización: marzo 2026
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="max-h-[60vh] px-8 pb-8">
        <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos de lo siguiente:
          </p>

          <h3 className="pt-2 text-base font-semibold text-foreground">1. Responsable del tratamiento</h3>
          <p>
            Grupo Soroca, con domicilio en Avenida Noruega 1, Bungalow 21, Urb. Novamar, Gran Alacant, Alicante. Contacto: 655 020 020.
          </p>

          <h3 className="pt-2 text-base font-semibold text-foreground">2. Finalidad del tratamiento</h3>
          <p>
            Los datos personales recogidos a través de este formulario serán utilizados exclusivamente para gestionar su solicitud de presupuesto, responder a sus consultas y, en su caso, prestarle los servicios solicitados.
          </p>

          <h3 className="pt-2 text-base font-semibold text-foreground">3. Legitimación</h3>
          <p>
            La base legal para el tratamiento de sus datos es el consentimiento expreso que nos otorga al marcar la casilla de aceptación y enviar el formulario, así como el interés legítimo en atender sus solicitudes.
          </p>

          <h3 className="pt-2 text-base font-semibold text-foreground">4. Destinatarios</h3>
          <p>
            Sus datos no serán cedidos a terceros, salvo obligación legal o necesidad para la prestación del servicio solicitado.
          </p>

          <h3 className="pt-2 text-base font-semibold text-foreground">5. Derechos</h3>
          <p>
            Usted tiene derecho a acceder, rectificar o suprimir sus datos, así como otros derechos reconocidos en la normativa vigente, dirigiéndose a nuestro domicilio o contactándonos por teléfono.
          </p>

          <h3 className="pt-2 text-base font-semibold text-foreground">6. Conservación</h3>
          <p>
            Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para determinar las posibles responsabilidades derivadas de dicha finalidad.
          </p>

          <h3 className="pt-2 text-base font-semibold text-foreground">7. Seguridad</h3>
          <p>
            Grupo Soroca adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export default PrivacyPolicyModal;
