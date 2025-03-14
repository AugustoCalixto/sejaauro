'use client'

import { motion } from 'framer-motion'
import { BlogCard } from './BlogCard'

const posts = [
    {
        title: "A melhor maquininha de 2024",
        description: "Descubra por que os especialistas estão falando sobre a Hero. Conheça as maquininhas preferidas de todo brasileiro e mude o rumo do seu negócio!",
        image: "/img/about-1.jpg",
        slug: "melhor-maquininha-2024"
    },
    {
        title: "Pagamento por Aproximação: Uma vantagem para o seu negócio",
        description: "Descubra tudo sobre o pagamento NFC ou por Aproximação: tecnologia, segurança, praticidade e como adotar essa inovação no seu dia a dia.",
        image: "/img/about-1.jpg",
        slug: "pagamento-aproximacao"
    },
    {
        title: "Já imaginou poder lucrar mais com o seu negócio?",
        description: "Uma forma prática e simples que vai te ajudar a lucrar muito mais com cada venda realizada no seu negócio!",
        image: "/img/about-1.jpg",
        slug: "como-lucrar-mais"
    }
]

export function LatestPosts() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    Tudo que você precisa saber para ajudar você e seu negócio
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <BlogCard {...post} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

