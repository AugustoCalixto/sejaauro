'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface CounterProps {
    from: number
    to: number
    decimals: number
    duration?: number
}

export function Counter({ from, to, decimals, duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(from)
    const countRef = useRef(null)
    const isInView = useInView(countRef)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true)
            const start = from
            const end = to
            const range = end - start
            const startTime = performance.now()

            const updateCount = (currentTime: number) => {
                const elapsedTime = currentTime - startTime
                const progress = Math.min(elapsedTime / duration, 1)
                const currentCount = start + range * progress
                setCount(currentCount)

                if (progress < 1) {
                    requestAnimationFrame(updateCount)
                }
            }

            requestAnimationFrame(updateCount)
        }
    }, [from, to, duration, isInView, hasAnimated])

    return (
        <span ref={countRef}>
            {count.toFixed(decimals)}
        </span>
    )
}

