import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { PROJECTS, type Project } from '../data'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useReveal(0.1)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.035)',
        border: `1px solid rgba(255,255,255,0.07)`,
        borderRadius: 18, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        backdropFilter: 'blur(14px)',
        transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)',
      }}
      whileHover={{
        y: -8, scale: 1.015,
        boxShadow: `0 0 36px ${project.color}28, 0 20px 50px rgba(0,0,0,0.45)`,
        borderColor: `${project.color}40`,
        transition: { duration: 0.32 },
      }}
    >
      {/* Top accent bar */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${project.color}, ${project.color}44, transparent)`,
      }} />

      <div style={{ padding: '28px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Number + emoji */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: project.color, opacity: 0.6,
            letterSpacing: '0.2em',
            textShadow: `0 0 8px ${project.color}77`,
          }}>
            /{project.num}
          </span>
          <span style={{ fontSize: 30 }}>{project.emoji}</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-disp)', fontWeight: 800, fontSize: 19,
          marginBottom: 12, lineHeight: 1.2,
          color: '#f0f0ff',
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: 13.5, lineHeight: 1.75,
          color: 'rgba(240,240,255,0.5)', marginBottom: 22, flex: 1,
        }}>
          {project.desc}
        </p>

        {/* Highlights */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
          {project.highlights.map(h => (
            <span
              key={h}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                padding: '4px 11px', borderRadius: 20,
                background: `${project.color}18`,
                border: `1px solid ${project.color}38`,
                color: project.color,
                textShadow: `0 0 6px ${project.color}55`,
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
          {project.tags.map(t => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                padding: '3px 9px', borderRadius: 5,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(240,240,255,0.45)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 12, marginTop: 'auto' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: '0.07em',
              padding: '9px 18px', borderRadius: 8,
              background: 'rgba(255,255,255,0.05)',
              border: `1px solid ${project.color}30`,
              color: project.color,
              transition: 'all 0.22s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = `${project.color}18`
              el.style.borderColor = `${project.color}60`
              el.style.boxShadow = `0 0 14px ${project.color}28`
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(255,255,255,0.05)'
              el.style.borderColor = `${project.color}30`
              el.style.boxShadow = ''
            }}
          >
            <FiGithub size={13} /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SectionHeading
          index="03"
          title="Featured Projects"
          subtitle="Real-world systems engineered for reliability, security, and scale."
          accent="purple"
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
