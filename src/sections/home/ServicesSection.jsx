import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/ui/ScrollReveal";

const SERVICES = [
  {
    title: "Social Media Strategy",
    description:
      "Platform-native content that reflects the prestige and personality of your club—never generic, never off-brand.",
  },
  {
    title: "Email & Member Comms",
    description:
      "Event invitations, newsletters, and seasonal campaigns crafted to sound like they came from inside your club.",
  },
  {
    title: "Content & Photography",
    description:
      "A consistent visual language capturing your grounds, dining, and events with the refinement your members expect.",
  },
  {
    title: "Reputation & Search",
    description:
      "Proactive stewardship of how your club appears online—reviews, Google presence, and first impressions.",
  },
];

function ServiceCard({ title, description }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-10 cursor-pointer transition-all duration-300"
      style={{
        background: hovered ? "var(--color-forest)" : "white",
        boxShadow: hovered
          ? "0 16px 40px color-mix(in srgb, var(--color-forest) 20%, transparent)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-6 transition-all duration-300"
        style={{
          background: hovered
            ? "rgba(255,255,255,0.12)"
            : "var(--color-greenlight)",
        }}
      />
      <h3
        className="font-serif text-[24px] font-normal mb-3 leading-tight transition-colors duration-300"
        style={{ color: hovered ? "white" : "var(--color-charcoal)" }}
      >
        {title}
      </h3>
      <p
        className="font-sans text-sm leading-[1.75] transition-colors duration-300"
        style={{
          color: hovered ? "rgba(255,255,255,0.72)" : "var(--color-textmuted)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-greenlight py-24 px-10 md:px-16">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-forest mb-4 font-semibold">
                What We Offer
              </p>
              <h2
                className="font-serif text-[54px] font-light text-charcoal leading-[1.1]"
                style={{ letterSpacing: "-0.01em" }}
              >
                Services built
                <br />
                <em>for your context.</em>
              </h2>
            </div>
            <Link
              to="/services"
              className="font-sans text-sm font-medium tracking-[0.1em] uppercase text-forest bg-white px-7 py-3 rounded-full border border-forest transition-all duration-200 hover:bg-forest hover:text-white flex-shrink-0"
            >
              View All →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.09}>
              <ServiceCard {...s} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
