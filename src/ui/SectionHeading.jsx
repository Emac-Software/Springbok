export default function SectionHeading({
  eyebrow,
  children,
  subtitle,
  as: Tag = "h1",
  className = "",
  headingClassName = "",
}) {
  return (
    <div className={`mb-12 ${className}`}>
      {eyebrow && (
        <div className="text-[11px] tracking-[0.2em] uppercase text-forest mb-5 font-semibold">
          {eyebrow}
        </div>
      )}
      <Tag
        className={`font-light leading-[1.05] tracking-[-0.02em] mb-7 text-[54px] ${headingClassName}`}
      >
        {children}
      </Tag>
      {subtitle && <p className="leading-[1.85] text-textmuted">{subtitle}</p>}
    </div>
  );
}
