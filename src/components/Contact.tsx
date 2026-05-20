import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { CONTACT } from '../data'

type FormState = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const { ref: formRef, inView: formIn } = useReveal()
  const { ref: infoRef, inView: infoIn } = useReveal()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email required'
    if (!form.message.trim() || form.message.length < 10)
      e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setFormState('idle'), 4000)
    }, 1400)
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%', padding: '13px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#f472b655' : 'rgba(168,85,247,0.18)'}`,
    borderRadius: 10, color: '#f0f0ff',
    fontFamily: 'var(--font-body)', fontSize: 14,
    outline: 'none', transition: 'border-color 0.25s, box-shadow 0.25s',
  })

  const LINKS = [
    { Icon: FiMail,     label: 'Email',    value: CONTACT.email,    href: `mailto:${CONTACT.email}`,  color: '#a855f7' },
    { Icon: FiPhone,    label: 'Phone',    value: CONTACT.phone,    href: `tel:${CONTACT.phone}`,     color: '#22d3ee' },
    { Icon: FiLinkedin, label: 'LinkedIn', value: 'omkar-bhete',    href: CONTACT.linkedin,           color: '#0ea5e9' },
    { Icon: FiGithub,   label: 'GitHub',   value: 'omkarbhete',     href: CONTACT.github,             color: '#4ade80' },
  ]

  return (
    <section
      id="contact"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, transparent, rgba(168,85,247,0.04) 40%, transparent)',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <SectionHeading
          index="04"
          title="Get In Touch"
          subtitle="Open to DevOps & Cloud Engineering roles. Let's build something great."
          accent="cyan"
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.35fr)',
          gap: 48, alignItems: 'start',
        }}
          className="contact-grid"
        >
          {/* Info panel */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: -28 }}
            animate={infoIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.18em', color: 'var(--cyan)',
              marginBottom: 24, opacity: 0.7,
            }}>
              // contact_info
            </div>

            <h3 style={{
              fontFamily: 'var(--font-disp)', fontWeight: 800, fontSize: 22,
              marginBottom: 14, color: '#f0f0ff',
            }}>
              Let's connect
            </h3>

            <p style={{
              fontSize: 14, color: 'rgba(240,240,255,0.48)',
              lineHeight: 1.8, marginBottom: 36,
            }}>
              I'm actively looking for DevOps and Cloud Engineering roles.
              Interesting projects, opportunities, or just want to talk infrastructure?
              Reach out — I reply fast.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {LINKS.map(({ Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '13px 16px', borderRadius: 11,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'all 0.25s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = `${color}10`
                    el.style.borderColor = `${color}35`
                    el.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(255,255,255,0.03)'
                    el.style.borderColor = 'rgba(255,255,255,0.07)'
                    el.style.transform = ''
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 9,
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color, flexShrink: 0,
                  }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'rgba(240,240,255,0.3)', textTransform: 'uppercase', marginBottom: 2 }}>
                      {label}
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(240,240,255,0.75)' }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 28 }}
            animate={formIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="glass"
              style={{ padding: '36px 32px' }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.18em', color: 'var(--purple)',
                marginBottom: 28, opacity: 0.7,
              }}>
                // send_message
              </div>

              {formState === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: 'center', padding: '48px 20px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
                  }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'rgba(74,222,128,0.12)',
                    border: '1px solid rgba(74,222,128,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#4ade80',
                  }}>
                    <FiCheck size={24} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-disp)', fontWeight: 700, fontSize: 18, color: '#4ade80' }}>
                    Signal Transmitted
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(240,240,255,0.45)', lineHeight: 1.7 }}>
                    Your message has been received.<br />I'll respond within 24 hours.
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {/* Name */}
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(240,240,255,0.38)', textTransform: 'uppercase', display: 'block', marginBottom: 7 }}>
                      Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      style={inputStyle('name')}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,85,247,0.1)'
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = errors.name ? '#f472b655' : 'rgba(168,85,247,0.18)'
                        e.currentTarget.style.boxShadow = ''
                      }}
                    />
                    {errors.name && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#f472b6', marginTop: 5 }}>{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(240,240,255,0.38)', textTransform: 'uppercase', display: 'block', marginBottom: 7 }}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      style={inputStyle('email')}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,85,247,0.1)'
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = errors.email ? '#f472b655' : 'rgba(168,85,247,0.18)'
                        e.currentTarget.style.boxShadow = ''
                      }}
                    />
                    {errors.email && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#f472b6', marginTop: 5 }}>{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(240,240,255,0.38)', textTransform: 'uppercase', display: 'block', marginBottom: 7 }}>
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,85,247,0.1)'
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = errors.message ? '#f472b655' : 'rgba(168,85,247,0.18)'
                        e.currentTarget.style.boxShadow = ''
                      }}
                    />
                    {errors.message && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#f472b6', marginTop: 5 }}>{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={formState === 'sending'}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 36px rgba(168,85,247,0.55)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
                      padding: '14px 28px', borderRadius: 10, border: 'none',
                      background: formState === 'sending'
                        ? 'rgba(168,85,247,0.3)'
                        : 'linear-gradient(135deg, #a855f7, #7c3aed)',
                      color: '#fff',
                      fontFamily: 'var(--font-mono)', fontSize: 13,
                      letterSpacing: '0.1em', fontWeight: 600,
                      boxShadow: '0 0 24px rgba(168,85,247,0.35)',
                      cursor: formState === 'sending' ? 'not-allowed' : 'pointer',
                      transition: 'background 0.25s',
                    }}
                  >
                    {formState === 'sending' ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }}
                        />
                        Transmitting...
                      </>
                    ) : (
                      <><FiSend size={14} /> Transmit Signal</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
