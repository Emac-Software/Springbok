import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "Springbok understood our club's culture immediately. They didn't need to be educated on what discretion means to our membership — they already knew.",
    attribution: "General Manager — Private Golf Club, Muskoka",
  },
  {
    quote:
      "In three months they transformed how our members perceive our communications. Everything feels considered, polished, and exactly on-brand.",
    attribution: "Director of Marketing — Country Club, Toronto",
  },
  {
    quote:
      "We'd worked with two other agencies before Springbok. The difference is they understand private clubs — not just marketing.",
    attribution: "Club President — Sports & Racquet Club, Ottawa",
  },
  {
    quote:
      "Their content doesn't look like it came from an agency. It looks like it came from someone who's been a member here for years.",
    attribution: "Communications Director — Private Golf Club, Niagara",
  },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const pauseTimeout = useRef(null);

  const goTo = (idx, dir) => {
    setDirection(dir);
    setCurrent(idx);
    setPaused(true);
    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setPaused(false), 6000);
  };

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearTimeout(id);
  }, [current, paused]);

  useEffect(() => () => clearTimeout(pauseTimeout.current), []);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <div
      className="max-w-[860px] mx-auto text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        clearTimeout(pauseTimeout.current);
        setPaused(false);
      }}
    >
      <div className="relative overflow-hidden" style={{ minHeight: 220 }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote
              className="font-serif font-light text-charcoal leading-[1.5] mb-8 italic"
              style={{ fontSize: 36 }}
            >
              "{TESTIMONIALS[current].quote}"
            </blockquote>
            <div
              className="mx-auto mb-5"
              style={{
                width: 40,
                height: 2,
                background: "var(--color-camel)",
              }}
            />
            <p className="font-sans text-[12px] tracking-[0.14em] uppercase text-textmuted font-medium">
              {TESTIMONIALS[current].attribution}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background:
                i === current
                  ? "var(--color-camel)"
                  : "color-mix(in srgb, var(--color-camel) 30%, transparent)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 px-10">
      <ScrollReveal>
        <TestimonialCarousel />
      </ScrollReveal>
    </section>
  );
}
