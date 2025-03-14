'use client'

import { useState } from 'react'
import Image from 'next/image'
import visa from '../../public/img/VISA.png'
import mastercard from '../../public/img/MASTERCARD.webp'

type PaymentPlan = 'MAX' | 'BASIC' | 'FLASH'
type PaymentTiming = 'NO DIA SEGUINTE' | 'NA HORA'

interface InstallmentOption {
    value: number
    label: string
    taxa: {
        MAX: number
        BASIC: number
        FLASH: number
    }
}

const installmentOptions: InstallmentOption[] = [
    { value: 1, label: 'Débito', taxa: { MAX: 1.39, BASIC: 1.39, FLASH: 1.39 } },
    { value: 2, label: 'Crédito à vista', taxa: { MAX: 2.96, BASIC: 2.96, FLASH: 2.96 } },
    { value: 3, label: 'Parcelado em 2x', taxa: { MAX: 4.35, BASIC: 4.35, FLASH: 4.35 } },
    { value: 4, label: 'Parcelado em 4x', taxa: { MAX: 5.71, BASIC: 5.71, FLASH: 5.71 } },
    { value: 5, label: 'Parcelado em 5x', taxa: { MAX: 6.37, BASIC: 6.37, FLASH: 6.37 } },
    { value: 6, label: 'Parcelado em 6x', taxa: { MAX: 7.04, BASIC: 7.04, FLASH: 7.04 } },
    { value: 7, label: 'Parcelado em 7x', taxa: { MAX: 7.75, BASIC: 7.75, FLASH: 7.75 } },
    { value: 8, label: 'Parcelado em 8x', taxa: { MAX: 8.40, BASIC: 8.40, FLASH: 8.40 } },
    { value: 9, label: 'Parcelado em 9x', taxa: { MAX: 9.04, BASIC: 9.04, FLASH: 9.04 } },
    { value: 10, label: 'Parcelado em 10x', taxa: { MAX: 9.69, BASIC: 9.69, FLASH: 9.69 } },
    { value: 11, label: 'Parcelado em 11x', taxa: { MAX: 10.32, BASIC: 10.32, FLASH: 10.32 } },
    { value: 13, label: 'Parcelado em 13x', taxa: { MAX: 11.57, BASIC: 11.57, FLASH: 11.57 } },
    { value: 14, label: 'Parcelado em 14x', taxa: { MAX: 12.19, BASIC: 12.19, FLASH: 12.19 } },
    { value: 15, label: 'Parcelado em 15x', taxa: { MAX: 12.80, BASIC: 12.80, FLASH: 12.80 } },
    { value: 16, label: 'Parcelado em 16x', taxa: { MAX: 13.41, BASIC: 13.41, FLASH: 13.41 } },
    { value: 17, label: 'Parcelado em 17x', taxa: { MAX: 14.01, BASIC: 14.01, FLASH: 14.01 } },
    { value: 18, label: 'Parcelado em 18x', taxa: { MAX: 14.60, BASIC: 14.60, FLASH: 14.60 } }
]

