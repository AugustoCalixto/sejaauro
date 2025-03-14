'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface AnimatedHeroProps {
    title: React.ReactNode
    description: string
    ctaText: string
    ctaLink: string
    heroImg: string
}

export function AnimatedHero({ title, description, ctaText, ctaLink, heroImg }: AnimatedHeroProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    }

    const floatAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    if (!mounted) return null

    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <motion.div
                        className="flex flex-col justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white mb-4"
                            variants={itemVariants}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            className="text-xl leading-normal text-gray-600 lg:text-2xl dark:text-gray-300 mb-8"
                            variants={itemVariants}
                        >
                            {description}
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                        >
                            <a
                                href={ctaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 text-lg font-medium text-center text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                            >
                                {ctaText}
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="relative w-full max-w-lg"
                            whileHover="hover"
                            animate={floatAnimation}
                        >
                            <motion.div
                                variants={imageVariants}
                                className="relative w-full h-0 pb-[100%]"
                            >
                                <Image
                                    src={heroImg}
                                    fill
                                    className="object-cover "
                                    alt="Hero Illustration"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

