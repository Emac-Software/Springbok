import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/ui/Button";

const WORDS = ["understands", "converts", "resonates", "delivers"];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen bg-charcoal flex flex-col items-center justify-center overflow-hidden grain-overlay">
      {/* Warm radial bloom behind the headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-camel), transparent 70%)",
          opacity: 0.05,
        }}
      />

      {/* Thin decorative horizontal rule */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px bg-cream/5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          className="font-sans text-xs tracking-[0.35em] uppercase text-camel mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Private Club Marketing Specialists
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-serif font-normal text-cream text-center leading-[1.05] mb-4"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        >
          Marketing that
        </motion.h1>

        {/* Rotating word — fixed height container prevents layout shift */}
        <div
          className="overflow-hidden"
          style={{
            height: "clamp(3.5rem, 10vw, 8rem)",
            marginBottom: "1.5rem",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={WORDS[idx]}
              className="font-serif italic text-camel leading-none"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {WORDS[idx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Subheading */}
        <motion.p
          className="font-sans text-cream/55 text-lg font-light max-w-md leading-relaxed mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          Tailored digital marketing built for the culture, tradition, and high
          standards of private club membership.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button
            variant="primary"
            to="/contact"
            className="px-10 py-4 text-xs"
          >
            Book a Discovery Call
          </Button>
          <Button
            variant="ghost"
            to="/services"
            className="px-10 py-4 text-xs text-cream/60 hover:text-cream"
          >
            Explore Services
          </Button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="font-sans text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-cream/20"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
