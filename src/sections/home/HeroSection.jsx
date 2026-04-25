import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const WORDS = ["understands", "converts", "resonates", "delivers", "elevates"];
const FS = "clamp(68px, 10vw, 148px)";

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
        src="/assets/golf-hole-1.png"
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
          className="font-serif font-light text-white leading-[1.0]"
          style={{ fontSize: FS, letterSpacing: "-0.03em" }}
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
          <div
            className="relative overflow-hidden"
            style={{ height: "calc(clamp(68px, 10vw, 148px) * 1.08)" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={displayed}
                className="font-serif italic text-camel block leading-[1.0]"
                style={{ fontSize: FS, letterSpacing: "-0.03em" }}
                initial={{ opacity: 0, y: 24, skewY: 2 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                exit={{ opacity: 0, y: -24, skewY: -2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {displayed}
              </motion.span>
            </AnimatePresence>
          </div>
          <span
            className="font-serif font-light text-white leading-[1.0]"
            style={{ fontSize: FS, letterSpacing: "-0.03em" }}
          >
            .
          </span>
        </motion.div>
      </div>

      {/* ── SUB-COPY + CTAs — pinned bottom-left, fairway stays clear ── */}
      <div className="absolute z-10 bottom-0 left-0 right-0">
        <div className="max-w-[1360px] mx-auto px-4 md:px-4 pb-16 md:pb-20">
          <div className="max-w-[460px]">
            <motion.p
              className="font-sans font-light leading-[1.8] mb-8"
              style={{ fontSize: 16, color: "rgba(255,255,255,0.68)" }}
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
              <Link
                to="/contact"
                className="font-sans text-sm font-medium tracking-[0.1em] uppercase bg-white text-forest px-10 py-[17px] rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/90"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.25)" }}
              >
                Book a Discovery Call
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
