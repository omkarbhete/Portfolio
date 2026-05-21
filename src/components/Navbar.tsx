import { motion, AnimatePresence } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMenu,
  FiX,
} from 'react-icons/fi'

import { useEffect, useState } from 'react'

const LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
  {
  name: 'Certifications',
  href: '#certifications',
  }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: 'fixed',
          top: 20,
          left: 0,
          right: 0,
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 18px',
          pointerEvents: 'none',
        }}
      >
        {/* WRAPPER */}
        <div
          style={{
            width: '100%',
            maxWidth: 1450,
            position: 'relative',
            pointerEvents: 'auto',
          }}
        >
          {/* BACKGROUND GLOW */}
          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            style={{
              position: 'absolute',
              inset: -2,
              borderRadius: 30,
              background:
                'linear-gradient(135deg,#a855f7,#22d3ee,#ffffff,#a855f7)',
              filter: 'blur(26px)',
            }}
          />

          {/* NAV CONTAINER */}
          <div
            style={{
              position: 'relative',
              height: 84,
              borderRadius: 30,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 26px',
              backdropFilter: 'blur(30px)',
              background: scrolled
                ? 'rgba(7,7,15,0.82)'
                : 'rgba(7,7,15,0.58)',
              border:
                '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.4s ease',
              boxShadow: scrolled
                ? '0 15px 80px rgba(0,0,0,0.45)'
                : '0 10px 50px rgba(0,0,0,0.28)',
            }}
          >
            {/* TOP LINE */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '18%',
                width: '64%',
                height: 1,
                background:
                  'linear-gradient(90deg,transparent,#22d3ee,transparent)',
              }}
            />

            {/* LEFT */}
            <div
              style={{
                width: 180,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <motion.a
                href="#home"
                whileHover={{
                  scale: 1.04,
                }}
                style={{
                  position: 'relative',
                  textDecoration: 'none',
                }}
              >
                {/* ORBIT */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    inset: -14,
                    borderRadius: '50%',
                    border:
                      '1px solid rgba(168,85,247,0.18)',
                  }}
                />

                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 900,
                    letterSpacing: '-0.08em',
                    background:
                      'linear-gradient(135deg,#ffffff,#a855f7,#22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  OB.
                </div>
              </motion.a>
            </div>

            {/* CENTER */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
              className="desktop-links"
            >
              {LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                  }}
                  style={{
                    position: 'relative',
                    padding: '12px 18px',
                    borderRadius: 14,
                    textDecoration: 'none',
                    overflow: 'hidden',
                    color: 'rgba(240,240,255,0.82)',
                    fontWeight: 600,
                    fontSize: 14,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {/* HOVER */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 14,
                      background:
                        'linear-gradient(135deg,rgba(168,85,247,0.16),rgba(34,211,238,0.16))',
                      border:
                        '1px solid rgba(255,255,255,0.08)',
                    }}
                  />

                  <span
                    style={{
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* RIGHT */}
            <div
              style={{
                width: 260,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 12,
              }}
            >
              {/* SOCIALS */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
                className="desktop-socials"
              >
                {[
                  {
                    icon: <FiGithub size={17} />,
                    href: 'https://github.com/omkarbhete',
                  },
                  {
                    icon: <FiLinkedin size={17} />,
                    href:
                      'https://www.linkedin.com/in/omkar-bhete-6aa356255/',
                  },
                  {
                    icon: <FiInstagram size={17} />,
                    href:
                      'https://instagram.com/omkar_bhete',
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.12,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background:
                        'rgba(255,255,255,0.04)',
                      border:
                        '1px solid rgba(255,255,255,0.08)',
                      color: '#d4d4ff',
                      textDecoration: 'none',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>

              {/* BUTTON */}
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '13px 22px',
                  borderRadius: 15,
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 14,
                  background:
                    'linear-gradient(135deg,#a855f7,#22d3ee)',
                  boxShadow:
                    '0 0 28px rgba(168,85,247,0.35)',
                  whiteSpace: 'nowrap',
                }}
              >
                {/* SHINE */}
                <motion.div
                  animate={{
                    x: ['-120%', '220%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '40%',
                    height: '100%',
                    background:
                      'linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)',
                    transform: 'skewX(-20deg)',
                  }}
                />

                <span
                  style={{
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  Let&apos;s Talk
                </span>
              </motion.a>

              {/* MOBILE */}
              <button
                onClick={() =>
                  setMobileMenu(!mobileMenu)
                }
                className="mobile-btn"
                style={{
                  display: 'none',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                {mobileMenu ? (
                  <FiX size={28} />
                ) : (
                  <FiMenu size={28} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9998,
              background: 'rgba(0,0,0,0.86)',
              backdropFilter: 'blur(30px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 30,
                alignItems: 'center',
              }}
            >
              {LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  whileHover={{
                    scale: 1.08,
                  }}
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    fontSize: 44,
                    fontWeight: 900,
                    letterSpacing: '-0.05em',
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}