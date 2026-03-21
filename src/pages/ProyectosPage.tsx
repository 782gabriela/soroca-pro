import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import gallery1 from "@/assets/gallery/gallery-1.jpeg";
import gallery2 from "@/assets/gallery/gallery-2.jpeg";
import gallery3 from "@/assets/gallery/gallery-3.jpeg";
import gallery4 from "@/assets/gallery/gallery-4.jpeg";
import gallery5 from "@/assets/gallery/gallery-5.jpeg";
import gallery6 from "@/assets/gallery/gallery-6.jpeg";
import gallery7 from "@/assets/gallery/gallery-7.jpeg";
import gallery8 from "@/assets/gallery/gallery-8.jpeg";
import gallery9 from "@/assets/gallery/gallery-9.jpeg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9];

const ProyectosPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });
  const [activeSlide, setActiveSlide] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const close = () => setSelectedIndex(null);
  const prev = () => setSelectedIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setSelectedIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero heading */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/8 via-background to-background pt-24 pb-8 md:pt-32 md:pb-12">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="container relative mx-auto px-4 text-center">
            <motion.h1
              className="mb-4 font-display text-4xl font-extrabold tracking-tight text-primary md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Proyectos
            </motion.h1>
            <motion.p
              className="mx-auto max-w-lg text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Así trabaja el Grupo Soroca
            </motion.p>
          </div>
        </section>

        {/* Hero carousel */}
        <section className="py-8 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-2xl shadow-primary/10" ref={emblaRef}>
              <div className="flex">
                {images.map((src, i) => (
                  <div key={i} className="relative min-w-0 shrink-0 grow-0 basis-full">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <motion.img
                        src={src}
                        alt={`Proyecto ${i + 1}`}
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.08 }}
                        animate={{ scale: activeSlide === i ? 1 : 1.08 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <button
                        onClick={() => setSelectedIndex(i)}
                        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-background hover:scale-105"
                      >
                        <Expand className="h-4 w-4" /> Ver
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Carousel dots */}
            <div className="mt-6 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeSlide === i ? "w-8 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/40"}`}
                />
              ))}
            </div>
            {/* Carousel arrows */}
            <div className="mt-4 flex justify-center gap-3">
              <button onClick={() => emblaApi?.scrollPrev()} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => emblaApi?.scrollNext()} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Masonry-style grid */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl columns-2 gap-4 space-y-4 md:columns-3">
              {images.map((src, i) => (
                <motion.button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <img
                    src={src}
                    alt={`Proyecto ${i + 1}`}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <Expand className="h-3 w-3" /> Ampliar
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative flex max-h-[90vh] max-w-[92vw] items-center justify-center"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={images[selectedIndex]}
                  alt={`Proyecto ${selectedIndex + 1}`}
                  className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
              <button onClick={close} className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-background">
                <X className="h-5 w-5" />
              </button>
              <button onClick={prev} className="absolute left-0 -translate-x-14 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-background md:-translate-x-16">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={next} className="absolute right-0 translate-x-14 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-background md:translate-x-16">
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProyectosPage;
