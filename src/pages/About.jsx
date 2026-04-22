import ScrollReveal from "@/ui/ScrollReveal";
import Button from "@/ui/Button";

const VALUES = [
  {
    title: "Niche Over Generalist",
    body: "We work exclusively in the private club space. This isn't a vertical we dabbled in — it's all we do, and it shows in the quality of our work.",
  },
  {
    title: "Honest Counsel",
    body: "We'll tell you when something won't work. Our job is to be your marketing partner, not to sell you services you don't need.",
  },
  {
    title: "Discretion",
    body: "We understand that clubs operate with a level of privacy and tradition that demands a tactful partner. Your brand, your reputation, always protected.",
  },
];

export default function About() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-camel mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-6xl md:text-7xl font-normal text-cream">
              About Us
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
          <ScrollReveal>
            <div className="aspect-square rounded-2xl border border-cream/10 flex items-center justify-center bg-charcoal/50">
              <img
                src="/media/full-logo.png"
                alt="Springbok Media"
                className="w-2/3 opacity-70"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="pt-4">
              <h2 className="font-serif text-4xl text-cream font-normal mb-6 leading-tight">
                Built from a Genuine Love of Club Culture
              </h2>
              <p className="font-sans text-cream/50 text-sm leading-relaxed mb-5">
                Springbok Media was founded on a simple frustration: private
                clubs were being served by generalist agencies who treated them
                like any other client. The result was bland, ineffective
                marketing that missed the nuance of club culture entirely.
              </p>
              <p className="font-sans text-cream/50 text-sm leading-relaxed mb-5">
                We built Springbok Media to be different. Every strategy,
                campaign, and conversation is informed by a genuine
                understanding of what makes private clubs unique — their
                traditions, their members, and the unspoken standards that
                define great clubs.
              </p>
              <p className="font-sans text-cream/50 text-sm leading-relaxed mb-10">
                We're a small, senior team. You won't be handed off to a junior
                account manager. You'll work directly with the people who built
                this company and who care deeply about your club's reputation.
              </p>
              <Button
                variant="outline"
                to="/contact"
                className="px-8 py-3 text-xs"
              >
                Work With Us
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="border-t border-cream/10 pt-16">
            <h2 className="font-serif text-4xl text-cream font-normal text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <div className="p-6 border border-cream/10 rounded-xl">
                    <h3 className="font-serif text-xl text-camel font-normal mb-3">
                      {v.title}
                    </h3>
                    <p className="font-sans text-sm text-cream/50 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
