import { BlogGrid } from "@/components/BlogGrid";
import { BlogNavbar } from "@/components/BlogNavbar";
import { LatestPosts } from "@/components/LatestPosts";


export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* <BlogNavbar /> */}
            <LatestPosts />
            <BlogGrid />
        </main>
    )
}

