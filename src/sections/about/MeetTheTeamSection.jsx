import { motion } from "framer-motion";
import SectionHeading from "@/ui/SectionHeading";
import ScrollReveal from "@/ui/ScrollReveal";

const TEAM = [
  {
    name: "Jake Davis",
    title: "Founder & Creative Director",
    bio: "Alexandra spent a decade inside private club operations before founding Springbok. She brings an insider's instinct to every campaign.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: "color-mix(in srgb, var(--color-camel) 20%, white)",
    frameRotate: "-2deg",
    large: true,
    delay: 0.1,
  },
  {
    name: "Ethan McFarland",
    title: "Head of Strategy",
    bio: "James leads member communications and brand strategy, with a background in editorial publishing and luxury hospitality.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: "color-mix(in srgb, var(--color-forest) 12%, white)",
    frameRotate: "2deg",
    large: false,
    delay: 0.25,
  },
  {
    name: "Abby Davis",
    title: "Digital & Content Lead",
    bio: "Priya architects social and email programmes that feel native to each club's culture — never templated, always considered.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: "color-mix(in srgb, var(--color-periwinkle) 18%, white)",
    frameRotate: "-1.5deg",
    large: false,
    delay: 0.4,
  },
  {
    name: "Jana",
    title: "Digital & Content Lead",
    bio: "Priya architects social and email programmes that feel native to each club's culture — never templated, always considered.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85&auto=format&fit=crop&crop=faces,top",
    frameColor: "color-mix(in srgb, var(--color-periwinkle) 18%, white)",
    frameRotate: "-1.5deg",
    large: false,
    delay: 0.55,
  },
];

const easeOut = [0.22, 1, 0.36, 1];

// Column centers in the 1120px inner grid (1280px container - 2×80px padding)
// 3 equal cols with gap-7 (28px): col width = (1120-56)/3 = 354.67px
const CONNECTOR_PATHS = [
  "M 560 0 L 560 35", // trunk down from founder
  "M 560 35 Q 177 35 177 70", // curve to left employee
  "M 560 35 L 560 70", // straight to center employee
  "M 560 35 Q 943 35 943 70", // curve to right employee
];

function TeamCard({ m }) {
  return (
    <motion.div
      className="relative cursor-default"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <div className="relative">
        {/* Decorative frame */}
        <motion.div
          className="absolute inset-0 rounded-2xl z-0"
          style={{ background: m.frameColor, originX: "50%", originY: "50%" }}
          variants={{
            rest: { rotate: m.frameRotate, scale: 1 },
            hover: {
              rotate: `${parseFloat(m.frameRotate) + (parseFloat(m.frameRotate) < 0 ? -1.5 : 1.5)}deg`,
              scale: 1.02,
            },
          }}
          transition={{ duration: 0.45, ease: easeOut }}
        />

        {/* Image wrapper */}
        <motion.div
          className="relative z-10 rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12),0_6px_20px_rgba(0,0,0,0.07)]"
          style={{ height: m.large ? 460 : 330, marginTop: m.large ? -8 : -6 }}
          variants={{ rest: { y: 0 }, hover: { y: -10 } }}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          <img
            src={m.img}
            alt={m.name}
            className="w-full h-full object-cover object-top block"
            style={{ filter: "contrast(1.03) brightness(1.01) saturate(0.95)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: m.large ? 160 : 120,
              background:
                "linear-gradient(to bottom, transparent, rgba(26,25,23,0.28))",
            }}
          />
        </motion.div>

        {/* Floating name badge */}
        <div
          className="absolute bg-white rounded-[14px] z-30 shadow-[0_12px_40px_rgba(26,25,23,0.13),0_2px_8px_rgba(26,25,23,0.06)]"
          style={{
            bottom: m.large ? -22 : -18,
            left: m.large ? 24 : 18,
            padding: m.large ? "18px 24px" : "14px 20px",
            minWidth: m.large ? 220 : 180,
          }}
        >
          <div
            className={`font-semibold tracking-[-0.01em] mb-1 ${m.large ? "text-[16px]" : "text-[14px]"}`}
          >
            {m.name}
          </div>
          <div
            className={`font-medium tracking-[0.18em] uppercase text-camel ${m.large ? "text-[10px]" : "text-[9px]"}`}
          >
            {m.title}
          </div>
        </div>

        {/* LinkedIn hover dot */}
        <motion.div
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white shadow-[0_4px_16px_rgba(26,25,23,0.12)] flex items-center justify-center"
          variants={{ rest: { opacity: 0, y: 6 }, hover: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-charcoal"
          >
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
            <path d="M2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </motion.div>
      </div>

      {/* Bio */}
      <div className="px-1" style={{ marginTop: m.large ? 48 : 40 }}>
        <p
          className={`leading-[1.85] text-textmuted font-light ${m.large ? "text-[14.5px]" : "text-[13.5px]"}`}
        >
          {m.bio}
        </p>
      </div>
    </motion.div>
  );
}

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
