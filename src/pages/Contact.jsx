import ContactFormSection from "@/sections/contact/ContactFormSection";
import ScrollReveal from "@/ui/ScrollReveal";
import SectionHeading from "@/ui/SectionHeading";

export default function Contact() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-[1360px] mx-auto px-9">
        <ScrollReveal>
          <SectionHeading eyebrow="Contact">
            Let's start a real conversation.
          </SectionHeading>
        </ScrollReveal>

        <ContactFormSection />
      </div>
    </div>
  );
}
