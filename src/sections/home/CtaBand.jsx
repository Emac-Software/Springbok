import { Link } from "react-router-dom";
import Button from "@/ui/Button";

export default function CtaBand() {
  return (
    <section className="bg-white pb-20 px-6 md:px-10">
      <div className="relative overflow-hidden bg-forest rounded-3xl">
        {/* Golf image — drop /images/golf-cta.jpg to activate */}
        <img
          src="/assets/golf-hole-2.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15,35,18,0.82)" }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 flex-wrap"
          style={{ padding: "80px 80px" }}
        >
          <div>
            <p
              className="font-sans text-[11px] tracking-[0.2em] uppercase font-medium mb-5"
              style={{
                color:
                  "color-mix(in srgb, var(--color-camel) 80%, transparent)",
              }}
            >
              Ready to begin?
            </p>
            <h2
              className="font-serif font-light text-white leading-[1.1]"
              style={{
                fontSize: "clamp(38px, 4.5vw, 58px)",
                letterSpacing: "-0.01em",
              }}
            >
              Let's talk about
              <br />
              <em style={{ color: "var(--color-camel)" }}>your club.</em>
            </h2>
          </div>
          <Button
            variant="camel"
            to="/contact"
            // className="w-full py-4 text-sm justify-center mt-5"
            onClick={() => setMenuOpen(false)}
          >
            Book a Discovery Call
          </Button>
          {/* <Link
            to="/contact"
            className="font-sans text-sm font-medium tracking-[0.1em] uppercase text-forest bg-white px-14 py-[18px] rounded-full transition-all duration-300 hover:-translate-y-[3px] flex-shrink-0"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.25)" }}
          >
            Book a Discovery Call
          </Link> */}
        </div>
      </div>
    </section>
  );
}
