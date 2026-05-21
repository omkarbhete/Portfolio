import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    })

  const [hovered, setHovered] =
    useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })

      const target =
        e.target as HTMLElement

      const clickable =
        target.closest(
          'a, button, input, textarea'
        )

      setHovered(!!clickable)
    }

    window.addEventListener(
      'mousemove',
      moveCursor
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        moveCursor
      )
    }
  }, [])

  return (
    <>
      {/* MAIN DOT */}
      <motion.div
        animate={{
          x: position.x - 5,
          y: position.y - 5,

          scale: hovered ? 1.8 : 1,
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.04,
        }}
        style={{
          position: 'fixed',

          top: 0,
          left: 0,

          width: 10,
          height: 10,

          borderRadius: '50%',

          background:
            'linear-gradient(135deg,#a855f7,#22d3ee)',

          pointerEvents: 'none',

          zIndex: 999999,

          boxShadow:
            '0 0 18px rgba(168,85,247,0.7)',
        }}
      />

      {/* OUTER RING */}
      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,

          scale: hovered ? 1.4 : 1,
        }}
        transition={{
          type: 'spring',

          stiffness: 300,

          damping: 24,
        }}
        style={{
          position: 'fixed',

          top: 0,
          left: 0,

          width: 36,
          height: 36,

          borderRadius: '50%',

          border:
            '1px solid rgba(255,255,255,0.16)',

          pointerEvents: 'none',

          zIndex: 999998,

          backdropFilter: 'blur(2px)',

          background:
            'rgba(255,255,255,0.02)',
        }}
      />
    </>
  )
}