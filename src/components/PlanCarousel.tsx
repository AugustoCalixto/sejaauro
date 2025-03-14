'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Plan {
    name: string
    image: string
    features: string[]
    description: string
    targetAudience: string
}

interface PlanCarouselProps {
    plans: Plan[]
}

export function PlanCarousel({ plans }: PlanCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % plans.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + plans.length) % plans.length)
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    <Card className="bg-yellow-400 text-black overflow-hidden p-10">
                        <CardContent className="p-6">
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                <div className="relative h-[300px]">
                                    <Image
                                        src={plans[currentIndex].image}
                                        alt={`${plans[currentIndex].name} machine`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="space-y-4  p-4 bg-yellow-500 rounded">
                                    <h3 className="text-2xl font-bold text-black">{plans[currentIndex].name}</h3>
                                    <ul className="space-y-2">
                                        {plans[currentIndex].features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-800">{plans[currentIndex].description}</p>
                                    <p className="font-semibold">{plans[currentIndex].targetAudience}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>
            <Button
                size="icon"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange-500 text-white"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Plano anterior</span>
            </Button>
            <Button
                size="icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-500 text-white"
                onClick={nextSlide}
            >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Próximo plano</span>
            </Button>
        </div>
    )
}

