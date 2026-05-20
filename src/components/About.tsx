import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { ABOUT_SUMMARY, TIMELINE } from '../data'

function TimelineCard({ item, index }: { item: typeof TIMELINE[0]; index: number }) {
  const { ref, inView } = useReveal(0.1)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex', gap: 20, alignItems: 'flex-start',
        paddingBottom: 36,
        position: 'relative',
      }}
    >
      {/* Dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 14, height: 14, borderRadius: '50%',
          background: item.color,
          boxShadow: `0 0 12px ${item.color}, 0 0 24px ${item.color}55`,
          border: '2px solid rgba(255,255,255,0.2)',
          marginTop: 5, flexShrink: 0,
        }} />
        {index < TIMELINE.length - 1 && (
          <div style={{
            width: 1, flex: 1, minHeight: 40,
            background: `linear-gradient(180deg, ${item.color}60, transparent)`,
            marginTop: 6,
          }} />
        )}
      </div>

      {/* Card */}
      <div
        className="glass"
        style={{
          padding: '18px 22px', flex: 1,
          borderColor: `${item.color}25`,
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = `${item.color}55`
          el.style.boxShadow = `0 0 20px ${item.color}22`
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = `${item.color}25`
          el.style.boxShadow = ''
        }}
      >
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 10,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: item.color, marginBottom: 6,
          textShadow: `0 0 8px ${item.color}88`,
        }}>
          {item.year}
        </div>
        <div style={{ fontFamily: 'var(--font-disp)', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
          {item.title}
        </div>
        <div style={{ fontSize: 13.5, color: 'rgba(240,240,255,0.52)', lineHeight: 1.7 }}>
          {item.body}
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  return (
    <section id="about" style={{ padding: '100px 24px', maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeading
        index="01"
        title="About Me"
        subtitle="Cloud architect, automation engineer, and perpetual learner."
        accent="purple"
      />

      {/* Two-column: avatar | summary */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)',
        gap: 48, marginBottom: 80, alignItems: 'center',
      }}
        className="about-grid"
      >
        {/* Left — avatar */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={leftIn ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative', width: 240, height: 240 }}>
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', inset: -10,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #a855f7, #22d3ee, transparent, #a855f7)',
                padding: 2,
              }}
            >
              <div style={{ background: 'var(--bg)', borderRadius: '50%', width: '100%', height: '100%' }} />
            </motion.div>

            {/* Avatar placeholder (initials) */}
            <div style={{
              position: 'absolute', inset: 8,
              borderRadius: '50%',
              border: '1px solid rgba(168,85,247,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-disp)',
              fontSize: 52, fontWeight: 800,
              background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(34,211,238,0.08))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backdropFilter: 'blur(8px)',
            } as React.CSSProperties}>
              OB
            </div>

            {/* Status dot */}
            <div style={{
              position: 'absolute', bottom: 16, right: 16,
              width: 16, height: 16, borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 10px #4ade80, 0 0 20px #4ade8055',
              border: '2px solid var(--bg)',
            }}>
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: '100%', height: '100%', borderRadius: '50%',
                  background: '#4ade80',
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right — summary */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 30 }}
          animate={rightIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Terminal header */}
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.18em', color: 'var(--cyan)',
            marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ color: '#4ade80' }}>▶</span>
            <span style={{ opacity: 0.6 }}>cat</span>
            <span>about.txt</span>
          </div>

          <p style={{
            fontSize: 15.5, lineHeight: 1.8,
            color: 'rgba(240,240,255,0.72)',
            marginBottom: 28, fontFamily: 'var(--font-body)',
          }}>
            {ABOUT_SUMMARY}
          </p>

          {/* Quick facts chips */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { label: 'B.E. / B.Tech', color: '#a855f7' },
              { label: 'AWS CCP Pursuing', color: '#22d3ee' },
              { label: 'Solutions Arch. Candidate', color: '#4ade80' },
              { label: 'Mumbai, India', color: '#fbbf24' },
            ].map(({ label, color }) => (
              <span
                key={label}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '0.1em',
                  padding: '5px 12px', borderRadius: 6,
                  background: `${color}14`,
                  border: `1px solid ${color}35`,
                  color, textShadow: `0 0 8px ${color}55`,
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.22em', color: 'rgba(240,240,255,0.25)',
          textTransform: 'uppercase', marginBottom: 40, textAlign: 'center',
        }}>
          // journey
        </div>
        {TIMELINE.map((t, i) => (
          <TimelineCard key={t.title} item={t} index={i} />
        ))}
      </div>

      {/* responsive style */}
      <style>{`
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
