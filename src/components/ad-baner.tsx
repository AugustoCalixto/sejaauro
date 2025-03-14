"use client"

import { useState, useRef } from "react"
import { X } from "lucide-react"

interface AdBannerProps {
    text: string
    backgroundColor?: string
    textColor?: string
    speed?: "slow" | "medium" | "fast"
    onClose?: () => void
}

export default function AdBanner({
    text = "Special offer! Limited time promotion. Check it out now!",
    backgroundColor = "bg-black",
    textColor = "text-yellow-300",
    speed = "slow",
    onClose,
}: AdBannerProps) {
    const [isVisible, setIsVisible] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)

    // Handle banner close
    const handleClose = () => {
        setIsVisible(false)
        if (onClose) onClose()
    }

    // Calculate animation speed based on prop
    const getAnimationDuration = () => {
        switch (speed) {
            case "slow":
                return "40s"
            case "fast":
                return "10s"
            default:
                return "20s"
        }
    }

    if (!isVisible) return null

    return (
        <div
            ref={containerRef}
            className={`relative w-full overflow-hidden ${backgroundColor} ${textColor} py-2`}
            role="alert"
            aria-live="polite"
        >
            <div
                className="whitespace-nowrap animate-marquee inline-block"
                style={{
                    animationDuration: getAnimationDuration(),
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                }}
            >
                <span className="mx-4">{text}</span>
                <span className="mx-4">{text}</span>
                <span className="mx-4">{text}</span>
            </div>

            <button
                onClick={handleClose}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/20 hover:bg-background/30 transition-colors"
                aria-label="Close advertisement"
            >
                <X className="h-4 w-4" />
            </button>
            <style jsx>{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(100%);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    .animate-marquee {
                        display: flex;
                        animation: marquee linear infinite;
                    }
                `}</style>
        </div>
    )
}