import {
  Flag,
  Disc,
  Utensils,
  Anchor,
  Target,
  Trophy,
  Home,
  Leaf,
  Zap,
  Wine,
} from "lucide-react";
import ScrollReveal from "@/ui/ScrollReveal";

const MARQUEE_ITEMS = [
  { label: "Golf & Country", icon: Flag },
  { label: "Tennis Clubs", icon: Disc },
  { label: "Private Dining", icon: Utensils },
  { label: "Sailing Clubs", icon: Anchor },
  { label: "Curling Clubs", icon: Target },
  { label: "Sports Clubs", icon: Trophy },
  { label: "Family Clubs", icon: Home },
  { label: "Hunt Clubs", icon: Leaf },
  { label: "Racquet Clubs", icon: Zap },
  { label: "Social Clubs", icon: Wine },
];

const PILLS = [
  "Private Clubs",
  "Golf & Country",
  "Luxury Hospitality",
  "Member Organisations",
  "Boutique Sport",
];

const TRACK_ITEMS = MARQUEE_ITEMS.flatMap(({ label, icon }) => [
  { type: "text", label },
  { type: "icon", label, icon },
]);

function TrackItem({ type, label, icon: Icon }) {
  if (type === "icon") {
    return (
      <span className="inline-flex items-center px-10">
        <Icon
          className="w-5 h-5 text-camel opacity-70"
          strokeWidth={1.4}
          aria-label={label}
        />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-4 px-6 text-[12px] tracking-[0.22em] uppercase text-white/70">
      {label}
      <span className="w-px h-3 bg-white/15 inline-block" />
    </span>
  );
}

export default function IndustriesSection() {
  return (
    <section className="bg-forest py-24 overflow-hidden">
      <ScrollReveal>
        <div className="max-w-[1280px] mx-auto text-center mb-16 px-6">
          <div className="text-[11px] tracking-[0.25em] uppercase font-medium text-white mb-5">
            Our Industries
          </div>
          <h2 className="text-[clamp(34px,4vw,52px)] font-light text-white leading-[1.1] tracking-[-0.02em]">
            Built for <em className="text-camel">Elite Clubs.</em>
          </h2>
        </div>
      </ScrollReveal>

      {/* Track */}
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 inset-y-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--color-forest), transparent)",
          }}
        />
        <div
          className="absolute right-0 inset-y-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--color-forest), transparent)",
          }}
        />
        <div className="flex animate-marquee-mobile md:animate-marquee-tablet lg:animate-marquee-desktop whitespace-nowrap will-change-transform shrink-0 justify-around min-w-full">
          {[...TRACK_ITEMS, ...TRACK_ITEMS].map((item, i) => (
            <TrackItem key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Pills */}
      <div className="max-w-[1280px] mx-auto mt-12 flex flex-wrap justify-center gap-3 px-6">
        {PILLS.map((tag) => (
          <span
            key={tag}
            className="text-[11px] bg-white/10 tracking-[0.15em] uppercase px-5 py-2 rounded-full border border-white/10 text-white/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
