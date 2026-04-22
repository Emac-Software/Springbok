import ScrollReveal from "@/ui/ScrollReveal";
import Button from "@/ui/Button";

const CASES = [
  {
    label: "Golf Club · Ontario",
    title: "Revitalizing Member Acquisition for a 400-Member Club",
    outcome: "47% increase in prospective member inquiries within 6 months.",
    tags: ["Digital Advertising", "Website Redesign", "Email Marketing"],
  },
  {
    label: "Country Club · Greater Toronto Area",
    title: "Building a Year-Round Content & Engagement Program",
    outcome:
      "Member event attendance up 30%. Open rates on club newsletters doubled.",
    tags: ["Social Media", "Email Campaigns", "Content Strategy"],
  },
  {
    label: "Sports Club · Ontario",
    title: "Launching a Referral-Driven Growth Campaign",
    outcome: "22 new member applications in the first quarter of the program.",
    tags: ["Referral Marketing", "Campaign Strategy", "Analytics"],
  },
];

export default function CaseStudies() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-camel mb-4">
              Results
            </p>
            <h1 className="font-serif text-6xl md:text-7xl font-normal text-cream mb-6">
              Case Studies
            </h1>
            <p className="font-sans text-cream/50 max-w-md mx-auto text-sm leading-relaxed">
              A sample of the results we've helped clubs achieve. Client names
              are withheld out of respect for their privacy.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {CASES.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <div className="p-8 md:p-10 border border-cream/10 rounded-xl hover:border-camel/30 transition-colors duration-300">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-camel/70 mb-4">
                  {c.label}
                </p>
                <h2 className="font-serif text-3xl text-cream font-normal mb-4 leading-tight">
                  {c.title}
                </h2>
                <p className="font-sans text-sm text-forest font-medium mb-6 leading-relaxed">
                  {c.outcome}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs tracking-wide text-cream/40 border border-cream/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16">
            <p className="font-sans text-sm text-cream/40 mb-6">
              Want results like these for your club?
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
