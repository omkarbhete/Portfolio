import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { NAV_LINKS } from '../data'

const NAV_H = 64

export default function Navbar() {
  const [active, setActive] = useState('')
  const { scrollY } = useScroll()
  const blur = useTransform(scrollY, [0, 80], [0, 14])

  // highlight active section on scroll
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1))
    const handler = () => {
      const scrollPos = window.scrollY + NAV_H + 32
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: NAV_H,
      }}
      initial={{ y: -NAV_H, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* blurred backdrop grows on scroll */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(3,3,9,0.72)',
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)` as any,
          borderBottom: '1px solid rgba(168,85,247,0.12)',
        }}
      />

      <nav
        style={{
          position: 'relative',
          maxWidth: 1160, margin: '0 auto', height: '100%',
          padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 18, fontWeight: 700, letterSpacing: '0.06em',
            background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}
        >
          &lt;OB /&gt;
        </a>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1)
            const isActive = active === id
            return (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13, letterSpacing: '0.08em',
                  padding: '6px 14px', borderRadius: 6,
                  color: isActive ? '#fff' : 'rgba(240,240,255,0.55)',
                  background: isActive ? 'rgba(168,85,247,0.14)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(168,85,247,0.35)' : 'transparent'}`,
                  transition: 'all 0.25s',
                  textShadow: isActive ? '0 0 12px rgba(168,85,247,0.6)' : 'none',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = '#fff'
                    el.style.background = 'rgba(168,85,247,0.08)'
                    el.style.borderColor = 'rgba(168,85,247,0.2)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'rgba(240,240,255,0.55)'
                    el.style.background = 'transparent'
                    el.style.borderColor = 'transparent'
                  }
                }}
              >
                {label}
              </a>
            )
          })}

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            download
            style={{
              marginLeft: 12,
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: '0.08em',
              padding: '7px 16px', borderRadius: 7,
              background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(34,211,238,0.15))',
              border: '1px solid rgba(168,85,247,0.4)',
              color: 'var(--purple)',
              transition: 'all 0.25s',
              textShadow: '0 0 10px rgba(168,85,247,0.5)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'linear-gradient(135deg, rgba(168,85,247,0.32), rgba(34,211,238,0.24))'
              el.style.boxShadow = '0 0 18px rgba(168,85,247,0.3)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(34,211,238,0.15))'
              el.style.boxShadow = 'none'
            }}
          >
            <FiDownload size={13} />
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
