import { Flag, Anchor, Dumbbell, Trophy, Leaf, Users } from "lucide-react";
import ScrollReveal from "@/ui/ScrollReveal";
import Button from "@/ui/Button";

const INDUSTRIES = [
  {
    icon: Flag,
    title: "Golf & Country Clubs",
    description:
      "Our primary focus. We understand the culture, the seasonality, and the expectations of golf and country club memberships in Ontario.",
    note: "Primary Specialty",
  },
  {
    icon: Trophy,
    title: "Sports & Racquet Clubs",
    description:
      "Tennis, squash, pickleball, and multi-sport clubs benefit from our expertise in event-driven content and community engagement.",
    note: null,
  },
  {
    icon: Anchor,
    title: "Yacht & Sailing Clubs",
    description:
      "Marine clubs have a unique membership culture. We craft messaging that speaks to the tradition of the water without losing modern appeal.",
    note: null,
  },
  {
    icon: Dumbbell,
    title: "Fitness & Wellness Clubs",
    description:
      "Premium fitness and wellness clubs that operate on a membership model and value curated community over mass-market growth.",
    note: null,
  },
  {
    icon: Leaf,
    title: "Hunt & Conservation Clubs",
    description:
      "Exclusive hunting and conservation clubs require a marketer who understands discretion and tradition above all else.",
    note: null,
  },
  {
    icon: Users,
    title: "Private Dining & Social Clubs",
    description:
      "City clubs, dining clubs, and social membership organizations looking to grow and retain a discerning membership.",
    note: null,
  },
];

export default function Industries() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-camel mb-4">
              Our Reach
            </p>
            <h1 className="font-serif text-6xl md:text-7xl font-normal text-cream mb-6">
              Other Industries We Work With
            </h1>
            <p className="font-sans text-cream/50 max-w-lg mx-auto text-sm leading-relaxed">
              While private golf and country clubs are our primary focus, our
              expertise extends to any private membership organization where
              culture, tradition, and quality matter.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={i * 0.08}>
              <div className="p-7 border border-cream/10 rounded-xl hover:border-camel/30 transition-colors duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <ind.icon
                    className="text-camel w-5 h-5 opacity-80"
                    strokeWidth={1.5}
                  />
                  {ind.note && (
                    <span className="font-sans text-xs text-forest border border-forest/30 rounded-full px-2.5 py-0.5">
                      {ind.note}
                    </span>
                  )}
                </div>
                <h2 className="font-serif text-xl text-cream font-normal mb-3">
                  {ind.title}
                </h2>
                <p className="font-sans text-sm text-cream/50 leading-relaxed flex-1">
                  {ind.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16">
            <p className="font-sans text-sm text-cream/40 mb-6">
              Not sure if we're a fit? Let's find out together.
            </p>
            <Button
              variant="primary"
              to="/contact"
              className="px-10 py-4 text-xs"
            >
              Book a Discovery Call
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
