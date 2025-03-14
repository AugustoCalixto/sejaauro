'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BlogCard } from './BlogCard'
import { Pagination } from './Pagination'

// Example posts data - in a real app, this would come from an API
const allPosts = Array.from({ length: 12 }, (_, i) => ({
    title: `Post ${i + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholder.svg?height=300&width=400",
    slug: `post-${i + 1}`
}))

const POSTS_PER_PAGE = 6

export function BlogGrid() {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const currentPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <BlogCard {...post} />
                        </motion.div>
                    ))}
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </section>
    )
}

