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
  { label: "Soluciones de Accesibilidad", path: "/soluciones-de-accesibilidad" },
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
  // ========== SERVICIOS PENDIENTES (PARTE 2) ==========
  {
    path: "/soluciones-de-accesibilidad",
    title: "Soluciones de Accesibilidad",
    metaTitle: "Soluciones de Accesibilidad | Grupo Soroca",
    metaDescription: "Soluciones de accesibilidad para edificios y viviendas en Alicante. Grupo Soroca.",
    icon: Landmark,
    desc: "Accesibilidad para edificios y viviendas",
    content: [],
  },
  {
    path: "/albanileria",
    title: "Albañilería",
    metaTitle: "Albañilería | Grupo Soroca",
    metaDescription: "Servicios de albañilería profesional en Alicante. Grupo Soroca.",
    icon: Wrench,
    desc: "Trabajos de albañilería profesional",
    content: [],
  },
  {
    path: "/electricidad/instalacion-y-mantenimiento",
    title: "Electricidad: Instalación y Mantenimiento",
    metaTitle: "Electricidad - Instalación y Mantenimiento | Grupo Soroca",
    metaDescription: "Instalación y mantenimiento eléctrico profesional en Alicante. Grupo Soroca.",
    icon: Zap,
    desc: "Instalación y mantenimiento eléctrico",
    content: [],
  },
  {
    path: "/electricidad/domotica",
    title: "Electricidad: Domótica",
    metaTitle: "Domótica | Grupo Soroca",
    metaDescription: "Soluciones de domótica e instalaciones inteligentes en Alicante. Grupo Soroca.",
    icon: Smartphone,
    desc: "Domótica e instalaciones inteligentes",
    content: [],
  },
  {
    path: "/impermeabilizaciones",
    title: "Impermeabilizaciones",
    metaTitle: "Impermeabilizaciones | Grupo Soroca",
    metaDescription: "Servicios de impermeabilización profesional en Alicante. Grupo Soroca.",
    icon: Shield,
    desc: "Impermeabilización profesional",
    content: [],
  },
  {
    path: "/servicios-de-arquitectura",
    title: "Servicios de Arquitectura",
    metaTitle: "Servicios de Arquitectura | Grupo Soroca",
    metaDescription: "Servicios de arquitectura y proyectos en Alicante. Grupo Soroca.",
    icon: Compass,
    desc: "Arquitectura y proyectos técnicos",
    content: [],
  },
  {
    path: "/fugas-de-agua",
    title: "Fugas de Agua",
    metaTitle: "Fugas de Agua | Grupo Soroca",
    metaDescription: "Detección y reparación de fugas de agua en Alicante. Grupo Soroca.",
    icon: Droplets,
    desc: "Detección y reparación de fugas",
    content: [],
  },
  {
    path: "/trabajos-verticales",
    title: "Trabajos Verticales",
    metaTitle: "Trabajos Verticales | Grupo Soroca",
    metaDescription: "Trabajos verticales profesionales en Alicante. Grupo Soroca.",
    icon: ArrowUp,
    desc: "Trabajos en altura y verticales",
    content: [],
  },
];
