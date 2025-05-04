'use client';

import Image, { StaticImageData } from 'next/image';

interface ChefronCardProps {
  icon: StaticImageData;
}

interface ChefronCardTextProps {
  text: string;
  icon: StaticImageData;
  index: number;
}

export const ChefronCard = ({ icon }: ChefronCardProps) => {
  return (
    // Container div with flex properties
    <div className="flex justify-center flex-wrap items-center">
      {/* Chevron-shaped div using clip-path */}
      <div
        style={{
          clipPath:
            "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
        }}
        // Background, height, width, flex properties for the chevron
        className="bg-green-200 h-25 lg:min-h-40 w-35 lg:min-w-50 flex justify-center items-center"
      >
        {/* Use Next.js Image component */}
        <Image
          src={icon}
          alt="Process step icon"
          width={100}
          height={100}
          className="object-cover scale-50 lg:scale-90"
        />
      </div>
    </div>
  );
};

export const ChefronCardText = ({ text, icon, index }: ChefronCardTextProps) => {
  return (
    // Main container for the text and chevron card
    <div
      className={`relative flex flex-col justify-center h-60 max-w-60 lg:min-h-100 rounded-lg transition-transform transform hover:scale-105`}
    >
      {/* Text element, positioned absolutely on larger screens */}
      <h2
        className={`lg:absolute font-inter ${index % 2 === 0 ? "lg:top-0" : "lg:bottom-0" // Use strict equality ===
          } left-1/2 lg:-translate-x-1/2 z-1 text-center text-black`} // Added text-black
      >
        {text}
      </h2>
      {/* Vertical line connecting text and chevron on larger screens */}
      <div
        className={`absolute ${index % 2 === 0 ? "top-1/12" : "bottom-1/12" // Use strict equality ===
          } left-1/2 -translate-x-1/2 bg-black w-px h-16 z-0 hidden lg:block`}
      ></div>
      {/* Render the ChefronCard component */}
      <ChefronCard icon={icon} />
    </div>
  );
};