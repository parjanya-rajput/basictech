import type { Metadata } from 'next';
import HeroSection from "@/components/BlogComp/BlogsHero";
import BlogGrid from "@/components/BlogComp/RecentBlogs";
import BlogsSlider from "@/components/BlogComp/BlogsSlider";
import Contactus from "@/components/Contactus";

// Generate metadata for SEO
export const metadata: Metadata = {
    title: 'Blog Posts - BasicTech',
    description: 'Dive into expert insights, industry trends, and actionable strategies in software development and technology.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-blue-100">
            <div className="max-w-7xl mx-auto">
                <HeroSection />
                <BlogGrid />
            </div>
            <BlogsSlider />
            <Contactus />
        </main>
    );
}