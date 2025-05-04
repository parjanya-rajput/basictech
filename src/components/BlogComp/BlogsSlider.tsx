'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { blogPageSlides } from "@/constants/BlogData";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const BlogsSlider = () => {
  return (
    <section className="text-center py-16 px-6 md:px-20 bg-gradient-to-t from-white to-blue-100">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full max-w-5xl mx-auto"
      >
        {blogPageSlides.map((slide) => (
          <SwiperSlide key={slide.slug}>
            <div className="p-4">
              <h2 className="text-2xl md:text-3xl text-blue-600 font-neue">
                {slide.title}
              </h2>
              <p className="text-gray-600 mt-4 font-ibm italic">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogsSlider;