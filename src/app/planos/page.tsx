import { Metadata } from 'next'
import { PlanCarousel } from '@/components/PlanCarousel'

export const metadata: Metadata = {
    title: 'Planos Hero - Maquininhas de Cartão',
    description: 'Conheça nossos planos de maquininhas de cartão e escolha o ideal para o seu negócio.',
}

const plans = [
    {
        name: 'Hero SMART',
        image: '/img/smart.png',
        features: [
            'Tela touchscreen',
            'Sistema completo de gestão',
            'Aceita todos os tipos de cartões',
            'Conexão Wi-Fi e 4G',
            'Impressora térmica embutida'
        ],
        description: 'A Hero SMART é a solução completa para o seu negócio, com tela touchscreen e sistema completo de gestão.',
        targetAudience: 'Ideal para médias e grandes empresas que buscam uma solução completa de pagamento e gestão.'
    },
    {
        name: 'Hero PRO',
        image: '/img/pro.png',
        features: [
            'Processamento rápido',
            'Bateria de longa duração',
            'Aceita cartões e pagamentos por aproximação',
            'Relatórios detalhados',
            'Suporte prioritário'
        ],
        description: 'A Hero PRO é ideal para negócios em crescimento, com recursos avançados e alta performance.',
        targetAudience: 'Perfeita para pequenas e médias empresas que precisam de uma solução robusta e eficiente.'
    },
    {
        name: 'Hero MINI',
        image: '/img/chip.png',
        features: [
            'Design compacto',
            'Conexão via Bluetooth',
            'Aceita cartões de débito e crédito',
            'Bateria de longa duração',
            'Ideal para delivery e serviços móveis'
        ],
        description: 'A Hero MINI é perfeita para autônomos e pequenos negócios, compacta e fácil de usar.',
        targetAudience: 'Excelente para autônomos, microempreendedores e pequenos negócios que precisam de mobilidade.'
    }
]

export default function PlansPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-black">
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-8">Nossos Planos</h1>
                <p className="text-xl text-center mb-12 text-gray-700">
                    Escolha o plano ideal para o seu negócio e comece a aceitar pagamentos com as melhores taxas do mercado.
                </p>
                <PlanCarousel plans={plans} />
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Não sabe qual plano escolher?</h2>
                    <p className="text-gray-700 mb-6">
                        Entre em contato conosco e um de nossos especialistas irá ajudar você a escolher o plano perfeito para o seu negócio.
                    </p>
                    <a
                        href="#contato"
                        className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                    >
                        Fale com um especialista
                    </a>
                </div>
            </main>
        </div>
    )
}

