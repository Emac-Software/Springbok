import { BarChart3, Users, MessageCircle } from "lucide-react";
import HeroSection from "@/sections/HeroSection";
import ContactFormSection from "@/sections/ContactFormSection";
import ScrollReveal from "@/ui/ScrollReveal";
import Button from "@/ui/Button";

const SERVICES = [
  {
    icon: BarChart3,
    title: "Member Acquisition",
    description:
      "Data-driven campaigns that attract the right prospective members — people who align with your club's values and long-term vision.",
  },
  {
    icon: Users,
    title: "Engagement & Retention",
    description:
      "Keep your membership active and invested with targeted communications, event promotion, and community-building strategies.",
  },
  {
    icon: MessageCircle,
    title: "Brand & Reputation",
    description:
      "Craft a digital presence that reflects the prestige and tradition of your club — across your website, social, and beyond.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Services Teaser */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-camel mb-4">
                What We Do
              </p>
              <h2 className="font-serif text-5xl md:text-6xl font-normal text-cream">
                Marketing Built for Clubs
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.12}>
                <div className="group p-8 border border-cream/10 rounded-xl hover:border-camel/30 transition-colors duration-300">
                  <service.icon
                    className="text-camel mb-6 w-6 h-6 opacity-80"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif text-2xl text-cream mb-3 font-normal">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-cream/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                to="/services"
                className="px-10 py-3.5 text-xs"
              >
                View All Services
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Teaser — split layout */}
      <section className="py-24 px-6 border-t border-cream/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-camel mb-6">
                Who We Are
              </p>
              <h2 className="font-serif text-5xl font-normal text-cream leading-tight mb-6">
                We Understand Club Culture Because We Live It
              </h2>
              <p className="font-sans text-cream/50 leading-relaxed text-sm mb-6">
                Springbok Media was built on the belief that private clubs
                deserve marketing partners who truly understand their world —
                the unwritten rules, the member dynamics, and the standards of
                excellence that define great clubs.
              </p>
              <p className="font-sans text-cream/50 leading-relaxed text-sm mb-10">
                We're not a generalist agency that takes on any client. We work
                exclusively in the private club space, which means every
                strategy, every campaign, and every piece of content we produce
                is informed by deep, genuine expertise.
              </p>
              <Button
                variant="outline"
                to="/about"
                className="px-8 py-3 text-xs"
              >
                Our Story
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-6">
              {[
                { stat: "15+", label: "Club Partners" },
                { stat: "3×", label: "Average Inquiry Lift" },
                { stat: "100%", label: "Private Club Focus" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-baseline gap-4 p-6 border border-cream/10 rounded-xl"
                >
                  <span className="font-serif text-4xl text-camel font-normal">
                    {item.stat}
                  </span>
                  <span className="font-sans text-sm text-cream/50 tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <ScrollReveal>
        <section className="py-20 px-6 border-t border-cream/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-5xl md:text-6xl font-normal text-cream mb-6">
              Ready to Grow Your Club?
            </h2>
            <p className="font-sans text-cream/50 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Book a no-pressure discovery call. We'll listen to where your club
              is today and share honest thoughts on what could move the needle.
            </p>
            <Button
              variant="primary"
              to="/contact"
              className="px-12 py-4 text-xs"
            >
              Book a Discovery Call
            </Button>
          </div>
        </section>
      </ScrollReveal>

      <ContactFormSection />
    </>
  );
}
