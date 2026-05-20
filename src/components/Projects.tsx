import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

type Project = {
  num: string
  emoji: string
  title: string
  desc: string
  highlights: string[]
  tags: string[]
  github: string
  live?: string
  color: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    emoji: '🤖',
    title: 'AI Snap Attendance System',
    desc:
      'An AI-powered smart attendance system using face recognition and voice verification for automated classroom attendance management. Designed with modern pipelines for accurate identity verification and real-time attendance analytics.',
    highlights: ['Face Recognition', 'Voice AI', 'Realtime Attendance', 'Analytics'],
    tags: ['Python', 'OpenCV', 'AI', 'MongoDB', 'Flask'],
    github: 'https://github.com/yourusername/ai-snap-attendance',
    live: '#',
    color: '#00E5FF',
  },

  {
    num: '02',
    emoji: '🚗',
    title: 'Smart Parking System',
    desc:
      'A cloud-native smart parking platform enabling real-time parking slot discovery, booking, GPS navigation, digital payments, and live owner dashboards. Built with scalable Docker and Kubernetes deployment workflows on AWS.',
    highlights: ['Live Parking', 'GPS Tracking', 'Dockerized', 'AWS Deployment'],
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'AWS'],
    github: 'https://github.com/yourusername/smart-parking-system',
    live: '#',
    color: '#06B6D4',
  },

  {
    num: '03',
    emoji: '🎓',
    title: '11th Admission Management System',
    desc:
      'A modern admission portal developed for junior colleges to simplify the complete 11th admission workflow. Students can register online, upload documents, track status, and receive admission updates in real-time through a futuristic UI.',
    highlights: ['Admission Portal', 'Document Upload', 'Merit Lists', 'Admin Dashboard'],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/yourusername/11th-admission-system',
    live: '#',
    color: '#7C3AED',
  },

  {
    num: '04',
    emoji: '🚀',
    title: 'Parikrama 2K26 Event Platform',
    desc:
      'A futuristic national-level event management platform designed for Sanjeevan Group of Institutions. Includes event registration, payment screenshot uploads, admin analytics, participant management, schedules, and immersive responsive UI/UX.',
    highlights: ['National Event Portal', 'Admin Analytics', 'Cloud Uploads', 'Responsive UI'],
    tags: ['Vite', 'React', 'Express', 'MongoDB Atlas', 'Cloudinary', 'Docker'],
    github: 'https://github.com/yourusername/parikrama-2k26',
    live: '#',
    color: '#F97316',
  },

  {
    num: '05',
    emoji: '🧠',
    title: 'DevOps Portfolio Infrastructure',
    desc:
      'A fully containerized DevOps project demonstrating CI/CD workflows, Docker Compose orchestration, Kubernetes deployments, AWS EC2 hosting, and production-ready NGINX reverse proxy architecture.',
    highlights: ['CI/CD', 'Docker Compose', 'Kubernetes', 'AWS EC2'],
    tags: ['Docker', 'Kubernetes', 'NGINX', 'Terraform', 'AWS'],
    github: 'https://github.com/yourusername/devops-infra',
    live: '#',
    color: '#22C55E',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useReveal(0.1)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.035)',
        border: `1px solid rgba(255,255,255,0.07)`,
        borderRadius: 18,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(14px)',
        transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)',
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: `0 0 36px ${project.color}28, 0 20px 50px rgba(0,0,0,0.45)`,
        borderColor: `${project.color}40`,
        transition: { duration: 0.32 },
      }}
    >
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${project.color}, ${project.color}44, transparent)`,
        }}
      />

      <div
        style={{
          padding: '28px 28px 24px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 18,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: project.color,
              opacity: 0.6,
              letterSpacing: '0.2em',
              textShadow: `0 0 8px ${project.color}77`,
            }}
          >
            /{project.num}
          </span>

          <span style={{ fontSize: 30 }}>{project.emoji}</span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-disp)',
            fontWeight: 800,
            fontSize: 19,
            marginBottom: 12,
            lineHeight: 1.2,
            color: '#f0f0ff',
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.75,
            color: 'rgba(240,240,255,0.5)',
            marginBottom: 22,
            flex: 1,
          }}
        >
          {project.desc}
        </p>

        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 18,
          }}
        >
          {project.highlights.map((h) => (
            <span
              key={h}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                fontWeight: 600,
                padding: '4px 11px',
                borderRadius: 20,
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

        <div
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            marginBottom: 24,
          }}
        >
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                padding: '3px 9px',
                borderRadius: 5,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(240,240,255,0.45)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 'auto' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.07em',
              padding: '9px 18px',
              borderRadius: 8,
              background: 'rgba(255,255,255,0.05)',
              border: `1px solid ${project.color}30`,
              color: project.color,
              transition: 'all 0.22s',
              textDecoration: 'none',
            }}
          >
            <FiGithub size={13} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.07em',
              padding: '9px 18px',
              borderRadius: 8,
              background: `${project.color}15`,
              border: `1px solid ${project.color}40`,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <FiExternalLink size={13} />
            Live
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
          subtitle="Real-world systems engineered for reliability, scalability, cloud deployment, and futuristic user experiences."
          accent="purple"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}