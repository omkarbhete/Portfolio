import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number; alpha: number
  pulseOffset: number
}

const COLOR_POOL = [
  'rgba(168,85,247,',
  'rgba(34,211,238,',
  'rgba(168,85,247,',
  'rgba(168,85,247,',
  'rgba(34,211,238,',
]

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let raf: number
    let W = 0, H = 0
    let particles: Particle[] = []
    const COUNT = Math.min(Math.floor(window.innerWidth / 14), 90)
    const MAX_DIST = 120

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const init = () => {
      resize()
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.15,
        pulseOffset: Math.random() * Math.PI * 2,
      }))
    }

    let t = 0
    const draw = () => {
      t += 0.012
      ctx.clearRect(0, 0, W, H)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < MAX_DIST) {
            const opacity = (1 - d / MAX_DIST) * 0.12
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(168,85,247,${opacity})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw & move particles
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0)  { p.x = 0;  p.vx *= -1 }
        if (p.x > W)  { p.x = W;  p.vx *= -1 }
        if (p.y < 0)  { p.y = 0;  p.vy *= -1 }
        if (p.y > H)  { p.y = H;  p.vy *= -1 }

        const pulse = 0.5 + 0.5 * Math.sin(t * 1.2 + p.pulseOffset)
        const a = p.alpha * (0.6 + 0.4 * pulse)
        const col = COLOR_POOL[i % COLOR_POOL.length]

        // Glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2)
        ctx.fillStyle = `${col}${(a * 0.15).toFixed(3)})`
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${col}${a.toFixed(3)})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    init()
    draw()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        display: 'block', pointerEvents: 'none',
      }}
    />
  )
}
