import {
  Droplets,
  Paintbrush,
  Zap,
  KeyRound,
  Construction,
  ArrowUpFromLine,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import fontaneriaImg from "@/assets/services/fontaneria.jpg";
import pinturaImg from "@/assets/services/pintura.jpg";
import electricidadImg from "@/assets/services/electricidad.jpg";
import cerrajeriaImg from "@/assets/services/cerrajeria.jpg";
import carpinteriaImg from "@/assets/services/carpinteria-metalica.jpg";
import ascensoresImg from "@/assets/services/ascensores.jpg";
import aireImg from "@/assets/services/aire-acondicionado.jpg";
import ferreteriaImg from "@/assets/services/ferreteria.jpg";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  icon: LucideIcon;
  name: string;
  slug: string;
  desc: string;
  intro: string;
  features: string[];
  audience: { label: string; detail: string }[];
  trust: string[];
  process: string[];
  zones: string[];
  faq: FaqItem[];
  cta: string;
  image: string;
  externalUrl?: string;
}

export const services: ServiceData[] = [
  {
    icon: Droplets,
    name: "Fontanería",
    slug: "fontaneria",
    desc: "Reparaciones, instalaciones y detección de fugas",
    image: fontaneriaImg,
    intro:
      "Instalación, reparación y mantenimiento de fontanería para viviendas, comunidades y negocios en **Alicante, Elche, Santa Pola, Gran Alacant y alrededores**, con un trabajo limpio, coordinado y bien rematado.",
    features: [
      "Reparación de fugas, goteos y roturas de tuberías",
      "Sustitución e instalación de grifería, sanitarios y mecanismos de cisterna",
      "Desatascos y revisión de desagües y bajantes",
      "Instalación o cambio de llaves de paso y válvulas",
      "Renovación de tramos de tubería y conexiones (según necesidad)",
      "Fontanería en reformas de baño y cocina",
      "Revisión del estado de la instalación y localización de averías",
    ],
    audience: [
      { label: "Viviendas", detail: "baños, cocinas, averías, sustituciones" },
      { label: "Comunidades", detail: "mantenimiento, bajantes, zonas comunes" },
      { label: "Negocios", detail: "reparaciones, adecuaciones y puesta a punto" },
    ],
    trust: [
      "Más de 15 años de experiencia",
      "Equipo profesional y coordinado",
      "Presupuesto sin compromiso",
      "Orden y limpieza durante la intervención",
    ],
    process: [
      "Nos cuentas lo que necesitas",
      "Revisamos y proponemos la mejor solución",
      "Presupuestamos y planificamos tiempos",
      "Ejecutamos y revisamos el resultado final",
    ],
    zones: ["Alicante", "Elche", "Gran Alacant", "Alrededores"],
    faq: [
      {
        question: "¿Atendéis averías y reparaciones puntuales?",
        answer: "Sí. Atendemos reparaciones puntuales y averías con una solución clara, rápida y bien rematada.",
      },
      {
        question: "¿Trabajáis para comunidades de propietarios?",
        answer: "Sí. Realizamos mantenimiento y reparaciones para comunidades, incluyendo bajantes, zonas comunes y actuaciones en viviendas.",
      },
      {
        question: "¿Hacéis fontanería dentro de reformas de baño y cocina?",
        answer: "Sí. Integramos la fontanería dentro de reformas para dejar la instalación correcta, segura y preparada para el uso diario.",
      },
      {
        question: "¿Podéis cambiar sanitarios o grifería?",
        answer: "Sí. Sustituimos sanitarios y grifería, cuidando los acabados y comprobando el correcto funcionamiento antes de terminar.",
      },
    ],
    cta: "¿Necesitas fontanería? Solicita presupuesto sin compromiso.",
  },
  {
    icon: Paintbrush,
    name: "Pintura y decoración",
    slug: "pintura-decoracion",
    desc: "Interior, exterior y acabados decorativos",
    image: pinturaImg,
    intro:
      "Pintura interior y exterior con acabados cuidados para viviendas, comunidades y negocios en **Alicante, Elche, Santa Pola, Gran Alacant y alrededores**. Trabajamos con protección, orden y un resultado profesional.",
    features: [
      "Pintura interior (paredes, techos, estancias completas)",
      "Pintura exterior (fachadas, patios, terrazas y elementos)",
      "Alisados, masillados y corrección de imperfecciones",
      "Esmaltes en puertas, barandillas y carpinterías",
      "Pinturas específicas (anti-humedad, lavables) según el soporte",
      "Acabados decorativos sencillos (según proyecto)",
    ],
    audience: [
      { label: "Viviendas", detail: "renovar estancias, pintar tras reforma o alquiler" },
      { label: "Comunidades", detail: "portales, escaleras y zonas comunes" },
      { label: "Negocios", detail: "locales, oficinas y mantenimiento estético" },
    ],
    trust: [
      "Más de 15 años de experiencia",
      "Equipo profesional y coordinado",
      "Presupuesto sin compromiso",
      "Trabajo limpio: protección de suelos, marcos y mobiliario",
    ],
    process: [
      "Nos indicas el espacio y el acabado deseado",
      "Revisamos el estado y la preparación necesaria",
      "Presupuestamos y marcamos calendario",
      "Pintamos, repasamos y entregamos el resultado",
    ],
    zones: ["Alicante", "Elche", "Gran Alacant", "Alrededores"],
    faq: [
      {
        question: "¿Protegéis suelos, muebles y marcos antes de pintar?",
        answer: "Sí. Protegemos y cubrimos todo lo necesario para trabajar con orden y dejarlo todo limpio al finalizar.",
      },
      {
        question: "¿Pintáis comunidades (portales, escaleras) y zonas comunes?",
        answer: "Sí. Trabajamos en comunidades organizando la intervención para minimizar molestias y mantener un acabado uniforme.",
      },
      {
        question: "¿Hacéis reparación de grietas y alisado previo?",
        answer: "Sí. Preparamos la superficie (sellado, masilla, lijado y alisado) para que el acabado quede perfecto y duradero.",
      },
      {
        question: "¿Podéis pintar exterior y elementos metálicos?",
        answer: "Sí. Realizamos pintura exterior y esmaltes en elementos metálicos o carpinterías, cuidando la preparación y el remate.",
      },
    ],
    cta: "¿Quieres renovar tu espacio? Solicita presupuesto sin compromiso.",
  },
  {
    icon: Zap,
    name: "Electricidad",
    slug: "electricidad",
    desc: "Instalaciones, averías y certificados",
    image: electricidadImg,
    intro:
      "Instalaciones y reparaciones eléctricas para viviendas, comunidades y negocios en **Alicante, Elche, Santa Pola, Gran Alacant y alrededores**. Intervenciones seguras, ordenadas y con comprobación final.",
    features: [
      "Reparación de averías eléctricas y fallos de suministro",
      "Sustitución/instalación de enchufes, interruptores y puntos de luz",
      "Proyectos de iluminación",
      "Revisión y puesta a punto de cuadros eléctricos (según necesidad)",
      "Renovación parcial de cableado y líneas (si procede)",
      "Instalación de timbres/videoporteros y pequeños equipos",
      "Electricidad en reformas (baños, cocinas, redistribuciones)",
    ],
    audience: [
      { label: "Viviendas", detail: "mejoras, averías, nuevos puntos de luz" },
      { label: "Comunidades", detail: "portales, garajes y zonas comunes" },
      { label: "Negocios", detail: "adecuaciones, mantenimiento e iluminación" },
    ],
    trust: [
      "Más de 15 años de experiencia",
      "Equipo profesional y coordinado",
      "Presupuesto sin compromiso",
      "Verificación final para asegurar que todo funciona correctamente",
    ],
    process: [
      "Nos describes la incidencia o mejora",
      "Revisamos y diagnosticamos",
      "Presupuestamos y planificamos",
      "Ejecutamos y comprobamos el resultado",
    ],
    zones: ["Alicante", "Elche", "Gran Alacant", "Alrededores"],
    faq: [
      {
        question: "¿Podéis añadir puntos de luz y enchufes en una reforma?",
        answer: "Sí. Añadimos y reubicamos puntos eléctricos para que el espacio sea más cómodo, funcional y seguro.",
      },
      {
        question: "¿Revisáis y ordenáis cuadros eléctricos?",
        answer: "Sí. Revisamos el cuadro y lo dejamos correcto y ordenado, verificando protecciones y funcionamiento.",
      },
      {
        question: "¿Atendéis comunidades y zonas comunes?",
        answer: "Sí. Realizamos trabajos en portales, garajes, trasteros y zonas comunes con planificación para reducir molestias.",
      },
      {
        question: "¿Instaláis iluminación interior y exterior?",
        answer: "Sí. Instalamos iluminación interior y exterior, optimizando la distribución y comprobando el correcto funcionamiento.",
      },
    ],
    cta: "¿Necesitas electricidad? Solicita presupuesto sin compromiso.",
  },
  {
    icon: KeyRound,
    name: "Cerrajería",
    slug: "cerrajeria",
    desc: "Apertura, instalación y reparación de cerraduras",
    image: cerrajeriaImg,
    intro:
      "Cerrajería para viviendas, comunidades y negocios en **Alicante, Elche, Santa Pola, Gran Alacant y alrededores**: sustituciones, reparaciones y mantenimiento de accesos con un servicio serio y eficaz.",
    features: [
      "Sustitución de cerraduras, bombines y cilindros",
      "Reparación de puertas, manillas, cerraderos y herrajes",
      "Ajuste de puertas que rozan o no cierran bien",
      "Instalación de cerrojos y refuerzos (según necesidad)",
      "Mantenimiento de accesos en comunidades y locales",
      "Intervenciones por bloqueo y apertura cuando proceda",
    ],
    audience: [
      { label: "Viviendas", detail: "cambios de cerradura, incidencias, ajustes" },
      { label: "Comunidades", detail: "accesos, portales y zonas comunes" },
      { label: "Negocios", detail: "cierres, accesos y mantenimiento" },
    ],
    trust: [
      "Más de 15 años de experiencia",
      "Equipo profesional y coordinado",
      "Presupuesto sin compromiso",
      "Buen remate para que el cierre quede perfecto",
    ],
    process: [
      "Nos cuentas la necesidad",
      "Valoramos la solución más adecuada",
      "Presupuestamos y coordinamos disponibilidad",
      "Intervenimos y verificamos el cierre final",
    ],
    zones: ["Alicante", "Elche", "Gran Alacant", "Alrededores"],
    faq: [
      {
        question: "¿Podéis cambiar bombines y cerraduras por seguridad?",
        answer: "Sí. Cambiamos bombines y cerraduras para mejorar seguridad y dejar el acceso funcionando suave y correcto.",
      },
      {
        question: "¿Ajustáis puertas que no cierran correctamente?",
        answer: "Sí. Ajustamos bisagras, cerraderos y herrajes para que la puerta cierre bien, sin roces ni holguras.",
      },
      {
        question: "¿Trabajáis para comunidades y negocios?",
        answer: "Sí. Atendemos comunidades y negocios, manteniendo accesos y solucionando incidencias con rapidez y orden.",
      },
      {
        question: "¿Reparáis manillas, herrajes y cerraderos?",
        answer: "Sí. Reparamos o sustituimos herrajes y manillas, dejando el conjunto firme y bien alineado.",
      },
    ],
    cta: "¿Necesitas cerrajería? Solicita presupuesto sin compromiso.",
  },
  {
    icon: Construction,
    name: "Carpintería metálica",
    slug: "carpinteria-metalica",
    desc: "Ventanas, puertas, rejas y estructuras metálicas",
    image: carpinteriaImg,
    intro:
      "Fabricación, instalación y reparación de elementos metálicos para viviendas, comunidades y negocios en **Alicante, Elche, Gran Alacant y alrededores**, con soluciones a medida y montaje seguro.",
    features: [
      "Puertas metálicas, rejas y cerramientos (según proyecto)",
      "Barandillas, pasamanos y protecciones",
      "Estructuras y soportes metálicos a medida",
      "Reparaciones y refuerzos (soldadura cuando proceda)",
      "Ajustes y mantenimiento de cierres y anclajes",
      "Coordinación con albañilería y pintura si hace falta",
    ],
    audience: [
      { label: "Viviendas", detail: "rejas, barandillas, cerramientos, mejoras" },
      { label: "Comunidades", detail: "elementos comunes, protecciones, accesos" },
      { label: "Negocios", detail: "cierres, estructuras y adaptaciones" },
    ],
    trust: [
      "Más de 15 años de experiencia",
      "Equipo profesional y coordinado",
      "Presupuesto sin compromiso",
      "Acabados cuidados y montaje responsable",
    ],
    process: [
      "Nos indicas qué necesitas y medidas aproximadas",
      "Proponemos solución a medida",
      "Presupuestamos y definimos plazos",
      "Instalamos y revisamos el resultado final",
    ],
    zones: ["Alicante", "Elche", "Gran Alacant", "Alrededores"],
    faq: [
      {
        question: "¿Hacéis trabajos a medida?",
        answer: "Sí. Realizamos trabajos a medida adaptándonos a medidas, necesidades y tipo de instalación.",
      },
      {
        question: "¿Reparáis y reforzáis elementos existentes?",
        answer: "Sí. Reparamos, reforzamos y dejamos las piezas estables, seguras y bien rematadas.",
      },
      {
        question: "¿Instaláis barandillas y protecciones?",
        answer: "Sí. Instalamos barandillas y protecciones con un anclaje seguro y un acabado cuidado.",
      },
      {
        question: "¿Podéis coordinarlo con pintura o albañilería?",
        answer: "Sí. Coordinamos los trabajos necesarios para que el resultado final quede completo y uniforme.",
      },
    ],
    cta: "¿Necesitas carpintería metálica? Solicita presupuesto sin compromiso.",
  },
  {
    icon: ArrowUpFromLine,
    name: "Ascensores y elevadores",
    slug: "ascensores-elevadores",
    desc: "Instalación, mantenimiento y modernización",
    image: ascensoresImg,
    intro:
      "Soluciones para comunidades y edificios en **Alicante, Elche, Gran Alacant y alrededores**: coordinación de trabajos vinculados a ascensores y elevadores, con planificación, orden y seguimiento.",
    features: [
      "Coordinación de instalación o sustitución (según proyecto)",
      "Adecuación de huecos, cuartos y elementos auxiliares (si procede)",
      "Trabajos de apoyo de albañilería, pintura y remates",
      "Actuaciones complementarias en zonas comunes relacionadas con el proyecto",
      "Seguimiento de tiempos y coordinación con empresa especialista",
    ],
    audience: [
      { label: "Comunidades de propietarios", detail: "" },
      { label: "Edificios residenciales", detail: "y zonas comunes" },
      { label: "Rehabilitaciones", detail: "y mejoras de accesibilidad" },
    ],
    trust: [
      "Más de 15 años de experiencia en rehabilitación y coordinación de oficios",
      "Equipo organizado y seguimiento de obra",
      "Presupuesto sin compromiso",
      "Planificación por fases para minimizar molestias",
    ],
    process: [
      "Revisamos la necesidad y el estado del edificio",
      "Definimos el alcance y coordinamos con especialista",
      "Presupuestamos y planificamos por fases",
      "Ejecutamos apoyos/remates y revisamos el resultado final",
    ],
    zones: ["Alicante", "Elche", "Gran Alacant", "Alrededores"],
    faq: [
      {
        question: "¿Trabajáis con comunidades de propietarios?",
        answer: "Sí. Trabajamos con comunidades gestionando la coordinación y el seguimiento para que el proyecto avance con orden.",
      },
      {
        question: "¿Podéis coordinar albañilería y remates del proyecto?",
        answer: "Sí. Coordinamos albañilería, pintura y remates necesarios para dejar el entorno terminado y bien presentado.",
      },
      {
        question: "¿Gestionáis la planificación con la empresa especialista?",
        answer: "Sí. Organizamos tiempos y fases con la empresa especialista para evitar retrasos y reducir molestias.",
      },
      {
        question: "¿Hacéis rehabilitación de zonas comunes vinculadas?",
        answer: "Sí. Realizamos las actuaciones necesarias en zonas comunes para que el resultado final quede completo y uniforme.",
      },
    ],
    cta: "¿Necesitas asesoramiento para tu comunidad? Solicita presupuesto sin compromiso.",
  },
  {
    icon: Wind,
    name: "Aire acondicionado",
    slug: "aire-acondicionado",
    desc: "Instalación, reparación y mantenimiento de climatización",
    image: aireImg,
    intro:
      "Instalación, sustitución y mantenimiento de aire acondicionado para viviendas, negocios y comunidades en **Alicante, Elche, Gran Alacant y alrededores**, con una instalación cuidada y remates limpios.",
    features: [
      "Instalación o sustitución de equipos (según necesidad)",
      "Mantenimiento y puesta a punto",
      "Revisión de funcionamiento y rendimiento",
      "Limpieza y comprobaciones según el servicio contratado",
      "Canalizaciones, soportes y acabados cuando proceda",
      "Coordinación con albañilería/pintura si hiciera falta",
    ],
    audience: [
      { label: "Viviendas", detail: "confort y mejora de climatización" },
      { label: "Negocios", detail: "climatización de locales y oficinas" },
      { label: "Comunidades", detail: "zonas comunes que requieran climatización" },
    ],
    trust: [
      "Más de 15 años de experiencia",
      "Equipo profesional y coordinado",
      "Presupuesto sin compromiso",
      "Instalación ordenada y prueba final de funcionamiento",
    ],
    process: [
      "Nos indicas el espacio y la necesidad",
      "Revisamos y proponemos la solución adecuada",
      "Presupuestamos y fijamos fecha",
      "Instalamos, probamos y entregamos",
    ],
    zones: ["Alicante", "Elche", "Gran Alacant", "Alrededores"],
    faq: [
      {
        question: "¿Instaláis y sustituís equipos en viviendas y locales?",
        answer: "Sí. Instalamos y sustituimos equipos adaptándonos al espacio y dejando una instalación limpia y bien rematada.",
      },
      {
        question: "¿Hacéis mantenimiento y revisión?",
        answer: "Sí. Realizamos mantenimiento y revisión para asegurar un funcionamiento eficiente y estable.",
      },
      {
        question: "¿Podéis coordinar el trabajo con una reforma?",
        answer: "Sí. Coordinamos la instalación con reformas para que canalizaciones y acabados queden perfectos.",
      },
      {
        question: "¿Trabajáis en Alicante, Elche y Gran Alacant?",
        answer: "Sí. Prestamos servicio en Alicante, Elche, Gran Alacant y alrededores con atención profesional.",
      },
    ],
    cta: "¿Quieres mejorar tu climatización? Solicita presupuesto sin compromiso.",
  },
  {
    icon: Wrench,
    name: "Ferretería",
    slug: "ferreteria",
    desc: "Herramientas, materiales y suministros profesionales",
    image: ferreteriaImg,
    externalUrl: "https://prolift.es/es",
    intro: "",
    features: [],
    audience: [],
    trust: [],
    process: [],
    zones: [],
    faq: [],
    cta: "",
  },
];
