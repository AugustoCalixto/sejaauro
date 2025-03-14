"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'


export function ProductHero() {
    return (
        <motion.section className="container mx-auto px-4 py-12 md:py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <motion.div className="grid gap-8 md:grid-cols-2 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="space-y-6">
                    <motion.p className="text-yellow-400 font-semibold"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >AS MELHORES MAQUININHAS DO BRASIL!</motion.p>
                    <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}>
                        A maquininha certa para quem precisa lucrar muito mais!
                    </motion.h1>
                    <motion.p className="text-gray-400 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        3 modelos de maquininhas com tecnologia e segurança para aumentar as vendas do seu negócio!
                    </motion.p>
                    <Link href="https://api.whatsapp.com/send/?phone=5527996200358&text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+e+gostaria+de+adquirir+uma+maquininha%21&type=phone_number&app_absent=0" target='_blank'>
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full">
                            Pedir agora!
                        </Button>
                    </Link>
                </div>
                <div className="relative h-[400px]">
                    <Image
                        src="/img/juntas.png"
                        alt="Maquininhas de cartão"
                        fill
                        className="object-contain"
                    />
                </div>
            </motion.div>
        </motion.section>
    )
}

