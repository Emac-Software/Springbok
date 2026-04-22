import ContactFormSection from "@/sections/ContactFormSection";
import ScrollReveal from "@/ui/ScrollReveal";

export default function Contact() {
  return (
    <div className="pt-28">
      <div className="max-w-3xl mx-auto px-6 text-center mb-4">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-camel mb-4">
            Let's Talk
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-normal text-cream mb-6">
            Contact Us
          </h1>
          <p className="font-sans text-cream/50 text-sm leading-relaxed max-w-md mx-auto">
            We'd love to hear about your club. Reach out below or book a
            discovery call directly — no pressure, no pitch, just a
            conversation.
          </p>
        </ScrollReveal>
      </div>

      <ContactFormSection />

      {/* Calendly placeholder */}
      <section id="calendly" className="py-16 px-6 border-t border-cream/5">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-camel mb-4">
              Prefer to Book Directly?
            </p>
            <h2 className="font-serif text-4xl text-cream font-normal mb-6">
              Schedule a Discovery Call
            </h2>
            <p className="font-sans text-cream/50 text-sm mb-10">
              Pick a time that works for you. 30 minutes, no obligation.
            </p>
            {/* Replace the div below with a Calendly embed widget */}
            <div className="border border-cream/10 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <p className="font-sans text-xs text-cream/25 tracking-[0.1em]">
                [ Calendly Embed — replace this placeholder ]
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
