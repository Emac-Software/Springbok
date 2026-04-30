export default function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 bg-white/10 rounded-full border border-white bg-cream/5 flex items-center justify-center text-white hover:border-white/50 hover:text-white/50 transition-colors duration-200"
    >
      {children}
    </a>
  );
}
