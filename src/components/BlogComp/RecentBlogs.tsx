'use client';

import Image from 'next/image';
import Link from 'next/link';
import { blogs } from "@/constants/BlogData";
import type { BlogMeta } from "@/constants/BlogData";

interface BlogCardProps {
  blog: BlogMeta;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const { title, description, image, slug } = blog;

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-[32rem] flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-ibm font-extrabold h-14 line-clamp-2 text-black">
          {truncateText(title, 60)}
        </h3>
        <p className="text-gray-600 mt-2 font-ibm flex-1 line-clamp-4">
          {truncateText(description, 120)}
        </p>
        <Link
          href={`/blogs/${slug}`}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 w-full font-ibm font-bold text-center"
        >
          Read the Post
        </Link>
      </div>
    </div>
  );
};

const BlogGrid = () => {
  return (
    <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8 font-neue">
        Read Blogs Here
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;