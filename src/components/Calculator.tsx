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
    { value: 2, label: 'Crédito à vista', taxa: { MAX: 2.91, BASIC: 2.91, FLASH: 2.91 } },
    { value: 3, label: 'Parcelado 2x', taxa: { MAX: 4.49, BASIC: 4.49, FLASH: 4.49 } },
    { value: 4, label: 'Parcelado 3x', taxa: { MAX: 5.22, BASIC: 5.22, FLASH: 5.22 } },
    { value: 5, label: 'Parcelado 4x', taxa: { MAX: 5.94, BASIC: 5.94, FLASH: 5.94 } },
    { value: 6, label: 'Parcelado 5x', taxa: { MAX: 6.66, BASIC: 6.66, FLASH: 6.66 } },
    { value: 7, label: 'Parcelado 6x', taxa: { MAX: 7.36, BASIC: 7.36, FLASH: 7.36 } },
    { value: 8, label: 'Parcelado 7x', taxa: { MAX: 8.11, BASIC: 8.11, FLASH: 8.11 } },
    { value: 9, label: 'Parcelado 8x', taxa: { MAX: 8.81, BASIC: 8.81, FLASH: 8.81 } },
    { value: 10, label: 'Parcelado 9x', taxa: { MAX: 9.49, BASIC: 9.49, FLASH: 9.49 } },
    { value: 11, label: 'Parcelado 10x', taxa: { MAX: 10.18, BASIC: 10.18, FLASH: 10.18 } },
    { value: 12, label: 'Parcelado 11x', taxa: { MAX: 10.85, BASIC: 10.85, FLASH: 10.85 } },
    { value: 13, label: 'Parcelado 12x', taxa: { MAX: 11.51, BASIC: 11.51, FLASH: 11.51 } },
    { value: 14, label: 'Parcelado 13x', taxa: { MAX: 12.18, BASIC: 12.18, FLASH: 12.18 } },
    { value: 15, label: 'Parcelado 14x', taxa: { MAX: 12.83, BASIC: 12.83, FLASH: 12.83 } },
    { value: 16, label: 'Parcelado 15x', taxa: { MAX: 13.48, BASIC: 13.48, FLASH: 13.48 } },
    { value: 17, label: 'Parcelado 16x', taxa: { MAX: 14.12, BASIC: 14.12, FLASH: 14.12 } },
    { value: 18, label: 'Parcelado 17x', taxa: { MAX: 14.76, BASIC: 14.76, FLASH: 14.76 } },
    { value: 19, label: 'Parcelado 18x', taxa: { MAX: 15.39, BASIC: 15.39, FLASH: 15.39 } }
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