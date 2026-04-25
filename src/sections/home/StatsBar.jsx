import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/ui/ScrollReveal";

const STATS = [
  { target: 40, suffix: "+", label: "Private clubs served" },
  { target: 94, suffix: "%", label: "Client retention rate" },
  { target: 8, suffix: " yrs", label: "Niche specialization" },
  { target: 100, suffix: "%", label: "Ontario focused" },
];

// Fast start, slow finish — log curve: log(1 + 9t) / log(10)
function logEase(t) {
  return Math.log1p(t * 9) / Math.log(10);
}

function AnimatedNumber({ target, suffix, duration, delay, triggered }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!triggered) return;
    let startTime = null;

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp + delay;
      const elapsed = timestamp - startTime;
      if (elapsed < 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(logEase(t) * target));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered, target, duration, delay]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export default function StatsBar() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-forest py-11 px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.07}>
            <div
              className="text-center py-2"
              style={{
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
              }}
            >
              <div className="font-serif text-5xl font-light text-white leading-none">
                <AnimatedNumber
                  target={s.target}
                  suffix={s.suffix}
                  triggered={triggered}
                  delay={i * 110}
                  duration={1000}
                />
              </div>
              <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-white/60 mt-2 font-medium">
                {s.label}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
