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
    <section className="pt-36 pb-32 px-6 md:px-10 relative overflow-hidden">
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
      </div>
    </section>
  );
}
