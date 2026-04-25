import { Link } from 'react-router-dom'

const variants = {
  primary:  'bg-forest text-cream border border-transparent hover:bg-forest/85',
  camel:    'bg-camel text-white border border-transparent hover:bg-camel/85',
  outline:  'bg-transparent text-cream border border-camel hover:bg-camel hover:text-charcoal',
  ghost:    'bg-transparent text-cream/70 border border-transparent hover:text-cream',
  'outline-dark': 'bg-transparent text-camel border border-camel hover:bg-camel hover:text-charcoal',
}

export default function Button({
  children,
  variant = 'primary',
  as: Tag = 'button',
  to,
  href,
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center font-sans font-medium tracking-widest uppercase text-sm px-6 py-3 rounded-sm transition-all duration-200 cursor-pointer'
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }
  return <Tag className={classes} {...props}>{children}</Tag>
}
