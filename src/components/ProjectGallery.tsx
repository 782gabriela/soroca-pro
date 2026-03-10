import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const ProjectGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const open = (i: number) => setSelectedIndex(i);
  const close = () => setSelectedIndex(null);
  const prev = () => setSelectedIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setSelectedIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-primary md:text-3xl">Galería</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {images.map((src, i) => (
              <motion.button
                key={i}
                onClick={() => open(i)}
                className="group relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20 shadow-md transition-all hover:border-primary hover:shadow-lg hover:scale-105 md:h-24 md:w-24"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={src} alt={`Proyecto ${i + 1}`} className="h-full w-full object-cover" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative flex max-h-[85vh] max-w-[90vw] items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={images[selectedIndex]}
                  alt={`Proyecto ${selectedIndex + 1}`}
                  className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>

              {/* Close */}
              <button
                onClick={close}
                className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-background"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev */}
              <button
                onClick={prev}
                className="absolute left-0 -translate-x-14 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-background md:-translate-x-16"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next */}
              <button
                onClick={next}
                className="absolute right-0 translate-x-14 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-background md:translate-x-16"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGallery;
