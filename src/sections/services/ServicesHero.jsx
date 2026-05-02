import ScrollReveal from "@/ui/ScrollReveal";
import Button from "@/ui/Button";
import AnimatedNumber from "@/ui/AnimatedNumber";

const STATS = [
  { target: "6", suffix: "", label: "Core Services" },
  { target: "40", suffix: "+", label: "Club Clients" },
  { target: "100", suffix: "%", label: "Private Club Focus" },
];

export default function ServicesHero() {
  return (
    <section className="pt-36 pb-16 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-forest">
            What We Do
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          <ScrollReveal>
            <h1 className="text-[clamp(40px,5.5vw,72px)] font-light leading-[1.05] tracking-[-0.02em]">
              Marketing services for private clubs.
              <br />
              {/* <em className="text-forest">for private clubs.</em> */}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-8">
              <p className="text-[15px] leading-[1.85] text-textmuted max-w-[400px]">
                Every engagement is tailored. No packages. No one-size-fits-all
                retainers. We scope what your club actually needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="forest" to="/contact">
                  Book a Call
                </Button>
                <Button variant="outline" to="/case-studies">
                  View Work
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16 pt-10 border-t border-periwinkle/20 grid grid-cols-3">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="py-6 text-center"
                style={{
                  borderRight:
                    i < 2 ? "1px solid rgba(123,143,190,0.25)" : "none",
                }}
              >
                <div className="font-serif text-[42px] font-light leading-none">
                  <AnimatedNumber
                    target={s.target}
                    suffix={s.suffix}
                    triggered={true}
                    delay={100}
                    duration={1000}
                  />
                </div>
                <div className="text-[11px] tracking-[0.16em] uppercase text-textmuted mt-2 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
