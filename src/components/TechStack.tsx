'use client';

import Image from 'next/image';

import Image0 from "@/assets/BasicTech/Container-0.png";
import Image1 from "@/assets/BasicTech/Container-1.png";
import Image2 from "@/assets/BasicTech/Container-2.png";
import Image3 from "@/assets/BasicTech/Container-3.png";
import Image4 from "@/assets/BasicTech/Container-4.png";
import Image5 from "@/assets/BasicTech/Container-5.png";
import Image6 from "@/assets/BasicTech/Container-6.png";
import Image7 from "@/assets/BasicTech/Container-7.png";
import Image8 from "@/assets/BasicTech/Container-8.png";
import Image9 from "@/assets/BasicTech/Container-9.png";
import Image10 from "@/assets/BasicTech/Container-10.png";
import Image11 from "@/assets/BasicTech/Container-11.png";
import Image12 from "@/assets/BasicTech/Container-12.png";
import Image13 from "@/assets/BasicTech/Container-13.png";
import Image14 from "@/assets/BasicTech/Container-14.png";
import Image15 from "@/assets/BasicTech/Container-15.png";
import Image16 from "@/assets/BasicTech/Container-16.png";
import Image17 from "@/assets/BasicTech/Container-17.png";
import Image18 from "@/assets/BasicTech/Container-18.png";
import Image19 from "@/assets/BasicTech/Container-19.png";
import Image20 from "@/assets/BasicTech/Container-20.png";

const images = [
  Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9,
  Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20,
];

const TechStackPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white/50 rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-8 font-neue">
            Techstack
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6 justify-items-center">
            {images.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={tech}
                  alt={`Technology ${index + 1}`}
                  width={140}
                  height={140}
                  className="rounded-full flex items-center justify-center text-white text-xl mb-2 hover:scale-105 transition-transform"
                  priority={index < 4} // Load first 4 images immediately
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackPage;