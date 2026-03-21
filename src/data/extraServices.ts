import {
  Building2,
  Building,
  Waves,
  Home,
  Hammer,
  Landmark,
  Wrench,
  Zap,
  Smartphone,
  Shield,
  Compass,
  Droplets,
  ArrowUp,
  type LucideIcon,
} from "lucide-react";

import pilaresImg from "@/assets/services/rehabilitacion-pilares.jpg";
import fachadasImg from "@/assets/services/fachadas.jpg";
import piscinasImg from "@/assets/services/piscinas.jpg";
import cubiertasImg from "@/assets/services/cubiertas.jpg";
import reformasIntegralesImg from "@/assets/services/reformas-integrales.jpg";
import albanileriaImgV2 from "@/assets/services/albanileria-v2.jpg";
import electricidadMantenimientoImgV2 from "@/assets/services/electricidad-mantenimiento-v2.jpg";
import fugasAguaImgV2 from "@/assets/services/fugas-agua-v2.jpg";
import domoticaImg from "@/assets/services/domotica.jpg";
import impermeabilizacionesImg from "@/assets/services/impermeabilizaciones.jpg";
import arquitecturaImg from "@/assets/services/arquitectura.jpg";

import trabajosVerticalesImg from "@/assets/services/trabajos-verticales.jpg";

