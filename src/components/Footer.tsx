import { FiGithub, FiLinkedin, FiMail, FiDownload, FiPhone } from 'react-icons/fi'

const CONTACT = {
  email: 'omkarbhetework@gmail.com',

  github: 'https://github.com/omkarbhete',

  linkedin: 'https://www.linkedin.com/in/omkar-bhete-6aa356255/',

  phone: '+91 8010639031',

  location: 'Maharashtra, India',
}

const SOCIALS = [
  {
    Icon: FiGithub,
    href: CONTACT.github,
    label: 'GitHub',
    color: '#4ade80',
  },

  {
    Icon: FiLinkedin,
    href: CONTACT.linkedin,
    label: 'LinkedIn',
    color: '#0ea5e9',
  },

  {
    Icon: FiMail,
    href: `mailto:${CONTACT.email}`,
    label: 'Email',
    color: '#a855f7',
  },

  {
    Icon: FiPhone,
    href: `tel:${CONTACT.phone}`,
    label: 'Phone',
    color: '#f97316',
  },

  {
    Icon: FiDownload,
    href: '/resume.pdf',
    label: 'Resume',
    color: '#22d3ee',
    download: true,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        position: 'relative',
        padding: '50px 24px 38px',
        borderTop: '1px solid rgba(168,85,247,0.12)',
        background:
          'linear-gradient(to bottom, rgba(8,8,18,0.92), rgba(0,0,0,0.96))',
        overflow: 'hidden',
      }}
    >
      {/* Top Gradient Glow */}
      <div
        style={{
          position: 'absolute',
          top: -1,
          left: '25%',
          right: '25%',
          height: 2,
          background:
            'linear-gradient(90deg, transparent, rgba(168,85,247,0.7), rgba(34,211,238,0.7), transparent)',
          filter: 'blur(0.5px)',
        }}
      />

      {/* Background blur circles */}
      <div
        style={{
          position: 'absolute',
          top: -80,
          left: -80,
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: 'rgba(168,85,247,0.08)',
          filter: 'blur(80px)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: -80,
          right: -80,
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: 'rgba(34,211,238,0.08)',
          filter: 'blur(80px)',
        }}
      />

      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 24,
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left Section */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: '0.08em',
              background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 8,
              textShadow: '0 0 20px rgba(168,85,247,0.35)',
            }}
          >
            &lt;OMKAR /&gt;
          </div>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              lineHeight: 1.8,
              color: 'rgba(240,240,255,0.42)',
              letterSpacing: '0.08em',
            }}
          >
            © {year} Omkar Bhete
            <br />
            DevOps • Cloud • Full Stack Engineer
          </p>
        </div>

        {/* Center Section */}
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: 'rgba(240,240,255,0.55)',
              letterSpacing: '0.12em',
              marginBottom: 8,
            }}
          >
            <span style={{ color: '#4ade80' }}>▶</span> BUILDING SCALABLE CLOUD
            SYSTEMS
          </div>

          <div
            style={{
              fontSize: 11,
              color: 'rgba(240,240,255,0.22)',
              letterSpacing: '0.08em',
            }}
          >
            React • TypeScript • AWS • Docker • Kubernetes
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
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
                width: 44,
                height: 44,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(240,240,255,0.45)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement

                el.style.color = color
                el.style.borderColor = `${color}55`
                el.style.background = `${color}14`
                el.style.boxShadow = `0 0 18px ${color}40`
                el.style.transform = 'translateY(-4px) scale(1.04)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement

                el.style.color = 'rgba(240,240,255,0.45)'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.boxShadow = ''
                el.style.transform = ''
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}