'use client'

import { Search, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function BlogNavbar() {
    return (
        <nav className="border-b bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Search Bar */}
                    <div className="relative w-full md:w-96">
                        <Input
                            type="search"
                            placeholder="Buscar artigos..."
                            className="pl-10"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center space-x-4">
                        <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-yellow-500 transition-colors">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-yellow-500 transition-colors">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-yellow-500 transition-colors">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://youtube.com" target="_blank" className="text-gray-600 hover:text-yellow-500 transition-colors">
                            <Youtube className="h-5 w-5" />
                            <span className="sr-only">YouTube</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

