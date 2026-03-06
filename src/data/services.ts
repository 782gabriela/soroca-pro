import {
  Droplets,
  Paintbrush,
  Zap,
  KeyRound,
  Construction,
  ArrowUpFromLine,
  Wind,
  type LucideIcon,
} from "lucide-react";

import fontaneriaImg from "@/assets/services/fontaneria.jpg";
import pinturaImg from "@/assets/services/pintura.jpg";
import electricidadImg from "@/assets/services/electricidad.jpg";
import cerrajeriaImg from "@/assets/services/cerrajeria.jpg";
import carpinteriaImg from "@/assets/services/carpinteria-metalica.jpg";
import ascensoresImg from "@/assets/services/ascensores.jpg";
import aireImg from "@/assets/services/aire-acondicionado.jpg";

export interface ServiceData {
  icon: LucideIcon;
  name: string;
  slug: string;
  desc: string;
  longDesc: string;
  features: string[];
  image: string;
}

export const services: ServiceData[] = [
  {
    icon: Droplets,
    name: "Fontanería",
    slug: "fontaneria",
    desc: "Reparaciones, instalaciones y detección de fugas",
    image: fontaneriaImg,
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
    icon: Paintbrush,
    name: "Pintura y decoración",
    slug: "pintura-decoracion",
    desc: "Interior, exterior y acabados decorativos",
    image: pinturaImg,
    longDesc:
      "Servicios profesionales de pintura y decoración interior y exterior. Preparamos las superficies adecuadamente y utilizamos materiales de primera calidad para un acabado impecable y duradero.",
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
    icon: Zap,
    name: "Electricidad",
    slug: "electricidad",
    desc: "Instalaciones, averías y certificados",
    image: electricidadImg,
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
    icon: KeyRound,
    name: "Cerrajería",
    slug: "cerrajeria",
    desc: "Apertura, instalación y reparación de cerraduras",
    image: cerrajeriaImg,
    longDesc:
      "Servicio profesional de cerrajería para viviendas, comunidades y negocios. Aperturas de emergencia, cambio de cerraduras, instalación de sistemas de seguridad y cerraduras electrónicas.",
    features: [
      "Apertura de puertas de emergencia",
      "Cambio e instalación de cerraduras",
      "Cerraduras de seguridad y antibumping",
      "Cerraduras electrónicas y digitales",
      "Copia de llaves y amaestramiento",
      "Puertas blindadas y acorazadas",
    ],
  },
  {
    icon: Construction,
    name: "Carpintería metálica",
    slug: "carpinteria-metalica",
    desc: "Ventanas, puertas, rejas y estructuras metálicas",
    image: carpinteriaImg,
    longDesc:
      "Fabricación e instalación de carpintería metálica y de aluminio. Ventanas, puertas, barandillas, rejas, cerramientos y todo tipo de estructuras metálicas a medida con acabados de alta calidad.",
    features: [
      "Ventanas y puertas de aluminio",
      "Barandillas y pasamanos",
      "Rejas y cerramientos de seguridad",
      "Persianas y mosquiteras",
      "Cerramientos de terrazas y balcones",
      "Estructuras metálicas a medida",
    ],
  },
  {
    icon: ArrowUpFromLine,
    name: "Ascensores y elevadores",
    slug: "ascensores-elevadores",
    desc: "Instalación, mantenimiento y modernización",
    image: ascensoresImg,
    longDesc:
      "Servicio integral de ascensores y elevadores: instalación de nuevos equipos, mantenimiento preventivo y correctivo, modernización de ascensores antiguos y cumplimiento de normativa vigente.",
    features: [
      "Instalación de ascensores nuevos",
      "Mantenimiento preventivo y correctivo",
      "Modernización de ascensores existentes",
      "Salvaescaleras y plataformas elevadoras",
      "Cumplimiento normativo y certificaciones",
      "Servicio de emergencia 24h",
    ],
  },
  {
    icon: Wind,
    name: "Aire acondicionado",
    slug: "aire-acondicionado",
    desc: "Instalación, reparación y mantenimiento de climatización",
    image: aireImg,
    longDesc:
      "Instalación y mantenimiento de sistemas de aire acondicionado y climatización para viviendas, comunidades y locales comerciales. Trabajamos con las mejores marcas y ofrecemos soluciones energéticamente eficientes.",
    features: [
      "Instalación de splits y multisplits",
      "Aire acondicionado por conductos",
      "Mantenimiento y limpieza de equipos",
      "Reparación de averías",
      "Sistemas de climatización centralizada",
      "Soluciones de eficiencia energética",
    ],
  },
];
