import {
  Share2,
  Mail,
  Image,
  Search,
  CalendarDays,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/ui/SectionHeading";
import ScrollReveal from "@/ui/ScrollReveal";

const SERVICES = [
  {
    number: "01",
    icon: Share2,
    title: "Social Media Strategy",
    description:
      "Platform-native content that reflects the prestige and culture of your club — never generic, never off-brand.",
    notes: [
      "Platform-specific content strategy",
      "Monthly calendar & scheduling",
    ],
  },
  {
    number: "02",
    icon: Mail,
    title: "Email & Member Comms",
    description:
      "Event invitations, newsletters, and seasonal campaigns crafted to sound like they came from inside your club.",
    notes: ["Custom branded templates", "Event & newsletter campaigns"],
  },
  {
    number: "03",
    icon: Image,
    title: "Content & Photography",
    description:
      "A consistent, elevated visual identity across all channels, built from a library your team can draw from year-round.",
    notes: ["On-site shoot days available", "Reusable brand asset library"],
  },
  {
    number: "04",
    icon: Search,
    title: "Digital Reputation",
    description:
      "Ensuring your club appears credibly and attractively everywhere prospective members and event guests search.",
    notes: ["Google Business optimisation", "Review & listing management"],
  },
  {
    number: "05",
    icon: CalendarDays,
    title: "Event Campaigns",
    description:
      "Tournament days, gala dinners, championships — each deserves its own campaign, planned end-to-end.",
    notes: ["End-to-end campaign planning", "Multi-channel promotion"],
  },
  {
    number: "06",
    icon: Activity,
    title: "Strategy & Consulting",
    description:
      "For clubs with internal teams that need strategic guidance. We embed as your fractional marketing director.",
    notes: ["Fractional marketing director", "Quarterly roadmaps & audits"],
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
