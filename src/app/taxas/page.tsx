'use client'


import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { CreditCard, Wallet, CalendarRange, Clock, PiggyBank } from 'lucide-react'
import { AnimatedHero } from '@/components/AnimatedHero'
import SalesCalculator from '@/components/Calculator'


const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const taxCards = [
    { title: 'Débito', rate: '1,99%', icon: Wallet },
    { title: 'Crédito à vista', rate: '3,49%', icon: CreditCard },
    { title: 'Parcelado 2x a 6x', rate: '4,49%', icon: CalendarRange },
    { title: 'Parcelado 7x a 12x', rate: '5,49%', icon: Clock },
    { title: 'Antecipação', rate: '2,99%', icon: PiggyBank },
]

export default function TaxasPage() {
    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-white to-gray-200 text-gray-800"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
        >
            {/* Hero Section */}
            <AnimatedHero title="Descubra Nossas Taxas" description='A melhor maquininha, com as melhores taxas do mercado e a melhor tecnologia para o seu negócio. Garanta a sua.' ctaLink='https://api.whatsapp.com/send/?phone=5527996200358&text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+e+gostaria+de+adquirir+uma+maquininha%21&type=phone_number&app_absent=0' ctaText='Confira agora' heroImg='/img/juntas.png' />



            <main className="container mx-auto px-4 py-12">
                {/* Calculadora de Taxas Section */}
                <motion.section className="mb-12" variants={fadeInUp}>
                    <h2 className="text-4xl font-bold mb-4 text-gray-600 text-center">Calculadora de Taxas</h2>
                    <CardContent className="p-6">
                        <SalesCalculator />
                    </CardContent>
                </motion.section>
                {/* Nossas Taxas Section */}
                <section id="taxas" className="mb-12">
                    <motion.h2
                        className="text-4xl font-bold p-4 text-center mb-8 text-yellow-600"
                        variants={fadeInUp}
                    >
                        Exclusividades Herocash!
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={staggerChildren}
                    >
                        {taxCards.slice(0, 3).map((card, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 shadow-lg hover:shadow-xl transition-shadow">
                                    <CardHeader className="flex flex-row items-center space-x-2">
                                        <card.icon className="w-6 h-6 text-yellow-600" />
                                        <CardTitle className="text-xl font-bold text-yellow-600">{card.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold text-gray-800">{card.rate}</p>
                                        <p className="text-gray-600 mt-2">por transação</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
                        variants={staggerChildren}
                    >
                        {taxCards.slice(3).map((card, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 shadow-lg hover:shadow-xl transition-shadow">
                                    <CardHeader className="flex flex-row items-center space-x-2">
                                        <card.icon className="w-6 h-6 text-yellow-600" />
                                        <CardTitle className="text-xl font-bold text-yellow-600">{card.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold text-gray-800">{card.rate}</p>
                                        <p className="text-gray-600 mt-2">por transação</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* CTA Section */}
                <motion.section className="text-center" variants={fadeInUp}>
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Dúvidas sobre nossas taxas?</h2>
                    <p className="text-gray-600 mb-6">
                        Nossa equipe está pronta para esclarecer todas as suas dúvidas e ajudar você a escolher o melhor plano para o seu negócio.
                    </p>
                    <motion.a
                        href="#contato"
                        className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-colors shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Fale com um especialista
                    </motion.a>
                </motion.section>
            </main>
        </motion.div>
    )
}

