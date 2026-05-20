import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  return { ref, inView }
}
