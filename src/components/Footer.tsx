import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { CONTACT } from '../data'

const SOCIALS = [
  { Icon: FiGithub,   href: CONTACT.github,            label: 'GitHub',   color: '#4ade80' },
  { Icon: FiLinkedin, href: CONTACT.linkedin,           label: 'LinkedIn', color: '#0ea5e9' },
  { Icon: FiMail,     href: `mailto:${CONTACT.email}`,  label: 'Email',    color: '#a855f7' },
  { Icon: FiDownload, href: '/resume.pdf',               label: 'Resume',   color: '#22d3ee', download: true },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      position: 'relative',
      padding: '40px 24px 32px',
      borderTop: '1px solid rgba(168,85,247,0.1)',
      background: 'rgba(0,0,0,0.3)',
    }}>
      {/* subtle top glow */}
      <div style={{
        position: 'absolute', top: -1, left: '30%', right: '30%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(34,211,238,0.5), transparent)',
      }} />

      <div style={{
        maxWidth: 1120, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 20,
      }}>
        {/* Left: brand */}
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 17, fontWeight: 700, letterSpacing: '0.06em',
            background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: 5,
          }}>
            &lt;OB /&gt;
          </div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: 'rgba(240,240,255,0.25)',
            letterSpacing: '0.12em',
          }}>
            © {year} Omkar Bhete · DevOps & Cloud Engineer
          </p>
        </div>

        {/* Center: terminal note */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'rgba(240,240,255,0.18)',
          letterSpacing: '0.1em', textAlign: 'center',
        }}>
          <span style={{ color: '#4ade80' }}>▶</span>{' '}
          built with React + Vite + TypeScript
        </div>

        {/* Right: social icons */}
        <div style={{ display: 'flex', gap: 10 }}>
          {SOCIALS.map(({ Icon, href, label, color, download }) => (
            <a
              key={label}
              href={href}
              target={download ? undefined : '_blank'}
              rel="noreferrer"
              download={download ? 'Omkar_Bhete_Resume.pdf' : undefined}
              aria-label={label}
              title={label}
              style={{
                width: 38, height: 38, borderRadius: 9,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: 'rgba(240,240,255,0.4)',
                transition: 'all 0.22s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = color
                el.style.borderColor = `${color}45`
                el.style.background = `${color}12`
                el.style.boxShadow = `0 0 14px ${color}30`
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'rgba(240,240,255,0.4)'
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.boxShadow = ''
                el.style.transform = ''
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
