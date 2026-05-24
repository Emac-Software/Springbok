import Button from "@/ui/Button";

export default function CtaBand() {
  return (
    <section className="pb-20 px-6 md:px-10">
      <div className="relative overflow-hidden bg-forest rounded-3xl">
        <img
          src="/assets/people/group-smile.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover sm:object-[center_33%]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(15,35,18,0.82)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 flex-wrap pt-20 pb-20 pl-0 pr-0 sm:p-20">
          <div>
            <p
              className="text-[11px] tracking-[0.2em] uppercase font-medium mb-5"
              style={{
                color:
                  "color-mix(in srgb, var(--color-camel) 80%, transparent)",
              }}
            >
              Come say hello!
            </p>
            <h2 className="font-light text-white leading-[1.1] text-[clamp(38px,4.5vw,58px)] tracking-[-0.01em]">
              Tell us about
              <br />
              <em className="text-camel">your brand.</em>
            </h2>
          </div>

          <Button variant="camel" to="/contact">
            <span className="hidden sm:inline">Book a Discovery Call</span>
            <span className="sm:hidden">Book a Call</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
