import { Link } from "react-router-dom";
import ScrollReveal from "@/ui/ScrollReveal";
import AnimatedNumber from "@/ui/AnimatedNumber";
import { useState, useEffect, useRef } from "react";

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
    <section ref={sectionRef} className="bg-white py-28 px-10 md:px-16">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Left: golf image + floating stat card */}
        <ScrollReveal delay={0.1}>
          <div className="relative pb-7 pr-7">
            {/* Image container */}
            <div
              className="relative overflow-hidden rounded-[20px]"
              style={{ height: 540 }}
            >
              {/* Placeholder fallback */}
              <div className="absolute inset-0 bg-greenlight flex flex-col items-center justify-center">
                <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-forest font-medium mt-4">
                  Golf photography — drop in
                </p>
              </div>
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
            <div
              className="hidden md:block absolute bottom-0 right-0 bg-white rounded-2xl"
              style={{
                padding: "24px 32px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              }}
            >
              <div className="font-serif text-[44px] font-light text-forest leading-none">
                <AnimatedNumber
                  target={94}
                  suffix={"%"}
                  triggered={triggered}
                  delay={100}
                  duration={1000}
                />
              </div>
              <div className="font-sans text-[11px] tracking-[0.12em] uppercase text-textmuted mt-1.5 font-medium">
                Client retention rate
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: text */}
        <ScrollReveal delay={0.2}>
          <div>
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-forest mb-5 font-semibold">
              The Springbok Difference
            </p>
            <h2
              className="font-serif text-[54px] font-light text-charcoal leading-[1.1] mb-6"
              style={{ letterSpacing: "-0.01em" }}
            >
              We know what a private club actually feels like.
            </h2>

            <p className="font-sans text-base leading-[1.85] text-textmuted mb-10">
              We've spent years embedded in private club culture. We understand
              the balance between tradition and modernization, and the prestige
              your brand must project at every touchpoint.
            </p>
            <Link
              to="/about"
              className="inline-block font-sans text-sm font-medium tracking-[0.1em] uppercase text-white bg-forest px-9 py-3.5 rounded-full transition-all duration-300 hover:bg-forest/85 hover:-translate-y-[2px]"
            >
              Our Approach
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
