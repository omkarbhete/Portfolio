import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { SKILLS, type Skill } from '../data'

/* ── Tooltip popup ── */
function Tooltip({ skill, visible }: { skill: Skill | null; visible: boolean }) {
  if (!skill) return null
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 6 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.92, y: visible ? 0 : 6 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      style={{
        position: 'fixed', zIndex: 9000, pointerEvents: 'none',
        width: 260, background: 'rgba(7,7,26,0.97)',
        border: `1px solid ${skill.color}44`,
        borderRadius: 14,
        backdropFilter: 'blur(20px)',
        boxShadow: `0 0 40px ${skill.color}28, 0 24px 60px rgba(0,0,0,0.7)`,
        padding: '20px',
      }}
      id="skill-tooltip"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <span style={{ fontSize: 30 }}>{skill.icon}</span>
        <div>
          <div style={{
            fontFamily: 'var(--font-disp)', fontWeight: 700, fontSize: 16,
            color: skill.color, textShadow: `0 0 10px ${skill.color}77`,
          }}>
            {skill.name}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            letterSpacing: '0.15em', color: 'rgba(240,240,255,0.38)',
            textTransform: 'uppercase', marginTop: 1,
          }}>
            {skill.cat}
          </div>
        </div>
      </div>

      <p style={{ fontSize: 12.5, color: 'rgba(240,240,255,0.6)', lineHeight: 1.75, marginBottom: 14 }}>
        {skill.detail}
      </p>

      {/* Proficiency bar */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(240,240,255,0.35)', letterSpacing: '0.1em' }}>
            PROFICIENCY
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: skill.color }}>
            {skill.pct}%
          </span>
        </div>
        <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 3, overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: visible ? `${skill.pct}%` : 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            style={{
              height: '100%', borderRadius: 3,
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
              boxShadow: `0 0 8px ${skill.color}`,
            }}
          />
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
        {skill.tags.map(t => (
          <span
            key={t}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              padding: '3px 8px', borderRadius: 5,
              background: `${skill.color}14`,
              border: `1px solid ${skill.color}30`,
              color: `${skill.color}cc`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Single skill card ── */
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 })
  const { ref, inView } = useReveal(0.05)

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX + 20
    const y = e.clientY - 40
    const tipW = 260, tipH = 260
    setTipPos({
      x: Math.min(x, window.innerWidth  - tipW - 12),
      y: Math.max(10, Math.min(y, window.innerHeight - tipH - 12)),
    })
  }

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          background: hovered
            ? `rgba(255,255,255,0.06)`
            : 'rgba(255,255,255,0.03)',
          border: `1px solid ${hovered ? skill.color + '50' : 'rgba(168,85,247,0.14)'}`,
          borderRadius: 14,
          backdropFilter: 'blur(12px)',
          padding: '26px 18px',
          textAlign: 'center',
          cursor: 'default',
          transition: 'all 0.28s cubic-bezier(0.22,1,0.36,1)',
          transform: hovered ? 'translateY(-6px) scale(1.03)' : 'none',
          boxShadow: hovered ? `0 0 28px ${skill.color}30, 0 12px 40px rgba(0,0,0,0.4)` : 'none',
        }}
      >
        {/* Icon */}
        <div style={{
          fontSize: 38, marginBottom: 12,
          filter: hovered ? `drop-shadow(0 0 12px ${skill.color})` : 'none',
          transition: 'filter 0.28s',
        }}>
          {skill.icon}
        </div>

        {/* Name */}
        <div style={{
          fontFamily: 'var(--font-disp)', fontWeight: 700, fontSize: 14,
          marginBottom: 5, color: hovered ? '#fff' : 'rgba(240,240,255,0.88)',
        }}>
          {skill.name}
        </div>

        {/* Category */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 10,
          color: hovered ? skill.color : 'rgba(240,240,255,0.35)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          transition: 'color 0.28s',
        }}>
          {skill.cat}
        </div>

        {/* Bottom glow accent */}
        {hovered && (
          <div style={{
            position: 'absolute', bottom: 0, left: '20%', right: '20%',
            height: 1,
            background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
          }} />
        )}
      </motion.div>

      {/* Portal-style tooltip */}
      {hovered && (
        <div style={{ position: 'fixed', left: tipPos.x, top: tipPos.y, zIndex: 9000, pointerEvents: 'none' }}>
          <Tooltip skill={skill} visible={hovered} />
        </div>
      )}
    </>
  )
}

/* ── Category label ── */
const CATEGORY_GROUPS = [
  { label: 'Cloud & Infrastructure',    ids: ['AWS','VPC Design','IAM & Security'] },
  { label: 'Containers & Orchestration', ids: ['Docker','Kubernetes','Helm','ArgoCD'] },
  { label: 'CI/CD & Security',           ids: ['Jenkins','GitHub Actions','GitLab CI/CD','DevSecOps','SonarQube'] },
  { label: 'Observability & Automation', ids: ['Prometheus','Grafana','Loki','CloudWatch','Python','Bash'] },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, transparent, rgba(168,85,247,0.03) 50%, transparent)',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SectionHeading
          index="02"
          title="Skills Arsenal"
          subtitle="Hover any card for full details, proficiency level, and usage context."
          accent="cyan"
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 14,
        }}>
          {SKILLS.map((sk, i) => (
            <SkillCard key={sk.name} skill={sk} index={i} />
          ))}
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center',
          marginTop: 48,
        }}>
          {[
            { label: 'Cloud & Infra', color: '#FF9900' },
            { label: 'Containers',    color: '#326CE5' },
            { label: 'CI/CD & Sec',   color: '#D24939' },
            { label: 'Observability', color: '#E6522C' },
          ].map(({ label, color }) => (
            <div
              key={label}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: 'rgba(240,240,255,0.35)', letterSpacing: '0.1em',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, boxShadow: `0 0 6px ${color}` }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
