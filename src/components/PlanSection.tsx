"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface PlanSectionProps {
    name: string
    description: string
    features: string[]
    imageUrl: string
    price: string
    ctaText: string
    imagePosition: 'left' | 'right'
}

export function PlanSection({
    name,
    description,
    features,
    imageUrl,
    price,
    ctaText,
    imagePosition
}: PlanSectionProps) {
    return (
        <motion.section
            className="py-16 bg-gray-900 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className={`grid md:grid-cols-2 gap-8 items-center ${imagePosition === 'left' ? 'md:grid-flow-col' : ''}`}>
                    <motion.div
                        className={`relative h-[400px] ${imagePosition === 'right' ? 'md:order-last' : ''}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Image
                            src={imageUrl}
                            alt={`Hero ${name}`}
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold text-yellow-400">Hero {name}</h2>
                        <p className="text-gray-300 text-lg">{description}</p>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                >
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="text-2xl font-bold text-white">{price}</div>
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full">
                            {ctaText}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

