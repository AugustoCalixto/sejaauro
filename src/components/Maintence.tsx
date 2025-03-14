'use client'

import { motion } from 'framer-motion'
import { Settings, Clock, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Maintenance() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    const iconAnimation = {
        rotate: [0, 360],
        transition: {
            duration: 10,
            repeat: Infinity,
            ease: "linear"
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <motion.div
                className="max-w-2xl w-full text-center space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Icon */}
                <motion.div
                    className="flex justify-center"
                    animate={iconAnimation}
                >
                    <Settings className="w-24 h-24 text-yellow-500" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                    variants={itemVariants}
                >
                    Site em Manutenção
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-xl text-gray-600 max-w-lg mx-auto"
                    variants={itemVariants}
                >
                    Estamos realizando algumas melhorias para oferecer uma experiência ainda melhor. Voltaremos em breve!
                </motion.p>

                {/* Status Info */}
                <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 space-y-4"
                    variants={itemVariants}
                >
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                        <Clock className="w-5 h-5 text-yellow-500" />
                        <span>Voltaremos em breve</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-yellow-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    className="space-y-4"
                    variants={itemVariants}
                >
                    <p className="text-gray-600">
                        Precisa de ajuda? Entre em contato conosco:
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button
                            variant="outline"
                            className="bg-white hover:bg-gray-50"
                            onClick={() => window.location.href = 'mailto:suporte@hero.com.br'}
                        >
                            <Mail className="w-4 h-4 mr-2" />
                            contato.herocashbrasil@gmail.com
                        </Button>
                    </div>
                </motion.div>

                {/* Return Link */}
                <motion.div variants={itemVariants}>
                    <Button
                        variant="link"
                        className="text-yellow-600 hover:text-yellow-700"
                        onClick={() => window.location.href = '/'}
                    >
                        Tentar novamente
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </motion.div>

                {/* Footer */}
                <motion.p
                    className="text-sm text-gray-500"
                    variants={itemVariants}
                >
                    © {new Date().getFullYear()} HeroCash Brasil. Todos os direitos reservados.
                </motion.p>
            </motion.div>
        </div>
    )
}

