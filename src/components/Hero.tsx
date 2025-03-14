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

export function Hero({ title, description, ctaText, ctaLink, heroImg }: AnimatedHeroProps) {
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
    <div className=" dark:bg-gray-900">
      <div className="container mx-auto text-center md:text-left sm:px-6 lg:px-8 py-2 lg:py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="text-4xl font-bold leading-snug dark:text-white" variants={itemVariants}>
              Transforme sua forma de vender com a Auros
            </motion.h1>
            <motion.p
              className="text-xl leading-normal text-gray-600 lg:text-2xl dark:text-gray-300 mb-8"
              variants={itemVariants}
            >
              Aumente seus lucros com a solução de pagamento ideal <span className="px-2 rounded text-white bg-yellow-500 py-1">para o seu negócio</span>

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
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="relative w-full h-[400px] md:h-[400px]"
              whileHover="hover"
              animate={floatAnimation}
            >
              <Image
                src={heroImg}
                fill
                className="object-cover"
                alt="Hero Illustration"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

