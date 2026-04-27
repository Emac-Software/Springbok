import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CAPABILITIES = [
  {
    number: "01",
    title: "Social Media Strategy",
    body: "Platform-native narratives reflecting your club's distinct prestige.",
    tag: "Organic + Paid",
    slug: "/services/social-media",
  },
  {
    number: "02",
    title: "Email & Member Comms",
    body: "Elegant, targeted communications for refined member expectations.",
    tag: "Retention Focus",
    slug: "/services/email-comms",
  },
  {
    number: "03",
    title: "Content & Photography",
    body: "Architectural and lifestyle visuals for a cohesive brand identity.",
    tag: "Visual Identity",
    slug: "/services/content-photography",
  },
  {
    number: "04",
    title: "Reputation & Search",
    body: "Meticulously curated digital footprints reflecting your legacy.",
    tag: "Always-On",
    slug: "/services/reputation",
  },
  {
    number: "05",
    title: "Member Acquisition",
    body: "Precision-targeted campaigns to attract aligned prospective members.",
    tag: "Growth",
    slug: "/services/acquisition",
  },
];

export default function CapabilityScroll() {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [grabbing, setGrabbing] = useState(false);
  const [paddingOffset, setPaddingOffset] = useState("40px");

  // Scroll indicator state
  const [scrollData, setScrollData] = useState({ width: 0, left: 0 });

  // Calculates the progress line width and position based on scroll amount
  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;

    const thumbWidth = (clientWidth / scrollWidth) * 100;
    const thumbLeft = (scrollLeft / scrollWidth) * 100;

    setScrollData({ width: thumbWidth, left: thumbLeft });
  };

  // Calculates the exact padding needed to align with the max-w-[1280px] header
  useEffect(() => {
    const calculateLayout = () => {
      const windowWidth = window.innerWidth;
      const basePadding = windowWidth >= 768 ? 64 : 40;
      if (windowWidth > 1280) {
        const extraSpace = (windowWidth - 1280) / 2;
        setPaddingOffset(`${basePadding + extraSpace}px`);
      } else {
        setPaddingOffset(`${basePadding}px`);
      }

      setTimeout(handleScroll, 50);
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, []);

  // Update the scroll line when padding changes
  useEffect(() => {
    handleScroll();
  }, [paddingOffset]);

  const onMouseDown = (e) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    scrollStart.current = trackRef.current.scrollLeft;
    setGrabbing(true);
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const moveDistance = Math.abs(e.clientX - startX.current);
    if (moveDistance > 5) {
      hasDragged.current = true;
    }
    trackRef.current.scrollLeft =
      scrollStart.current - (e.clientX - startX.current);
  };

  const onMouseUp = () => {
    isDragging.current = false;
    setGrabbing(false);
  };

  const handleLinkClick = (e) => {
    if (hasDragged.current) {
      e.preventDefault();
    }
  };

  return (
    <section className="py-24 overflow-hidden bg-offwhite">
      {/* Section header */}
      <div className="px-10 md:px-16 mb-12 max-w-[1280px] mx-auto">
        <p className="text-[10px] text-forest tracking-[0.3em] uppercase font-semibold mb-4">
          What we offer
        </p>
        <h2 className="font-light leading-[1.1] text-[clamp(32px,4vw,52px)] tracking-[-0.02em]">
          Services tailored to you.
        </h2>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto pb-10"
        style={{
          cursor: grabbing ? "grabbing" : "grab",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          paddingLeft: paddingOffset,
          paddingRight: paddingOffset,
          scrollPaddingLeft: paddingOffset,
          scrollPaddingRight: paddingOffset,
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {CAPABILITIES.map((cap) => (
          <Link
            to={cap.slug}
            key={cap.number}
            onClick={handleLinkClick}
            draggable={false}
            className="group flex-shrink-0 rounded-2xl p-10 flex flex-col justify-between select-none transition-all duration-400 hover:-translate-y-2 relative overflow-hidden w-[clamp(300px,32vw,400px)] min-h-[320px] snap-start bg-white border border-black/[0.03] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)]"
          >
            {/* Top */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[13px] tracking-[0.25em] uppercase font-semibold text-camel">
                  {cap.number}
                </span>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-medium text-camel"
                  style={{
                    background:
                      "color-mix(in srgb, var(--color-camel) 12%, transparent)",
                  }}
                >
                  {cap.tag}
                </span>
              </div>
              <h3 className="font-light leading-[1.1] mb-5 text-[clamp(24px,2.2vw,30px)] tracking-[-0.01em]">
                {cap.title}
              </h3>
              <p className="text-[14.5px] leading-[1.7] font-light text-textmuted">
                {cap.body}
              </p>
            </div>

            {/* Hover Reveal: Learn More */}
            <div className="mt-8 flex items-center gap-2 transform translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-forest">
                Learn More
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-forest transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Dynamic Scroll Progress Line */}
      <div className="max-w-[1280px] mx-auto px-10 md:px-16 mt-4">
        <div
          className="w-full h-[1px] relative rounded-full bg-black/[0.06]"
        >
          <div
            className="absolute top-0 h-[2px] -mt-[0.5px] rounded-full transition-transform duration-75 ease-out bg-forest"
            style={{
              width: `${scrollData.width}%`,
              left: `${scrollData.left}%`,
            }}
          />
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
