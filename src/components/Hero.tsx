import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import ParticleCanvas from './ParticleCanvas'
import { HERO } from '../data'

const STATS = [
  { val: '99%',  label: 'Uptime SLA'         },
  { val: '60%',  label: 'Less Manual Work'    },
  { val: '70%',  label: 'Faster Provisioning' },
  { val: '50%',  label: 'Faster Deployments'  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.35 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(168,85,247,0.12), transparent)',
      }}
    >
      <ParticleCanvas />

      {/* Decorative grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative', zIndex: 1,
          textAlign: 'center', padding: '100px 24px 60px',
          maxWidth: 860, margin: '0 auto',
        }}
      >
        {/* Chip label */}
        <motion.div variants={item}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--cyan)',
            padding: '5px 16px', borderRadius: 20,
            background: 'rgba(34,211,238,0.08)',
            border: '1px solid rgba(34,211,238,0.25)',
            marginBottom: 36,
            textShadow: '0 0 10px rgba(34,211,238,0.5)',
          }}>
            ⚡ Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          style={{
            fontFamily: 'var(--font-disp)',
            fontSize: 'clamp(48px, 10vw, 108px)',
            fontWeight: 800, lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: 28,
          }}
        >
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 45%, #22d3ee 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 32px rgba(168,85,247,0.55))',
          }}>
            {HERO.name.split(' ')[0]}
          </span>
          <span style={{
            display: 'block',
            color: 'rgba(240,240,255,0.92)',
            textShadow: '0 0 40px rgba(240,240,255,0.12)',
          }}>
            {HERO.name.split(' ')[1]}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(15px, 2.5vw, 22px)',
            color: 'rgba(240,240,255,0.55)',
            letterSpacing: '0.05em', marginBottom: 12,
          }}
        >
          {HERO.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 14,
            letterSpacing: '0.15em',
            color: 'var(--cyan)',
            textShadow: '0 0 14px rgba(34,211,238,0.55)',
            marginBottom: 52,
          }}
        >
          {HERO.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72 }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-mono)', fontSize: 13,
              letterSpacing: '0.08em',
              padding: '14px 32px', borderRadius: 10,
              background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
              color: '#fff', fontWeight: 600,
              boxShadow: '0 0 32px rgba(168,85,247,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
              transition: 'all 0.28s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-3px) scale(1.04)'
              el.style.boxShadow = '0 0 48px rgba(168,85,247,0.65), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = ''
              el.style.boxShadow = '0 0 32px rgba(168,85,247,0.45), inset 0 1px 0 rgba(255,255,255,0.15)'
            }}
          >
            View Projects <FiArrowRight size={15} />
          </a>

          <a
            href="/resume.pdf"
            download
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-mono)', fontSize: 13,
              letterSpacing: '0.08em',
              padding: '13px 32px', borderRadius: 10,
              background: 'rgba(255,255,255,0.055)',
              border: '1px solid rgba(255,255,255,0.14)',
              color: 'rgba(240,240,255,0.85)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.28s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-3px)'
              el.style.background = 'rgba(255,255,255,0.1)'
              el.style.borderColor = 'rgba(34,211,238,0.4)'
              el.style.boxShadow = '0 0 20px rgba(34,211,238,0.2)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = ''
              el.style.background = 'rgba(255,255,255,0.055)'
              el.style.borderColor = 'rgba(255,255,255,0.14)'
              el.style.boxShadow = ''
            }}
          >
            <FiDownload size={14} /> Resume
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={item}
          style={{
            display: 'flex', gap: 0, justifyContent: 'center',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(168,85,247,0.14)',
            borderRadius: 14, overflow: 'hidden',
          }}
        >
          {STATS.map(({ val, label }, i) => (
            <div
              key={label}
              style={{
                flex: 1, textAlign: 'center', padding: '22px 12px',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(168,85,247,0.1)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-disp)', fontSize: 'clamp(22px,3.5vw,32px)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                {val}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.1em', color: 'rgba(240,240,255,0.38)',
                marginTop: 4, textTransform: 'uppercase',
              }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.25em', color: 'rgba(240,240,255,0.22)', textTransform: 'uppercase' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(180deg, rgba(168,85,247,0.7), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
