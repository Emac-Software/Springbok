import ScrollReveal from "@/ui/ScrollReveal";
import AnimatedNumber from "@/ui/AnimatedNumber";
import { useState, useEffect, useRef } from "react";
import Button from "@/ui/Button";

const CLIENT_RETENTION_RATE = 94;

export default function DifferenceSection() {
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
    <section ref={sectionRef} className="py-28 px-10 md:px-16">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Left: golf image + floating stat card */}
        <ScrollReveal delay={0.1}>
          <div className="relative pb-7 pr-7">
            {/* Image container */}
            <div className="relative overflow-hidden rounded-[20px] h-[540px]">
              {/* Real image — drop /images/golf-course.jpg to activate */}
              <img
                src="/assets/golf-style.jpg"
                alt="Private club grounds"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, color-mix(in srgb, var(--color-forest) 40%, transparent), transparent 60%)",
                }}
              />
            </div>

            {/* Floating stat card */}
            <div className="hidden md:block absolute bottom-0 right-0 bg-white rounded-2xl py-6 px-8 shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
              <div className="font-serif text-[44px] font-light text-camel leading-none">
                <AnimatedNumber
                  target={CLIENT_RETENTION_RATE}
                  suffix={"%"}
                  triggered={triggered}
                  delay={100}
                  duration={1000}
                />
              </div>
              <div className="text-[11px] tracking-[0.12em] uppercase text-textmuted mt-1.5 font-medium">
                Client retention rate
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: text */}
        <ScrollReveal delay={0.2}>
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-forest mb-5 font-semibold">
              The Springbok Difference
            </p>
            <h2 className="text-[54px] font-light leading-[1.1] mb-6 tracking-[-0.01em]">
              We know what a private club actually feels like.
            </h2>

            <p className="leading-[1.85] text-textmuted mb-10">
              We've spent years embedded in private club culture. We understand
              the balance between tradition and modernization, and the prestige
              your brand must project at every touchpoint.
            </p>
            <Button variant="forest" to="/about">
              Our Approach
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
