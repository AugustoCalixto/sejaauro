import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Feature {
    name: string
}

interface FeaturesProps {
    features: Feature[]
}

export function Features({ features }: FeaturesProps) {
    return (
        <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
                        A máquina para fazer mais dinheiro!
                    </h2>
                    <p className="text-gray-400">
                        Em não apenas transmite credibilidade e segurança aos seus clientes, mas também oferece uma tela Touchscreen completa, proporcionando muito mais agilidade nas suas vendas. Além disso, você conta com um sistema completo para registrar produtos, controlar o estoque, gerenciar o caixa e muito mais!
                    </p>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Com a Hero SMART, você recebe:</h3>
                        <ul className="space-y-3">
                            {features.map((feature) => (
                                <li key={feature.name} className="flex items-center gap-2">
                                    <div className="h-2 w-2 bg-yellow-400 rounded-full" />
                                    {feature.name}
                                </li>
                            ))}
                        </ul>
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full mt-6">
                            Peça sua Hero SMART!
                        </Button>
                    </div>
                </div>
                <div className="relative h-[500px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 to-transparent rounded-full blur-xl" />
                    <Image
                        src="/img/notebook.png?height=500&width=500"
                        alt="Hero Smart"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

