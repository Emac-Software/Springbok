import ScrollReveal from "@/ui/ScrollReveal";
import Button from "@/ui/Button";
import SectionHeading from "@/ui/SectionHeading";
import ValuesSection from "@/sections/about/ValuesSection";

export default function About() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-offwhite pt-36 pb-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Heading + CTAs */}
          <ScrollReveal>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                as="h1"
                headingClassName="text-[36px] md:text-[54px]"
                subtitle="We're a small, senior team dedicated entirely to private clubs in Ontario. No generalists. No handoffs. Just focused, expert marketing. 
                We're a small, senior team dedicated entirely to private clubs in Ontario. No generalists. No handoffs. Just focused, expert marketing."
              >
                Marketing built for those who know the difference.
              </SectionHeading>
              <div className="flex flex-wrap gap-4">
                <Button variant="forest" to="/contact">
                  Book a Discovery Call
                </Button>
                <Button variant="outline" to="/case-studies">
                  View Our Work
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Image pop-out composition */}
          <ScrollReveal delay={0.15}>
            <div className="relative pt-10 pb-4 px-4">
              {/* Decorative background frame */}
              <div
                className="absolute inset-0 top-10 rounded-2xl rotate-1"
                style={{
                  background:
                    "color-mix(in srgb, var(--color-camel) 12%, transparent)",
                }}
              />

              {/* Image + badge */}
              <div className="relative z-10">
                <img
                  src="/assets/profile.png"
                  alt="Private golf club in Ontario"
                  className="w-full h-[520px] object-cover object-center rounded-xl -translate-y-6 shadow-[0_24px_64px_rgba(0,0,0,0.12)] "
                />

                {/* Floating badge */}
                <div className="absolute bottom-2 -left-3 md:-left-6 z-20 bg-white rounded-xl shadow-xl px-5 py-4">
                  <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-forest mb-1.5">
                    Ontario-Focused
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-camel text-sm leading-none">
                      ★★★★★
                    </span>
                    <span className="text-[10px] tracking-[0.08em] uppercase text-textmuted font-medium">
                      Private Clubs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ValuesSection />
    </>
  );
}
