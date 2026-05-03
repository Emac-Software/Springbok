import { useState, useEffect, useRef } from "react";
import SectionHeading from "@/ui/SectionHeading";
import CaseSlide from "@/sections/cases/CaseSlide";
import Button from "@/ui/Button";

// -- DATA --
const cases = [
  {
    id: "01",
    title: "Muskoka Highlands Golf Club",
    label: "Social & Email",
    year: "2023",
    description:
      "Repositioned a storied Muskoka club for the next generation of members without alienating its founding families.",
    results: [
      "42% email open rate lift",
      "3× Instagram engagement",
      "First sold-out event in 4 years",
    ],
    images: [
      "/assets/courses/wdstx-hole-1.png",
      "/assets/golfers/golfer-style.jpg",
      "/assets/courses/wdstx-hole-17.png",
    ],
  },
  {
    id: "02",
    title: "Lakeview Country Club",
    label: "Reputation Management",
    year: "2023",
    description:
      "Turned a reputational crisis into a communications advantage ahead of a $12M capital campaign.",
    results: [
      "Rating 3.2 → 4.6 in 8 months",
      "Capital campaign fully funded",
      "Regional press coverage",
    ],
    images: [
      "/assets/golfers/golfer-swing-bunker.jpg",
      "/assets/golfers/golfer-swing-range.jpg",
      "/assets/golfers/golfer-swing-rough.jpg",
    ],
  },
  {
    id: "03",
    title: "Thornbury Athletic & Racquet Club",
    label: "Member Acquisition",
    year: "2024",
    description:
      "Launched a junior programme that filled a waiting list in its first season and revitalised the membership pipeline.",
    results: [
      "48 junior memberships",
      "Family membership +22% YOY",
      "2 national programme awards",
    ],
    images: [
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: "04",
    title: "Rideau Lakes Sailing Club",
    label: "Content & Events",
    year: "2024",
    description:
      "Built a seasonal content engine that made their short summer calendar feel like a year-round conversation.",
    results: [
      "Event attendance +38%",
      "New member enquiries doubled",
      "Regatta media coverage",
    ],
    images: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?w=600&q=80&auto=format&fit=crop",
    ],
  },
];

// -- CONTENT --
export default function CaseStudiesPage({ setPage = () => {} }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.6,
      },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, []);

  const activeCase = cases[activeIndex];

  return (
    <div className="pt-[76px] min-h-screen">
      <div className="flex h-[calc(100vh-76px)]">
        {/* ── LEFT: Sticky Panel ── */}
        <div className="w-1/2 shrink-0 sticky top-[76px] h-[calc(100vh-76px)] flex items-center justify-end">
          <div className="w-full max-w-[700px] flex flex-col gap-10 py-[72px] px-[52px] border-r border-charcoal/10">
            <div>
              <SectionHeading
                eyebrow="Proof of Work"
                subtitle="Names changed at client request. Every result is real and
                independently verifiable."
              >
                Work that speaks for itself.
              </SectionHeading>
              <Button to="/contact" variant="forest" className="">
                Start your project
              </Button>
            </div>

            {/* Active Case Mini-Detail */}
            <div className="border-t border-white/10 pt-8">
              <div className="font-sans text-[10px] text-textmuted tracking-[0.2em] uppercase mb-5">
                {activeIndex + 1} / {cases.length}
              </div>
              <div className="flex flex-col gap-2.5">
                {activeCase.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="w-5 h-[1px] bg-forest shrink-0" />
                    <span className="font-sans text-[12.5px] font-normal tracking-[0.02em] transition-colors duration-500">
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Vertical Wheel Carousel ── */}
        <div className="flex-1 relative">
          <div
            ref={scrollContainerRef}
            className="w-full h-full flex flex-col items-center overflow-y-auto snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {cases.map((study, index) => (
              <CaseSlide
                key={study.id}
                study={study}
                index={index}
                activeIndex={activeIndex}
                ref={(el) => (slideRefs.current[index] = el)}
              />
            ))}
          </div>

          {/* Scroll Nav Dots */}
          <div className="absolute right-9 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 pointer-events-none">
            {cases.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === activeIndex ? 24 : 8,
                  height: 8,
                  background:
                    i === activeIndex
                      ? "var(--color-camel)"
                      : "color-mix(in srgb, var(--color-camel) 30%, transparent)",
                }}
              />
            ))}
          </div>

          {/* Up / Down pill arrows */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            <button
              onClick={() => {
                const i = Math.max(activeIndex - 1, 0);
                const slide = slideRefs.current[i];
                if (scrollContainerRef.current && slide)
                  scrollContainerRef.current.scrollTo({
                    top: slide.offsetTop,
                    behavior: "smooth",
                  });
              }}
              disabled={activeIndex === 0}
              aria-label="Previous case"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-cream/[0.12] bg-charcoal/40 backdrop-blur-sm text-cream/60 transition-all duration-200 hover:border-camel/40 hover:text-cream disabled:opacity-20 disabled:pointer-events-none"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M1.5 8.5L6.5 3.5L11.5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                const i = Math.min(activeIndex + 1, cases.length - 1);
                const slide = slideRefs.current[i];
                if (scrollContainerRef.current && slide)
                  scrollContainerRef.current.scrollTo({
                    top: slide.offsetTop,
                    behavior: "smooth",
                  });
              }}
              disabled={activeIndex === cases.length - 1}
              aria-label="Next case"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-cream/[0.12] bg-charcoal/40 backdrop-blur-sm text-cream/60 transition-all duration-200 hover:border-camel/40 hover:text-cream disabled:opacity-20 disabled:pointer-events-none"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M1.5 4.5L6.5 9.5L11.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
