import TeamCard from "./TeamCard";
import SectionHeading from "@/ui/SectionHeading";
import ScrollReveal from "@/ui/ScrollReveal";

const founderFrameColor = "color-mix(in srgb, var(--color-camel) 50%, white)";
const employeeFrameColor = "color-mix(in srgb, var(--color-forest) 30%, white)";
const TEAM = [
  {
    name: "Jake Davis",
    title: "Founder & Creative Director",
    bio: "Alexandra spent a decade inside private club operations before founding Springbok. She brings an insider's instinct to every campaign.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: founderFrameColor,
    frameRotate: "-2deg",
    large: true,
    delay: 0.1,
  },
  {
    name: "Ethan McFarland",
    title: "Head of Strategy",
    bio: "James leads member communications and brand strategy, with a background in editorial publishing and luxury hospitality.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: employeeFrameColor,
    frameRotate: "2deg",
    large: false,
    delay: 0.25,
  },
  {
    name: "Abby Davis",
    title: "Digital & Content Lead",
    bio: "Priya architects social and email programmes that feel native to each club's culture — never templated, always considered.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: employeeFrameColor,
    frameRotate: "-1.5deg",
    large: false,
    delay: 0.3,
  },
  {
    name: "Jana",
    title: "Digital & Content Lead",
    bio: "Priya architects social and email programmes that feel native to each club's culture — never templated, always considered.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: employeeFrameColor,
    frameRotate: "-1.5deg",
    large: false,
    delay: 0.35,
  },
];

const CONNECTOR_PATHS = [
  "M 560 0 L 560 35", // trunk down from founder
  "M 560 35 Q 177 35 177 70", // curve to left employee
  "M 560 35 L 560 70", // straight to center employee
  "M 560 35 Q 943 35 943 70", // curve to right employee
];

export default function MeetTheTeamSection() {
  const [founder, ...employees] = TEAM;

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
            headingClassName="text-[36px] md:text-[52px]"
            className="mb-0"
          >
            Meet the team.
          </SectionHeading>
          <p className="text-[13.5px] leading-[1.85] text-textmuted max-w-[320px] md:text-right font-light shrink-0">
            A small team, deliberately. Every client works directly with the
            people in these photographs.
          </p>
        </div>

        {/* Org chart */}
        <div>
          {/* Founder — centered on top */}
          <div className="flex justify-center pb-8">
            <div className="w-full max-w-[340px]">
              <ScrollReveal delay={founder.delay}>
                <TeamCard m={founder} />
              </ScrollReveal>
            </div>
          </div>

          {/* SVG connector — hidden on mobile */}
          <div className="hidden md:block">
            <svg
              width="100%"
              viewBox="0 0 1120 70"
              xmlns="http://www.w3.org/2000/svg"
            >
              {CONNECTOR_PATHS.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  stroke="rgba(26,25,23,0.18)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                  fill="none"
                />
              ))}
            </svg>
          </div>

          {/* Employees — 3-column grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
            style={{ alignItems: "start" }}
          >
            {employees.map((m, i) => (
              <ScrollReveal key={i} delay={m.delay}>
                <TeamCard m={m} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
