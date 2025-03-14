import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface BlogCardProps {
    title: string
    description: string
    image: string
    slug: string
    className?: string
}

export function BlogCard({ title, description, image, slug, className = '' }: BlogCardProps) {
    return (
        <div className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 ${className}`}>
            <div className="relative h-48 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{title}</h3>
                <p className="text-gray-600 line-clamp-3">{description}</p>
                <Link href={`/blog/${slug}`}>
                    <Button variant="outline" className="w-full">
                        Leia mais
                    </Button>
                </Link>
            </div>
        </div>
    )
}

