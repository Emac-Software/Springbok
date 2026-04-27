import { Link } from "react-router-dom";

const variants = {
  forest: "bg-forest text-cream border border-transparent hover:bg-forest/85",
  camel: "bg-camel text-white border border-transparent hover:bg-camel/90",
  white: "bg-white text-forest border border-transparent hover:bg-white/90",
  outline:
    "bg-transparent text-cream border border-camel hover:bg-camel hover:text-charcoal",
  ghost:
    "bg-transparent text-cream/70 border border-transparent hover:text-cream",
  "outline-dark":
    "bg-transparent text-camel border border-camel hover:bg-camel hover:text-charcoal",
};

export default function Button({
  children,
  variant = "forest",
  as: Tag = "button",
  to,
  href,
  className = "",
  ...props
}) {
  const base =
    "font-sans text-sm font-medium tracking-[0.1em] uppercase px-10 py-[17px] rounded-full transition-all duration-300 hover:-translate-y-[2px]";
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
