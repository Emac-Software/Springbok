import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/ui/Button";

const WORDS = ["understands", "converts", "resonates", "delivers", "elevates"];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState(WORDS[0]);

  useEffect(() => {
    const hold = setTimeout(() => {
      setTimeout(() => {
        const next = (wordIdx + 1) % WORDS.length;
        setWordIdx(next);
        setDisplayed(WORDS[next]);
      }, 420);
    }, 2600);
    return () => clearTimeout(hold);
  }, [wordIdx]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dark fallback */}
      <div className="absolute inset-0 bg-charcoal" />

      {/* Golf course image */}
      <img
        src="/assets/courses/wdstx-hole-1.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      {/* Dark overlay — lighter on right so image breathes around the text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(20deg, rgba(10,20,14,0.12) 0%, rgba(10,20,14,0.45) 55%, rgba(10,20,14,0.15) 100%)",
        }}
      />
      {/* Bottom vignette — deepens behind the CTA area */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(10,20,14,0.80) 100%)",
        }}
      />

      {/* ── HEADLINE — upper zone, bottom edge cuts at tree line ── */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 md:px-4 pt-36 md:pt-40">
        <motion.p
          className="font-serif text-white leading-[1.0] text-[clamp(68px,10vw,148px)] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          Marketing that
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          className="flex items-start"
        >
          <div className="relative h-[calc(clamp(68px,10vw,148px)*1.08)]">
            <AnimatePresence mode="wait">
              <motion.span
                key={displayed}
                className="font-serif italic text-camel block leading-[1.0] text-[clamp(68px,10vw,148px)] tracking-[-0.03em]"
                initial={{ opacity: 0, y: 24, skewY: 2 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                exit={{ opacity: 0, y: -24, skewY: -2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {displayed}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="font-serif font-semibold text-white leading-[1.0] text-[clamp(68px,10vw,148px)] tracking-[-0.03em]">
            .
          </span>
        </motion.div>
      </div>

      {/* ── SUB-COPY + CTAs — pinned bottom-left, fairway stays clear ── */}
      <div className="absolute z-10 bottom-0 left-0 right-0">
        <div className="max-w-[1360px] mx-auto px-4 md:px-4 pb-16 md:pb-20">
          <div className="max-w-[460px]">
            <motion.p
              className="font-light leading-[1.8] mb-8 text-base text-white/[0.68]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
            >
              Bespoke digital marketing for Ontario's finest private golf,
              country, and sports clubs. Not generalists — specialists.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3.5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.58 }}
            >
              <Button variant="white" to="/contact">
                Book a Discovery Call
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute z-10 bottom-20 sm:right-10 right-0 -translate-x-1/2 flex flex-col items-center gap-3">
        <motion.span
          className="text-white/50 text-xs uppercase tracking-widest font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Scroll
        </motion.span>

        <motion.div
          className="w-[1px] bg-white/20 h-5 md:h-10 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="w-full h-1/3 bg-white/80"
            animate={{ y: ["-100%", "300%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
