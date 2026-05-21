import { useState } from 'react'

import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import {
  FiAward,
  FiExternalLink,
  FiCheckCircle,
  FiCpu,
  FiCloud,
  FiShield,
} from 'react-icons/fi'

const CERTIFICATIONS = [
  {
    id: '01',

    title:
      'AWS Cloud Practitioner Essentials',

    issuer:
      'AWS Training & Certification',

    year: 'May 2026',

    icon: FiCloud,

    description:
      'Validated AWS cloud architecture, IAM, EC2, networking, S3, and cloud deployment fundamentals.',

    longDescription:
      'Focused on AWS cloud infrastructure, deployment workflows, networking, IAM security, EC2 compute systems, scalable architectures, and modern cloud-native engineering practices.',

    skills: [
      'AWS',
      'EC2',
      'IAM',
      'S3',
      'Cloud',
    ],

    gradient:
      'linear-gradient(135deg,#ff9900,#ffb347)',

    glow:
      'rgba(255,153,0,0.45)',

    verify: '#',
  },

  {
    id: '02',

    title:
      'GDG DevFest Goa',

    issuer:
      'Google Developer Groups',

    year: '2025',

    icon: FiCpu,

    description:
      'Participated in modern AI, cloud-native, and scalable engineering ecosystem sessions.',

    longDescription:
      'Attended engineering workshops and innovation sessions covering AI systems, scalable architecture, cloud-native ecosystems, development workflows, and futuristic engineering technologies.',

    skills: [
      'AI',
      'Cloud',
      'Innovation',
      'Development',
    ],

    gradient:
      'linear-gradient(135deg,#4285F4,#34A853)',

    glow:
      'rgba(66,133,244,0.45)',

    verify: '#',
  },

  {
    id: '03',

    title:
      'AI & Data Analytics',

    issuer:
      'HP LIFE',

    year: '2025',

    icon: FiShield,

    description:
      'Learned AI fundamentals, analytics, ML workflows, and intelligent problem solving.',

    longDescription:
      'Focused on machine learning fundamentals, analytical thinking, AI-powered workflows, intelligent systems, business intelligence, and data-driven engineering decision making.',

    skills: [
      'AI',
      'ML',
      'Analytics',
      'Data',
    ],

    gradient:
      'linear-gradient(135deg,#a855f7,#22d3ee)',

    glow:
      'rgba(168,85,247,0.45)',

    verify: '#',
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        position: 'relative',
        padding: '180px 0',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at top,#0b0b16 0%, #020208 65%)',
      }}
    >
      {/* GRID */}
      <div
        style={{
          position: 'absolute',
          inset: 0,

          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,

          backgroundSize: '80px 80px',
        }}
      />

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',

          width: 1400,
          height: 1400,

          borderRadius: '50%',

          background:
            'conic-gradient(from 90deg, rgba(168,85,247,0.16), rgba(34,211,238,0.1), transparent)',

          filter: 'blur(160px)',

          top: '-40%',
          right: '-20%',
        }}
      />

      {/* HEADER */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
          marginBottom: 90,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          style={{
            display: 'inline-flex',

            alignItems: 'center',

            gap: 12,

            padding: '10px 20px',

            borderRadius: 999,

            marginBottom: 28,

            background:
              'rgba(255,255,255,0.05)',

            border:
              '1px solid rgba(255,255,255,0.08)',

            backdropFilter: 'blur(20px)',
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{
              width: 8,
              height: 8,

              borderRadius: '50%',

              background: '#22d3ee',

              boxShadow:
                '0 0 20px rgba(34,211,238,1)',
            }}
          />

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.24em',
              color: '#22d3ee',
            }}
          >
            VERIFIED ENGINEERING JOURNEY
          </span>
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            margin: 0,

            fontSize:
              'clamp(80px,12vw,180px)',

            lineHeight: 0.82,

            fontWeight: 900,

            letterSpacing: '-0.1em',

            background:
              'linear-gradient(135deg,#ffffff,#a855f7,#22d3ee)',

            WebkitBackgroundClip: 'text',

            WebkitTextFillColor:
              'transparent',
          }}
        >
          CERTIFICATIONS
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          style={{
            maxWidth: 850,

            margin:
              '28px auto 0',

            fontSize: 18,

            lineHeight: 2,

            color:
              'rgba(240,240,255,0.6)',
          }}
        >
          Professional certifications validating
          expertise in cloud computing,
          DevOps engineering, AI systems,
          automation, and scalable
          infrastructure technologies.
        </motion.p>
      </div>

      {/* GRID */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,

          maxWidth: 1250,

          margin: '0 auto',

          padding: '0 30px',

          display: 'grid',

          gridTemplateColumns:
            'repeat(auto-fit,minmax(300px,1fr))',

          gap: 26,
        }}
      >
        {CERTIFICATIONS.map((cert) => (
          <CertificationCard
            key={cert.id}
            cert={cert}
          />
        ))}
      </div>
    </section>
  )
}

/* =========================================================
   CARD
========================================================= */

