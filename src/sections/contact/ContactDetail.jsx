export default function ContactDetail({ icon, label, value, sub }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-[9px] bg-white/10 border border-white flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="font-sans text-xs tracking-[0.14em] uppercase text-white/40 font-medium mb-0.5">
          {label}
        </p>
        <p className="font-sans text-sm text-white">{value}</p>
        {sub && <p className="font-sans text-xs text-white/50 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}
