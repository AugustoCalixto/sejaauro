"use client"
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

interface ProductCardProps {
    model: {
        name: string,
        img: string
    }
}

export function ProductCard({ model }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card className="">
                <CardContent className="p-6 space-y-4">
                    <motion.h3
                        className="text-2xl font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        HERO {model.name}
                    </motion.h3>
                    <motion.div
                        className="relative h-[200px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Image
                            src={"/img/" + model.img}
                            alt={`Hero ${model.name}`}
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

