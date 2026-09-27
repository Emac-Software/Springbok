import ScrollReveal from "@/ui/ScrollReveal";
import AnimatedNumber from "@/ui/AnimatedNumber";
import { useState, useEffect, useRef } from "react";
import Button from "@/ui/Button";
import SectionHeading from "@/ui/SectionHeading";

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
              <img
                src="/assets/lev-bakery/bakery.jpeg"
                alt="Private club grounds"
                className="absolute inset-0 w-full h-full object-cover object-bottom"
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
            <div className="md:block absolute bottom-0 right-0 bg-white rounded-2xl py-6 px-8 shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
              <div className="font-serif text-[44px] font-light text-camel leading-none">
                <AnimatedNumber
                  target={700}
                  suffix={"+"}
                  triggered={triggered}
                  delay={100}
                  duration={500}
                />
              </div>
              <div className="text-[11px] tracking-[0.12em] uppercase text-textmuted mt-1.5 font-medium">
                Avg views
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: text */}
        <ScrollReveal delay={0.2}>
          <div>
            <SectionHeading
              eyebrow="Why Springbok"
              subtitle="Springbok is a small studio, a tight team, and a short list of brands we genuinely love working with. 
              That means you get our full attention, start to finish. If the details matter to you, you're in the right place."
            >
              Here’s where it gets good
            </SectionHeading>
            <Button variant="forest" to="/about">
              Our Approach
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
