'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import AdBanner from './ad-baner'

const navItems = [
  { name: 'Maquininhas', href: '#maquininhas' },
  { name: 'Planos', href: '#planos' },
  { name: 'Calculadora', href: '#calculadora' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-lg z-50 shadow-md">
      <AdBanner text='🔥 Débito 1,39% 🔥 Crédito 2,91% 🔥 12x 11,51% 🔥 18x 15,39% 🚚 Frete Grátis para todo Brasil 🤑 Recebimento em um dia útil 💳 Máquinas em até 12x sem juros' />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-yellow-400 font-bold text-2xl">
              <Image
                src="/img/logo.png"
                alt="Hero Cash Brasil"
                width={170}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link className=" py-2 px-4  rounded font-medium text-black border-white bg-yellow-400 hover:bg-yellow-600 hover:text-gray-900" href="https://conta.sejaauros.com.br">
              Área do cliente
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-black hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4 text-black border-white hover:bg-yellow-400 hover:text-gray-900"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

