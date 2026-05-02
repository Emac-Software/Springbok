import Button from "@/ui/Button";

export default function CtaBand() {
  return (
    <section className="pb-20 pt-20 px-6 md:px-10">
      <div className="relative overflow-hidden bg-forest rounded-3xl">
        <img
          src="/assets/golf-hole-5.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(15,35,18,0.82)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 flex-wrap p-20">
          <div>
            <p
              className="text-[11px] tracking-[0.2em] uppercase font-medium mb-5"
              style={{
                color:
                  "color-mix(in srgb, var(--color-camel) 80%, transparent)",
              }}
            >
              Not sure where to start?
            </p>
            <h2 className="font-light text-white leading-[1.1] text-[clamp(38px,4.5vw,58px)] tracking-[-0.01em]">
              We'll figure it out together.
              <br />
            </h2>
          </div>
          <Button
            variant="camel"
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}
