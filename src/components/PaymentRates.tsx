'use client'
import { useState } from 'react'
import Image from 'next/image'
import visa from '../../public/img/VISA.png'
import elo from '../../public/img/ELO.webp'
import mastercard from '../../public/img/MASTERCARD.webp'
import hipercard from '../../public/img/HIPERCARD.webp'
import hiper from '../../public/img/HIPER.webp'
import amex from '../../public/img/amex.png'
import caju from '../../public/img/caju.png'
import gpay from '../../public/img/gpay.png'
import applepay from '../../public/img/applepay.png'


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

type Plan = 'basic' | 'pro' | 'hyper'
type CardId = 'visa' | 'elo' | 'hiper'

interface PaymentRate {
    modalidade: string
    taxa: {
        basic: number
    }
}

const paymentRates: Record<CardId, PaymentRate[]> = {
    visa: [
        { modalidade: 'Débito', taxa: { basic: 1.39 } },
        { modalidade: 'Crédito à vista', taxa: { basic: 2.91 } },
        { modalidade: 'Parcelado 2x', taxa: { basic: 4.49 } },
        { modalidade: 'Parcelado 3x', taxa: { basic: 5.22 } },
        { modalidade: 'Parcelado 4x', taxa: { basic: 5.94 } },
        { modalidade: 'Parcelado 5x', taxa: { basic: 6.66 } },
        { modalidade: 'Parcelado 6x', taxa: { basic: 7.36 } },
        { modalidade: 'Parcelado 7x', taxa: { basic: 8.11 } },
        { modalidade: 'Parcelado 8x', taxa: { basic: 8.81 } },
        { modalidade: 'Parcelado 9x', taxa: { basic: 9.49 } },
        { modalidade: 'Parcelado 10x', taxa: { basic: 10.18 } },
        { modalidade: 'Parcelado 11x', taxa: { basic: 10.85 } },
        { modalidade: 'Parcelado 12x', taxa: { basic: 11.51 } },
        { modalidade: 'Parcelado 13x', taxa: { basic: 12.18 } },
        { modalidade: 'Parcelado 14x', taxa: { basic: 12.83 } },
        { modalidade: 'Parcelado 15x', taxa: { basic: 13.48 } },
        { modalidade: 'Parcelado 16x', taxa: { basic: 14.12 } },
        { modalidade: 'Parcelado 17x', taxa: { basic: 14.76 } },
        { modalidade: 'Parcelado 18x', taxa: { basic: 15.39 } },
    ],
    elo: [
        { modalidade: 'Débito', taxa: { basic: 1.45 } },
        { modalidade: 'Crédito à vista', taxa: { basic: 3.24 } },
        { modalidade: 'Parcelado 2x', taxa: { basic: 4.64 } },
        { modalidade: 'Parcelado 3x', taxa: { basic: 5.37 } },
        { modalidade: 'Parcelado 4x', taxa: { basic: 6.09 } },
        { modalidade: 'Parcelado 5x', taxa: { basic: 6.81 } },
        { modalidade: 'Parcelado 6x', taxa: { basic: 7.51 } },
        { modalidade: 'Parcelado 7x', taxa: { basic: 8.31 } },
        { modalidade: 'Parcelado 8x', taxa: { basic: 9.01 } },
        { modalidade: 'Parcelado 9x', taxa: { basic: 9.69 } },
        { modalidade: 'Parcelado 10x', taxa: { basic: 10.38 } },
        { modalidade: 'Parcelado 11x', taxa: { basic: 11.05 } },
        { modalidade: 'Parcelado 12x', taxa: { basic: 11.71 } },
        { modalidade: 'Parcelado 13x', taxa: { basic: 12.38 } },
        { modalidade: 'Parcelado 14x', taxa: { basic: 13.03 } },
        { modalidade: 'Parcelado 15x', taxa: { basic: 13.68 } },
        { modalidade: 'Parcelado 16x', taxa: { basic: 14.32 } },
        { modalidade: 'Parcelado 17x', taxa: { basic: 14.96 } },
        { modalidade: 'Parcelado 18x', taxa: { basic: 15.59 } },
    ],
    hiper: [
        { modalidade: 'Débito', taxa: { basic: 1.45 } },
        { modalidade: 'Crédito à vista', taxa: { basic: 3.24 } },
        { modalidade: 'Parcelado 2x', taxa: { basic: 4.64 } },
        { modalidade: 'Parcelado 3x', taxa: { basic: 5.37 } },
        { modalidade: 'Parcelado 4x', taxa: { basic: 6.09 } },
        { modalidade: 'Parcelado 5x', taxa: { basic: 6.81 } },
        { modalidade: 'Parcelado 6x', taxa: { basic: 7.51 } },
        { modalidade: 'Parcelado 7x', taxa: { basic: 8.31 } },
        { modalidade: 'Parcelado 8x', taxa: { basic: 9.01 } },
        { modalidade: 'Parcelado 9x', taxa: { basic: 9.69 } },
        { modalidade: 'Parcelado 10x', taxa: { basic: 10.38 } },
        { modalidade: 'Parcelado 11x', taxa: { basic: 11.05 } },
        { modalidade: 'Parcelado 12x', taxa: { basic: 11.71 } },
        { modalidade: 'Parcelado 13x', taxa: { basic: 12.38 } },
        { modalidade: 'Parcelado 14x', taxa: { basic: 13.03 } },
        { modalidade: 'Parcelado 15x', taxa: { basic: 13.68 } },
        { modalidade: 'Parcelado 16x', taxa: { basic: 14.32 } },
        { modalidade: 'Parcelado 17x', taxa: { basic: 14.96 } },
        { modalidade: 'Parcelado 18x', taxa: { basic: 15.59 } },
    ],
};



const cardConfig = {
    visa: {
        title: 'Visa/Mastercard',
        logos: [visa.src, mastercard.src],
    },
    elo: {
        title: 'Elo',
        logos: [elo.src],
    },
    hiper: {
        title: 'Hipercard/Hiper',
        logos: [hipercard.src, hiper.src],
    },
    amex: {
        title: 'American Express',
        logos: [amex.src],
    },
    caju: {
        title: 'Caju',
        logos: [caju.src],
    },
    gpay: {
        title: 'Google Pay',
        logos: [gpay.src],
    },
    applepay: {
        title: 'Apple Pay',
        logos: [applepay.src],
    }
}

export default function PaymentRates() {
    const [selectedPlan, setSelectedPlan] = useState<Plan>('basic')
    const [expandedCards, setExpandedCards] = useState<Record<CardId, boolean>>({
        visa: false,
        elo: false,
        hiper: false,
    })

    const toggleCard = (cardId: CardId) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId],
        }))
    }

    const RenderCard = (cardId: CardId) => {
        const rates = paymentRates[cardId]
        const config = cardConfig[cardId]
        const isExpanded = expandedCards[cardId]
        const displayedRates = isExpanded ? rates : rates.slice(0, 5)
        const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
        const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

        return (
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                <motion.div ref={ref1} initial="initial" animate={inView1 ? "animate" : "initial"} variants={fadeInUp}>
                    <div className="flex justify-center gap-4 mb-6">
                        {config.logos.map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt={`${config.title} logo ${index + 1}`}
                                width={60}
                                height={30}
                                className="object-contain"
                            />
                        ))}
                    </div>
                </motion.div>
                <motion.div ref={ref2} initial="initial" animate={inView2 ? "animate" : "initial"} variants={fadeInUp} className='text-center'>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="font-semibold text-gray-600 dark:text-black">Modalidade</div>
                        <div className="font-semibold text-gray-600 dark:text-black">Taxa</div>
                    </div>
                    {displayedRates.map((rate: any, index) => (
                        <div key={index} className="grid grid-cols-2 gap-4 py-2 border-t border-gray-100">
                            <div className="text-sm dark:text-black">{rate.modalidade}</div>
                            <div className="text-sm dark:text-black">{rate.taxa[selectedPlan].toFixed(2)}%</div>
                        </div>
                    ))}
                </motion.div>
                {rates.length > 5 && (
                    <button
                        onClick={() => toggleCard(cardId)}
                        className="w-full mt-4 text-sm text-yellow-600 hover:text-yellow-700"
                    >
                        {isExpanded ? 'Ver menos' : 'Ver mais'}
                    </button>
                )}
            </div>
        )
    }

    return (
        <div className="p-8 ">
            <div className="flex justify-center gap-4 mb-8 py-10">
                <div className="w-full overflow-hidden">
                    <div className="flex animate-marquee gap-10">
                        {Object.values(cardConfig).flatMap(config =>
                            config.logos.map((logo, index) => (
                                <div key={`${config.title}-${index}`} className="flex-shrink-0 gap-10 mx-10">
                                    <Image
                                        src={logo}
                                        alt={`${config.title} logo ${index + 1}`}
                                        width={60}
                                        height={30}
                                        className="object-contain"
                                    />
                                </div>
                            ))
                        )}
                        {Object.values(cardConfig).flatMap(config =>
                            config.logos.map((logo, index) => (
                                <div key={`${config.title}-${index}`} className="flex-shrink-0 gap-10 mx-10">
                                    <Image
                                        src={logo}
                                        alt={`${config.title} logo ${index + 1}`}
                                        width={60}
                                        height={30}
                                        className="object-contain"
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes marquee {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                        display: flex;
                        animation: marquee 45s linear infinite;
                    }
                `}</style>
                {/* {(['basic', 'pro', 'hyper'] as const).map((plan) => (
                    <button
                        key={plan}
                        onClick={() => setSelectedPlan(plan)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors
              ${selectedPlan === plan
                                ? 'bg-yellow-600 text-white'
                                : 'bg-white text-yellow-600 hover:bg-yellow-50'
                            }`}
                    >
                        {plan.toUpperCase()}
                    </button>
                ))} */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
                {(['visa', 'elo', 'hiper'] as const).map((cardId) => (
                    <div key={cardId}>{RenderCard(cardId)}</div>
                ))}
            </div>

            <p className="text-center text-sm mt-8 text-yellow-800">
                As taxas podem variar de acordo com a Selic e o modo de captura (presencial ou online).
            </p>
        </div>
    )
}