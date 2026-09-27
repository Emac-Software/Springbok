import { useState, useEffect, useRef } from "react";
import SectionHeading from "@/ui/SectionHeading";
import CaseSlide from "@/sections/cases/CaseSlide";
import Button from "@/ui/Button";

// -- DATA --
const cases = [
  {
    id: "01",
    title: "Wooden Sticks Golf Club",
    label: "Marketing, Social & Email",
    link: "https://jakedavis667ca1e.myportfolio.com/copy-of-sidewalk-flowers",
    description:
      "Brought a legacy course with world-class replica holes out of digital obscurity, aligning its online presence with the premium experience on the ground.",
    results: [
      "+200% (1,200 to 3,600) Instagram/Facebook Follower Growth ",
      "Multiple videos exceeding 120k views",
      "+20% engagement Increase",
      "Launched presence on 3 new platforms (TikTok, email, search)",
    ],
    images: [
      "/assets/courses/wdstx-hole-11a.png",
      "/assets/golfers/golfer-swing-bunker.jpg",
      "/assets/courses/wdstx-hole-17.png",
      "/assets/golfers/golfer-swing-range.jpg",
    ],
  },
  {
    id: "02",
    title: "Sidewalk Flowers",
    label: "Campaign, Social & Paid",
    link: "https://jakedavis667ca1e.myportfolio.com/sidewalk-flowers",
    description:
      'Turned a founder\'s 200K-strong personal following into brand momentum with "Grow Together", a bright, healing-focused campaign that stood apart in streetwear.',
    results: [
      "Complete sellout within 30 days",
      "+40% (12K to 16.8K) Instagram follower growth",
      "30,000 campaign reel views",
      "Significant lift in shares, comments & likes",
    ],
    images: [
      "/assets/sidewalk-flowers/group-photo.jpg",
      "/assets/sidewalk-flowers/photo-shoot.jpeg",
      "/assets/sidewalk-flowers/group-photo-outside.jpg",
    ],
  },
  {
    id: "03",
    title: "Thornbury Athletic & Racquet Club",
    label: "Member Acquisition",
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
export default function CaseStudiesPage() {
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
      <div className="flex flex-col sm:flex-row sm:h-[calc(100vh-76px)]">
        {/* ── LEFT: Sticky Panel ── */}
        <div className="w-full sm:w-1/2 shrink-0 sm:sticky sm:top-[76px] sm:h-[calc(100vh-76px)] flex items-center sm:justify-end z-10 relative bg-inherit">
          <div className="w-full max-w-[700px] flex flex-col gap-6 sm:gap-10 py-8 px-6 sm:py-[72px] sm:px-[52px] border-b sm:border-b-0 sm:border-r border-charcoal/10">
            <div>
              <SectionHeading
                eyebrow="Proof of Work"
                subtitle="Names changed at client request. Every result is real and
                independently verifiable."
              >
                Work that speaks for itself.
              </SectionHeading>
              <Button
                to="/contact"
                variant="forest"
                className="mt-4 sm:mt-0 !px-5"
              >
                Start your project
              </Button>
            </div>

            {/* Active Case Mini-Detail */}
            <div className="hidden sm:block border-t border-white/10 pt-6 sm:pt-8">
              <div className="font-sans text-[10px] text-textmuted tracking-[0.2em] uppercase mb-4 sm:mb-5">
                {activeIndex + 1} / {cases.length}
              </div>
              <div className="flex flex-col gap-3">
                {activeCase.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-[1px] bg-forest shrink-0" />
                    <span className="font-sans text-[15px] font-normal tracking-[0.02em] transition-colors duration-500">
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Vertical Wheel Carousel ── */}
        <div className="w-full sm:flex-1 relative h-[83vh] sm:h-auto overflow-hidden">
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
          <div className="absolute right-4 sm:right-9 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 pointer-events-none">
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
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            <button
              onClick={(e) => {
                e.currentTarget.blur();
                const i = Math.max(activeIndex - 1, 0);
                const slide = slideRefs.current[i];
                if (scrollContainerRef.current && slide) {
                  setTimeout(() => {
                    scrollContainerRef.current.scrollTo({
                      top: slide.offsetTop,
                      behavior: "smooth",
                    });
                  }, 50);
                }
              }}
              disabled={activeIndex === 0}
              aria-label="Previous case"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-cream/[0.12] bg-charcoal/40 backdrop-blur-sm text-cream/60 transition-all duration-200 sm:hover:border-camel/40 sm:hover:text-cream active:scale-90 disabled:opacity-20 disabled:pointer-events-none"
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
              onClick={(e) => {
                e.currentTarget.blur();
                const i = Math.min(activeIndex + 1, cases.length - 1);
                const slide = slideRefs.current[i];
                if (scrollContainerRef.current && slide) {
                  setTimeout(() => {
                    scrollContainerRef.current.scrollTo({
                      top: slide.offsetTop,
                      behavior: "smooth",
                    });
                  }, 50);
                }
              }}
              disabled={activeIndex === cases.length - 1}
              aria-label="Next case"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-cream/[0.12] bg-charcoal/40 backdrop-blur-sm text-cream/60 transition-all duration-200 sm:hover:border-camel/40 sm:hover:text-cream active:scale-90 disabled:opacity-20 disabled:pointer-events-none"
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
