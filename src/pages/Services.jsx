import {
  BarChart3,
  Users,
  MessageCircle,
  Globe,
  Mail,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/ui/ScrollReveal";
import Button from "@/ui/Button";

const SERVICES = [
  {
    icon: BarChart3,
    title: "Member Acquisition Campaigns",
    description:
      "Targeted digital campaigns designed to attract qualified prospective members who align with your club's culture and long-term vision. From paid search to social media, we know where your ideal member is and how to reach them.",
  },
  {
    icon: Users,
    title: "Member Engagement & Retention",
    description:
      "Keep your membership active, informed, and invested. We develop communication strategies, event marketing plans, and content programs that deepen the member relationship year-round.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Your website is the first impression for prospective members. We build clean, premium websites that reflect your club's prestige and convert curious visitors into inquiry submissions.",
  },
  {
    icon: MessageCircle,
    title: "Social Media Management",
    description:
      "Consistent, on-brand content across the channels your members and prospects actually use. We handle strategy, creation, scheduling, and reporting — so you don't have to.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "From monthly member newsletters to targeted acquisition drips, we design and manage email programs that get opened, read, and acted upon.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description:
      "Clear, honest reporting on what's working and what isn't. We track the metrics that matter to your club's goals and translate data into plain-English recommendations.",
  },
];

export default function Services() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-camel mb-4">
              What We Offer
            </p>
            <h1 className="font-serif text-6xl md:text-7xl font-normal text-cream mb-6">
              Our Services
            </h1>
            <p className="font-sans text-cream/50 max-w-xl mx-auto leading-relaxed text-sm">
              Everything we offer is designed specifically for private clubs. No
              generic packages. No one-size-fits-all strategies.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="p-8 border border-cream/10 rounded-xl hover:border-camel/30 transition-colors duration-300 h-full">
                <service.icon
                  className="text-camel mb-6 w-6 h-6 opacity-80"
                  strokeWidth={1.5}
                />
                <h2 className="font-serif text-2xl text-cream mb-3 font-normal">
                  {service.title}
                </h2>
                <p className="font-sans text-sm text-cream/50 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16">
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
