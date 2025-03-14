'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Counter } from '@/components/Counter'
import { useEffect } from 'react'

export default function AboutPage() {
    const aboutImages = [
        {
            src: `/img/about-1.jpg`,
            alt: `Hero machine`,
        },
        {
            src: `/img/about-1.jpg`,
            alt: `Hero machine`,
        },
        {
            src: `/img/about-1.jpg`,
            alt: `Hero machine`,
        },
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-yellow-500 font-semibold mb-4"
                >
                    A PARCEIRA CERTA PRO SEU NEGÓCIO!
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                    Sobre nós
                </motion.h1>
            </section>

            {/* Description Section */}
            <section className="container mx-auto px-4 py-8">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg text-gray-700 text-center max-w-4xl mx-auto"
                >
                    A Hero é uma plataforma brasileira de meios de pagamento que oferece soluções com as melhores taxas, máquinas modernas e uma equipe capacitada e humanizada. Pioneira em sua categoria, a Hero se destaca pela inovação, sendo referência no mercado desde sua criação em julho de 2021.
                </motion.p>
            </section>

            {/* Image Grid Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aboutImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative h-64 rounded-2xl overflow-hidden"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-4xl font-bold text-yellow-500">
                                <Counter from={1} to={5} decimals={1} />K
                            </h3>
                            <p className="text-gray-600">de transações diárias</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-4xl font-bold text-yellow-500">
                                +R$ <Counter from={0} to={1.8} decimals={1} /> bilhão
                            </h3>
                            <p className="text-gray-600">de economia em taxas</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="text-4xl font-bold text-yellow-500">
                                <Counter from={0} to={300} decimals={0} />
                            </h3>
                            <p className="text-gray-600">das cidades brasileiras</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-96"
                    >
                        <Image
                            src={`/img/about-1.jpg`}
                            alt="Hero machine in use"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-700">
                            Com atuação em diversos estabelecimentos pelo país, a Hero se diferencia por sua transparência, sem pegadinhas ou condições ocultas, oferecendo as melhores taxas do Brasil.
                        </p>
                        <p className="text-gray-700">
                            Seu crescimento acelerou a projeção para transacionar mais de 2 bilhões de reais em 2024.
                        </p>
                        <p className="text-gray-700">
                            Mesmo com essa expansão, a Hero mantém qualidade de atendimento, conquistando o selo RA1000 no Reclame Aqui, além de ser indicada ao Prêmio RA100, comprovando seu compromisso com o cliente.
                        </p>
                        <p className="text-gray-700">
                            A Hero tem uma presença ativa nos principais canais de máquinas de cartão no YouTube, sendo amplamente recomendada por especialistas do setor.
                        </p>
                        <p className="text-gray-700 font-semibold">
                            Comprometida com excelência e inovação, a Hero segue evoluindo o mercado de pagamentos no Brasil!
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

