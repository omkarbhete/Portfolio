import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  FiCloud,
  FiDatabase,
  FiCode,
  FiServer,
  FiCpu,
  FiLayers,
} from 'react-icons/fi'
import { useRef } from 'react'

const SKILLS = [
  'AWS',
  'Docker',
  'Kubernetes',
  'Terraform',
  'Linux',
  'CI/CD',
  'React',
  'Node.js',
  'MongoDB',
  'DevOps',
  'Cloud',
  'Automation',
]

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const glowX = useTransform(rotateY, [-15, 15], [-40, 40])
  const glowY = useTransform(rotateX, [-15, 15], [40, -40])

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = cardRef.current?.getBoundingClientRect()

    if (!rect) return

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rotateYValue = ((mouseX / width) - 0.5) * 22
    const rotateXValue = ((mouseY / height) - 0.5) * -22

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '160px 24px',
        background:
          'radial-gradient(circle at top left, rgba(168,85,247,0.12), transparent 30%), radial-gradient(circle at bottom right, rgba(34,211,238,0.12), transparent 30%)',
      }}
    >
      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          top: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(168,85,247,0.18)',
          filter: 'blur(120px)',
        }}
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          bottom: -120,
          right: -120,
          width: 450,
          height: 450,
          borderRadius: '50%',
          background: 'rgba(34,211,238,0.15)',
          filter: 'blur(140px)',
        }}
      />

      <div
        style={{
          maxWidth: 1350,
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Massive Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            marginBottom: 110,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              color: '#22d3ee',
              letterSpacing: '0.35em',
              fontSize: 13,
              marginBottom: 26,
            }}
          >
            / ABOUT ME
          </div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(70px,10vw,150px)',
              lineHeight: 0.9,
              fontWeight: 900,
              letterSpacing: '-0.07em',
              marginBottom: 40,
              background:
                'linear-gradient(135deg,#ffffff,#a855f7,#22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            FUTURE
            <br />
            ENGINEER
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            style={{
              maxWidth: 900,
              fontSize: 20,
              lineHeight: 2,
              color: 'rgba(240,240,255,0.55)',
            }}
          >
            I’m Omkar Bhete — a DevOps & Cloud Engineer obsessed with
            futuristic infrastructure, scalable cloud systems,
            immersive UI/UX, automation, Kubernetes orchestration,
            and building digital products engineered for the next era.
          </motion.p>
        </motion.div>

        {/* Main Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(480px,1fr))',
            gap: 90,
            alignItems: 'center',
          }}
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                position: 'relative',
                padding: 50,
                borderRadius: 36,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(24px)',
              }}
            >
              {/* Grid Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(135deg,rgba(168,85,247,0.08),transparent,rgba(34,211,238,0.08))',
                }}
              />

              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Floating Icons */}
                <div
                  style={{
                    display: 'flex',
                    gap: 18,
                    marginBottom: 36,
                  }}
                >
                  {[FiCloud, FiServer, FiDatabase, FiCode, FiCpu, FiLayers].map(
                    (Icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          y: -8,
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 250,
                        }}
                        style={{
                          width: 62,
                          height: 62,
                          borderRadius: 18,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background:
                            'rgba(255,255,255,0.05)',
                          border:
                            '1px solid rgba(255,255,255,0.08)',
                          color: '#22d3ee',
                          boxShadow:
                            '0 0 24px rgba(34,211,238,0.12)',
                        }}
                      >
                        <Icon size={24} />
                      </motion.div>
                    )
                  )}
                </div>

                <h3
                  style={{
                    fontSize: 44,
                    lineHeight: 1.15,
                    color: '#fff',
                    marginBottom: 34,
                    fontWeight: 800,
                  }}
                >
                  Designing
                  <br />
                  Intelligent Cloud
                  <br />
                  Experiences
                </h3>

                <p
                  style={{
                    color: 'rgba(240,240,255,0.52)',
                    lineHeight: 2,
                    marginBottom: 28,
                    fontSize: 16,
                  }}
                >
                  I engineer scalable cloud-native systems using AWS,
                  Docker, Kubernetes, Linux, Terraform, CI/CD pipelines,
                  and modern automation workflows optimized for
                  production-grade performance and reliability.
                </p>

                <p
                  style={{
                    color: 'rgba(240,240,255,0.52)',
                    lineHeight: 2,
                    marginBottom: 40,
                    fontSize: 16,
                  }}
                >
                  Alongside infrastructure engineering, I craft futuristic
                  digital experiences with immersive interfaces,
                  seamless animations, and premium frontend architectures.
                </p>

                {/* Skills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 14,
                  }}
                >
                  {SKILLS.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                      }}
                      style={{
                        padding: '12px 20px',
                        borderRadius: 999,
                        background:
                          'rgba(168,85,247,0.14)',
                        border:
                          '1px solid rgba(168,85,247,0.24)',
                        color: '#d8b4fe',
                        fontSize: 12,
                        fontFamily: 'var(--font-mono)',
                        cursor: 'default',
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT 3D PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              perspective: 2500,
            }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                width: 470,
                height: 620,
                borderRadius: 40,
                position: 'relative',
                transformStyle: 'preserve-3d',
                rotateX,
                rotateY,
                background:
                  'linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))',
                border:
                  '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden',
                backdropFilter: 'blur(30px)',
                boxShadow:
                  '0 40px 120px rgba(0,0,0,0.6)',
              }}
            >
              {/* Animated Glow */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at center, rgba(168,85,247,0.35), transparent 70%)',
                  filter: 'blur(80px)',
                  x: glowX,
                  y: glowY,
                }}
              />

              {/* Image */}
              <img
                src="/omkar.png"
                alt="Omkar Bhete"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 2,
                }}
              />

              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.92), transparent 45%)',
                  zIndex: 3,
                }}
              />

              {/* Text */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 34,
                  left: 34,
                  zIndex: 4,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{
                    fontSize: 44,
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: 10,
                    lineHeight: 1,
                  }}
                >
                  Omkar
                  <br />
                  Bhete
                </motion.div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: '#22d3ee',
                    letterSpacing: '0.18em',
                    fontSize: 13,
                  }}
                >
                  DEVOPS • CLOUD • FULL STACK
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}