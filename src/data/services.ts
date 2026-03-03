import {
  Hammer,
  Wrench,
  Zap,
  Droplets,
  ShieldCheck,
  Building,
  Paintbrush,
  Blocks,
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  icon: LucideIcon;
  name: string;
  slug: string;
  desc: string;
  longDesc: string;
  features: string[];
}

export const services: ServiceData[] = [
  {
    icon: Hammer,
    name: "Reformas integrales",
    slug: "reformas-integrales",
    desc: "Cocinas, baños, viviendas completas",
    longDesc:
      "Realizamos reformas integrales de viviendas, locales y comunidades. Nos encargamos de todo el proceso: diseño, demolición, albañilería, instalaciones, acabados y limpieza final. Coordinamos todos los oficios para que tú solo te preocupes de disfrutar el resultado.",
    features: [
      "Reforma completa de cocinas y baños",
      "Redistribución de espacios y tabiquería",
      "Cambio de suelos, alicatados y revestimientos",
      "Instalaciones eléctricas y de fontanería",
      "Carpintería interior y exterior",
      "Pintura y acabados finales",
    ],
  },
  {
    icon: Wrench,
    name: "Mantenimiento",
    slug: "mantenimiento",
    desc: "Preventivo y correctivo para cualquier inmueble",
    longDesc:
      "Ofrecemos servicios de mantenimiento preventivo y correctivo para comunidades de propietarios, viviendas particulares y locales comerciales. Actuamos de forma rápida y eficaz para mantener tus instalaciones en perfecto estado.",
    features: [
      "Mantenimiento preventivo programado",
      "Reparaciones urgentes y correctivas",
      "Revisión de instalaciones comunitarias",
      "Mantenimiento de zonas comunes",
      "Contratos de mantenimiento a medida",
      "Informes periódicos del estado del inmueble",
    ],
  },
  {
    icon: Zap,
    name: "Electricidad",
    slug: "electricidad",
    desc: "Instalaciones, averías y certificados",
    longDesc:
      "Instalaciones eléctricas completas, reparación de averías y emisión de boletines y certificados oficiales. Trabajamos con electricistas cualificados y autorizados para garantizar la seguridad y el cumplimiento normativo.",
    features: [
      "Instalaciones eléctricas nuevas y ampliaciones",
      "Reparación de averías y cortocircuitos",
      "Cuadros eléctricos y automatismos",
      "Boletines y certificados de instalación",
      "Iluminación interior y exterior",
      "Puntos de recarga para vehículos eléctricos",
    ],
  },
  {
    icon: Droplets,
    name: "Fontanería",
    slug: "fontaneria",
    desc: "Reparaciones, instalaciones y detección de fugas",
    longDesc:
      "Servicio completo de fontanería: desde reparaciones puntuales hasta instalaciones completas. Utilizamos tecnología avanzada para la detección de fugas y ofrecemos soluciones duraderas y eficientes.",
    features: [
      "Detección y reparación de fugas",
      "Instalación de sanitarios y griferías",
      "Desatascos y limpieza de tuberías",
      "Instalación de calentadores y calderas",
      "Redes de agua fría y caliente",
      "Sistemas de riego y drenaje",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Impermeabilización",
    slug: "impermeabilizacion",
    desc: "Filtraciones, humedades y soluciones duraderas",
    longDesc:
      "Solucionamos problemas de filtraciones y humedades con tratamientos profesionales y materiales de alta calidad. Diagnosticamos el origen del problema y aplicamos la solución más adecuada para cada caso.",
    features: [
      "Impermeabilización de cubiertas y terrazas",
      "Tratamiento de humedades por capilaridad",
      "Sellado de juntas y fisuras",
      "Membranas impermeabilizantes",
      "Inyecciones de resina",
      "Garantía en todos los trabajos",
    ],
  },
  {
    icon: Building,
    name: "Fachadas y cubiertas",
    slug: "fachadas-cubiertas",
    desc: "Rehabilitación, reparación y aislamiento",
    longDesc:
      "Rehabilitación y reparación de fachadas y cubiertas. Mejoramos el aislamiento térmico, reparamos desperfectos estructurales y devolvemos el aspecto original del edificio cumpliendo toda la normativa vigente.",
    features: [
      "Rehabilitación integral de fachadas",
      "Reparación de cubiertas y tejados",
      "Aislamiento térmico exterior (SATE)",
      "Limpieza y pintura de fachadas",
      "Reparación de cornisas y voladizos",
      "Trabajos en altura con seguridad certificada",
    ],
  },
  {
    icon: Paintbrush,
    name: "Pintura y acabados",
    slug: "pintura-acabados",
    desc: "Interior, exterior y trabajos de detalle",
    longDesc:
      "Servicios profesionales de pintura interior y exterior. Preparamos las superficies adecuadamente y utilizamos pinturas de primera calidad para un acabado impecable y duradero.",
    features: [
      "Pintura interior de viviendas y locales",
      "Pintura exterior y de fachadas",
      "Lacado de puertas y muebles",
      "Tratamientos decorativos especiales",
      "Alisado y preparación de paredes",
      "Aplicación de estucos y microcementos",
    ],
  },
  {
    icon: Blocks,
    name: "Albañilería",
    slug: "albanileria",
    desc: "Reparaciones generales y obra menor",
    longDesc:
      "Trabajos de albañilería de todo tipo: desde pequeñas reparaciones hasta obras de mayor envergadura. Tabiquería, solados, alicatados, revestimientos y cualquier trabajo de obra que necesites.",
    features: [
      "Construcción y demolición de tabiques",
      "Solados y alicatados",
      "Revestimientos de paredes y techos",
      "Reparación de grietas y fisuras",
      "Obras menores y reformas parciales",
      "Trabajos de mampostería y ladrillo",
    ],
  },
];
