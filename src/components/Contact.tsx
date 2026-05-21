import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
} from 'react-icons/fi'

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
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      await emailjs.send(
        'service_232xssi',
        'template_dg2q35r',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: CONTACT.email,
        },
        '6CxaguAtYzE7YQhBL'
      )

      setSuccess(true)

      setForm({
        name: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setSuccess(false)
      }, 4000)
    } catch (error) {
      console.error(error)

      alert('Failed to send message.')
    }

    setLoading(false)
  }

  return (
    <section
      id="contact"
      style={{
        padding: '120px 24px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: 1150,
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 70,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              color: '#22d3ee',
              fontSize: 12,
              letterSpacing: '0.2em',
              marginBottom: 18,
            }}
          >
            CONTACT
          </div>

          <h2
            style={{
              fontSize: 'clamp(38px, 6vw, 70px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 18,
              background:
                'linear-gradient(135deg,#ffffff,#a855f7,#22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let’s Build Something Amazing
          </h2>

          <p
            style={{
              maxWidth: 700,
              margin: '0 auto',
              fontSize: 16,
              lineHeight: 1.8,
              color: 'rgba(240,240,255,0.55)',
            }}
          >
            Have a project idea, internship opportunity,
            DevOps role, freelance work, or collaboration?
            Send me a message directly and it will arrive
            instantly in my email.
          </p>
        </div>

        {/* Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: 30,
          }}
        >
          {/* Left Card */}
          <div
            style={{
              padding: 34,
              borderRadius: 24,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <h3
              style={{
                fontSize: 28,
                marginBottom: 18,
                color: '#fff',
              }}
            >
              Get In Touch
            </h3>

            <p
              style={{
                color: 'rgba(240,240,255,0.55)',
                lineHeight: 1.8,
                marginBottom: 30,
              }}
            >
              I’m always open to discussing cloud engineering,
              DevOps, internships, full stack projects,
              Kubernetes, Docker, AWS, or innovative tech ideas.
            </p>

            {/* Contact Info */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                marginBottom: 35,
              }}
            >
              <a
                href={`mailto:${CONTACT.email}`}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                }}
              >
                📧 {CONTACT.email}
              </a>

              <a
                href={`tel:${CONTACT.phone}`}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                }}
              >
                📞 {CONTACT.phone}
              </a>

              <div
                style={{
                  color: '#fff',
                }}
              >
                📍 {CONTACT.location}
              </div>
            </div>

            {/* Social Icons */}
            <div
              style={{
                display: 'flex',
                gap: 14,
              }}
            >
              {SOCIALS.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(240,240,255,0.45)',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement

                    el.style.color = color
                    el.style.borderColor = `${color}55`
                    el.style.background = `${color}12`
                    el.style.boxShadow = `0 0 20px ${color}35`
                    el.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement

                    el.style.color = 'rgba(240,240,255,0.45)'
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.background = 'rgba(255,255,255,0.05)'
                    el.style.boxShadow = ''
                    el.style.transform = ''
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: 34,
              borderRadius: 24,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              style={{
                ...inputStyle,
                resize: 'none',
                paddingTop: 18,
                height: 'auto',
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                height: 56,
                borderRadius: 14,
                border: 'none',
                background:
                  'linear-gradient(135deg,#a855f7,#22d3ee)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: '0.08em',
                cursor: 'pointer',
              }}
            >
              {loading ? (
                'Sending...'
              ) : (
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  <FiSend />
                  SEND MESSAGE
                </span>
              )}
            </button>

            {success && (
              <div
                style={{
                  color: '#4ade80',
                  fontSize: 14,
                }}
              >
                ✅ Message sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: 56,
  borderRadius: 14,
  border: '1px solid rgba(255,255,255,0.08)',
  background: 'rgba(255,255,255,0.04)',
  padding: '0 18px',
  color: '#fff',
  outline: 'none',
  fontSize: 15,
  backdropFilter: 'blur(10px)',
}