function CertificationCard({
  cert,
}: {
  cert: any
}) {
  const [hovered, setHovered] =
    useState(false)

  const Icon = cert.icon

  return (
    <div
      style={{
        position: 'relative',
      }}
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() =>
        setHovered(false)
      }
    >
      {/* CARD */}

      <motion.div
        whileHover={{
          y: -10,
          rotateX: 4,
          rotateY: 4,
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
        }}
        style={{
          position: 'relative',

          borderRadius: 28,

          overflow: 'hidden',

          padding: '26px',

          minHeight: 330,

          background:
            'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',

          border:
            '1px solid rgba(255,255,255,0.08)',

          backdropFilter: 'blur(22px)',

          transformStyle: 'preserve-3d',

          boxShadow: hovered
            ? `0 30px 100px ${cert.glow}`
            : '0 15px 50px rgba(0,0,0,0.35)',

          transition:
            'box-shadow 0.35s ease',
        }}
      >
        {/* GLOW */}
        <motion.div
          animate={{
            opacity: hovered ? 1 : 0.4,
          }}
          style={{
            position: 'absolute',
            inset: 0,

            background: `
              radial-gradient(circle at center,
              ${cert.glow},
              transparent 70%)
            `,

            opacity: 0.12,
          }}
        />

        {/* FLOW LIGHT */}
        <motion.div
          animate={{
            x: ['-100%', '220%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,

            width: '35%',
            height: '100%',

            background:
              'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)',

            transform: 'skewX(-20deg)',
          }}
        />

        {/* NUMBER */}
        <div
          style={{
            position: 'absolute',

            top: -6,
            right: 12,

            fontSize: 72,

            fontWeight: 900,

            color:
              'rgba(255,255,255,0.03)',

            letterSpacing: '-0.1em',
          }}
        >
          {cert.id}
        </div>

        {/* CONTENT */}
        <div
          style={{
            position: 'relative',
            zIndex: 5,
          }}
        >
          {/* ICON */}
          <motion.div
            animate={{
              rotate: hovered ? 8 : 0,
              scale: hovered ? 1.06 : 1,
            }}
            transition={{
              duration: 0.35,
            }}
            style={{
              width: 60,
              height: 60,

              borderRadius: 18,

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              background:
                cert.gradient,

              boxShadow:
                `0 0 30px ${cert.glow}`,

              marginBottom: 22,
            }}
          >
            <Icon
              size={28}
              color="#fff"
            />
          </motion.div>

          {/* YEAR */}
          <div
            style={{
              fontFamily:
                'var(--font-mono)',

              fontSize: 10,

              letterSpacing: '0.22em',

              color: '#22d3ee',

              marginBottom: 12,
            }}
          >
            {cert.year}
          </div>

          {/* TITLE */}
          <h3
            style={{
              margin: 0,

              fontSize: 28,

              lineHeight: 0.95,

              fontWeight: 900,

              letterSpacing: '-0.08em',

              color: '#fff',

              marginBottom: 14,
            }}
          >
            {cert.title}
          </h3>

          {/* ISSUER */}
          <div
            style={{
              fontSize: 14,

              color:
                'rgba(240,240,255,0.52)',

              marginBottom: 16,
            }}
          >
            {cert.issuer}
          </div>

          {/* DESC */}
          <p
            style={{
              fontSize: 13,

              lineHeight: 1.8,

              color:
                'rgba(240,240,255,0.64)',

              marginBottom: 20,
            }}
          >
            {cert.description}
          </p>

          {/* SKILLS */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            {cert.skills.map(
              (skill: string) => (
                <motion.div
                  key={skill}
                  whileHover={{
                    y: -2,
                    scale: 1.04,
                  }}
                  style={{
                    padding:
                      '6px 10px',

                    borderRadius: 999,

                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,

                    background:
                      'rgba(255,255,255,0.05)',

                    border:
                      '1px solid rgba(255,255,255,0.08)',

                    fontFamily:
                      'var(--font-mono)',

                    fontSize: 9,

                    letterSpacing:
                      '0.1em',

                    color: '#fff',
                  }}
                >
                  <FiCheckCircle
                    size={10}
                  />
                  {skill}
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* POPUP */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.92,
            }}
            transition={{
              duration: 0.25,
            }}
            style={{
              position: 'absolute',

              left: '50%',

              top: '50%',

              transform:
                'translate(-50%, -50%)',

              width: 300,

              padding: '22px',

              borderRadius: 24,

              background:
                'linear-gradient(145deg, rgba(8,8,18,0.98), rgba(18,18,28,0.96))',

              border:
                '1px solid rgba(255,255,255,0.08)',

              backdropFilter: 'blur(28px)',

              boxShadow:
                '0 30px 120px rgba(0,0,0,0.55)',

              zIndex: 999,

              pointerEvents: 'none',
            }}
          >
            {/* HEADER */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,

                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,

                  borderRadius: 16,

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  background:
                    cert.gradient,

                  boxShadow:
                    `0 0 20px ${cert.glow}`,
                }}
              >
                <Icon
                  size={24}
                  color="#fff"
                />
              </div>

              <div>
                <div
                  style={{
                    fontSize: 22,

                    fontWeight: 900,

                    lineHeight: 1,

                    color: '#fff',

                    marginBottom: 6,
                  }}
                >
                  {cert.title}
                </div>

                <div
                  style={{
                    fontSize: 11,

                    color:
                      'rgba(240,240,255,0.5)',
                  }}
                >
                  {cert.issuer}
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <p
              style={{
                fontSize: 13,

                lineHeight: 1.9,

                color:
                  'rgba(240,240,255,0.72)',

                marginBottom: 18,
              }}
            >
              {cert.longDescription}
            </p>

            {/* BUTTON */}
            <div
              style={{
                display: 'inline-flex',

                alignItems: 'center',

                gap: 8,

                padding:
                  '10px 16px',

                borderRadius: 12,

                background:
                  cert.gradient,

                color: '#fff',

                fontFamily:
                  'var(--font-mono)',

                fontSize: 10,

                letterSpacing:
                  '0.12em',

                fontWeight: 700,
              }}
            >
              <FiExternalLink
                size={12}
              />

              VERIFY CERTIFICATE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}