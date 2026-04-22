import { motion } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  )
}
