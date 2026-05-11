import TeamCard from "./TeamCard";
import SectionHeading from "@/ui/SectionHeading";
import ScrollReveal from "@/ui/ScrollReveal";

const camelFrame = "color-mix(in srgb, var(--color-camel) 50%, white)";

const TEAM = [
  {
    name: "Jake Davis",
    title: "Founder & Creative Director",
    bio: "Alexandra spent a decade inside private club operations before founding Springbok. She brings an insider's instinct to every campaign.",
    img: "assets/profiles/jake-davis-profile.png",
    frameColor: camelFrame,
    frameRotate: "-2deg",
    delay: 0.1,
  },
  {
    name: "Ethan McFarland",
    title: "Head of Strategy",
    bio: "James leads member communications and brand strategy, with a background in editorial publishing and luxury hospitality.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: camelFrame,
    frameRotate: "2deg",
    delay: 0.2,
  },
  {
    name: "Abby Davis",
    title: "Digital & Content Lead",
    bio: "Priya architects social and email programmes that feel native to each club's culture — never templated, always considered.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: camelFrame,
    frameRotate: "-1.5deg",
    delay: 0.25,
  },
  {
    name: "Jana",
    title: "Digital & Content Lead",
    bio: "Priya architects social and email programmes that feel native to each club's culture — never templated, always considered.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: camelFrame,
    frameRotate: "1.5deg",
    delay: 0.3,
  },
];

export default function MeetTheTeamSection() {
  return (
    <section className="bg-warmwhite py-24 md:py-[100px] px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between border-b pb-8 mb-[72px] gap-6"
          style={{ borderColor: "rgba(26,25,23,0.12)" }}
        >
          <SectionHeading
            eyebrow="The People Behind the Work"
            as="h2"
            headingClassName="text-[36px] md:text-[52px] !mb-0"
            className="!mb-0"
          >
            Meet the team.
          </SectionHeading>
          <p className="text-[13.5px] text-textmuted max-w-[320px] md:text-right font-light shrink-0 ">
            A small team, deliberately. Every client works directly with the
            people in these photographs.
          </p>
        </div>

        {/* 2×2 grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          style={{ alignItems: "start" }}
        >
          {TEAM.map((m, i) => (
            <ScrollReveal key={i} delay={m.delay}>
              <TeamCard m={m} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
