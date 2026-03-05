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
          Soroca Proyectos y Construcciones S.L. — Última actualización: 05/03/2026
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="max-h-[60vh] px-8 pb-8">
        <div className="space-y-4 text-sm leading-relaxed text-foreground/80">

          <h3 className="pt-2 text-base font-semibold text-foreground">1. Identidad del responsable del tratamiento</h3>
          <p>El responsable del tratamiento de los datos personales recabados a través de este sitio web es:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Responsable:</strong> Soroca Proyectos y Construcciones S.L. (en adelante, "SOROCA")</li>
            <li><strong>Domicilio:</strong> Gran Alacant, Alicante</li>
            <li><strong>Correo electrónico:</strong> info@soroca.com</li>
            <li><strong>Teléfono:</strong> 655 020 020</li>
          </ul>

          <h3 className="pt-2 text-base font-semibold text-foreground">2. Datos personales que tratamos</h3>
          <p>En función del uso que hagas del sitio web y de los canales de contacto, SOROCA podrá tratar:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Datos identificativos:</strong> nombre y apellidos.</li>
            <li><strong>Datos de contacto:</strong> teléfono y correo electrónico.</li>
            <li><strong>Datos del servicio solicitado:</strong> servicio de interés, zona/ubicación, descripción de la solicitud.</li>
            <li><strong>Documentación aportada:</strong> fotografías u otros archivos que decidas adjuntar voluntariamente.</li>
            <li><strong>Datos de comunicaciones:</strong> contenido de mensajes enviados por formularios, email, WhatsApp o llamadas.</li>
          </ul>
          <p>SOROCA no solicita datos especialmente protegidos. Si el usuario los incluye voluntariamente, se tratarán únicamente para gestionar la solicitud.</p>

          <h3 className="pt-2 text-base font-semibold text-foreground">3. Finalidades del tratamiento</h3>
          <p>Tus datos se tratarán para:</p>
          <ul className="list-[lower-alpha] pl-5 space-y-1">
            <li><strong>Gestionar solicitudes de presupuesto:</strong> tramitar tu petición, contactarte y elaborar/enviar una propuesta.</li>
            <li><strong>Atender consultas:</strong> responder a solicitudes enviadas por formulario, email, teléfono o WhatsApp.</li>
            <li><strong>Gestión precontractual y contractual:</strong> si contratas, gestionar planificación, ejecución, seguimiento e incidencias.</li>
            <li><strong>Gestión administrativa y cumplimiento legal:</strong> obligaciones fiscales, contables u otras aplicables.</li>
            <li><strong>Mejora interna y calidad del servicio:</strong> análisis interno para mejorar procesos, sin decisiones automatizadas con efectos jurídicos.</li>
          </ul>

          <h3 className="pt-2 text-base font-semibold text-foreground">4. Base jurídica (legitimación)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tu consentimiento (art. 6.1.a RGPD) al enviar formularios o contactar.</li>
            <li>Medidas precontractuales (art. 6.1.b RGPD) al solicitar presupuesto.</li>
            <li>Ejecución de contrato (art. 6.1.b RGPD) si contratas servicios.</li>
            <li>Cumplimiento de obligaciones legales (art. 6.1.c RGPD).</li>
            <li>Interés legítimo (art. 6.1.f RGPD) para seguridad, prevención de fraude y gestión de reclamaciones (cuando proceda).</li>
          </ul>

          <h3 className="pt-2 text-base font-semibold text-foreground">5. Plazos de conservación</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Solicitudes de presupuesto y consultas:</strong> hasta 12 meses desde la última interacción, salvo relación contractual u obligación legal.</li>
            <li><strong>Servicios contratados:</strong> durante la relación y posteriormente durante los plazos legales aplicables (fiscales/contables, etc.).</li>
            <li><strong>Reclamaciones:</strong> durante el tiempo necesario y los plazos de prescripción.</li>
          </ul>

          <h3 className="pt-2 text-base font-semibold text-foreground">6. Destinatarios y cesiones</h3>
          <p>SOROCA no vende ni cede datos con fines comerciales. Podrán acceder:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Proveedores necesarios (hosting, correo, soporte, herramientas), como encargados del tratamiento bajo contrato RGPD.</li>
            <li>Administraciones públicas/juzgados cuando exista obligación legal.</li>
            <li>Colaboradores/profesionales necesarios para ejecutar el servicio, solo con datos imprescindibles y bajo confidencialidad.</li>
          </ul>

          <h3 className="pt-2 text-base font-semibold text-foreground">7. Transferencias internacionales</h3>
          <p>SOROCA procura usar proveedores en el EEE. Si hubiera proveedores fuera del EEE, se aplicarán garantías adecuadas (p. ej., cláusulas contractuales tipo) conforme al RGPD.</p>

          <h3 className="pt-2 text-base font-semibold text-foreground">8. Comunicaciones por WhatsApp, teléfono y correo</h3>
          <p>Si contactas por WhatsApp/teléfono/email, trataremos los datos para atender tu solicitud y gestionar el presupuesto o servicio. Recomendamos no enviar información innecesaria o sensible.</p>

          <h3 className="pt-2 text-base font-semibold text-foreground">9. Veracidad de los datos</h3>
          <p>El usuario garantiza que los datos aportados son veraces, exactos y actualizados.</p>

          <h3 className="pt-2 text-base font-semibold text-foreground">10. Derechos del usuario</h3>
          <p>Puedes ejercer: acceso, rectificación, supresión, oposición, limitación, portabilidad y retirar el consentimiento.</p>
          <p>Para ejercerlos, escribe a info@soroca.com indicando "Protección de datos" y el derecho que deseas ejercitar. Podremos solicitar acreditación de identidad si fuera necesario.</p>
          <p>Si consideras que tus derechos no han sido atendidos, puedes reclamar ante la Agencia Española de Protección de Datos (AEPD).</p>

          <h3 className="pt-2 text-base font-semibold text-foreground">11. Seguridad</h3>
          <p>SOROCA aplica medidas técnicas y organizativas razonables para proteger los datos frente a pérdida, acceso no autorizado, alteración o divulgación.</p>

          <h3 className="pt-2 text-base font-semibold text-foreground">12. Datos de menores</h3>
          <p>Servicios no dirigidos a menores. Si eres menor de 14 años, no envíes datos sin autorización de tus padres/tutor.</p>

          <h3 className="pt-2 text-base font-semibold text-foreground">13. Cambios en la política</h3>
          <p>SOROCA podrá actualizar esta Política de Privacidad por cambios legales o de servicio. La versión vigente estará publicada en el sitio web.</p>

          <p className="pt-4 text-xs text-muted-foreground">Última actualización: 05/03/2026</p>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export default PrivacyPolicyModal;
