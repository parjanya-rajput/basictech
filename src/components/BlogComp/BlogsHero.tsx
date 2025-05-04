'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { heroSlides } from "@/constants/BlogData";
import type { HeroSlide } from "@/constants/BlogData";

import "swiper/css";
import "swiper/css/pagination";

const BlogsHero = () => {
  return (
    <section className="text-center py-16 px-6 md:px-20">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-6 font-neue">
        Dive Into Expert Insights, Industry Trends, <br /> And Actionable
        Strategies.
      </h1>

      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, A11y]}
        className="w-full max-w-6xl mx-auto"
      >
        {heroSlides.map((slide: HeroSlide) => (
          <SwiperSlide key={slide.slug} className="p-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Content */}
              <div className="text-left max-w-lg">
                <h2 className="text-xl font-semibold text-blue-600 font-neue">
                  {slide.title}
                </h2>
                {/* Description - This will display the full text and wrap as needed */}
                <p className="text-gray-600 mt-4 font-segoe">
                  {slide.description}
                </p>
                <Link
                  href={`/blogs/${slide.slug}`}
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors font-bold"
                >
                  Read More
                </Link>
              </div>
              {/* Image */}
              {slide.image && (
                <div className="w-full md:w-1/2 relative h-80">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-lg shadow-md object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogsHero;