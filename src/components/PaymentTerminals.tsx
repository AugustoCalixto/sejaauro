import React from 'react'
import Image, { StaticImageData } from 'next/image'
import chip from '../../public/img/chip.png'
import pro from '../../public/img/pro.png'
import smart from '../../public/img/smart.png'

interface Feature {
    text: string
    available: boolean
    strikethrough?: boolean
}

interface PricingOption {
    image: string
    installmentPrice: number
    cashPrice: number
    buttonText: string
    features: Feature[]
    link: string
}

const pricingOptions: PricingOption[] = [
    {
        image: chip.src,
        installmentPrice: 11.65,
        cashPrice: 139.80,
        buttonText: "PEDIR A MINI",
        link: "https://loja.sejaauros.com.br/produtos/auros-mini/",
        features: [
            { text: "Sem aluguel", available: true },
            { text: "Interface rápida", available: true },
            { text: "Não precisa de celular", available: true },
            { text: "Pagamento por QR Code", available: true },
            { text: "Pagamento por aproximação", available: true },
            { text: "Tela TouchScreen", available: false, strikethrough: true },
            { text: "Imprime comprovante", available: false, strikethrough: true },
            { text: "Sistema avançado com a melhor tecnologia", available: false, strikethrough: true },
        ],
    },
    {
        image: pro.src,
        installmentPrice: 24.16,
        cashPrice: 289.90,
        buttonText: "PEDIR A PRO",
        link: "https://loja.sejaauros.com.br/produtos/auros-pro/",
        features: [
            { text: "Sem aluguel", available: true },
            { text: "Interface rápida", available: true },
            { text: "Não precisa de celular", available: true },
            { text: "Pagamento por QR Code", available: true },
            { text: "Pagamento por aproximação", available: true },
            { text: "Tela TouchScreen", available: true },
            { text: "Imprime comprovante", available: true },
            { text: "Sistema avançado com a melhor tecnologia", available: false },
        ],
    },
    {
        image: smart.src,
        installmentPrice: 41.66,
        cashPrice: 499.90,
        buttonText: "PEDIR A SMART",
        link: "https://loja.sejaauros.com.br/produtos/auros-smart/",
        features: [
            { text: "Sem aluguel", available: true },
            { text: "Interface rápida", available: true },
            { text: "Não precisa de celular", available: true },
            { text: "Pagamento por QR Code", available: true },
            { text: "Pagamento por aproximação", available: true },
            { text: "Tela TouchScreen", available: true },
            { text: "Imprime comprovante", available: true },
            { text: "Sistema avançado com a melhor tecnologia", available: true },
        ],
    },
]

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
    <li className={`flex items-center gap-2 ${feature.strikethrough ? "line-through text-gray-400" : ""}`}>
        {feature.available ? (
            <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        ) : (
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        )}
        <span className="text-sm">{feature.text}</span>
    </li>
)

const PricingCard: React.FC<{ option: PricingOption }> = ({ option }) => (
    <div className="border-2 border-yellow-500 rounded-lg overflow-hidden">
        <div className="p-6">
            <div className="flex flex-col items-center">
                <div className="mb-4 h-64 relative w-full">
                    <Image
                        src={option.image}
                        alt={`Terminal option`}
                        layout="fill"
                        objectFit="contain"
                    />

                </div>
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">
                        12x de R${option.installmentPrice.toFixed(2)}
                    </h2>
                    <p className="text-sm text-gray-600">
                        OU R${option.cashPrice.toFixed(2)} À VISTA
                    </p>
                </div>
                <a href={option.link} target='_blank'>
                    <button className="w-full mb-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                        {option.buttonText}
                    </button>
                </a>
                <ul className="space-y-3 w-full">
                    {option.features.map((feature, index) => (
                        <FeatureItem key={index} feature={feature} />
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

export default function MaquininhasPagamento() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingOptions.map((option, index) => (
                    <PricingCard key={index} option={option} />
                ))}
            </div>
        </div>
    )
}