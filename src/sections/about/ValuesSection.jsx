import ScrollReveal from "@/ui/ScrollReveal";
import SectionHeading from "@/ui/SectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faBullseye,
  faUsers,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";

const VALUES = [
  {
    title: "Discretion First",
    body: "Member privacy and club confidentiality are non-negotiable. We treat your internal matters with the same care your team does.",
    icon: faShield,
    accent: "camel",
  },
  {
    title: "Niche by Design",
    body: "We deliberately choose not to work with clients outside our area of expertise. This focus is what makes us genuinely useful.",
    icon: faBullseye,
    accent: "charcoal",
  },
  {
    title: "Hands-On Always",
    body: "Your account is never handed to a junior team member. You work directly with experienced professionals on every project.",
    icon: faUsers,
    accent: "camel",
  },
  {
    title: "Measured, Not Flashy",
    body: "We favour strategies that build long-term equity over viral moments. Your brand's dignity is part of every decision.",
    icon: faScaleBalanced,
    accent: "charcoal",
  },
];

// Full class strings keyed
const ACCENT = {
  camel: {
    icon: "text-camel",
    title: "text-camel",
    badge: "bg-camel text-white",
  },
  charcoal: {
    icon: "text-forest",
    title: "text-forest",
    badge: "bg-forest text-white",
  },
};

export default function ValuesSection() {
  return (
    <section className="bg-warmwhite py-24 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionHeading
              eyebrow="What we stand for"
              as="h1"
              headingClassName="text-[36px] md:text-[54px]"
            >
              Key values we look for.
            </SectionHeading>
          </div>
        </ScrollReveal>

        {/* Infographic row */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-0 items-start">
          {/* Horizontal dashed connector behind circles */}
          <div className="absolute top-[88px] left-[12.5%] right-[12.5%] border-t-[1.5px] border-dashed border-camellight z-0 hidden md:block" />

          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="group flex flex-col items-center relative z-10 px-4 pb-2">
                {/* Icon circle */}
                <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center relative shadow-[0_12px_40px_-8px_rgba(26,25,23,0.10),_0_2px_8px_rgba(26,25,23,0.05)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-[0_28px_56px_-12px_rgba(26,25,23,0.16)]">
                  {/* Inner ring */}
                  <div className="absolute inset-[10px] rounded-full border border-camel/20" />
                  {/* Icon */}
                  <div
                    className={`text-4xl ${ACCENT[v.accent].icon} opacity-[0.72] group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <FontAwesomeIcon icon={v.icon} />
                  </div>
                </div>

                {/* Dashed vertical connector */}
                <div className="w-0 h-9 border-l-[1.5px] border-dashed border-camellight group-hover:border-camel transition-colors duration-300" />

                {/* Numbered badge */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mb-5 transition-all duration-300 ${ACCENT[v.accent].badge}`}
                >
                  {i + 1}
                </div>

                {/* Text */}
                <div className="text-center px-2">
                  <div
                    className={`text-[10px] tracking-[0.18em] uppercase font-semibold mb-2.5 ${ACCENT[v.accent].title}`}
                  >
                    {v.title}
                  </div>
                  <p className="text-[13.5px] leading-[1.85] text-textmuted font-light">
                    {v.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
