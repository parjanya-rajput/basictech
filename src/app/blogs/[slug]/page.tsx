import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlogGrid from "@/components/BlogComp/RecentBlogs";
import Contactus from "@/components/Contactus";
import { heroSlides } from "@/constants/BlogData";


const renderParagraph = (text: string) => {
    if (text.includes("|")) {
        return (
            <ul className="space-y-2 list-none">
                {text.split("|").map((item, index) => (
                    <li key={index} className="flex items-start">
                        {item.trim() && (
                            <span className="text-gray-700 leading-relaxed font-segoe">
                                {item.trim()}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        );
    }

    return <p className="text-gray-700 leading-relaxed mb-4 font-segoe">{text}</p>;
};


export async function generateStaticParams() {
    return heroSlides.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params;

    const blogPost = heroSlides.find(post => post.slug === slug);

    if (!blogPost) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Use article tag for semantic blog post content */}
            <article className="max-w-5xl mx-auto p-6 md:p-12">
                {/* Blog Header */}
                <header className="mb-8 md:mb-12 text-center">
                    <h1 className="font-neue text-3xl md:text-4xl font-bold text-blue-700 mb-4 leading-tight">
                        {blogPost.title}
                    </h1>
                    {/* Optional: Display description if needed */}
                    {/* <p className="text-lg text-gray-600 font-ibm italic mb-6">{blogPost.description}</p> */}

                    {/* Main Blog Image */}
                    {blogPost.image && (
                        <div className="relative w-full h-64 md:h-96 mt-6 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={blogPost.image}
                                alt={blogPost.title}
                                fill
                                className="object-cover" // 'cover' usually looks better for header images
                                priority // Prioritize loading the main image
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                            />
                        </div>
                    )}
                </header>

                {/* Blog Content Sections */}
                <div className="prose prose-lg max-w-none space-y-12 md:space-y-16">
                    {blogPost.sections.map((section, index) => (
                        <section key={index} className="bg-white/70 p-6 rounded-lg shadow-sm backdrop-blur-sm">
                            {section.subtitle && (
                                <h2 className="text-2xl font-semibold text-blue-600 mb-6 font-neue">
                                    {section.subtitle}
                                </h2>
                            )}

                            {/* Render paragraphs */}
                            <div className="space-y-4 mb-6">
                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <div key={pIndex}>{renderParagraph(paragraph)}</div>
                                ))}
                            </div>

                            {/* Render single image if present */}
                            {section.image && (
                                <div className="relative w-full h-64 md:h-80 mt-6 rounded-md overflow-hidden shadow">
                                    <Image
                                        src={section.image}
                                        // Fixed template literal syntax for alt text
                                        alt={section.subtitle || `Section ${index + 1} image`}
                                        fill
                                        className="object-contain" // Use contain if images shouldn't be cropped
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            )}

                            {/* Render multiple images if present */}
                            {section.images && section.images.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                                    {section.images.map((imgSrc, imgIndex) => (
                                        <div key={imgIndex} className="relative h-48 sm:h-56 rounded-md overflow-hidden shadow">
                                            <Image
                                                src={imgSrc}
                                                // Fixed template literal syntax for alt text
                                                alt={`${section.subtitle || 'Section image'} ${imgIndex + 1}`}
                                                fill
                                                className="object-cover" // Cover usually works well for grids
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </article>

            {/* Related Content Sections */}
            <div className="max-w-7xl mx-auto mt-16 md:mt-24">
                <BlogGrid /> {/* Shows recent blogs (using 'blogs' array) */}
                {/* <BlogsSlider /> You might not need the slider here, depends on design */}
                <Contactus />
            </div>
        </main>
    );
}