export default function SalesCalculator() {
    const [selectedTiming, setSelectedTiming] = useState<PaymentTiming>('NO DIA SEGUINTE')
    const [selectedPlan, setSelectedPlan] = useState<PaymentPlan>('MAX')
    const [saleValue, setSaleValue] = useState<string>('1.000,00')
    const [selectedInstallment, setSelectedInstallment] = useState<InstallmentOption>(
        installmentOptions[installmentOptions.length - 1]
    )
    const [salesPerDay, setSalesPerDay] = useState<number>(10)

    const formatCurrency = (value: number) => {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })
    }

    const parseCurrency = (value: string) => {
        return Number(value.replace(/\D/g, '')) / 100
    }

    const handleSaleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '')
        const formattedValue = (Number(value) / 100).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
        setSaleValue(formattedValue)
    }

    const handleSalesPerDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSalesPerDay(Number(e.target.value))
    }

    const calculateResults = () => {
        const value = parseCurrency(saleValue)
        const taxa = selectedInstallment.taxa[selectedPlan]
        const marketTaxa = taxa + 3.5 // Assuming market rate is 0.8% higher

        const cashReceives = value * (1 - taxa / 100)
        const marketReceives = value * (1 - marketTaxa / 100)
        const savings = cashReceives - marketReceives
        const potentialLoss = savings * salesPerDay

        return {
            HeroCashReceives: cashReceives,
            marketReceives,
            savings,
            potentialLoss,
            taxa,
        }
    }

    const results = calculateResults()

    return (
        <div className=" px-10 py-4 rounded-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                    <label className="block text-black mb-2">Ticket médio do seu negócio</label>
                    <input
                        type="text"
                        value={saleValue}
                        onChange={handleSaleValueChange}
                        className="w-full px-4 py-2 rounded-lg border-2 bg-white text-black"
                    />
                </div>
                <div>
                    <label className="block text-black mb-2">Tipo de parcelamento</label>
                    <select
                        value={selectedInstallment.value}
                        onChange={(e) => setSelectedInstallment(
                            installmentOptions.find(opt => opt.value === Number(e.target.value))!
                        )}
                        className="w-full px-4 py-2 rounded-lg bg-white text-black border-2"
                    >
                        {installmentOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-black mb-2">Vendas por Dia:</label>
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={() => setSalesPerDay(salesPerDay > 0 ? salesPerDay - 1 : 0)}
                            className="px-4 py-2 bg-yellow-400 text-black rounded-l-lg border-2 border-r-0"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={salesPerDay}
                            onChange={handleSalesPerDayChange}
                            className="w-full px-4 py-2 text-center border-2 bg-white text-black"
                        />
                        <button
                            type="button"
                            onClick={() => setSalesPerDay(salesPerDay + 1)}
                            className="px-4 py-2 bg-yellow-400 text-black rounded-r-lg border-2 border-l-0"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-lime-400 rounded-lg p-4 text-center">
                        <label className="block text-black md:mt-10">Taxa AUROS</label>
                        <div className="text-3xl font-bold text-black">
                            {results.taxa.toFixed(2)}%
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 mb-2">Na AUROS você ganha</p>
                        <div className="text-4xl text-lime-500 font-bold mb-4">
                            {formatCurrency(results.HeroCashReceives)}
                        </div>
                        <p className="text-gray-600 mb-2">Economia por venda</p>
                        <div className="bg-lime-400 rounded-lg py-2 px-4 inline-block">
                            {formatCurrency(results.savings)}
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 mb-2">Na concorrencia voce ganha</p>
                        <div className="text-4xl font-bold mb-4">
                            {formatCurrency(results.marketReceives)}
                        </div>
                        <p className="text-gray-600 mb-2">{salesPerDay} vendas como essa você perderia</p>
                        <div className="bg-red-600 text-white rounded-lg py-2 px-4 inline-block">
                            {formatCurrency(results.potentialLoss)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-8">
                <div className="flex items-center align-center justify-center gap-4">
                    <p className="text-black">Simulação aplicada para seguintes bandeiras:</p>
                    <Image
                        src={mastercard.src}
                        alt="Mastercard"
                        width={50}
                        height={30}
                        className="object-contain bg-white rounded px-2"
                    />
                    <Image
                        src={visa.src}
                        alt="Visa"
                        width={50}
                        height={30}
                        className="object-contain bg-white rounded px-2"
                    />
                </div>
            </div>

            <div className="flex justify-center gap-4">
                <a href="https://api.whatsapp.com/send/?phone=5527996200358&text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+e+gostaria+de+adquirir+uma+maquininha%21&type=phone_number&app_absent=0" target='_blank'>
                    <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-full">
                        Pedir Agora
                    </button>
                </a>
            </div>
        </div>
    )
}