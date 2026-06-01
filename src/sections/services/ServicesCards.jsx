import { Share2, Mail, Camera, Target, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/ui/SectionHeading";
import ScrollReveal from "@/ui/ScrollReveal";

const SERVICES = [
  {
    number: "01",
    icon: Share2,
    title: "Social Media Strategy",
    description:
      "Building your presence on the platforms where your audience actually is. Consistent, on-brand, and designed to turn followers into customers.",
    notes: [
      "Instagram, TikTok, LinkedIn, Facebook strategy customized to your audience",
      "Competitor analysis included",
    ],
  },
  {
    number: "02",
    icon: Mail,
    title: "Email & Newsletter Comms",
    description:
      "Email that feels personal, not automated. Newsletters and campaigns built to keep your best customers engaged and coming back.",
    notes: ["Segmentation strategy", "Optimized A/B testing"],
  },
  {
    number: "03",
    icon: Camera,
    title: "Content Creation",
    description:
      "Photography, videography, copywriting, or graphic design. Each service is built to work standalone or together, always with intention.",
    notes: [
      "Usage rights and asset library included",
      "Brands we've shot: Sidewalkflowers, Himalayan Coffee House, Lev Bakery",
    ],
  },
  {
    number: "04",
    icon: Target,
    title: "Ads Strategy & Execution",
    description:
      "Paid advertising on Google, Meta, or X. Each campaign is built, monitored, and optimized standalone or as part of a larger strategy.",
    notes: [
      "Landing page adjustments for higher conversion",
      "Monthly strategy calls to optimize and refine",
    ],
  },
  {
    number: "05",
    icon: Globe,
    title: "Web Development",
    description:
      "We build sites that are fast, mobile-friendly, and designed to turn visitors into customers. Updates and maintenance included.",
    notes: [
      "Conversion checkout or booking flows",
      "Analytics setup & monthly performance reports",
    ],
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "SEO Strategy",
    description:
      "Being found when people search for you. We audit your site, build the strategy, and implement SEO so you show up in search results when your audience is actually looking.",
    notes: [
      "Keywords, competitor research, Google data",
      "We figure out what your audience is actually looking for and build from there.",
    ],
  },
];

function ServiceCard({ number, icon: Icon, title, description, notes }) {
  return (
    <Link
      to="/contact"
      className="relative overflow-hidden group rounded-2xl p-10 border bg-white border-black/[0.06] transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col no-underline"
    >
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-camel" />

      {/* Number */}
      <div className="text-[11px] tracking-[0.25em] uppercase mb-7 text-camel/60">
        {number}
      </div>

      {/* Icon */}
      <Icon className="w-5 h-5 mb-5 text-camel/70" strokeWidth={1.6} />

      {/* Divider */}
      <div className="w-full h-px my-5 bg-black/[0.08]" />

      {/* Title */}
      <h3 className="text-[22px] font-light leading-snug mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-textmuted">{description}</p>

      {/* Jot notes */}
      <div className="mt-4 space-y-1.5 translate-y-2 sm:opacity-0 sm:group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        {notes.map((note) => (
          <div
            key={note}
            className="flex items-start gap-2 text-[12px] text-textmuted"
          >
            <span className="text-camel shrink-0 mt-px">—</span>
            <span>{note}</span>
          </div>
        ))}
      </div>

      {/* Book a call */}
      <div className="mt-auto pt-6 flex justify-end">
        <span className="text-[11px] tracking-[0.15em] uppercase text-camel/40 group-hover:text-camel transition-colors duration-300">
          Book a call →
        </span>
      </div>
    </Link>
  );
}

export default function ServicesCards() {
  return (
    <section className="bg-cream py-24 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Section label */}
        <SectionHeading eyebrow="Our services" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.number} delay={(i % 3) * 0.08}>
              <ServiceCard {...s} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
