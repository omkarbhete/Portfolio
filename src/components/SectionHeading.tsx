import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

interface Props {
  index:    string   // e.g. '01'
  title:    string
  subtitle?: string
  accent?:  'purple' | 'cyan'
}

export default function SectionHeading({ index, title, subtitle, accent = 'purple' }: Props) {
  const { ref, inView } = useReveal()
  const accentColor = accent === 'purple' ? 'var(--purple)' : 'var(--cyan)'
  const accentGlow  = accent === 'purple'
    ? 'rgba(168,85,247,0.6)'
    : 'rgba(34,211,238,0.6)'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginBottom: 64, textAlign: 'center' }}
    >
      {/* terminal index */}
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 12,
        letterSpacing: '0.22em', color: accentColor,
        textShadow: `0 0 10px ${accentGlow}`,
        opacity: 0.7,
      }}>
        /{index}
      </span>

      <h2 style={{
        fontFamily: 'var(--font-disp)',
        fontSize: 'clamp(30px, 5vw, 48px)',
        fontWeight: 800, letterSpacing: '-0.03em',
        marginTop: 10, marginBottom: 16,
        background: `linear-gradient(135deg, #f0f0ff 30%, ${accentColor})`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>
        {title}
      </h2>

      {subtitle && (
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 15,
          color: 'rgba(240,240,255,0.42)', maxWidth: 480, margin: '0 auto',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}

      {/* decorative line */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 10, marginTop: 28,
      }}>
        <div style={{ width: 32, height: 1, background: `linear-gradient(90deg, transparent, ${accentColor})` }} />
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: accentColor, boxShadow: `0 0 8px ${accentGlow}` }} />
        <div style={{ width: 64, height: 1, background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
      </div>
    </motion.div>
  )
}
