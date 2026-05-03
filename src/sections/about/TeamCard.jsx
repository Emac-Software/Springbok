import { motion } from "framer-motion";

export default function TeamCard({ m }) {
  const easeOut = [0.22, 1, 0.36, 1];

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
            className="w-full h-full object-cover object-middle block"
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