export interface ExtraMenuGroup {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

export const extraMenuGroups: ExtraMenuGroup[] = [
  {
    label: "Rehabilitaciones",
    children: [
      { label: "Pilares", path: "/rehabilitaciones/pilares" },
      { label: "Fachadas", path: "/rehabilitaciones/fachadas" },
      { label: "Piscinas", path: "/rehabilitaciones/piscinas" },
      { label: "Cubiertas", path: "/rehabilitaciones/cubiertas" },
    ],
  },
  {
    label: "Reformas",
    children: [
      { label: "Reformas Integrales", path: "/reformas/reformas-integrales" },
    ],
  },
  
  { label: "Albañilería", path: "/albanileria" },
  {
    label: "Electricidad",
    children: [
      { label: "Instalación y Mantenimiento", path: "/electricidad/instalacion-y-mantenimiento" },
      { label: "Domótica", path: "/electricidad/domotica" },
    ],
  },
  { label: "Impermeabilizaciones", path: "/impermeabilizaciones" },
  { label: "Servicios de Arquitectura", path: "/servicios-de-arquitectura" },
  { label: "Fugas de Agua", path: "/fugas-de-agua" },
  { label: "Trabajos Verticales", path: "/trabajos-verticales" },
];

export type ContentBlock =
  | { type: "location"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "highlights"; items: { title: string; desc: string }[] };

export interface ExtraServiceData {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  desc: string;
  image?: string;
  content: ContentBlock[];
}

export const extraServices: ExtraServiceData[] = [
  // ========== REHABILITACIONES ==========
  {
    path: "/rehabilitaciones/pilares",
    title: "Rehabilitación de pilares",
    metaTitle: "Rehabilitación de pilares | Grupo Soroca",
    metaDescription: "Servicios especializados en reparación de estructuras y pilares en edificios y viviendas. Soroca Proyectos Y Construcciones S.L.",
    icon: Building2,
    image: pilaresImg,
    desc: "Reparación de estructuras y pilares en edificios",
    content: [
      { type: "location", text: "en Gran Alacant" },
      { type: "h2", text: "Rehabilitación de pilares" },
      { type: "p", text: "En Soroca Proyectos Y Construcciones S.L, nos enorgullece ofrecer servicios especializados en la reparación de estructuras y pilares en edificios y viviendas. Con años de experiencia en el sector de la construcción, nos hemos establecido como líderes en el mercado gracias a nuestra dedicación a la excelencia, la calidad y la seguridad en cada proyecto que llevamos a cabo." },
      { type: "h3", text: "Nuestra Misión" },
      { type: "p", text: "Nuestra misión es proporcionar soluciones integrales y eficaces para la reparación de estructuras y pilares, asegurando la estabilidad y durabilidad de los edificios y viviendas en los que trabajamos. Nos comprometemos a ofrecer un servicio personalizado, basado en la atención al detalle y la profesionalidad, para satisfacer las necesidades específicas de cada cliente." },
      { type: "h3", text: "Equipo Profesional" },
      { type: "p", text: "Contamos con un equipo de profesionales altamente cualificados y experimentados en el campo de la construcción. Nuestros ingenieros, arquitectos y técnicos trabajan en estrecha colaboración para llevar a cabo evaluaciones exhaustivas y desarrollar soluciones innovadoras para cada proyecto." },
      { type: "h3", text: "Servicios Ofrecidos" },
      { type: "p", text: "En Soroca Proyectos Y Construcciones S.L, ofrecemos una amplia gama de servicios de reparación de estructuras y pilares, que incluyen:" },
      { type: "list", items: [
        "Evaluación y diagnóstico de la condición estructural.",
        "Reparación de grietas, fisuras y daños en pilares y vigas.",
        "Refuerzo estructural mediante la instalación de nuevos elementos o materiales.",
        "Sustitución y reforzamiento de cimientos y estructuras de soporte.",
        "Rehabilitación de fachadas y elementos estructurales exteriores.",
        "Asesoramiento técnico y seguimiento continuo durante todo el proceso de reparación.",
      ]},
      { type: "h3", text: "Compromiso con la Calidad y la Seguridad" },
      { type: "p", text: "En Soroca Proyectos Y Construcciones S.L, nos comprometemos a cumplir con los más altos estándares de calidad y seguridad en todos nuestros proyectos. Utilizamos materiales de primera calidad y técnicas de construcción avanzadas para garantizar resultados duraderos y resistentes." },
      { type: "highlights", items: [
        { title: "Experiencia y profesionalismo", desc: "Nuestra empresa cuenta con una larga trayectoria en el campo de la construcción, respaldada por un equipo de profesionales altamente calificados y comprometidos con la excelencia en cada proyecto." },
        { title: "Calidad y atención al detalle", desc: "Nos dedicamos a ofrecer resultados de la más alta calidad, prestando especial atención a cada detalle para garantizar la satisfacción de nuestros clientes y la durabilidad de nuestras construcciones." },
        { title: "Innovación y tecnología", desc: "Incorporamos constantemente las últimas innovaciones y tecnologías en nuestros procesos de construcción, lo que nos permite ofrecer soluciones eficientes y vanguardistas que cumplen con los más altos estándares de calidad y sostenibilidad." },
      ]},
      { type: "h2", text: "Mantener la Integridad de los Edificios a Través de la Rehabilitación: Garantía de Seguridad y Eficiencia" },
      { type: "p", text: "La rehabilitación de edificios es esencial para mantener en óptimas condiciones las instalaciones, evitando posibles problemas de seguridad y daños estructurales. Además, contribuye a preservar la habitabilidad de las áreas comunes, mejorando la accesibilidad a la propiedad y logrando un mayor ahorro energético y eficiencia en el edificio." },
      { type: "p", text: "En el ámbito de la rehabilitación y restauración de edificios, el mantenimiento adecuado de la fachada, la renovación de los espacios comunes, la rehabilitación de techos o la realización de un mantenimiento periódico en las instalaciones son solo algunas de las labores más comunes y necesarias que deben acometerse en cualquier edificio." },
      { type: "p", text: "Asimismo, si se identifican problemas de mayor envergadura que puedan conllevar daños estructurales, es fundamental abordarlos de inmediato. Entre los problemas más habituales se encuentran las filtraciones de humedad, la carbonatación de las vigas, la reparación de techos, la restauración de forjados o el tratamiento de la aluminosis." },
      { type: "p", text: "En Grupo Soroca, entendemos la importancia de la rehabilitación como un componente crucial para preservar la seguridad y la funcionalidad de los edificios. Nuestro equipo de profesionales altamente capacitados se compromete a abordar cada proyecto con precisión y dedicación, garantizando la ejecución de trabajos de rehabilitación que cumplen con los más altos estándares de calidad y seguridad." },
      { type: "h2", text: "Grupo Soroca: Expertos en Rehabilitación Integral de Edificios" },
      { type: "p", text: "La rehabilitación de edificios es una labor crucial que requiere la intervención de profesionales altamente capacitados. En Grupo Soroca, contamos con el equipo idóneo para abordar estos desafíos. Entre los trabajos esenciales que conforman la rehabilitación y restauración de edificios, destacan:" },
      { type: "highlights", items: [
        { title: "Rehabilitación y Restauración de Fachadas", desc: "La renovación y el mantenimiento, así como la conservación de la impermeabilidad de las fachadas son tareas fundamentales para preservar la estética y la integridad estructural de los edificios." },
        { title: "Impermeabilización de Cubiertas y Techos", desc: "La impermeabilización efectiva es crucial para prevenir filtraciones y daños en los forjados, y asegurar la durabilidad de techos y cubiertas." },
        { title: "Rehabilitación y Refuerzo de Estructuras", desc: "La intervención en las estructuras es vital para garantizar la seguridad y solidez de los edificios, fortaleciendo y restaurando su estabilidad." },
        { title: "Redes de Saneamiento (Horizontales y Verticales)", desc: "La rehabilitación de las redes de saneamiento, tanto horizontales como verticales, es esencial para mantener la funcionalidad y prevenir problemas sanitarios en los edificios." },
      ]},
      { type: "p", text: "En Grupo Soroca, nos comprometemos a ofrecer servicios de rehabilitación integral, garantizando la excelencia en cada etapa del proceso. Contamos con la experiencia y los recursos necesarios para llevar a cabo proyectos de rehabilitación de edificios, asegurando resultados de calidad que cumplen con los estándares más exigentes del sector." },
    ],
  },
  {
    path: "/rehabilitaciones/fachadas",
    title: "FACHADAS - Rehabilitación de edificios y fachadas",
    metaTitle: "Rehabilitación de fachadas | Grupo Soroca",
    metaDescription: "Rehabilitación de edificios y fachadas para asegurar óptimas condiciones. Mantenimiento, restauración y rehabilitación con los mejores estándares de calidad.",
    icon: Building,
    image: fachadasImg,
    desc: "Rehabilitación de edificios y fachadas",
    content: [
      { type: "p", text: "La rehabilitación de edificios y fachadas es fundamental para asegurar que un inmueble se mantenga en óptimas condiciones y envejezca de manera natural. Este proceso evita daños más severos que podrían desencadenar problemas estructurales a lo largo del tiempo. Por consiguiente, el mantenimiento, la restauración y la rehabilitación de edificios y fachadas son acciones inevitables que deben llevarse a cabo en algún momento en cualquier construcción." },
      { type: "p", text: "En Grupo Soroca, entendemos la importancia de preservar la integridad de los edificios, razón por la cual nos especializamos en la ejecución de labores de mantenimiento y rehabilitación de fachadas y edificios. Nuestro compromiso se basa en ofrecer los mejores estándares de calidad a precios competitivos, garantizando la durabilidad y el buen estado de las estructuras que intervenimos." },
      { type: "p", text: "La conservación y restauración de fachadas no solo preservan la estética del edificio, sino que también aseguran su funcionalidad y durabilidad a lo largo de los años. En Grupo Soroca, contamos con un equipo experto y cualificado, capaz de llevar a cabo procesos de rehabilitación con el máximo cuidado y compromiso, asegurando resultados que superen las expectativas de nuestros clientes." },
      { type: "highlights", items: [
        { title: "los mejores profesionales", desc: "" },
        { title: "Garantía de Servicio", desc: "" },
        { title: "Valor añadido", desc: "" },
      ]},
      { type: "h2", text: "Mantener la Integridad de los Edificios a Través de la Rehabilitación: Garantía de Seguridad y Eficiencia" },
      { type: "p", text: "La rehabilitación de edificios es esencial para mantener en óptimas condiciones las instalaciones, evitando posibles problemas de seguridad y daños estructurales. Además, contribuye a preservar la habitabilidad de las áreas comunes, mejorando la accesibilidad a la propiedad y logrando un mayor ahorro energético y eficiencia en el edificio." },
      { type: "p", text: "En el ámbito de la rehabilitación y restauración de edificios, el mantenimiento adecuado de la fachada, la renovación de los espacios comunes, la rehabilitación de techos o la realización de un mantenimiento periódico en las instalaciones son solo algunas de las labores más comunes y necesarias que deben acometerse en cualquier edificio." },
      { type: "p", text: "Asimismo, si se identifican problemas de mayor envergadura que puedan conllevar daños estructurales, es fundamental abordarlos de inmediato. Entre los problemas más habituales se encuentran las filtraciones de humedad, la carbonatación de las vigas, la reparación de techos, la restauración de forjados o el tratamiento de la aluminosis." },
      { type: "p", text: "En Grupo Soroca, entendemos la importancia de la rehabilitación como un componente crucial para preservar la seguridad y la funcionalidad de los edificios. Nuestro equipo de profesionales altamente capacitados se compromete a abordar cada proyecto con precisión y dedicación, garantizando la ejecución de trabajos de rehabilitación que cumplen con los más altos estándares de calidad y seguridad." },
      { type: "h2", text: "Grupo Soroca: Expertos en Rehabilitación Integral de Edificios" },
      { type: "p", text: "La rehabilitación de edificios es una labor crucial que requiere la intervención de profesionales altamente capacitados. En Grupo Soroca, contamos con el equipo idóneo para abordar estos desafíos. Entre los trabajos esenciales que conforman la rehabilitación y restauración de edificios, destacan:" },
      { type: "highlights", items: [
        { title: "Rehabilitación y Restauración de Fachadas", desc: "La renovación y el mantenimiento, así como la conservación de la impermeabilidad de las fachadas son tareas fundamentales para preservar la estética y la integridad estructural de los edificios." },
        { title: "Impermeabilización de Cubiertas y Techos", desc: "La impermeabilización efectiva es crucial para prevenir filtraciones y daños en los forjados, y asegurar la durabilidad de techos y cubiertas." },
        { title: "Rehabilitación y Refuerzo de Estructuras", desc: "La intervención en las estructuras es vital para garantizar la seguridad y solidez de los edificios, fortaleciendo y restaurando su estabilidad." },
        { title: "Redes de Saneamiento (Horizontales y Verticales)", desc: "La rehabilitación de las redes de saneamiento, tanto horizontales como verticales, es esencial para mantener la funcionalidad y prevenir problemas sanitarios en los edificios." },
      ]},
      { type: "p", text: "En Grupo Soroca, nos comprometemos a ofrecer servicios de rehabilitación integral, garantizando la excelencia en cada etapa del proceso. Contamos con la experiencia y los recursos necesarios para llevar a cabo proyectos de rehabilitación de edificios, asegurando resultados de calidad que cumplen con los estándares más exigentes del sector." },
    ],
  },
  {
    path: "/rehabilitaciones/piscinas",
    title: "PISCINAS - Rehabilitación de piscinas",
    metaTitle: "Rehabilitación de piscinas | Grupo Soroca",
    metaDescription: "Servicios profesionales de rehabilitación y mantenimiento de piscinas. Soroca S.L., empresa especializada en revitalización de piscinas.",
    icon: Waves,
    image: piscinasImg,
    desc: "Rehabilitación y mantenimiento de piscinas",
    content: [
      { type: "h3", text: "Reforma piscina" },
      { type: "p", text: "En Soroca S.L., somos una Empresa de rehabilitación de piscinas dedicada a ofrecer servicios profesionales de rehabilitación y mantenimiento para piscinas. Nuestro equipo de expertos en piscinas está comprometido en brindarle una experiencia de primera clase en la revitalización y el cuidado de su piscina." },
      { type: "p", text: "Rehabilitar una piscina es un proceso crucial para mantener su piscina en óptimas condiciones de uso. Una piscina puede sufrir daños con el tiempo debido a la exposición a factores externos como el clima, los productos químicos y el desgaste general. Con nuestros servicios de rehabilitación, le garantizamos que su piscina será restaurada a los más altos estándares de calidad, brindándole un entorno seguro y placentero para relajarse y disfrutar." },
      { type: "h3", text: "Razones por las que se debe rehabilitar una piscina" },
      { type: "p", text: "Hay varias razones por las que se debe rehabilitar una piscina, y estamos aquí para ayudarlo a comprender la importancia de este proceso. El primero y más importante motivo es el aumento de la seguridad en piscinas. Una piscina bien mantenida y rehabilitada correctamente reduce el riesgo de accidentes y incidentes relacionados con la seguridad, brindándole la tranquilidad y comodidad necesarias al usar la piscina." },
      { type: "p", text: "Además de la seguridad, cambio de diseño es otro aspecto importante de la rehabilitación de una piscina. Le ofrecemos la posibilidad de cambiar el aspecto y diseño de su piscina, dándole un aspecto fresco y moderno que se adapte perfectamente a su estilo y mejore el aspecto general de su propiedad." },
      { type: "p", text: "Otro gran beneficio de la rehabilitación de una piscina es prolongar la vida útil de la piscina. Al reemplazar y reparar los componentes desgastados o dañados, le ayudamos a prolongar la vida útil de su piscina, ahorrándole dinero a largo plazo y evitando los costos elevados asociados con reemplazar completamente una piscina." },
      { type: "p", text: "Cuando considerar cuándo rehabilitar una piscina, es importante tener en cuenta el estado actual de su piscina. Si nota grietas, fugas, corrosión o cualquier otro signo de deterioro, es crucial actuar de inmediato para evitar daños mayores y costos adicionales." },
      { type: "p", text: "En cuanto al rehabilitar piscina precio, es importante entender que el precio puede variar dependiendo del alcance de los trabajos necesarios. No obstante, el precio de rehabilitar una piscina unifamiliar media en Gran Alacant puede variar entre los 10 y los 20.000 €. Nuestro equipo en Soroca S.L. está comprometido en ofrecerle soluciones a medida que se ajusten a sus necesidades y presupuesto" },
      { type: "p", text: "Con nuestra amplia experiencia y enfoque profesional, le garantizamos que su piscina estará en buenas manos. ¡Contáctenos hoy mismo para descubrir cómo podemos ayudarlo a convertir su piscina en un paraíso personal!" },
    ],
  },
  {
    path: "/rehabilitaciones/cubiertas",
    title: "CUBIERTAS - Rehabilitación de cubiertas",
    metaTitle: "Rehabilitación de cubiertas | Grupo Soroca",
    metaDescription: "Servicio integral de rehabilitación de cubiertas. Restauramos y mejoramos la durabilidad, impermeabilidad y eficiencia energética de su edificio.",
    icon: Home,
    image: cubiertasImg,
    desc: "Rehabilitación integral de cubiertas",
    content: [
      { type: "p", text: "En Soroca Proyectos y Construcciones S.L., comprendemos que las cubiertas son una de las partes más cruciales y vulnerables de cualquier edificación. Están constantemente expuestas a las inclemencias del tiempo, como la lluvia, el viento, el sol intenso, y las fluctuaciones de temperatura. Con el tiempo, estas condiciones pueden causar un desgaste significativo, afectando no solo la apariencia de la cubierta, sino también su funcionalidad y la seguridad estructural del edificio." },
      { type: "p", text: "Un mantenimiento adecuado y regular de las cubiertas es fundamental para evitar problemas como filtraciones de agua, daños en los materiales, y la pérdida de eficiencia energética. No se trata solo de preservar la estética del edificio, sino de proteger su integridad estructural y los bienes que alberga en su interior. Sin un cuidado apropiado, las cubiertas pueden convertirse en una fuente de problemas graves, que pueden afectar la seguridad y el confort de los ocupantes." },
      { type: "p", text: "Por esta razón, hemos desarrollado un servicio integral de rehabilitación de cubiertas, diseñado específicamente para restaurar y mejorar la durabilidad, la impermeabilidad y la eficiencia energética de su edificio. Nos aseguramos de que cada proyecto sea ejecutado con los más altos estándares de calidad, utilizando materiales duraderos y técnicas avanzadas para garantizar que su cubierta no solo sea resistente a las condiciones climáticas adversas, sino que también contribuya a un entorno interior más confortable y eficiente." },
      { type: "highlights", items: [
        { title: "Experiencia y profesionalismo", desc: "Nuestra empresa cuenta con una larga trayectoria en el campo de la construcción, respaldada por un equipo de profesionales altamente calificados y comprometidos con la excelencia en cada proyecto." },
        { title: "Calidad y atención al detalle", desc: "Nos dedicamos a ofrecer resultados de la más alta calidad, prestando especial atención a cada detalle para garantizar la satisfacción de nuestros clientes y la durabilidad de nuestras construcciones." },
        { title: "Innovación y tecnología", desc: "Incorporamos constantemente las últimas innovaciones y tecnologías en nuestros procesos de construcción, lo que nos permite ofrecer soluciones eficientes y vanguardistas que cumplen con los más altos estándares de calidad y sostenibilidad." },
      ]},
      { type: "p", text: "Ofrecemos una amplia gama de servicios para la rehabilitación de cubiertas, incluyendo:" },
      { type: "highlights", items: [
        { title: "Inspección y Evaluación", desc: "Realizamos un análisis exhaustivo del estado actual de la cubierta para identificar problemas como filtraciones, deterioro de materiales, y fallos en la impermeabilización." },
        { title: "Reparación y Renovación", desc: "Utilizamos los mejores materiales y técnicas de vanguardia para reparar y renovar cubiertas. Esto incluye la sustitución de tejas, reparación de estructuras de soporte, y la aplicación de nuevas capas impermeabilizantes." },
        { title: "Aislamiento Térmico", desc: "Incorporamos soluciones de aislamiento térmico para mejorar la eficiencia energética de su edificación, reduciendo el consumo de energía y mejorando el confort interior." },
        { title: "Mantenimiento Preventivo", desc: "Ofrecemos planes de mantenimiento que incluyen revisiones periódicas y pequeñas reparaciones para prolongar la vida útil de su cubierta y evitar problemas mayores en el futuro." },
        { title: "Rehabilitación Integral", desc: "En caso de daños severos o cubiertas antiguas, realizamos proyectos de rehabilitación integral que incluyen la renovación completa de la estructura y la instalación de nuevos sistemas de cubierta." },
      ]},
      { type: "p", text: "En Soroca Proyectos y Construcciones S.L., contamos con un equipo de profesionales altamente cualificados y con una amplia experiencia en la rehabilitación de cubiertas. Nos comprometemos a ofrecer soluciones personalizadas que se adapten a las necesidades específicas de cada cliente, garantizando resultados duraderos y de alta calidad." },
      { type: "p", text: "Nuestra misión es proteger su edificación de los elementos externos y garantizar su seguridad y confort. Confié en nosotros para mantener su cubierta en las mejores condiciones posibles." },
      { type: "p", text: "Contáctenos hoy mismo para más información o para solicitar un presupuesto sin compromiso." },
    ],
  },
  // ========== REFORMAS ==========
  {
    path: "/reformas/reformas-integrales",
    title: "Reformas Integrales",
    metaTitle: "Reformas Integrales en Alicante | Grupo Soroca",
    metaDescription: "Reformas integrales en Alicante. Más de 15 años de experiencia en reformas, construcciones y remodelaciones residenciales y comerciales.",
    icon: Hammer,
    image: reformasIntegralesImg,
    desc: "Reformas integrales de viviendas y locales",
    content: [
      { type: "p", text: "/ Reformas / Reformas Integrales" },
      { type: "h2", text: "Descubre la Excelencia en Reformas Integrales con Soroca Proyectos Y Construcciones S.L" },
      { type: "p", text: "El Grupo Soroca es una empresa con más de 15 años de experiencia especializada en reformas, construcciones y remodelaciones de propiedades residenciales y comerciales. Operando desde la ciudad de Barcelona, brindamos nuestros servicios a comunidades, propietarios privados y otras empresas como colaboradores." },
      { type: "p", text: "En Grupo Soroca, contamos con recursos humanos, materiales y herramientas para acometer con éxito todos los desafíos de construcción, incluyendo la implementación de los nuevos estándares de eficiencia energética. Nos adaptamos a las necesidades de nuestros clientes, ofreciendo un servicio integral para cualquier instalación, reforma u obra nueva." },
      { type: "p", text: "A menudo se escucha la frase \"necesito renovar mi hogar\", la cual automáticamente nos hace pensar en una remodelación completa de la vivienda. Sin embargo, en la mayoría de los casos se trata de reformas parciales." },
      { type: "p", text: "Por lo tanto, no se trata necesariamente de demoler y reconstruir la casa o de comenzar desde el pasillo hasta el tejado. Estas reformas suelen combinar diferentes categorías de trabajos, como la instalación de fontanería junto con trabajos de albañilería, el barnizado de puertas y la instalación de ventanas de PVC, entre otras muchas combinaciones posibles." },
      { type: "h3", text: "Reformas Integrales Alicante" },
      { type: "p", text: "Desarrollar varias categorías diferentes de reformas para el hogar implica una variedad de enfoques y áreas específicas. A continuación, te proporciono una lista ampliada de posibles categorías de reformas para el hogar, cada una con una descripción única:" },
      { type: "highlights", items: [
        { title: "Reforma de Cocina Moderna", desc: "Transforma tu cocina en un espacio contemporáneo y funcional. Desde la instalación de electrodomésticos de última generación hasta la optimización del espacio, esta reforma busca combinar elegancia con eficiencia." },
        { title: "Remodelación de Baño Spa", desc: "Convierte tu baño en un oasis personal de relajación. Integrando elementos de spa, como duchas de lluvia, bañeras de hidromasaje o sistemas de iluminación ambiental, esta reforma busca crear un ambiente de serenidad y confort." },
        { title: "Rehabilitación Energética", desc: "Enfoque sostenible para reducir el consumo de energía en el hogar. Mediante la instalación de aislamiento térmico, paneles solares o sistemas de climatización eficientes, esta reforma busca minimizar el impacto ambiental y reducir los costos de energía." },
        { title: "Renovación de Espacios Exteriores", desc: "Mejora la estética y funcionalidad de tus espacios al aire libre. Desde la construcción de terrazas, jardines verticales, hasta la instalación de sistemas de riego automático, esta reforma busca fusionar el interior con el exterior." },
        { title: "Transformación de Espacios Abiertos", desc: "Fusión de ambientes para crear áreas multifuncionales. Uniendo la cocina, el comedor y la sala de estar en un espacio fluido, esta reforma promueve la interacción y el aprovechamiento óptimo del área disponible." },
        { title: "Renovación de Fachadas y Exteriores", desc: "Mejora la apariencia estética de la fachada y áreas exteriores. Desde el revestimiento de la fachada hasta la instalación de sistemas de iluminación exterior, esta reforma busca realzar la impresión visual de tu hogar." },
        { title: "Adaptación para Accesibilidad Universal", desc: "Acondicionamiento del hogar para facilitar su accesibilidad a todas las personas. Mediante la instalación de rampas, barras de apoyo y otros elementos, esta reforma busca garantizar la comodidad y seguridad para todos los residentes." },
      ]},
      { type: "p", text: "Cada categoría de reforma para el hogar aborda necesidades específicas y puede ser adaptada para satisfacer los requerimientos y preferencias individuales de cada cliente." },
      { type: "h3", text: "Consulta Gratuita con un Especialista: Tu Socio en tu Proyecto de Pintura" },
      { type: "highlights", items: [
        { title: "Reformas Integrales Alicante", desc: "Con una amplia experiencia en la transformación completa de hogares, ofrecemos servicios integrales de reformas en Alicante. Desde el diseño hasta la ejecución, nos encargamos de cada aspecto de la renovación, asegurando que tu hogar se convierta en un espacio moderno, funcional y estéticamente agradable." },
        { title: "Reformas de Edificios en Alicante", desc: "Especializados en la renovación de edificios en Alicante, brindamos servicios profesionales para mejorar la apariencia y funcionalidad de las estructuras. Abordamos proyectos de diferentes escalas, desde reparaciones menores hasta renovaciones completas, garantizando altos estándares de calidad y durabilidad." },
        { title: "Reformas de Cocinas Alicante", desc: "Transformamos cocinas en Alicante en espacios modernos y funcionales. Con atención a los detalles y diseños personalizados, ofrecemos servicios de renovación de cocinas para convertirlas en lugares no solo para cocinar, sino también en áreas cómodas y placenteras para toda la familia." },
        { title: "Reformas de Baños Alicante", desc: "Especializados en reconfigurar y modernizar baños en Alicante, nos enfocamos en la creación de espacios elegantes y prácticos. Desde el cambio de instalaciones sanitarias hasta la implementación de soluciones innovadoras, nos aseguramos de que el baño se convierta en un lugar de relajación y confort." },
        { title: "Reformas de Locales Alicante", desc: "Ofrecemos servicios de renovación para espacios comerciales en Alicante, adaptándonos a las necesidades de cada cliente. Desde remodelaciones interiores hasta mejoras en la fachada, nos enfocamos en transformar espacios comerciales en ambientes atractivos y funcionales para negocios exitosos." },
      ]},
      { type: "p", text: "Cada servicio de reforma en Alicante se lleva a cabo con un enfoque en la calidad, el diseño y las necesidades específicas del cliente, asegurándonos de que el resultado final refleje nuestros altos estándares de profesionalismo y la satisfacción del cliente." },
    ],
  },
  // ========== ALBAÑILERÍA ==========
  {
    path: "/albanileria",
    title: "Obras y Reformas de Albañilería",
    metaTitle: "Obras y Reformas de Albañilería en Alicante | Grupo Soroca",
    metaDescription: "Servicios de albañilería profesional en Alicante. Obras, reformas y reparaciones con presupuestos gratuitos. Grupo Soroca.",
    icon: Wrench,
    image: albanileriaImgV2,
    desc: "Trabajos de albañilería profesional",
    content: [
      { type: "p", text: "Soroca.es es tu aliado confiable en el mundo de la albañilería en Alicante y sus alrededores. Contamos con un equipo de profesionales altamente competentes y de confianza que ofrecen servicios de calidad a un precio inigualable. Nos especializamos en resolver cualquier tipo de avería, incidencia o reparación que puedas necesitar, con rapidez y eficacia, sin causarte ninguna molestia." },
      { type: "p", text: "Nuestra verdadera fortaleza radica en nuestra capacidad para adaptarnos a tus necesidades específicas. Ya sea que estés planeando un proyecto a gran escala o una pequeña reparación, estamos aquí para ti. Nos enorgullece ofrecer presupuestos gratuitos y sin compromiso, porque creemos en la transparencia y en brindarte la mejor solución posible." },
      { type: "p", text: "Así que no dudes en contactarnos. ¡Llámanos hoy mismo y descubre por qué somos la elección número uno en albañilería en Alicante!" },
      { type: "h3", text: "Tipos De Servicios De Albañilería" },
      { type: "list", items: [
        "Trabajos En Obras, Reformas Y Pequeñas Reparaciones",
        "Tuberías Y Radiadores",
        "Cambio De Bañeras Y Platos De Ducha",
        "Alicatados Y Soldados",
        "Trabajos En Comunidades: Bajantes, Patios De Luces Y Montantes",
        "Problemas De Humedades",
      ]},
      { type: "p", text: "En Grupo Soroca realizamos cualquier trabajo relacionado a la albañilería. Todo tipo de arreglos y reformas para tu hogar o negocio. Por lo tanto, pueden ir desde instalar platos de ducha o bañeras a enyesados de tabiques y techos, hasta obras y reformas más complejas." },
    ],
  },
  // ========== ELECTRICIDAD ==========
  {
    path: "/electricidad/instalacion-y-mantenimiento",
    title: "Instalación y Mantenimiento de Electricidad",
    metaTitle: "Instalación y Mantenimiento Eléctrico en Alicante | Grupo Soroca",
    metaDescription: "Instalación y mantenimiento de sistemas eléctricos en Alicante. Soluciones completas para infraestructura eléctrica segura y eficiente. Grupo Soroca.",
    icon: Zap,
    image: electricidadMantenimientoImgV2,
    desc: "Instalación y mantenimiento eléctrico",
    content: [
      { type: "h2", text: "Instalación y Mantenimiento de Electricidad" },
      { type: "p", text: "En Soroca Proyectos y Construcciones S.L., entendemos que la electricidad es un componente esencial para el funcionamiento y la seguridad de cualquier edificación. Desde la instalación de sistemas eléctricos hasta el mantenimiento continuo, ofrecemos soluciones completas para asegurar que su infraestructura eléctrica opere de manera segura, eficiente y confiable." },
      { type: "h3", text: "Tu instalación eléctrica en Gran Alacant en manos de profesionales" },
      { type: "h3", text: "Mantenimiento del hogar y de tu empresa" },
      { type: "p", text: "Ofrecemos una gama completa de servicios en instalación y mantenimiento eléctrico que incluyen:" },
      { type: "highlights", items: [
        { title: "Instalación de Sistemas Eléctricos", desc: "Nos encargamos de la instalación de sistemas eléctricos nuevos en edificaciones residenciales, comerciales e industriales. Esto abarca desde el cableado y la conexión de dispositivos hasta la instalación de cuadros eléctricos y sistemas de iluminación. Trabajamos con los estándares más exigentes para garantizar una instalación segura y conforme a la normativa vigente." },
        { title: "Mantenimiento Preventivo", desc: "Implementamos programas de mantenimiento preventivo para identificar y solucionar posibles problemas antes de que se conviertan en fallos graves. Esto incluye revisiones periódicas, pruebas de funcionamiento y ajustes en los sistemas eléctricos para asegurar un rendimiento óptimo y una mayor durabilidad." },
        { title: "Reparación de Averías", desc: "Ofrecemos servicios de reparación rápida y eficiente en caso de fallos eléctricos. Nuestro equipo de técnicos está disponible para atender emergencias y solucionar problemas como cortocircuitos, fallos en la iluminación, y problemas en el sistema de distribución eléctrica." },
        { title: "Actualización y Modernización", desc: "Realizamos actualizaciones y modernizaciones de sistemas eléctricos antiguos para mejorar su eficiencia y cumplir con las normativas actuales. Esto puede incluir la sustitución de componentes obsoletos, la mejora de la capacidad de carga y la instalación de nuevas tecnologías." },
        { title: "Asesoramiento y Consultoría", desc: "Proporcionamos asesoramiento experto para ayudarle a diseñar y planificar sistemas eléctricos que se ajusten a sus necesidades específicas. Nuestro equipo le guiará en la selección de los mejores productos y soluciones para optimizar la eficiencia energética y la seguridad." },
      ]},
      { type: "h3", text: "Reparaciones de tu hogar y de tu empresa" },
      { type: "p", text: "En Soroca Proyectos y Construcciones S.L., contamos con un equipo de electricistas altamente cualificados y con amplia experiencia en el sector. Nos destacamos por nuestro enfoque en la calidad, la seguridad y la satisfacción del cliente. Utilizamos tecnología avanzada y materiales de primera para asegurar que cada proyecto se ejecute con la máxima precisión y eficiencia." },
      { type: "p", text: "Nuestro compromiso es ofrecerle soluciones eléctricas que no solo cumplan con los estándares más altos, sino que también se adapten a sus necesidades particulares y ofrezcan un funcionamiento confiable y seguro a lo largo del tiempo." },
      { type: "p", text: "Contáctenos hoy mismo para más información o para solicitar un presupuesto sin compromiso. Estamos aquí para asegurar que su sistema eléctrico funcione de manera impecable." },
      { type: "h3", text: "¿Tienes una avería eléctrica?" },
      { type: "list", items: [
        "Salta el Diferencial",
        "Salto de automático",
        "Fusible fundido",
        "Boletín Eléctrico",
        "Mantenimiento Preventivo y Correctivo",
        "Instalación de Iluminación",
      ]},
    ],
  },
  {
    path: "/electricidad/domotica",
    title: "Domótica",
    metaTitle: "Domótica en Alicante - Instaladores de Domótica | Grupo Soroca",
    metaDescription: "Servicio de instalación de domótica en Alicante. Hogares inteligentes a medida con Grupo Soroca. Asesoramiento personalizado e instalación profesional.",
    icon: Smartphone,
    image: domoticaImg,
    desc: "Domótica e instalaciones inteligentes",
    content: [
      { type: "h2", text: "INSTALADORES DE DOMÓTICA" },
      { type: "p", text: "domtica panel de control" },
      { type: "h3", text: "Expertos en instalación de domótica para todas las exigencias" },
      { type: "h2", text: "Servicio de Instalación Domótica en Alicante por Grupo Soroca" },
      { type: "p", text: "Bienvenido a Grupo Soroca, tu socio confiable en soluciones de domótica en Alicante. Nuestros instaladores de domótica altamente capacitados y experimentados están comprometidos en brindarte un hogar inteligente a la medida de tus necesidades y preferencias." },
      { type: "h3", text: "¿Qué es la domótica?" },
      { type: "p", text: "La domótica se trata de la integración de tecnología avanzada en tu hogar para automatizar y controlar diversos sistemas, desde la iluminación hasta la seguridad, la climatización, los sistemas de entretenimiento y mucho más. Con nuestro servicio de instalación de domótica en Alicante, Grupo Soroca te ofrece la oportunidad de transformar tu hogar en un espacio inteligente y eficiente." },
      { type: "h3", text: "¿Qué ofrecemos?" },
      { type: "highlights", items: [
        { title: "Asesoramiento personalizado", desc: "En Grupo Soroca, comprendemos que cada hogar es único. Nuestro equipo de expertos te brindará asesoramiento personalizado para diseñar un sistema de domótica que se adapte a tus necesidades específicas y a tu estilo de vida." },
        { title: "Instalación profesional", desc: "Nuestros instaladores altamente cualificados se encargarán de implementar cada componente con precisión y cuidado. Garantizamos una instalación impecable y de alta calidad para asegurar el funcionamiento óptimo de tu sistema domótico." },
        { title: "Integración completa", desc: "Desde la iluminación controlada por voz hasta sistemas de seguridad conectados a tu teléfono, Grupo Soroca se asegurará de que todos los dispositivos y sistemas estén perfectamente integrados y funcionando de manera conjunta." },
        { title: "Facilidad de uso", desc: "Hacemos hincapié en la simplicidad. Nuestros sistemas de domótica se diseñan para ser intuitivos y fáciles de usar, permitiéndote controlar tu hogar con facilidad desde tu smartphone u otros dispositivos." },
      ]},
      { type: "h3", text: "Beneficios de la domótica:" },
      { type: "highlights", items: [
        { title: "Confort y conveniencia", desc: "Con la domótica, tendrás el control total de tu hogar, permitiéndote ajustar la temperatura, encender y apagar las luces, o incluso controlar los sistemas de entretenimiento con un simple toque o comando de voz." },
        { title: "Ahorro energético", desc: "La automatización inteligente te permite optimizar el uso de la energía en tu hogar, lo que se traduce en ahorros significativos a largo plazo en tus facturas de servicios públicos." },
        { title: "Seguridad avanzada", desc: "Con sistemas integrados de seguridad, como cámaras y sensores, podrás monitorear tu hogar desde cualquier lugar, aumentando la tranquilidad y la protección de tus seres queridos." },
      ]},
      { type: "p", text: "En Grupo Soroca, estamos comprometidos a proporcionar soluciones de domótica de vanguardia que mejoren tu calidad de vida y hagan tu hogar más eficiente, cómodo y seguro." },
      { type: "p", text: "Contáctanos hoy mismo para descubrir cómo podemos convertir tu casa en un hogar inteligente a medida." },
      { type: "p", text: "¡Confía en Grupo Soroca para la instalación profesional de domótica en Alicante!" },
    ],
  },
  // ========== IMPERMEABILIZACIONES ==========
  {
    path: "/impermeabilizaciones",
    title: "IMPERMEABILIZACIONES",
    metaTitle: "Impermeabilizaciones en Alicante | Grupo Soroca",
    metaDescription: "Expertos en impermeabilización de fachadas, terrazas, techos, piscinas y más en Alicante. Soluciones duraderas con garantía. Grupo Soroca.",
    icon: Shield,
    image: impermeabilizacionesImg,
    desc: "Impermeabilización profesional",
    content: [
      { type: "p", text: "Grupo Soroca Alicante es un equipo de expertos en una amplia gama de servicios de impermeabilización, cubriendo desde la protección de fachadas y terrazas hasta la impermeabilización de techos, piscinas, fosas y sistemas de alcantarillado. En cada proyecto, Grupo Soroca se esfuerza por ofrecer soluciones duraderas y de alta calidad que satisfagan las necesidades específicas de nuestros clientes." },
      { type: "p", text: "Nuestro compromiso con la excelencia se refleja en el respaldo de todos nuestros trabajos con sólidas garantías. En cada paso del proceso de impermeabilización, utilizamos materiales de primera calidad y técnicas avanzadas para garantizar resultados duraderos y efectivos." },
      { type: "p", text: "Ya sea que necesite proteger su hogar, edificio o infraestructura, Grupo Soroca Alicante está aquí para ofrecerle soluciones de impermeabilización confiables y profesionales. ¡Confíe en nosotros para mantener su propiedad segura y libre de filtraciones!" },
      { type: "h3", text: "¿Necesitas ayuda?" },
      { type: "h3", text: "Impermeabilizaciones de terrazas con lamina sintetica." },
      { type: "p", text: "El uso de láminas asfálticas como material de impermeabilización está muy extendido en el sector de la construcción." },
      { type: "h3", text: "Clases de láminas más utilizadas:" },
      { type: "list", items: [
        "Laminas asfalticas autoprotegidas",
        "Laminas asfalticas no protegidas",
        ".Laminas asfalticas autoadhesivas",
        "Laminas asfalticas ajardinadas",
        "Laminas asfalticas especial trafico",
        "Lamina especial Baños",
        "Bandas de lamina autoadhesiva",
        "Placas asfalticas tipo Tegola",
      ]},
      { type: "h3", text: "Cauchos, poliuretanos y resinas" },
      { type: "p", text: "Para nuestros trabajos de impermeabilización y revestimientos utilizamos los productos más avanzados en el sector, dependiendo de las necesidades del soporte a impermeabilizar." },
      { type: "list", items: [
        "Caucho liquido",
        "Caucho liquido fibrado",
        "Poliuretanos liquidos",
        "Masilla de poliuretano",
        "Resina epoxi",
      ]},
      { type: "h3", text: "Laminas drenantes y geotextiles" },
      { type: "p", text: "Las láminas drenantes su principal aplicación es la protección de la impermeabilización y el drenaje de muros y soleras.Su aplicación es la de protección de muros verticales en contacto con la tierra y el drenaje del terreno." },
      { type: "list", items: [
        "Lamina drenante y Lamina drenante con geotextil",
        "Geotextil de poliester",
        "Geotextil de prolipopileno",
      ]},
      { type: "h3", text: "Laminas sinteticas PVC." },
      { type: "list", items: [
        "PVC con armadura de FV y FP",
        "PVC sin armadura",
      ]},
      { type: "h3", text: "Imprimaciones, Cazolestas y Morteros" },
      { type: "list", items: [
        "Emulsion tipo EB",
        "Emulsion tipo EA",
        "Pintura bituminosa",
        "Slurrys",
        "Cazoleta, Sifonica y Lateral u Horizontal",
        "Morteros Impermeabilizantes",
      ]},
      { type: "h3", text: "Aislamientos." },
      { type: "list", items: [
        "XPS poliestireno extruido",
        "Lana de roca",
        "Losa filtrante",
        "Chovaterm",
      ]},
      { type: "h2", text: "Servicios de impermeabilizaciones Alicante" },
      { type: "p", text: "En Grupo Soroca Alicante, nuestra pasión es garantizar que su propiedad esté protegida de los elementos. Nuestro equipo altamente capacitado utiliza las últimas tecnologías y materiales de vanguardia para llevar a cabo proyectos de impermeabilización de primera categoría." },
      { type: "p", text: "Nuestros servicios de impermeabilización abarcan una amplia variedad de necesidades. Realizamos la impermeabilización de fachadas para proteger su edificio de las inclemencias del tiempo y garantizar su durabilidad a lo largo del tiempo. Para áreas expuestas, como terrazas y azoteas, ofrecemos soluciones que resisten la humedad y evitan filtraciones no deseadas." },
      { type: "p", text: "La impermeabilización de piscinas es esencial para mantener su oasis de relajación en condiciones óptimas. También ofrecemos servicios de impermeabilización de fosos y sistemas de alcantarillado, lo que es crucial para prevenir problemas de filtraciones y daños a la infraestructura subterránea." },
      { type: "p", text: "En Grupo Soroca Alicante, entendemos que cada proyecto es único. Por eso, personalizamos nuestras soluciones de impermeabilización para satisfacer sus necesidades específicas. Puede confiar en la experiencia y el compromiso de Grupo Soroca para ofrecer resultados excepcionales en cada proyecto. Protegemos su inversión y su tranquilidad." },
    ],
  },
  // ========== SERVICIOS DE ARQUITECTURA ==========
  {
    path: "/servicios-de-arquitectura",
    title: "SERVICIOS DE ARQUITECTURA",
    metaTitle: "Servicios de Arquitectura en Alicante | Grupo Soroca",
    metaDescription: "Arquitectura, reformas e interiorismo en Alicante. Proyectos integrales con profesionales reconocidos. Grupo Soroca.",
    icon: Compass,
    image: arquitecturaImg,
    desc: "Arquitectura y proyectos técnicos",
    content: [
      { type: "h2", text: "Arquitectura, reformas e interiorismo en ALICANTE" },
      { type: "p", text: "Soroca es una empresa dedicada a la arquitectura, el diseño interior y la ejecución de proyectos integrales. Contamos con un equipo de profesionales altamente reconocidos que ofrecen un servicio completo y el desarrollo de proyectos únicos. En Soroca, ponemos el proceso creativo y la gestión de obras en el corazón de nuestra operación" },
      { type: "h3", text: "¿Necesitas ayuda?" },
      { type: "h3", text: "Mantenimiento del hogar y de tu empresa" },
      { type: "h3", text: "Diseño e instalación de sistemas automatizados" },
      { type: "p", text: "En Soroca.es, nos enorgullece ofrecerte soluciones eléctricas integrales para el cuidado y mantenimiento tanto de tu hogar como de tu empresa. Con un equipo de más de 20 profesionales altamente calificados en Alicante, estamos dedicados a asegurar que tus necesidades eléctricas se manejen de manera eficiente y segura." },
      { type: "p", text: "Nuestros servicios de mantenimiento eléctrico están disponibles las 24 horas del día, los 365 días del año, para brindarte la tranquilidad de saber que estamos siempre aquí para ti. Ya sea que necesites una reparación urgente, una actualización en tu instalación eléctrica o simplemente un mantenimiento preventivo, puedes confiar en nosotros." },
      { type: "p", text: "En Soroca.es, nos enorgullece ofrecer una garantía de 1 año en todas nuestras reparaciones, lo que significa que tu tranquilidad eléctrica está en buenas manos con nosotros. No importa si se trata de tu hogar o tu empresa, estamos comprometidos a brindarte un servicio de calidad y a mantener tus sistemas eléctricos en perfecto estado de funcionamiento." },
      { type: "p", text: "Confía en Soroca.es para todas tus necesidades de mantenimiento eléctrico. Estamos aquí para cuidar de tu energía y garantizar la seguridad y el rendimiento eléctrico de tu hogar y tu empresa." },
      { type: "h3", text: "Reparaciones de tu hogar y de tu empresa" },
      { type: "p", text: "En Eléctrica, somos la solución confiable y eficiente para todas las reparaciones eléctricas que tu hogar y tu empresa puedan necesitar. Comprendemos la importancia de un sistema eléctrico seguro y eficiente en ambos entornos, y estamos comprometidos a ofrecer servicios de calidad que garanticen su tranquilidad y productividad." },
      { type: "highlights", items: [
        { title: "Calidad y Experiencia", desc: "Nuestro equipo de expertos en reparaciones eléctricas está altamente calificado y cuenta con una amplia experiencia en el campo. Nos enorgullece ofrecer servicios de la más alta calidad, respaldados por el conocimiento y la destreza de nuestros profesionales. Cada miembro de nuestro equipo está comprometido con la seguridad y la satisfacción del cliente." },
        { title: "Reparaciones en el Hogar", desc: "En tu hogar, la seguridad eléctrica es esencial. Realizamos una amplia variedad de reparaciones eléctricas para garantizar que tu hogar esté protegido y funcionando sin problemas. Esto incluye la resolución de problemas eléctricos, reparación de enchufes y interruptores, instalación de iluminación, actualización de sistemas eléctricos y mucho más. Nuestro objetivo es proporcionar un ambiente seguro y cómodo para tu familia." },
        { title: "Reparaciones en la Empresa", desc: "En el entorno empresarial, la electricidad es fundamental para el funcionamiento eficiente de tus operaciones. Nuestros servicios de reparación eléctrica para empresas abordan una amplia gama de necesidades, desde la resolución de problemas eléctricos complejos hasta la instalación y el mantenimiento de sistemas eléctricos de alto rendimiento. Entendemos la importancia de la continuidad del negocio y trabajamos diligentemente para minimizar cualquier tiempo de inactividad." },
        { title: "Servicio Integral", desc: "Lo que nos distingue es nuestro enfoque integral. No solo realizamos las reparaciones necesarias, sino que también nos preocupamos por prevenir futuros problemas. Realizamos inspecciones minuciosas para identificar posibles riesgos y proponemos soluciones preventivas. Esto te ahorra tiempo y dinero a largo plazo al evitar reparaciones costosas y situaciones de emergencia." },
        { title: "Compromiso con la Seguridad", desc: "La seguridad es nuestra máxima prioridad. Todos nuestros trabajos cumplen con los estándares de seguridad más estrictos, y nos aseguramos de que todas las reparaciones se realicen con precisión y cuidado. Tu seguridad y la de tu familia o empleados son de suma importancia para nosotros." },
        { title: "Satisfacción Garantizada", desc: "Respaldamos nuestros servicios con una garantía de satisfacción. Si no estás completamente satisfecho con nuestro trabajo, haremos todo lo posible para resolver cualquier problema y asegurarnos de que estés contento con los resultados." },
      ]},
      { type: "p", text: "Confía en Eléctrica para todas las reparaciones eléctricas en tu hogar y empresa. Estamos comprometidos con la excelencia y la seguridad en cada proyecto que emprendemos, brindándote tranquilidad y un entorno eléctrico eficiente." },
      { type: "h3", text: "¿Tienes una avería eléctrica?" },
      { type: "list", items: [
        "Salta el Diferencial",
        "Salto de automático",
        "Fusible fundido",
        "Boletín Eléctrico",
        "Mantenimiento Preventivo y Correctivo",
        "Instalación de Iluminación",
      ]},
    ],
  },
  // ========== FUGAS DE AGUA ==========
  {
    path: "/fugas-de-agua",
    title: "Fugas de Agua",
    metaTitle: "Fugas de Agua en Alicante - Detección y Reparación | Grupo Soroca",
    metaDescription: "Detección y reparación de fugas de agua en Alicante. Tecnología avanzada, gas trazador, geófonos y ultrasonido. Servicio urgente 24h. Grupo Soroca.",
    icon: Droplets,
    image: fugasAguaImgV2,
    desc: "Detección y reparación de fugas",
    content: [
      { type: "h2", text: "Reparación Fugas de Agua" },
      { type: "p", text: "Ahorra en tu factura de agua con Soroca S.L. Somos una empresa especializada en la detección de fugas de agua. Utilizamos la tecnología más avanzada, incluyendo el gas trazador, geófonos y detectores de ultrasonido, para localizar fugas de agua de manera precisa y eficiente. Nuestros métodos de detección avanzados nos permiten evitar costosas roturas y excavaciones innecesarias. En Soroca S.L, estamos comprometidos en ayudarte a conservar agua y reducir tus gastos." },
      { type: "p", text: "En Soroca S.L, ponemos a tu disposición servicios de alta calidad al mejor precio para la detección y reparación de fugas de agua. Contacta con nosotros y coordinaremos una cita para brindarte un servicio urgente de detección y solución de fugas de agua. Utilizamos la última tecnología y contamos con los mejores profesionales en fontanería en Alicante. Estamos comprometidos en proporcionarte soluciones eficientes y asequibles para tus necesidades de fontanería." },
      { type: "h2", text: "Empresa localización y detección fugas de agua en Alicante" },
      { type: "p", text: "En Grupo Soroca S.L somos expertos en la localización de fugas de agua sin necesidad de obras, así como en la rehabilitación de tuberías. Nuestros fontaneros altamente capacitados en detección de fugas de agua pueden identificar y reparar problemas en instalaciones tanto residenciales como en áreas comunitarias. Estas fugas de agua son frecuentes y, en ocasiones, pueden ser la causa de otros problemas significativos y pérdidas económicas." },
      { type: "p", text: "Contamos con tecnología innovadora para la localización de fugas de agua, lo que nos permite llevar a cabo nuestro trabajo con la máxima calidad y eficacia. Nuestros detectores de fugas de agua profesionales nos permiten localizar y reparar todo tipo de fugas, incluso aquellas que están ocultas y difíciles de encontrar, tanto en interiores como en exteriores, minimizando al máximo el daño a las instalaciones." },
      { type: "p", text: "Desde las fugas más evidentes hasta las más escondidas, puede confiar en la experiencia de Grupo Soroca S.L para solucionar problemas en su hogar, empresa o comunidad de vecinos. Realizamos trabajos económicos y urgentes en Alicante y contamos con un equipo altamente calificado para la localización y reparación de fugas de agua en tuberías subterráneas, ya sea en viviendas particulares, comunidades de vecinos, empresas o entidades públicas." },
      { type: "p", text: "Gracias a nuestra amplia trayectoria y dedicación constante, hemos acumulado experiencia en la búsqueda de fugas de agua ocultas detrás de paredes, suelos o techos, que suelen ser difíciles de localizar. Esto ha llevado a que nuestros clientes nos consideren una de las mejores empresas de detección de fugas de agua en Alicante. Para nosotros, es fundamental no pasar por alto ningún detalle y brindar un servicio de alta calidad para ganar la confianza de nuestros clientes y mantener su satisfacción al trabajar con nuestra empresa." },
      { type: "h3", text: "Solicita nuestro servicio de Fontanería para:" },
      { type: "list", items: [
        "Reparación de fugas de agua en el hogar.",
        "Reparación de fugas de agua en el alcantarillado.",
        "Reparación de fugas de agua en comunidades.",
      ]},
      { type: "h3", text: "Fugas de agua en comunidades de propietarios" },
      { type: "p", text: "Es común encontrarse con problemas de escapes de agua o otras incidencias que afecten a varios vecinos. En este caso será fundamental llamar a una empresa de fontanería en Alicante que pueda hacerse cargo de la reparación lo antes posible y contando siempre con soluciones de calidad, con garantía y realización de factura por los trabajos realizados. En Grupo Soroca S.L te enviaremos un presupuesto donde incluiremos los trabajos a realizar con el precio mas ajustado." },
      { type: "p", text: "Solucionamos todo tipo de averías y escapes de agua en comunidades de propietarios. Si detectáis una pérdida de agua antes del contador puede que haya una tubería rota en la que tendremos que revisar las instalaciones lo antes posible." },
      { type: "h3", text: "Nuestro equipo de fontanerosen Alicante está preparado para solucionar todo tipo de atascos:" },
      { type: "list", items: [
        "Desatascos de tuberías y desagües.",
        "Desatascos de arquetas.",
        "Desatascos de sifones.",
        "Desatascos de fregadores y baños.",
        "Desatascos de bajantes.",
        "Desatascos de alcantarillado.",
      ]},
      { type: "p", text: "Servicio de desatascos urgentes 24 horas al día, 365 días al año, para cualquier trabajo de desatasco o limpieza de tuberías en Alicante y alrededores." },
    ],
  },
  // ========== TRABAJOS VERTICALES ==========
  {
    path: "/trabajos-verticales",
    title: "Trabajos Verticales",
    metaTitle: "Trabajos Verticales en Alicante | Grupo Soroca",
    metaDescription: "Especialistas en trabajos verticales en Alicante. Limpieza en altura, rehabilitación de fachadas, líneas de vida, aislamiento térmico y más. Grupo Soroca.",
    icon: ArrowUp,
    image: trabajosVerticalesImg,
    desc: "Trabajos en altura y verticales",
    content: [
      { type: "h2", text: "Trabajos Verticales" },
      { type: "p", text: "Trabajos verticales" },
      { type: "h2", text: "Especialistas en Trabajos Verticales en Alicante" },
      { type: "p", text: "En Soroca Proyectos Y Construcciones S.L, nuestros trabajos verticales son una solución versátil que abarca desde intervenciones puntuales hasta proyectos a gran escala. Nuestro equipo de especialistas en trabajos en altura ofrece un amplio espectro de servicios que van desde intervenciones precisas hasta planificaciones estratégicas de alto nivel." },
      { type: "h3", text: "¿Qué nos distingue?" },
      { type: "highlights", items: [
        { title: "Especialización Industrial y Empresarial", desc: "Somos especialistas en el sector industrial y empresarial, y comprendemos las necesidades específicas de estos entornos. Realizamos trabajos verticales que garantizan la seguridad y la eficiencia en cada proyecto." },
        { title: "Enriquecimiento Urbano en Alicante", desc: "Contribuimos al desarrollo urbano en el área de Alicante. Nuestros trabajos verticales no solo mejoran la estética de los edificios, sino que también contribuyen al crecimiento y la modernización de la ciudad." },
      ]},
      { type: "p", text: "En Soroca Proyectos Y Construcciones S.L, nuestros trabajos verticales son la solución ideal para cualquier desafío en altura que puedas enfrentar. Ya sea que necesites una reparación puntual o una planificación estratégica a gran escala, estamos aquí para brindarte servicios de calidad en trabajos verticales. Confía en nosotros para llevar tus proyectos a nuevas alturas." },
      { type: "h2", text: "Soroca Proyectos Y Construcciones S.L: Expertos en Trabajos Verticales" },
      { type: "p", text: "En Soroca Proyectos Y Construcciones S.L, nuestra experiencia en trabajos verticales abarca una amplia gama de servicios especializados. Desde la limpieza en altura y rehabilitación de fachadas hasta la instalación de líneas de vida homologadas y sistemas de seguridad, estamos comprometidos con proporcionar soluciones integrales en trabajos en altura." },
      { type: "h3", text: "Nuestra Diversidad de Servicios Incluye:" },
      { type: "highlights", items: [
        { title: "Limpieza en Altura y Rehabilitación de Fachadas", desc: "Restauramos la belleza y la integridad de edificios históricos y modernos con nuestra experiencia en limpieza en altura y rehabilitación de fachadas. Devolvemos la vida a las estructuras y las protegemos para el futuro." },
        { title: "Líneas de Vida Homologadas y Sistemas de Seguridad", desc: "Mantenemos la seguridad en el centro de todo lo que hacemos. Nuestros expertos instalan líneas de vida homologadas y sistemas de seguridad de última generación para garantizar un entorno de trabajo seguro en las alturas." },
        { title: "Aislamiento Térmico Exterior", desc: "Contribuimos a la eficiencia energética de los edificios con servicios de aislamiento térmico exterior. Reduzca los costos de energía y mejore el confort en su hogar o negocio con nuestras soluciones innovadoras." },
        { title: "Pintores Industriales y Revestimientos", desc: "Nuestros pintores industriales son maestros en su oficio. Transforman las estructuras con colores y revestimientos de calidad superior, brindando un aspecto fresco y duradero." },
        { title: "Inspección de Fachadas y Colaboraciones", desc: "Nos enorgullece trabajar con expertos en inspección de fachadas para garantizar que cada proyecto se realice con precisión y seguridad. Colaboramos estrechamente con otros profesionales para alcanzar resultados excepcionales." },
      ]},
      { type: "p", text: "En Soroca Proyectos Y Construcciones S.L, nuestra pasión es superar desafíos en altura y crear soluciones duraderas para nuestros clientes. Cada proyecto es una oportunidad para mostrar nuestra destreza y compromiso con la excelencia en trabajos verticales. Confía en nosotros para llevar tu visión a nuevas alturas." },
    ],
  },
];
