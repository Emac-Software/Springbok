import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

const checkpoints = [
  "Choose any available 30-minute slot",
  "We come prepared — no generic intro",
  "Honest assessment of fit, every time",
];

export default function CalendlyTab() {
  return (
    <div className="flex-1 flex flex-col relative">
      {/* Calendar icon + trail */}
      <div
        aria-hidden="true"
        className="absolute top-8 right-44 pointer-events-none select-none text-camel opacity-60"
      >
        <div className="relative w-10 h-10">
          <FontAwesomeIcon icon={faCalendarAlt} className="w-20 h-20" />

          {/* Trail exits from the right side of the icon and flows right */}
          <svg
            className="absolute top-2/3 left-full -translate-y-1/2 overflow-visible"
            width="1"
            height="1"
            viewBox="0 0 1 1"
            fill="none"
          >
            <path
              d="M 20 0 C 40 0, 60 -30, 60 -50 C 60 -70, 20 -70, 20 -50 C 20 -30, 60 10, 120 10 C 180 10, 220 -10, 260 -10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex gap-8 items-start mb-8">
        <div className="flex-1 pr-14">
          <h2 className="text-3xl font-normal text-charcoal leading-snug mb-3">
            Schedule a Discovery Call
          </h2>
          <p className="font-sans text-sm text-textmuted leading-relaxed max-w-md">
            30 minutes. No pitch deck. No hard sell. Just a genuine conversation
            about your club and whether we're the right fit.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {checkpoints.map((point, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-camel/15 border border-camel/30 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-2.5 h-2.5 text-camel"
              />
            </div>
            <span className="font-sans text-sm text-charcoal">{point}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 w-full overflow-hidden bg-white">
        <iframe
          // 1. Notice the background_color=ffffff at the end of the URL
          src="https://calendly.com/jakedavis667/30min?hide_event_type_details=1"
          // 2. Give the iframe enough height so it doesn't need to scroll
          className="w-full h-[750px] border-none bg-white"
          scrolling="no"
          title="Schedule a Discovery Call"
        />
      </div>
    </div>
  );
}
