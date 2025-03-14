import { Features } from "@/components/Features"
import { Hero } from "@/components/Hero"
import { PlanSection } from "@/components/PlanSection"
import { ProductCard } from "@/components/ProductCard"
import { ProductHero } from "@/components/ProductsHero"


const plans = [
    {
        name: 'SMART',
        img: 'smart.png'
    },
    {
        name: 'PRO',
        img: 'pro.png'
    },
    {
        name: 'CHIP',
        img: 'chip.png'
    }
]

const features = [
    { name: 'Bobinas' },
    { name: 'Cabo USB' },
    { name: 'Fácil de usar' },
    { name: 'Carregador de tomada' },
    { name: 'Livro de Acessibilidade' },
    { name: 'Garantia vitalícia da máquina' }
]

const planDetails = [
    {
        name: 'SMART',
        description: 'A solução completa para o seu negócio, com tela touchscreen e sistema completo de gestão.',
        features: [
            'Tela touchscreen',
            'Sistema completo de gestão',
            'Aceita todos os tipos de cartões',
            'Conexão Wi-Fi e 4G',
            'Impressora térmica embutida'
        ],
        imageUrl: '/img/smart.png',
        price: 'A partir de R$ 9,90/mês',
        ctaText: 'Quero a Hero SMART'
    },
    {
        name: 'PRO',
        description: 'Ideal para negócios em crescimento, com recursos avançados e alta performance.',
        features: [
            'Processamento rápido',
            'Bateria de longa duração',
            'Aceita cartões e pagamentos por aproximação',
            'Relatórios detalhados',
            'Suporte prioritário'
        ],
        imageUrl: '/img/pro.png',
        price: 'A partir de R$ 14,90/mês',
        ctaText: 'Quero a Hero PRO'
    },
    {
        name: 'CHIP',
        description: 'Perfeita para autônomos e pequenos negócios, compacta e fácil de usar.',
        features: [
            'Design compacto',
            'Conexão via Bluetooth',
            'Aceita cartões de débito e crédito',
            'Bateria de longa duração',
            'Ideal para delivery e serviços móveis'
        ],
        imageUrl: '/img/chip.png',
        price: 'A partir de R$ 4,90/mês',
        ctaText: 'Quero a Hero MINI'
    }
]

export default function MaquininhasPage() {
    return (
        <main className="min-h-screen">
            <ProductHero />

            {/* Products Overview Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid gap-6 md:grid-cols-3">
                    {plans.map((model) => (
                        <ProductCard key={model.name} model={model} />
                    ))}
                </div>
            </section>

            {/* Individual Plan Sections */}
            {planDetails.map((plan, index) => (
                <PlanSection
                    key={plan.name}
                    name={plan.name}
                    description={plan.description}
                    features={plan.features}
                    imageUrl={plan.imageUrl}
                    price={plan.price}
                    ctaText={plan.ctaText}
                    imagePosition={index % 2 === 0 ? 'left' : 'right'}
                />
            ))}

            <Features features={features} />
        </main>
    )
}

