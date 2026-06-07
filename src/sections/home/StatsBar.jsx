import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/ui/ScrollReveal";
import AnimatedNumber from "@/ui/AnimatedNumber";

const STATS = [
  { target: 10, suffix: "+", label: "Clubs helped" },
  { target: 4, suffix: " yrs", label: "Niche specialization" },
  { target: 15, suffix: "+", label: "Campaigns launched" },
  { target: 6, suffix: "", label: "Service offerings" },
];

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
    <section ref={sectionRef} className="bg-forest py-11 px-0 sm:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.07}>
            <div
              className={`text-center py-2 ${i < 3 ? "md:border-r md:border-white/15" : ""} border-0`}
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
              <div className="text-[11px] tracking-[0.14em] uppercase text-white/60 mt-2 font-medium">
                {s.label}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
